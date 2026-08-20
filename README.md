# 🌈 Kids Learning App — ABC, Numbers, Words, Telugu & Dino Math 🦖

A simple and interactive learning application designed to help young children (Class 1, approximately 5–7 years old) easily practice **ABC letters, numbers, simple English words, Telugu alphabets, and Dino Math**.

---

## 🎯 Purpose of the Project

The main goal of this project is to create a simple, child-friendly learning tool that can be used during tuition or at home.

Instead of making children learn only from books, this application provides an interactive, visual way to practice:

- 🔤 Capital & Small ABC Letters
- 🔢 Numbers (with custom ranges)
- 📝 Simple English Words
- 🌺 Telugu Vowels & Consonants (అచ్చులు & హల్లులు)
- 🦖 **Dino Math** (Visual Addition, Subtraction, Multiplication, Division & Mixed Math)
- 🔊 Web Speech API Audio Pronunciation

---

## ✨ Features

### 🦖 Dino Math Learning (Phase 2 & Phase 3)

Taught through cute visual dinosaur objects using the **SEE → UNDERSTAND → ANSWER → CELEBRATE → NEXT** pattern:

- ➕ **Addition**: Group 1 Dinosaurs + Group 2 Dinosaurs (`🦖 🦖` + `🦖 🦖 🦖` $\rightarrow$ `2 + 3 = 5`)
- ➖ **Subtraction**: Take away dinosaurs without negative answers (`🦖 🦖 🦖 🦖 🦖` take away `🦖 🦖` $\rightarrow$ `5 - 2 = 3`)
- ✖️ **Multiplication**: Taught as equal groups (e.g. `3 groups of 3` $\rightarrow$ `3 × 3 = 9`)
- ➗ **Division**: Taught as equal sharing in dino nests 🪺 (e.g. `6 dinos shared in 2 nests` $\rightarrow$ `6 ÷ 2 = 3`)
- 🧠 **Mixed Math**: Random combination of operations at chosen levels
- 🎯 **3 Difficulty Levels**: 🟢 EASY (1-5), 🟡 MEDIUM (1-10), 🔵 CHALLENGE (1-20)
- 🔘 **3 Touch-Friendly Answer Choice Buttons** ($\ge$ 64px height)
- 🦖 **Friendly Feedback**: `🦕 "Try Again!"` wobble for wrong attempts; `🎉 ROAR! GREAT JOB! 🦖` for correct answers.

---

### 🔤 ABC Learning

- 🔠 Capital Letters
- 🔡 Small Letters
- 🔤 Capital + Small Letters

### 🔢 Number Learning

Customizable range (e.g. 1 to 20, 1 to 50) with non-repeating random selection.

### 📝 Easy Words Learning

Simple 2-letter, 3-letter, 4-letter, and 5-letter vocabulary with illustrations and speech.

### 🌺 Telugu Learning

- **అచ్చులు** (Vowels: అ to అః)
- **హల్లులు** (Consonants: క to స)
- Audio synthesis in `te-IN`.

---

## 📱 Mobile Landscape First

Optimized for horizontal mobile viewports (`667x375`, `800x360`, `844x390`, `915x412`) to ensure:
- Content is large and visually dominant.
- Buttons are easy to tap and fit within screen height with zero scrolling.
- Responsive adaptivity between portrait, tablet, and desktop views.

---

## 🚀 Getting Started

To run the project locally:

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Lint code
npm run lint

# Build static production bundle (outputs to dist/)
npm run build

# Preview production build
npm run preview
```

Deployable directly to **Vercel** with zero backend configuration required!
