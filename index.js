// index.js
let currentMood = 'happy';
let likedSongs = new Set();
let isAnalyzing = false;
let recommendations = {};

fetch('moodrecommendations.json')
  .then(response => response.json())
  .then(data => {
    recommendations = data;
    console.log('Loaded recommendations:', recommendations);
  })
  .catch(error => {
    console.error('Failed to load recommendations:', error);
  });


}

function analyzeMood() {
  const input = document.getElementById('journalInput').value.trim();
  if (!input) {
    alert("Please share how you're feeling first! 💭");
    return;
  }
  if (isAnalyzing) return;

  isAnalyzing = true;
  const analyzeBtn = document.getElementById('analyzeBtn');
  analyzeBtn.disabled = true;
  analyzeBtn.textContent = 'Analyzing...';

  setTimeout(() => {
    const moodResult = detectMoodFromText(input);
    currentMood = moodResult.mood;
    updateMoodDisplay(moodResult);
    loadRecommendations();
    showResultsPage();

    analyzeBtn.disabled = false;
    analyzeBtn.textContent = 'Analyze Mood ✨';
    isAnalyzing = false;
  }, 1000);
}

function detectMoodFromText(text) {
  const normalizedText = text.toLowerCase();
  const moodKeywords = {
    sad: ['sad', 'depressed', 'down', 'upset', 'hurt', 'lonely', 'empty', 'hopeless'],
    happy: ['happy', 'excited', 'great', 'amazing', 'wonderful', 'joy', 'love', 'fantastic'],
    anxious: ['anxious', 'worried', 'stressed', 'nervous', 'overwhelmed', 'panic', 'fear'],
    angry: ['angry', 'mad', 'furious', 'irritated', 'annoyed', 'rage', 'frustrated']
  };

  const moodScores = {};
  Object.keys(moodKeywords).forEach(mood => {
    moodScores[mood] = moodKeywords[mood].filter(keyword => normalizedText.includes(keyword)).length;
  });

  const dominantMood = Object.keys(moodScores).reduce((a, b) =>
    moodScores[a] > moodScores[b] ? a : b
  );

  if (moodScores[dominantMood] === 0) {
    return { mood: 'happy', emoji: '😐', name: 'Neutral', explanation: 'You seem balanced today!' };
  }

  const moodResponses = {
    sad: { mood: 'sad', emoji: '😔', name: 'Melancholic', explanation: 'These might help you process those feelings.' },
    angry: { mood: 'angry', emoji: '😠', name: 'Frustrated', explanation: 'Here's something to help channel that energy.' },
    anxious: { mood: 'anxious', emoji: '😰', name: 'Anxious', explanation: 'Some calming content to help you find peace.' },
    happy: { mood: 'happy', emoji: '😊', name: 'Happy', explanation: 'You're radiating positive energy today!' }
  };

  return moodResponses[dominantMood];
}

function updateMoodDisplay(moodData) {
  document.getElementById('moodEmoji').textContent = moodData.emoji;
  document.getElementById('moodName').textContent = moodData.name;
  document.getElementById('moodExplanation').textContent = moodData.explanation;
}

function loadRecommendations() {
  loadMusicCards();
  loadMovieList();
  loadBookList();
}

function loadMusicCards() {
  const musicGrid = document.getElementById('musicGrid');
  const songs = recommendations[currentMood]?.songs || [];
  musicGrid.innerHTML = '';
  songs.forEach((song, index) => {
    setTimeout(() => {
      musicGrid.appendChild(createMusicCard(song));
    }, index * 100);
  });
}

function loadMovieList() {
  const movieList = document.getElementById('movieList');
  const movies = recommendations[currentMood]?.movies || [];
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const li = document.createElement('li');
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

function loadBookList() {
  const bookList = document.getElementById('bookList');
  const books = recommendations[currentMood]?.books || [];
  bookList.innerHTML = '';
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book;
    bookList.appendChild(li);
  });
}

function createMusicCard(song) {
  const card = document.createElement('div');
  card.className = 'music-card';
  const isLiked = likedSongs.has(song.id);

  card.innerHTML = `
    <button class="heart-button ${isLiked ? 'liked' : ''}" onclick="toggleLike(${song.id}, this)">
      ${isLiked ? '❤️' : '🤍'}
    </button>
    <div class="card-cover">${song.emoji}</div>
    <h3 class="card-title">${song.title}</h3>
    <p class="card-artist">${song.artist}</p>
    <div class="tags-container">
      ${song.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
  return card;
}

function toggleLike(songId, button) {
  if (likedSongs.has(songId)) {
    likedSongs.delete(songId);
    button.textContent = '🤍';
    button.classList.remove('liked');
  } else {
    likedSongs.add(songId);
    button.textContent = '❤️';
    button.classList.add('liked');
  }
}

function switchTab(tabName, buttonElement) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');

  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  document.getElementById(tabName + '-section').classList.add('active');
}

function showResultsPage() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('resultsPage').style.display = 'block';
}

function goBackToHome() {
  document.getElementById('resultsPage').style.display = 'none';
  document.getElementById('homepage').style.display = 'flex';
  document.getElementById('journalInput').value = '';
}

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'Enter') analyzeMood();
  if (e.key === 'Escape' && document.getElementById('resultsPage').style.display === 'block') goBackToHome();
});

document.getElementById('journalInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    analyzeMood();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('journalInput').focus();
});
