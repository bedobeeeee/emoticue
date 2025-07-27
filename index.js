const moodData = {
  Happy: {
    emoji: "😊",
    explanation: "You seem cheerful! Here are some personalized recommendations.",
    music: [
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", tags: ["Feel-good", "Upbeat"] },
      { title: "Good as Hell", artist: "Lizzo", tags: ["Confident", "Pop"] }
    ],
    movies: [
      { title: "Paddington 2", tags: ["Wholesome", "Family"], emoji: "🧸" },
      { title: "The Grand Budapest Hotel", tags: ["Wes Anderson", "Comedy"], emoji: "🏨" }
    ],
    books: [
      { title: "The Little Prince", tags: ["Classic", "Philosophical"], emoji: "🦊" },
      { title: "Eleanor & Park", tags: ["Romance", "Young Adult"], emoji: "🎧" }
    ]
  },
  // Add other moods if needed
};

function analyzeMood() {
  const input = document.getElementById("journalInput").value.toLowerCase();
  let mood = "Happy"; // For now, we hardcode it or use keyword detection

  // You can expand this later with sentiment analysis
  const moodInfo = moodData[mood];

  document.getElementById("moodEmoji").textContent = moodInfo.emoji;
  document.getElementById("moodName").textContent = mood;
  document.getElementById("moodExplanation").textContent = moodInfo.explanation;

  displayRecommendations("music", moodInfo.music);
  displayRecommendations("movies", moodInfo.movies);
  displayRecommendations("books", moodInfo.books);

  document.querySelector(".homepage-container").style.display = "none";
  document.getElementById("results").style.display = "block";
}

function displayRecommendations(type, items) {
  const grid = document.getElementById(`${type}Grid`);
  grid.innerHTML = items.map(item => createCard(item, type)).join("");
}

function createCard(item, type) {
  const emoji = item.emoji || getDefaultEmoji(type);
  return `
    <div class="music-card">
      <div class="card-cover">${emoji}</div>
      <div class="card-title">${item.title}</div>
      ${item.artist ? `<div class="card-artist">${item.artist}</div>` : ""}
      <div class="tags-container">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;
}

function getDefaultEmoji(type) {
  return {
    music: "🎵",
    movies: "🎬",
    books: "📚"
  }[type] || "📄";
}

function goBack() {
  document.getElementById("results").style.display = "none";
  document.querySelector(".homepage-container").style.display = "flex";
}

function showTab(type) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));

  document.querySelector(`[onclick="showTab('${type}')"]`).classList.add("active");
  document.getElementById(`${type}-section`).classList.add("active");
}

// Dummy voice input starter
function startRecording() {
  alert("🎤 Voice input coming soon!");
}
