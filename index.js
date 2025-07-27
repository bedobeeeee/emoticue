let currentMood = 'happy';
let likedSongs = new Set();
let isAnalyzing = false;

const RECOMMENDATIONS = {
    happy: {
        music: [
            { id: 1, title: "Good 4 U", artist: "Olivia Rodrigo", emoji: "🎸", tags: ["upbeat", "pop"] },
            { id: 2, title: "Levitating", artist: "Dua Lipa", emoji: "✨", tags: ["dance", "fun"] },
            { id: 3, title: "Sunflower", artist: "Post Malone", emoji: "🌻", tags: ["chill", "sunny"] },
            { id: 4, title: "Happy", artist: "Pharrell Williams", emoji: "😄", tags: ["feel-good", "pop"] }
        ],
        movies: ["Sing", "The Secret Life of Walter Mitty", "Paddington 2", "La La Land"],
        books: ["The Alchemist", "Eleanor & Park", "Wonder", "Big Magic"]
    },
    sad: {
        music: [
            { id: 5, title: "Someone Like You", artist: "Adele", emoji: "💔", tags: ["emotional", "ballad"] },
            { id: 6, title: "Mad World", artist: "Gary Jules", emoji: "🌧️", tags: ["melancholic", "indie"] },
            { id: 7, title: "Hurt", artist: "Johnny Cash", emoji: "🖤", tags: ["deep", "raw"] },
            { id: 8, title: "Tears in Heaven", artist: "Eric Clapton", emoji: "😢", tags: ["acoustic", "sad"] }
        ],
        movies: ["The Pursuit of Happyness", "Blue Valentine", "A Silent Voice", "Manchester by the Sea"],
        books: ["A Little Life", "The Fault in Our Stars", "Norwegian Wood", "The Bell Jar"]
    },
    anxious: {
        music: [
            { id: 9, title: "Weightless", artist: "Marconi Union", emoji: "🌊", tags: ["ambient", "calming"] },
            { id: 10, title: "Clair de Lune", artist: "Debussy", emoji: "🌙", tags: ["classical", "peaceful"] },
            { id: 11, title: "Breathe", artist: "Pink Floyd", emoji: "💨", tags: ["meditative", "classic"] },
            { id: 12, title: "River", artist: "Joni Mitchell", emoji: "🏞️", tags: ["folk", "gentle"] }
        ],
        movies: ["Inside Out", "My Neighbor Totoro", "The Secret World of Arrietty", "Good Will Hunting"],
        books: ["The Things You Can See Only When You Slow Down", "The Midnight Library", "Quiet", "Ikigai"]
    },
    angry: {
        music: [
            { id: 13, title: "Break Stuff", artist: "Limp Bizkit", emoji: "💥", tags: ["aggressive", "cathartic"] },
            { id: 14, title: "Killing in the Name", artist: "Rage Against the Machine", emoji: "🔥", tags: ["rock", "intense"] },
            { id: 15, title: "Bodies", artist: "Drowning Pool", emoji: "⚡", tags: ["metal", "energetic"] },
            { id: 16, title: "Chop Suey!", artist: "System of a Down", emoji: "🤘", tags: ["metal", "alternative"] }
        ],
        movies: ["Fight Club", "Whiplash", "Joker", "Fury"],
        books: ["Crime and Punishment", "The Catcher in the Rye", "American Psycho", "1984"]
    }
};


function loadMusicRecommendations() {
    const musicGrid = document.getElementById('musicGrid');
    const songs = RECOMMENDATIONS[currentMood]?.music || [];
    musicGrid.innerHTML = '';

    songs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <button class="heart-button ${likedSongs.has(song.id) ? 'liked' : ''}" onclick="toggleLike(${song.id}, this)">
                ${likedSongs.has(song.id) ? '❤️' : '🤍'}
            </button>
            <div class="card-cover">${song.emoji}</div>
            <h3 class="card-title">${song.title}</h3>
            <p class="card-artist">${song.artist}</p>
            <div class="tags-container">
                ${song.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        musicGrid.appendChild(card);
    });
}
