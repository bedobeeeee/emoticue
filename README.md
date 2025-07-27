
# 🎭 EmotiCue

**EmotiCue** is an AI-powered content discovery platform that understands your mood and recommends movies, books—and soon music—tailored to how you feel. Using OpenAI's GPT for mood detection and APIs like Open Library and TMDb, EmotiCue connects you with the perfect content for your emotional state.

## 💡 Inspiration

We all struggle to pick the right movie, book, or song that truly fits our mood. EmotiCue bridges that gap using emotional intelligence and natural language understanding, making content discovery deeply personal and effortless.

---

## 🚀 Features

### 🧠 Mood Recognition

* Uses GPT-based natural language analysis to interpret your current mood from a user prompt.

### 🎬📚 Personalized Recommendations

* Suggests movies via **TMDb** and books via **Open Library** based on your mood.

### 🎵 Music Coming Soon

* Music recommendations and playlist creation powered by Spotify (planned feature).

### ⚡ Lightweight UI

* Fast, responsive frontend built with **HTML**, **Tailwind CSS**, and **vanilla JavaScript**.

---

## 🛠️ How It Works

1. **User Input**: You describe how you feel.
2. **Mood Analysis**: The backend sends your input to GPT (via OpenAI API) to identify emotional tone.
3. **Recommendation Engine**:

   * Queries **TMDb** for mood-matching movies.
   * Queries **Open Library** for relevant books.
4. **Curated Results**: Displays tailored suggestions based on detected mood.

---

## 🧱 Tech Stack

**Frontend**:

* HTML + Tailwind CSS for responsive design
* Vanilla JavaScript for interactivity and API communication

**Backend**:

* Node.js + Express for server logic and API routing
* GPT (OpenAI) for mood detection
* TMDb API for movie data
* Open Library API for book data

---

## ⚔️ Challenges We Faced

* Crafting GPT prompts that accurately understand subtle and complex emotions
* Managing asynchronous calls to multiple APIs efficiently
* Building a polished frontend with only vanilla tech (no frameworks)
* Handling API limits and edge-case errors gracefully

---

## 🏆 Accomplishments

* Seamlessly merged mood analysis with entertainment APIs
* Developed a fast, elegant frontend without heavy libraries
* Created a smooth UX using minimal tech stack and smart backend design

---

## 📚 What We Learned

* Leveraging GPT for natural language-based emotion detection
* UI/UX best practices for responsive and clean design
* Handling and unifying async responses from diverse third-party APIs

---

## 🌟 What’s Next

* ✅ **Spotify integration** for music recommendations
* 📈 Smarter mood-to-content mapping with ML + user feedback
* 🧠 User profiles, mood history, and recommendation learning
* 📱 Mobile app & wearable mood detection integration

---

## 🧪 Getting Started

### 🔧 Prerequisites

* Node.js & npm
* API Keys:

  * OpenAI (GPT)
  * TMDb (The Movie Database)
  * Open Library (no key required)

### 📥 Installation

```bash
git clone https://github.com/your-username/emoticue.git
cd emoticue
npm install
```

### 🛠️ Configuration

Create a `.env` file in the root folder:

```
OPENAI_API_KEY=your_openai_api_key
TMDB_API_KEY=your_tmdb_api_key
```

### ▶️ Run the App

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes and open a pull request
4. Use GitHub Issues for bugs, feature requests, or feedback
## 📄 License

This project is licensed under the [MIT License](LICENSE).
### 🎬 EmotiCue — Let your **feelings** guide your next **story**.

