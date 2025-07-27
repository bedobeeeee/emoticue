let recommendations = {};

fetch('moodrecommendations.json')
  .then(response => response.json())
  .then(data => {
    recommendations = data;
    console.log('Loaded recommendations:', recommendations);
  })
  .catch(error => {
    console.error(' Failed to load recommendations:', error);
  });

let currentMood = 'happy';
let likedSongs = new Set();

//TODO: link to song/media recommended

const MUSIC_RECOMMENDATIONS = {
    happy: [
        { id: 1, title: "Good 4 U", artist: "Olivia Rodrigo", emoji: "🎸", tags: ["upbeat", "pop"] },
        { id: 2, title: "Levitating", artist: "Dua Lipa", emoji: "✨", tags: ["dance", "fun"] },
        { id: 3, title: "Sunflower", artist: "Post Malone", emoji: "🌻", tags: ["chill", "sunny"] },
        { id: 4, title: "Happy", artist: "Pharrell Williams", emoji: "😄", tags: ["feel-good", "pop"] }
    ],
     sad: [
        { id: 5, title: "Someone Like You", artist: "Adele", emoji: "💔", tags: ["emotional", "ballad"] },
        { id: 6, title: "Mad World", artist: "Gary Jules", emoji: "🌧️", tags: ["melancholic", "indie"] },
        { id: 7, title: "Hurt", artist: "Johnny Cash", emoji: "🖤", tags: ["deep", "raw"] },
        { id: 8, title: "Tears in Heaven", artist: "Eric Clapton", emoji: "😢", tags: ["acoustic", "sad"] }
    ],
    anxious: [
        { id: 9, title: "Weightless", artist: "Marconi Union", emoji: "🌊", tags: ["ambient", "calming"] },
        { id: 10, title: "Clair de Lune", artist: "Debussy", emoji: "🌙", tags: ["classical", "peaceful"] },
        { id: 11, title: "Breathe", artist: "Pink Floyd", emoji: "💨", tags: ["meditative", "classic"] },
        { id: 12, title: "River", artist: "Joni Mitchell", emoji: "🏞️", tags: ["folk", "gentle"] }
    ],
    angry: [
        { id: 13, title: "Break Stuff", artist: "Limp Bizkit", emoji: "💥", tags: ["aggressive", "cathartic"] },
        { id: 14, title: "Killing in the Name", artist: "Rage Against the Machine", emoji: "🔥", tags: ["rock", "intense"] },
        { id: 15, title: "Bodies", artist: "Drowning Pool", emoji: "⚡", tags: ["metal", "energetic"] },
        { id: 16, title: "Chop Suey!", artist: "System of a Down", emoji: "🤘", tags: ["metal", "alternative"] }
    ]
};

//needs happy, sad's emojis, anxious's emojis, and angry edited
const MOVIE_RECOMMENDATIONS = {
    happy: [
        { id: 1, title: "", artist: "Disney", emoji: "🎸", tags: ["upbeat", "cheerful"] },
        { id: 2, title: "Levitating", artist: "Dua Lipa", emoji: "✨", tags: ["dance", "fun"] },
        { id: 3, title: "Sunflower", artist: "Post Malone", emoji: "🌻", tags: ["chill", "sunny"] },
        { id: 4, title: "Happy", artist: "Pharrell Williams", emoji: "😄", tags: ["feel-good", "pop"] }
    ],
     sad: [
        { id: 5, title: "Inside Out", artist: "Disney", emoji: "💔", tags: ["emotional", "somber"] },
        { id: 6, title: "Mad World", artist: "Gary Jules", emoji: "🌧️", tags: ["melancholic", "indie"] },
        { id: 7, title: "Hurt", artist: "Johnny Cash", emoji: "🖤", tags: ["deep", "raw"] },
        { id: 8, title: "Tears in Heaven", artist: "Eric Clapton", emoji: "😢", tags: ["acoustic", "sad"] }
    ],
    anxious: [
        { id: 9, title: "The Secret Life of Walter Mitty", artist: "Ben Stiller", emoji: "🌊", tags: ["ambient", "calming"] },
        { id: 10, title: "Soul", artist: "Disney", emoji: "🌙", tags: ["classical", "peaceful"] },
        { id: 11, title: "Life of Pi", artist: "Ang Lee", emoji: "💨", tags: ["meditative", "classic"] },
        { id: 12, title: "Taare Zameen Par", artist: "Aamir Khan", emoji: "🏞️", tags: ["folk", "gentle"] }
    ],
    angry: [
        { id: 13, title: "Eat Pray Love", artist: "Ryan Murphy", emoji: "💥", tags: ["aggressive", "cathartic"] },
        { id: 14, title: "Killing in the Name", artist: "Rage Against the Machine", emoji: "🔥", tags: ["rock", "intense"] },
        { id: 15, title: "Bodies", artist: "Drowning Pool", emoji: "⚡", tags: ["metal", "energetic"] },
        { id: 16, title: "Chop Suey!", artist: "System of a Down", emoji: "🤘", tags: ["metal", "alternative"] }
    ]
};

//needs to be edited
const BOOKS_RECOMMENDATIONS = {
    happy: [
        { id: 1, title: "Good 4 U", artist: "Olivia Rodrigo", emoji: "🎸", tags: ["upbeat", "pop"] },
        { id: 2, title: "Levitating", artist: "Dua Lipa", emoji: "✨", tags: ["dance", "fun"] },
        { id: 3, title: "Sunflower", artist: "Post Malone", emoji: "🌻", tags: ["chill", "sunny"] },
        { id: 4, title: "Happy", artist: "Pharrell Williams", emoji: "😄", tags: ["feel-good", "pop"] }
    ],
     sad: [
        { id: 5, title: "Someone Like You", artist: "Adele", emoji: "💔", tags: ["emotional", "ballad"] },
        { id: 6, title: "Mad World", artist: "Gary Jules", emoji: "🌧️", tags: ["melancholic", "indie"] },
        { id: 7, title: "Hurt", artist: "Johnny Cash", emoji: "🖤", tags: ["deep", "raw"] },
        { id: 8, title: "Tears in Heaven", artist: "Eric Clapton", emoji: "😢", tags: ["acoustic", "sad"] }
    ],
    anxious: [
        { id: 9, title: "Weightless", artist: "Marconi Union", emoji: "🌊", tags: ["ambient", "calming"] },
        { id: 10, title: "Clair de Lune", artist: "Debussy", emoji: "🌙", tags: ["classical", "peaceful"] },
        { id: 11, title: "Breathe", artist: "Pink Floyd", emoji: "💨", tags: ["meditative", "classic"] },
        { id: 12, title: "River", artist: "Joni Mitchell", emoji: "🏞️", tags: ["folk", "gentle"] }
    ],
    angry: [
        { id: 13, title: "Break Stuff", artist: "Limp Bizkit", emoji: "💥", tags: ["aggressive", "cathartic"] },
        { id: 14, title: "Killing in the Name", artist: "Rage Against the Machine", emoji: "🔥", tags: ["rock", "intense"] },
        { id: 15, title: "Bodies", artist: "Drowning Pool", emoji: "⚡", tags: ["metal", "energetic"] },
        { id: 16, title: "Chop Suey!", artist: "System of a Down", emoji: "🤘", tags: ["metal", "alternative"] }
    ]
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
        loadMusicRecommendations();
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
            happy: ['happy', 'excited', 'great', 'amazing', 'wonderful', 'joy', 'love', 'fantastic','good'],
            anxious: ['anxious', 'worried', 'stressed', 'nervous', 'overwhelmed', 'panic', 'fear', 'overstimulated'],
            angry: ['angry', 'mad', 'furious', 'irritated', 'annoyed', 'rage', 'frustrated']
        };
            
    const moodScores = {};
        Object.keys(moodKeywords).forEach(mood => {
             moodScores[mood] = moodKeywords[mood].filter(keyword => 
                normalizedText.includes(keyword)
            ).length;
        });
            
    const dominantMood = Object.keys(moodScores).reduce((a, b) => 
            moodScores[a] > moodScores[b] ? a : b
        );
            
        if (moodScores[dominantMood] === 0) {
            return { mood: 'happy', emoji: '😐', name: 'Neutral', explanation: 'You seem balanced today!' };
        }
            
    const moodResponses = {
            sad: { mood: 'sad', emoji: '😔', name: 'Melancholic', explanation: 'These songs might help you process those feelings.' },
            angry: { mood: 'angry', emoji: '😠', name: 'Frustrated', explanation: 'Here\'s music to help channel that energy.' },
            anxious: { mood: 'anxious', emoji: '😰', name: 'Anxious', explanation: 'Some calming music to help you find peace.' },
            happy: { mood: 'happy', emoji: '😊', name: 'Happy', explanation: 'You\'re radiating positive energy today!' }
        };
            
        return moodResponses[dominantMood];
    }

    function updateMoodDisplay(moodData) {
        const moodEmojiMascot = document.getElementById('moodEmoji');
        moodEmojiMascot.innerHTML= `<img src='images/${moodData.mood}.png' class='mood-images'>`;


        
        document.getElementById('moodName').textContent = moodData.name;
        document.getElementById('moodExplanation').textContent = moodData.explanation;
     }

    function loadMusicRecommendations() {
        const musicGrid = document.getElementById('musicGrid');
        const songs = MUSIC_RECOMMENDATIONS[currentMood] || MUSIC_RECOMMENDATIONS.happy;
        musicGrid.innerHTML = '';
            
        songs.forEach((song, index) => {
            setTimeout(() => {
                musicGrid.appendChild(createMusicCard(song));
            }, index * 100);
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

        // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') analyzeMood();
        if (e.key === 'Escape' && document.getElementById('resultsPage').style.display === 'block') goBackToHome();
    });

    document.getElementById('journalInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            analyzeMood();
            }
    });

        // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('journalInput').focus();
});
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96571bf5029b5f96',t:'MTc1MzU2NjU5MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
