# 🌈 Kids Learning App

A simple and interactive learning application designed to help young children easily practice **ABC letters, numbers, and basic English words**.

This project is designed especially for **1st-class children** who are beginning to learn alphabets, numbers, and simple words (approximately 5–7 years old). The interface uses large text, colorful illustrations, simple controls, and voice pronunciation to make learning more enjoyable and easier to understand.

---

## 🎯 Purpose of the Project

The main goal of this project is to create a simple digital learning tool that can be used during tuition or at home.

Instead of making children learn only from books, this application provides an interactive way to practice:

- 🔤 Capital letters
- 🔡 Small letters
- 🔢 Numbers
- 📝 Simple English words
- 🔊 Pronunciation

The application is designed to be **easy for children to use with minimal reading or complicated navigation**.

---

## ✨ Features

### 🔤 ABC Learning

Children can practice English alphabets from **A to Z**.

Three learning modes are available:

- 🔠 Capital Letters
- 🔡 Small Letters
- 🔤 Capital + Small Letters

Each letter is displayed with a related picture and word.

Example:
**A** -> 🍎 Apple

---

### 🔢 Number Learning

The teacher or parent can select a number range.

For example:
- **Start Number**: 1
- **End Number**: 20

The application will randomly select numbers from this range (preventing immediate duplicate repeats) to challenge the child.

---

### 📝 Easy Words Learning

Practice simple 2-letter, 3-letter, 4-letter, and easy 5-letter English words. Shows a large cartoon illustration (or high-quality emoji fallback) to help the child associate words with objects immediately.

---

### 🔊 Text-To-Speech Pronunciation

Uses the built-in browser Web Speech API (`window.speechSynthesis`) for clear English audio. The child can click the large **SAY IT** button to hear:
- Spelled words (e.g. "Cat")
- Letter cases (e.g. "Capital A" or "Small a")
- Number names (e.g. "Seven")

---

### 🏆 Progress & Celebrations

- Simple star-earned tracker (e.g. `⭐ 5`) displays progress without complicated statistics.
- Celebrates success with a short `🎉 GREAT JOB! ⭐` animation after every 5 questions practiced, automatically closing so it doesn't block active learning.

---

## 📱 Mobile Landscape First

Optimized for horizontal mobile viewports (e.g. `667x375`, `800x360`, `844x390`, `915x412`) to ensure that:
- Content is extremely large and visually dominant.
- Buttons are easy to tap and fit within the screen height with zero scrolling.
- Automatically adjusts between portrait, tablet, and desktop views.

---

## 🚀 Getting Started

To run the project locally, run:

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Lint code
npm run lint

# Build static production bundle (compiled inside dist/)
npm run build

# Preview build locally
npm run preview
```

Deployable directly to **Vercel** with zero backend or server configuration required!
