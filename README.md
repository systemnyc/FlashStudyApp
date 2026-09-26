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

Browser checks covered deck and card create/edit/delete, search and clearing search, Enter in search, navigation and flip reset, reload persistence, empty-deck recovery, dialog focus cycling and Escape handling, and the storage-failure message. Responsive layout was checked at mobile and desktop widths; dark mode worked, and no browser console errors were observed. JavaScript syntax, TypeScript, editor diagnostics, and diff whitespace checks passed. No automated test script is configured.

## AI Development Reflection

- AI saved time by scaffolding the semantic HTML and responsive CSS, then helping implement the browser app's study and CRUD interactions.
- Browser review exposed a keyboard bug: Space on a focused deck row selected it and also flipped the card because the event bubbled to the global handler. I stopped propagation and verified the behavior in the browser.
- I refactored LocalStorage persistence to return a success result, so the app can distinguish saved changes from changes that may be lost on reload.
- I improved accessibility with semantic deck-selection buttons, native modal dialogs, focus containment, Escape handling, and focus restoration.
- I got more reliable AI output by asking for one specific behavior and its verification condition, then testing before moving to the next change.
