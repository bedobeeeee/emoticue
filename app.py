from flask import Flask, request, jsonify
import openai
import requests
from dotenv import load_dotenv
import os


app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# API keys from environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
OMDB_API_KEY = os.getenv("OMDB_API_KEY")
GOOGLE_BOOKS_API_KEY = os.getenv("GOOGLE_BOOKS_API_KEY")

# Initialize OpenAI client
openai.api_key = OPENAI_API_KEY

# Spotify token endpoint
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"

# Mood to Spotify valence mapping (simplified)
MOOD_TO_VALENCE = {
    "happy": {"min_valence": 0.7, "max_valence": 1.0},
    "sad": {"min_valence": 0.0, "max_valence": 0.3},
    "angry": {"min_valence": 0.3, "max_valence": 0.6},
    "calm": {"min_valence": 0.3, "max_valence": 0.6},
    "neutral": {"min_valence": 0.4, "max_valence": 0.6}
}


# Function to get Spotify access token
def get_spotify_token():
    try:
        response = requests.post(
            SPOTIFY_TOKEN_URL,
            data={"grant_type": "client_credentials"},
            auth=(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)
        )
        response.raise_for_status()
        return response.json().get("access_token")
    except requests.RequestException as e:
        print(f"Error getting Spotify token: {e}")
        return None


# Function to analyze mood using OpenAI
def analyze_mood(journal_entry):
    try:
        prompt = (
            "Analyze the mood of the following journal entry and classify it as one of: "
            "happy, sad, angry, calm, neutral. Provide only the mood as a single word."
            f"\n\nJournal Entry: {journal_entry}"
        )
        response = openai.ChatCompletion.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a helpful assistant who understands human emotions."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=10
        )
        mood = response.choices[0].message.content.strip().lower()
        return mood if mood in MOOD_TO_VALENCE else "neutral"
    except Exception as e:
        print(f"Error analyzing mood: {e}")
        return "neutral"


# Function to get song recommendations from Spotify
def get_song_recommendations(mood):
    token = get_spotify_token()
    if not token:
        return []

    valence_params = MOOD_TO_VALENCE.get(mood, MOOD_TO_VALENCE["neutral"])
    try:
        response = requests.get(
            "https://api.spotify.com/v1/recommendations",
            headers={"Authorization": f"Bearer {token}"},
            params={
                "limit": 3,
                "seed_genres": "pop,rock",  # Adjustable based on preference
                "min_valence": valence_params["min_valence"],
                "max_valence": valence_params["max_valence"]
            }
        )
        response.raise_for_status()
        tracks = response.json().get("tracks", [])
        return [{"title": track["name"], "artist": track["artists"][0]["name"]} for track in tracks]
    except requests.RequestException as e:
        print(f"Error fetching songs: {e}")
        return []


# Function to get movie recommendations from OMDb
def get_movie_recommendations(mood):
    mood_to_keyword = {
        "happy": "comedy",
        "sad": "drama",
        "angry": "action",
        "calm": "romance",
        "neutral": "family"
    }
    keyword = mood_to_keyword.get(mood, "family")
    try:
        params = {
            "s": keyword,
            "type": "movie",
            "y": "2020-2025",  # Recent movies
            "r": "json"
        }
        if OMDB_API_KEY:
            params["apikey"] = OMDB_API_KEY
        response = requests.get("https://www.omdbapi.com/", params=params)
        response.raise_for_status()
        data = response.json()
        if data.get("Response") == "True":
            movies = data.get("Search", [])[:3]
            return [{"title": movie["Title"], "overview": movie.get("Plot", "No plot available")} for movie in movies]
        else:
            print(f"OMDb Error: {data.get('Error')}")
            return []
    except requests.RequestException as e:
        print(f"OMDb Error: {e}")
        return []






# Function to get book recommendations from Google Books
def get_book_recommendations(mood):
    mood_to_query = {
        "happy": "feel good books",
        "sad": "emotional books",
        "angry": "action adventure books",
        "calm": "calm books",
        "neutral": "popular books"
    }
    query = mood_to_query.get(mood, "popular books")
    try:
        response = requests.get(
            "https://www.googleapis.com/books/v1/volumes",
            params={"q": query, "key": GOOGLE_BOOKS_API_KEY, "maxResults": 3}
        )
        response.raise_for_status()
        books = response.json().get("items", [])
        return [{"title": book["volumeInfo"]["title"], "author": book["volumeInfo"].get("authors", ["Unknown"])[0]} for
                book in books]
    except requests.RequestException as e:
        print(f"Error fetching books: {e}")
        return []


# Flask route to handle journal entry
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get journal entry from form or JSON payload
        journal_entry = request.form.get('journal_entry') or request.json.get('journal_entry') if request.is_json else None
        if not journal_entry:
            return jsonify({"error": "Journal entry is required"}), 400

        # Analyze mood
        mood = analyze_mood(journal_entry)

        # Fetch recommendations
        songs = get_song_recommendations(mood)
        movies = get_movie_recommendations(mood)
        books = get_book_recommendations(mood)

        return jsonify({
            "mood": mood,
            "recommendations": {
                "songs": songs,
                "movies": movies,
                "books": books
            }
        })

    return "API is running. Send a POST request with a 'journal_entry' field."

if __name__ == "__main__":
    app.run(debug=True)