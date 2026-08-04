// app.js — Part 3: CRUD, LocalStorage, deck switching, inline forms
'use strict';

(function () {

  // ── Storage ─────────────────────────────────────────────────────────────────

  const STORE_KEY = 'flashStudyApp_v1';

  function uid() {
    return 'id-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function loadData() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.decks) || parsed.decks.length === 0) return null;
      return normalizeData(parsed);
    } catch (_) {}
    return null;
  }

  function persist() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (_) {}
  }

  // ── Seed data (first visit only) ────────────────────────────────────────────

  const SEED = {
    activeDeckId: 'deck-bio',
    decks: [
      {
        id: 'deck-bio', name: 'Biology 101',
        cards: [
          { id: uid(), front: 'What is the powerhouse of the cell?', back: 'Mitochondrion' },
          { id: uid(), front: 'What process do plants use to make food?', back: 'Photosynthesis' },
          { id: uid(), front: 'What is the basic unit of life?', back: 'Cell' },
        ]
      },
      {
        id: 'deck-es', name: 'Spanish Verbs',
        cards: [
          { id: uid(), front: 'ser', back: 'to be (permanent quality)' },
          { id: uid(), front: 'estar', back: 'to be (temporary state)' },
          { id: uid(), front: 'tener', back: 'to have' },
        ]
      },
      {
        id: 'deck-web', name: 'Web Dev',
        cards: [
          { id: uid(), front: 'What does DOM stand for?', back: 'Document Object Model' },
          { id: uid(), front: 'What is a closure in JavaScript?', back: 'A function that retains access to its outer lexical scope' },
          { id: uid(), front: 'What does CSS stand for?', back: 'Cascading Style Sheets' },
        ]
      },
      { id: 'deck-ai', name: 'Artificial Intelligence', cards: [] },
    ]
  };

  function normalizeData(rawData) {
    const decks = Array.isArray(rawData.decks) ? rawData.decks : [];
    const normalizedDecks = decks.map((deck, deckIndex) => {
      const cards = Array.isArray(deck.cards) ? deck.cards : [];
      return {
        id: typeof deck.id === 'string' && deck.id.trim() ? deck.id : `deck-${deckIndex}-${uid()}`,
        name: typeof deck.name === 'string' && deck.name.trim() ? deck.name : `Deck ${deckIndex + 1}`,
        cards: cards.map(card => ({
          id: typeof card.id === 'string' && card.id.trim() ? card.id : uid(),
          front: typeof card.front === 'string' ? card.front : '',
          back: typeof card.back === 'string' ? card.back : ''
        }))
      };
    });

    if (!normalizedDecks.length) return null;
    const activeDeckId = normalizedDecks.some(d => d.id === rawData.activeDeckId)
      ? rawData.activeDeckId
      : normalizedDecks[0].id;

    return { activeDeckId, decks: normalizedDecks };
  }

  // ── State ────────────────────────────────────────────────────────────────────

  let data = loadData() || SEED;
  let order = [];        // indices into the current filtered card list
  let current = 0;       // position within order
  let editingCardId = null;
  let editingDeckId = null;
  let cardFormTrigger = null;
  let deckFormTrigger = null;
  let pendingCardId = null;

  function activeDeck() {
    return data.decks.find(d => d.id === data.activeDeckId) || data.decks[0];
  }

  function getFilteredCards() {
    const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const cards = activeDeck().cards;
    return q
      ? cards.filter(c => c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q))
      : cards;
  }

  // ── DOM refs ─────────────────────────────────────────────────────────────────

  const flashcard       = document.getElementById('flashcard');
  const flipBtn         = document.getElementById('flip-btn');
  const prevBtn         = document.getElementById('prev-btn');
  const nextBtn         = document.getElementById('next-btn');
  const shuffleBtn      = document.getElementById('shuffle-btn');
  const newDeckBtn      = document.getElementById('new-deck-btn');
  const newCardBtn      = document.getElementById('new-card-btn');
  const editCardBtn     = document.getElementById('edit-card-btn');
  const deleteCardBtn   = document.getElementById('delete-card-btn');
  const emptyAddCardBtn = document.getElementById('empty-add-card-btn');
  const deckTitleEl     = document.getElementById('deck-title');
  const searchInput     = document.getElementById('search');
  const cardCounter     = document.getElementById('card-counter');
  const deckList        = document.querySelector('.deck-list');
  const cardControls    = document.querySelector('.card-controls');
  const cardForm        = document.getElementById('card-form');
  const cardFormTitle   = document.getElementById('card-form-title');
  const cardFrontInput  = document.getElementById('card-front-input');
  const cardBackInput   = document.getElementById('card-back-input');
  const cardFormSave    = document.getElementById('card-form-save');
  const cardFormCancel  = document.getElementById('card-form-cancel');
  const deckForm        = document.getElementById('deck-form');
  const deckNameInput   = document.getElementById('deck-name-input');
  const deckFormSave    = document.getElementById('deck-form-save');
  const deckFormCancel  = document.getElementById('deck-form-cancel');
  const emptyState      = document.getElementById('empty-state');

  if (!flashcard) return;

  // Ensure .flashcard-inner wrapper exists
  if (!flashcard.querySelector('.flashcard-inner')) {
    const inner = document.createElement('div');
    inner.className = 'flashcard-inner';
    while (flashcard.firstChild) inner.appendChild(flashcard.firstChild);
    flashcard.appendChild(inner);
  }
  const inner     = flashcard.querySelector('.flashcard-inner');
  const frontFace = inner.querySelector('.card-front');
  const backFace  = inner.querySelector('.card-back');

  // ── Notices ──────────────────────────────────────────────────────────────────

  function showNotice(text) {
    const existing = document.querySelector('.app-notice');
    if (existing) existing.remove();
    const n = document.createElement('div');
    n.className = 'app-notice';
    n.setAttribute('role', 'status');
    n.textContent = text;
    document.body.appendChild(n);
    setTimeout(() => n.classList.add('visible'), 10);
    setTimeout(() => { n.classList.remove('visible'); setTimeout(() => n.remove(), 300); }, 2200);
  }

  // ── Flip ─────────────────────────────────────────────────────────────────────

  function resetFlip() {
    flashcard.classList.remove('is-flipped');
    if (flipBtn)    flipBtn.setAttribute('aria-pressed', 'false');
    if (frontFace)  frontFace.setAttribute('aria-hidden', 'false');
    if (backFace)   backFace.setAttribute('aria-hidden', 'true');
  }

  function toggleFlip() {
    const flipped = flashcard.classList.toggle('is-flipped');
    if (flipBtn)   flipBtn.setAttribute('aria-pressed', String(flipped));
    if (frontFace) frontFace.setAttribute('aria-hidden', String(flipped));
    if (backFace)  backFace.setAttribute('aria-hidden', String(!flipped));
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  function renderSidebar() {
    if (!deckList) return;
    deckList.innerHTML = '';
    data.decks.forEach(deck => {
      const isActive = deck.id === data.activeDeckId;
      const li = document.createElement('li');
      li.className = 'deck-item' + (isActive ? ' active' : '');
      li.setAttribute('tabindex', '0');
      if (isActive) li.setAttribute('aria-current', 'true');

      li.innerHTML =
        `<span class="deck-name">${escHtml(deck.name)}</span>` +
        `<span class="deck-item-right">` +
          `<span class="deck-count" aria-hidden="true">${deck.cards.length}</span>` +
          `<button class="deck-edit-btn btn" type="button" data-id="${escHtml(deck.id)}" ` +
            `aria-label="Rename deck ${escHtml(deck.name)}">✎</button>` +
          `<button class="deck-delete-btn btn" type="button" data-id="${escHtml(deck.id)}" ` +
            `aria-label="Delete deck ${escHtml(deck.name)}">✕</button>` +
        `</span>`;

      li.addEventListener('click', e => {
        if (e.target.closest('.deck-edit-btn')) return;
        if (e.target.closest('.deck-delete-btn')) return;
        switchDeck(deck.id);
      });
      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); switchDeck(deck.id); }
      });
      li.querySelector('.deck-edit-btn').addEventListener('click', e => {
        e.stopPropagation();
        openDeckForm(deck);
      });
      li.querySelector('.deck-delete-btn').addEventListener('click', e => {
        e.stopPropagation();
        deleteDeck(deck.id);
      });

      deckList.appendChild(li);
    });
  }

  function renderCard() {
    const cards = getFilteredCards();
    if (deckTitleEl) deckTitleEl.textContent = activeDeck().name;

    const hasCards = cards.length > 0;
    flashcard.hidden = !hasCards;
    if (cardControls) cardControls.hidden = !hasCards;
    if (emptyState)   emptyState.hidden = hasCards;

    if (!hasCards) {
      if (frontFace) frontFace.querySelector('.card-text').textContent = '';
      if (backFace) backFace.querySelector('.card-text').textContent = '';
      if (cardCounter) cardCounter.textContent = '';
      return;
    }

    if (pendingCardId) {
      const targetIndex = cards.findIndex(card => card.id === pendingCardId);
      if (targetIndex !== -1) {
        current = targetIndex;
      } else {
        current = 0;
      }
      pendingCardId = null;
    }

    // Clamp current within bounds after deletions / search changes
    if (current >= cards.length) current = cards.length - 1;
    if (current < 0) current = 0;

    if (!order || order.length !== cards.length) {
      order = cards.map((_, i) => i);
    }

    const card = cards[order[current]];
    if (!card) {
      order = cards.map((_, i) => i);
      current = 0;
      return renderCard();
    }

    if (frontFace) frontFace.querySelector('.card-text').textContent = card.front;
    if (backFace)  backFace.querySelector('.card-text').textContent = card.back;

    const flipped = flashcard.classList.contains('is-flipped');
    if (frontFace) frontFace.setAttribute('aria-hidden', String(flipped));
    if (backFace)  backFace.setAttribute('aria-hidden', String(!flipped));

    if (cardCounter) cardCounter.textContent = `${current + 1} / ${cards.length}`;
  }

  // Full render: re-renders sidebar + resets study session for the active deck
  function fullRender() {
    closeCardForm();
    closeDeckForm();
    renderSidebar();
    const cards = getFilteredCards();
    order = cards.map((_, i) => i);
    current = 0;
    resetFlip();
    renderCard();
  }

  // ── Deck CRUD ────────────────────────────────────────────────────────────────

  function switchDeck(id) {
    if (data.activeDeckId === id) return;
    data.activeDeckId = id;
    if (searchInput) searchInput.value = '';
    persist();
    fullRender();
  }

  function deleteDeck(id) {
    if (data.decks.length <= 1) { showNotice('Cannot delete the last deck'); return; }
    if (!confirm('Delete this deck and all its cards? This cannot be undone.')) return;
    data.decks = data.decks.filter(d => d.id !== id);
    if (data.activeDeckId === id) data.activeDeckId = data.decks[0].id;
    persist();
    fullRender();
    showNotice('Deck deleted');
  }

  function openDeckForm(deck = null) {
    editingDeckId = deck ? deck.id : null;
    deckFormTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (deckNameInput) deckNameInput.value = deck ? deck.name : '';
    if (deckForm) deckForm.hidden = false;
    if (deckFormSave) deckFormSave.textContent = editingDeckId ? 'Rename Deck' : 'Create Deck';
    if (deckNameInput) deckNameInput.focus();
  }

  function closeDeckForm() {
    if (deckForm) deckForm.hidden = true;
    if (deckFormTrigger && typeof deckFormTrigger.focus === 'function') {
      deckFormTrigger.focus();
    }
    editingDeckId = null;
    deckFormTrigger = null;
  }

  function saveDeck() {
    const name = deckNameInput ? deckNameInput.value.trim() : '';
    if (!name) { showNotice('Deck name is required'); if (deckNameInput) deckNameInput.focus(); return; }

    if (editingDeckId) {
      const deck = data.decks.find(d => d.id === editingDeckId);
      if (deck) {
        deck.name = name;
        persist();
        fullRender();
        showNotice(`Deck renamed to "${name}"`);
        return;
      }
    }

    const newDeck = { id: uid(), name, cards: [] };
    data.decks.push(newDeck);
    data.activeDeckId = newDeck.id;
    persist();
    if (searchInput) searchInput.value = '';
    fullRender();
    showNotice(`Deck "${name}" created`);
  }

  // ── Card navigation ───────────────────────────────────────────────────────────

  function goTo(index) {
    const cards = getFilteredCards();
    if (!cards.length) return;
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    current = index;
    resetFlip();
    renderCard();
  }

  function prevCard() { goTo(current - 1); }
  function nextCard() { goTo(current + 1); }

  function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  function shuffleDeck() {
    const cards = getFilteredCards();
    if (!cards.length) { showNotice('No cards to shuffle'); return; }
    shuffleArray(order);
    current = 0;
    resetFlip();
    renderCard();
    showNotice('Deck shuffled');
  }

  // ── Card CRUD ─────────────────────────────────────────────────────────────────

  function deleteCurrentCard() {
    const cards = getFilteredCards();
    if (!cards.length) return;
    const card = cards[order[current]];
    if (!card) return;
    if (!confirm('Delete this card? This cannot be undone.')) return;
    const deck = activeDeck();
    deck.cards = deck.cards.filter(c => c.id !== card.id);
    persist();
    const newCards = getFilteredCards();
    order = newCards.map((_, i) => i);
    current = Math.min(current, Math.max(0, newCards.length - 1));
    resetFlip();
    renderCard();
    renderSidebar();
    showNotice('Card deleted');
  }

  function openCardForm(card) {
    cardFormTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    editingCardId = card ? card.id : null;
    if (cardFormTitle)  cardFormTitle.textContent = card ? 'Edit Card' : 'New Card';
    if (cardFrontInput) cardFrontInput.value = card ? card.front : '';
    if (cardBackInput)  cardBackInput.value  = card ? card.back  : '';
    flashcard.hidden = true;
    if (cardControls) cardControls.hidden = true;
    if (emptyState)   emptyState.hidden = true;
    if (cardForm)     cardForm.hidden = false;
    if (cardFrontInput) cardFrontInput.focus();
  }

  function closeCardForm() {
    if (cardForm) cardForm.hidden = true;
    editingCardId = null;
    if (cardFormTrigger && typeof cardFormTrigger.focus === 'function') {
      cardFormTrigger.focus();
    }
    cardFormTrigger = null;
  }

  function saveCard() {
    const front = cardFrontInput ? cardFrontInput.value.trim() : '';
    const back  = cardBackInput  ? cardBackInput.value.trim()  : '';
    if (!front || !back) {
      showNotice('Both front and back text are required');
      if (!front && cardFrontInput) cardFrontInput.focus();
      else if (cardBackInput) cardBackInput.focus();
      return;
    }

    const deck = activeDeck();
    const wasEditing = editingCardId;
    let savedCardId = null;

    if (wasEditing) {
      const card = deck.cards.find(c => c.id === wasEditing);
      if (card) {
        card.front = front;
        card.back = back;
        savedCardId = card.id;
      }
    } else {
      const createdCard = { id: uid(), front, back };
      deck.cards.push(createdCard);
      if (searchInput) searchInput.value = '';
      savedCardId = createdCard.id;
    }

    const cards = getFilteredCards();
    order = cards.map((_, i) => i);
    pendingCardId = savedCardId;

    persist();
    closeCardForm();
    renderSidebar();
    renderCard();
    showNotice(wasEditing ? 'Card updated' : 'Card added');
  }

  // ── Search ───────────────────────────────────────────────────────────────────

  function onSearch() {
    const cards = getFilteredCards();
    order = cards.map((_, i) => i);
    current = 0;
    resetFlip();
    renderCard();
    const q = searchInput ? searchInput.value.trim() : '';
    if (q) showNotice(cards.length > 0 ? `${cards.length} card(s) match` : 'No matches');
  }

  // ── Keyboard shortcuts ────────────────────────────────────────────────────────

  document.addEventListener('keydown', e => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    const inInput = tag === 'INPUT' || tag === 'TEXTAREA' ||
      Boolean(document.activeElement && document.activeElement.isContentEditable);
    const formOpen = (cardForm && !cardForm.hidden) || (deckForm && !deckForm.hidden);

    if (e.key === 'Escape') {
      if (cardForm && !cardForm.hidden) { closeCardForm(); renderCard(); return; }
      if (deckForm && !deckForm.hidden) { closeDeckForm(); return; }
    }

    if (formOpen || inInput) return;

    switch (e.key) {
      case 'ArrowLeft':  e.preventDefault(); prevCard();    break;
      case 'ArrowRight': e.preventDefault(); nextCard();    break;
      case ' ':
        if (tag !== 'BUTTON') { e.preventDefault(); toggleFlip(); }
        break;
      case 's': case 'S': e.preventDefault(); shuffleDeck();      break;
      case 'n': case 'N': e.preventDefault(); openDeckForm();     break;
      case 'c': case 'C': e.preventDefault(); openCardForm(null); break;
    }
  });

  // ── Event listeners ──────────────────────────────────────────────────────────

  if (prevBtn)        prevBtn.addEventListener('click', prevCard);
  if (nextBtn)        nextBtn.addEventListener('click', nextCard);
  if (shuffleBtn)     shuffleBtn.addEventListener('click', shuffleDeck);
  if (flipBtn)        flipBtn.addEventListener('click', toggleFlip);
  if (editCardBtn)    editCardBtn.addEventListener('click', () => {
    const cards = getFilteredCards();
    if (cards.length) openCardForm(cards[order[current]]);
  });
  if (deleteCardBtn)  deleteCardBtn.addEventListener('click', deleteCurrentCard);
  if (newCardBtn)     newCardBtn.addEventListener('click', () => openCardForm(null));
  if (newDeckBtn)     newDeckBtn.addEventListener('click', openDeckForm);
  if (emptyAddCardBtn) emptyAddCardBtn.addEventListener('click', () => openCardForm(null));

  if (cardFormSave)   cardFormSave.addEventListener('click', saveCard);
  if (cardFormCancel) cardFormCancel.addEventListener('click', () => { closeCardForm(); renderCard(); });
  if (deckFormSave)   deckFormSave.addEventListener('click', saveDeck);
  if (deckFormCancel) deckFormCancel.addEventListener('click', closeDeckForm);

  if (searchInput) searchInput.addEventListener('input', onSearch);

  if (deckNameInput) {
    deckNameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); saveDeck(); }
      if (e.key === 'Escape') { e.preventDefault(); closeDeckForm(); }
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────────────

  fullRender();

})();
