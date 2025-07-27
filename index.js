let currentMood = 'happy';
let isAnalyzing = false;

const recommendations = {
  happy: {
    emoji: "😊",
    explanation: "You're radiating positive energy today!",
    music: ["Happy - Pharrell Williams", "Walking on Sunshine - Katrina & The Waves"],
    movies: ["The Pursuit of Happyness", "Paddington"],
    books: ["The Alchemist", "Eat Pray Love"]
  },
  sad: {
    emoji: "😢",
    explanation: "It's okay to feel down sometimes. Let yourself rest.",
    music: ["Fix You - Coldplay", "Someone Like You - Adele"],
    movies: ["Inside Out", "A Silent Voice"],
    books: ["Norwegian Wood", "The Bell Jar"]
  },
  anxious: {
    emoji: "😰",
    explanation: "Take a deep breath. You're doing your best, and that's enough.",
    music: ["Weightless - Marconi Union", "Ocean Eyes - Billie Eilish"],
    movies: ["A Beautiful Mind", "The Perks of Being a Wallflower"],
    books: ["Reasons to Stay Alive", "Anxiety Relief Workbook"]
  },
  angry: {
    emoji: "😠",
    explanation: "Channel that energy into something powerful and positive.",
    music: ["Smells Like Teen Spirit - Nirvana", "Break Stuff - Limp Bizkit"],
    movies: ["John Wick", "Whiplash"],
    books: ["The Art of War", "Unfu*k Yourself"]
  }
};

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
    loadContentRecommendations();
    showResultsPage();

    analyzeBtn.disabled = false;
    analyzeBtn.textContent = 'Analyze Mood ✨';
    isAnalyzing = false;
  }, 1000);
}

function detectMoodFromText(text) {
  const lower = text.toLowerCase();
  if (lower.includes('happy') || lower.includes('excited') || lower.includes('joy')) {
    return { mood: 'happy' };
  } else if (lower.includes('sad') || lower.includes('depressed') || lower.includes('down')) {
    return { mood: 'sad' };
  } else if (lower.includes('anxious') || lower.includes('nervous') || lower.includes('worried')) {
    return { mood: 'anxious' };
  } else if (lower.includes('angry') || lower.includes('mad') || lower.includes('furious')) {
    return { mood: 'angry' };
  } else {
    return { mood: 'happy' }; // default fallback
  }
}

function updateMoodDisplay({ mood }) {
  const moodInfo = recommendations[mood];
  document.getElementById('moodEmoji').textContent = moodInfo.emoji;
  document.getElementById('moodName').textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
  document.getElementById('moodExplanation').textContent = moodInfo.explanation;
}

function loadContentRecommendations() {
  const moodInfo = recommendations[currentMood];

  const musicGrid = document.getElementById('musicGrid');
  const moviesGrid = document.getElementById('moviesGrid');
  const booksGrid = document.getElementById('booksGrid');

  musicGrid.innerHTML = moodInfo.music.map(song => `<div class="content-card">${song}</div>`).join('');
  moviesGrid.innerHTML = moodInfo.movies.map(movie => `<div class="content-card">${movie}</div>`).join('');
  booksGrid.innerHTML = moodInfo.books.map(book => `<div class="content-card">${book}</div>`).join('');
}

function showResultsPage() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('resultsPage').style.display = 'block';
}

function goBackToHome() {
  document.getElementById('homepage').style.display = 'block';
  document.getElementById('resultsPage').style.display = 'none';
  document.getElementById('journalInput').value = '';
}

function switchTab(tabName, btnElement) {
  const sections = ['music', 'movies', 'books'];
  sections.forEach(section => {
    document.getElementById(`${section}-section`).classList.remove('active');
  });
  document.getElementById(`${tabName}-section`).classList.add('active');

  const allBtns = document.querySelectorAll('.tab-button');
  allBtns.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');
}
