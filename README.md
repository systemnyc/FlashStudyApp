# FlashStudyApp

A single-page flashcards study app built with vanilla HTML, CSS, and JavaScript for the Per Scholas AI Coding Challenge.

Repository: [systemnyc/FlashStudyApp](https://github.com/systemnyc/FlashStudyApp)

## Run the Browser App

No build step is required. From the project folder, start Python's static file server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. The browser app is made from `index.html`, `styles.css`, and `app.js`.

This repository also contains a separate Expo prototype. The `npm run web` script starts that prototype; it is not needed to run the vanilla browser app.

## Features

- Create, rename, switch, and delete decks.
- Create, edit, and delete cards with front and back text.
- Search cards by front or back text; shuffle and study cards with flip, next, and previous controls.
- Save decks, cards, and the active deck in LocalStorage.
- Use keyboard shortcuts: Left/Right arrows to navigate, Space to flip, S to shuffle, N to create a deck, and C to create a card.
- Responsive layout, dark-mode support, visible focus styles, and native modal dialogs.

## Manual QA

Check deck and card CRUD, search and clearing search, card navigation and flip reset, persistence after reload, empty states, dialog keyboard focus, and layout at mobile and desktop sizes. The project does not currently define an automated test script.

## AI Development Reflection

Draft based on the implementation and review work; personalize these bullets to match your own experience before submitting.

- AI saved time by scaffolding the initial semantic HTML structure and responsive CSS layout.
- During review, I found that Space on a focused deck row also flipped the card because the event bubbled to the global keyboard handler. I stopped the event from propagating and verified deck selection in the browser.
- I refactored LocalStorage persistence to return a success result so the UI can distinguish saved changes from changes that may be lost on reload.
- I improved keyboard accessibility by using native buttons for deck selection and native modal dialogs that contain focus and restore it when closed.
- Prompts with one specific behavior and a verification condition were more useful than broad requests. For example: "Pressing Space on a focused deck selector must switch decks without flipping the card; verify this in the browser."
