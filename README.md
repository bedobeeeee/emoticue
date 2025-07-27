
# 🎭 EmotiCue

**EmotiCue** is not just a website but more like a friend to whom you go when you want to share your feelings and feel at peace. It also recommends you movies,songs and books according to your mood(the perfect best firend isn't it?).It eliminates all the hardwork one has to do in order to find the perfect movie to binge watch or the perfect song to listen on loop.

##  Inspiration

We all struggle to pick the right movie, book, or song that truly fits our mood. EmotiCue bridges that gap using emotional intelligence and natural language understanding, making content discovery deeply personal and effortless.

---

## Features

###  Mood Recognition

* The platform analyzes your journal entry to understand your emotional state and detect mood patterns.

### Personalized Recommendations

* Recommends movies, books, and songs based on the detected mood from the local data.

###  Lightweight UI

* Fast, responsive frontend built with **HTML**, **Tailwind CSS**, and **vanilla JavaScript**.

---

## How It Works

1. **User Input**: You describe how you feel.
2. **Mood Analysis**:  The backend analyzes your text to identify emotional tone and patterns
3. **Recommendation Engine**:The harcoded local file containing mood-specific movie, book, and music data.

   
4. **Curated Results**: Displays tailored suggestions based on detected mood.

---

## 🧱 Tech Stack

Frontend-only web app
Built with:HTML+Tailwind CSS+Vanilla JS
Data Source: Local(Hardcoded file)


##  Challenges We Faced

*Analyzing journal entries to accurately detect emotional nuances
*Designing a responsive UI with minimal external dependencies
*Ensuring the system works smoothly with a local data-driven approach (no external API calls)


---

##  Accomplishments

* Developed a system for emotional pattern detection based on user journal entries
* Created a content recommendation engine using a hardcoded file
* Built a lightweight, responsive frontend without relying on heavy frameworks


---

##  What We Learnt

* How to detect and map moods from user-written content
* Best practices for building a lightweight UI that remains highly responsive



---

## 🌟 What’s Next

*  Spotify integration** for music recommendations
*  Smarter mood-to-content mapping with ML + user feedback
*  User profiles, mood history, and recommendation learning
*  Mobile app & wearable mood detection integration

---



### Prerequisites

* Node.js & npm
* A text editor or IDE.

### Installation

```bash
git clone https://github.com/your-username/emoticue.git
cd emoticue
npm install
```

### Configuration
Set up the hardcoded local data file:
Place your recommendations file in the data/ folder. This file contains the mood-based content recommendations (movies, books, songs).


### Run the App

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

##  Contributing

We welcome contributions!

1. Fork the repo
2. Integrate APIs into the backend for better analyzing and more number of recommendations.
3. Create a branch: `git checkout -b feature/your-feature`
4. Commit your changes and open a pull request
5. Use GitHub Issues for bugs, feature requests, or feedback
   
##  License

This project is licensed under the [MIT License](LICENSE).

### EmotiCue — Your new best friend to rant to and get top-tier recommendations

