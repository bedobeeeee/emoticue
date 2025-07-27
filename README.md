
# 🎭 EmotiCue

**EmotiCue** is an AI-powered content discovery platform that understands your mood and recommends movies, books—and music—tailored to how you feel. It uses a personalized journal entry system to analyze your mood and match it with relevant content from a local .json file. This system makes discovering the perfect movie, book, or song even more intuitive and emotional.

## 💡 Inspiration

We all struggle to pick the right movie, book, or song that truly fits our mood. EmotiCue bridges that gap using emotional intelligence and natural language understanding, making content discovery deeply personal and effortless.

---

## 🚀 Features

### 🧠 Mood Recognition

* The platform analyzes your journal entry to understand your emotional state and detect mood patterns.

### 🎬📚 Personalized Recommendations

* Recommends movies, books, and songs based on the detected mood from the local .json data.

### ⚡ Lightweight UI

* Fast, responsive frontend built with **HTML**, **Tailwind CSS**, and **vanilla JavaScript**.

---

## 🛠️ How It Works

1. **User Input**: You describe how you feel.
2. **Mood Analysis**:  The backend analyzes your text to identify emotional tone and patterns
3. **Recommendation Engine**:Queries a local .json file containing mood-specific movie, book, and music data.

   
4. **Curated Results**: Displays tailored suggestions based on detected mood.

---

## 🧱 Tech Stack

**Frontend**:

* HTML + Tailwind CSS for responsive design
* Vanilla JavaScript for interactivity and API communication

**Backend**:

* Local .json file for mood-to-content mapping (instead of external APIs)
* Mood detection logic based on journal entries and pattern recognition


---

## ⚔️ Challenges We Faced

*Analyzing journal entries to accurately detect emotional nuances
*Mapping mood patterns to relevant content in the .json file
*Designing a responsive UI with minimal external dependencies
*Ensuring the system works smoothly with a local data-driven approach (no external API calls)

---

## 🏆 Accomplishments

* Developed a system for emotional pattern detection based on user journal entries
* Created a content recommendation engine using a local .json file
* Built a lightweight, responsive frontend without relying on heavy frameworks


---

## 📚 What We Learned

* How to detect and map moods from user-written content
* Best practices for building a lightweight UI that remains highly responsive
* Organizing and structuring mood-to-content data in a .json format for easy access



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
* A text editor or IDE to work with the .json file

### 📥 Installation

```bash
git clone https://github.com/your-username/emoticue.git
cd emoticue
npm install
```

### 🛠️ Configuration
Set up the .json file:
Place your recommendations.json file in the data/ folder. This file contains the mood-based content recommendations (movies, books, songs).


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

