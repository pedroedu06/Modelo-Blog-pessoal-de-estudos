const ARTICLE_STORAGE_KEY = "study-blog-articles";
const BOOK_STORAGE_KEY = "study-blog-books";
const LANGUAGE_STORAGE_KEY = "study-blog-language";
const MAX_LINES = 1000;

const translations = {
  en: {
    addBookButton: "Add Book",
    allArticlesTitle: "All Articles",
    archiveTab: "All Articles",
    articleEditorTitle: "Article Editor",
    articleTitleLabel: "Article title",
    articleTitlePlaceholder: "Example: JavaScript closures",
    attachmentCount: "attachment(s)",
    bookAuthorLabel: "Author",
    bookAuthorPlaceholder: "Example: Robert C. Martin",
    bookNotesLabel: "Notes",
    bookNotesPlaceholder: "What did this book teach you?",
    bookRatingLabel: "Rating",
    booksEmpty: "No books added yet. Add a book after you finish reading it.",
    booksEyebrow: "Reading log",
    booksTab: "Books",
    booksTitle: "Books",
    bookTitleLabel: "Book title",
    bookTitlePlaceholder: "Example: Clean Code",
    clearButton: "Clear",
    closeButton: "Close",
    contentLabel: "Content",
    contentPlaceholder: "Write your study notes here...",
    createEyebrow: "Create",
    deleteButton: "Delete",
    editorTab: "New Article",
    featuredEmpty: "No featured studies yet. Mark an article as featured when publishing.",
    featuredEyebrow: "Manually selected",
    featuredTitle: "Featured",
    featureButton: "Feature",
    featureCheckbox: "Feature on homepage",
    homeTab: "Home",
    languageSelector: "Language selector",
    lineLimit: "/ 1,000 lines",
    mainSections: "Main sections",
    mediaCount: "media item(s)",
    mediaLabel: "Upload images or media",
    noArticles: "No published articles yet. Your study notes will appear here.",
    noMedia: "No media",
    publishButton: "Publish Article",
    publishedEyebrow: "Published",
    readButton: "Read",
    removeFeaturedButton: "Remove from featured",
    siteEyebrow: "Study notes",
    siteTitle: "Study Blog",
    writeStudyNote: "Write a study note",
  },
  pt: {
    addBookButton: "Adicionar livro",
    allArticlesTitle: "Todos os artigos",
    archiveTab: "Todos os artigos",
    articleEditorTitle: "Editor de artigo",
    articleTitleLabel: "Título do artigo",
    articleTitlePlaceholder: "Exemplo: Closures em JavaScript",
    attachmentCount: "anexo(s)",
    bookAuthorLabel: "Autor",
    bookAuthorPlaceholder: "Exemplo: Robert C. Martin",
    bookNotesLabel: "Anotações",
    bookNotesPlaceholder: "O que este livro te ensinou?",
    bookRatingLabel: "Nota",
    booksEmpty: "Nenhum livro adicionado ainda. Adicione um livro depois de terminar a leitura.",
    booksEyebrow: "Registro de leitura",
    booksTab: "Livros",
    booksTitle: "Livros",
    bookTitleLabel: "Título do livro",
    bookTitlePlaceholder: "Exemplo: Código Limpo",
    clearButton: "Limpar",
    closeButton: "Fechar",
    contentLabel: "Conteúdo",
    contentPlaceholder: "Escreva suas anotações de estudo aqui...",
    createEyebrow: "Criar",
    deleteButton: "Excluir",
    editorTab: "Novo artigo",
    featuredEmpty: "Nenhum estudo em destaque ainda. Marque um artigo como destaque ao publicar.",
    featuredEyebrow: "Selecionados manualmente",
    featuredTitle: "Destaques",
    featureButton: "Destacar",
    featureCheckbox: "Destacar na página inicial",
    homeTab: "Início",
    languageSelector: "Seletor de idioma",
    lineLimit: "/ 1.000 linhas",
    mainSections: "Seções principais",
    mediaCount: "item(ns) de mídia",
    mediaLabel: "Enviar imagens ou mídia",
    noArticles: "Nenhum artigo publicado ainda. Suas anotações de estudo aparecerão aqui.",
    noMedia: "Sem mídia",
    publishButton: "Publicar artigo",
    publishedEyebrow: "Publicado",
    readButton: "Ler",
    removeFeaturedButton: "Remover dos destaques",
    siteEyebrow: "Anotações de estudo",
    siteTitle: "Blog de Estudos",
    writeStudyNote: "Escrever anotação",
  },
};

const state = {
  articles: loadFromStorage(ARTICLE_STORAGE_KEY),
  books: loadFromStorage(BOOK_STORAGE_KEY),
  language: localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en",
  media: [],
};

const tabs = document.querySelectorAll("[data-tab]");
const tabTargets = document.querySelectorAll("[data-tab-target]");
const languageButtons = document.querySelectorAll("[data-lang]");
const views = {
  home: document.querySelector("#home-view"),
  editor: document.querySelector("#editor-view"),
  archive: document.querySelector("#archive-view"),
  books: document.querySelector("#books-view"),
};

const form = document.querySelector("#article-form");
const titleInput = document.querySelector("#article-title");
const contentInput = document.querySelector("#article-content");
const mediaInput = document.querySelector("#article-media");
const featuredInput = document.querySelector("#article-featured");
const lineCount = document.querySelector("#line-count");
const mediaPreview = document.querySelector("#media-preview");
const featuredList = document.querySelector("#featured-list");
const articleList = document.querySelector("#article-list");
const clearFormButton = document.querySelector("#clear-form");
const cardTemplate = document.querySelector("#article-card-template");
const reader = document.querySelector("#article-reader");
const readerMeta = document.querySelector("#reader-meta");
const readerTitle = document.querySelector("#reader-title");
const readerContent = document.querySelector("#reader-content");
const readerMedia = document.querySelector("#reader-media");
const closeReaderButton = document.querySelector("#close-reader");
const bookForm = document.querySelector("#book-form");
const bookTitleInput = document.querySelector("#book-title");
const bookAuthorInput = document.querySelector("#book-author");
const bookRatingInput = document.querySelector("#book-rating");
const bookNotesInput = document.querySelector("#book-notes");
const clearBookFormButton = document.querySelector("#clear-book-form");
const bookList = document.querySelector("#book-list");
const bookCardTemplate = document.querySelector("#book-card-template");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showView(tab.dataset.tab));
});

tabTargets.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.tabTarget));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

contentInput.addEventListener("input", enforceLineLimit);
mediaInput.addEventListener("change", handleMediaSelection);
clearFormButton.addEventListener("click", resetForm);
form.addEventListener("submit", publishArticle);
closeReaderButton.addEventListener("click", () => reader.close());
bookForm.addEventListener("submit", addBook);
clearBookFormButton.addEventListener("click", () => bookForm.reset());

applyLanguage();
renderArticles();
renderBooks();
updateLineCount();

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  applyLanguage();
  renderArticles();
  renderBooks();
  updateLineCount();
}

function applyLanguage() {
  document.documentElement.lang = state.language === "pt" ? "pt-BR" : "en";
  document.title = t("siteTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });
}

function showView(name) {
  Object.entries(views).forEach(([viewName, element]) => {
    element.classList.toggle("is-visible", viewName === name);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === name);
  });
}

function enforceLineLimit() {
  const lines = contentInput.value.split("\n");

  if (lines.length > MAX_LINES) {
    contentInput.value = lines.slice(0, MAX_LINES).join("\n");
  }

  updateLineCount();
}

function updateLineCount() {
  const count = contentInput.value.length === 0 ? 0 : contentInput.value.split("\n").length;
  lineCount.textContent = count.toLocaleString(state.language === "pt" ? "pt-BR" : "en");
}

async function handleMediaSelection(event) {
  const files = Array.from(event.target.files);
  state.media = await Promise.all(files.map(toStoredMedia));
  renderMediaPreview();
}

function toStoredMedia(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({
        name: file.name,
        type: file.type || "application/octet-stream",
        dataUrl: reader.result,
      });
    });
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function renderMediaPreview() {
  mediaPreview.innerHTML = "";

  state.media.forEach((media) => {
    mediaPreview.appendChild(createMediaElement(media));
  });
}

function createMediaElement(media) {
  const wrapper = document.createElement("div");
  wrapper.className = "media-item";

  if (media.type.startsWith("image/")) {
    const image = document.createElement("img");
    image.src = media.dataUrl;
    image.alt = media.name;
    wrapper.appendChild(image);
  } else if (media.type.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = media.dataUrl;
    video.controls = true;
    wrapper.appendChild(video);
  }

  const name = document.createElement("div");
  name.className = "media-name";
  name.textContent = media.name;
  wrapper.appendChild(name);

  return wrapper;
}

function publishArticle(event) {
  event.preventDefault();

  const article = {
    id: crypto.randomUUID(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    media: state.media,
    featured: featuredInput.checked,
    createdAt: new Date().toISOString(),
  };

  state.articles.unshift(article);
  saveArticles();
  resetForm();
  renderArticles();
  showView("archive");
}

function renderArticles() {
  const featuredArticles = state.articles.filter((article) => article.featured);
  renderCollection(featuredList, featuredArticles, t("featuredEmpty"));
  renderCollection(articleList, state.articles, t("noArticles"));
}

function renderCollection(container, articles, emptyMessage) {
  container.innerHTML = "";

  if (articles.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = emptyMessage;
    container.appendChild(emptyState);
    return;
  }

  articles.forEach((article) => {
    container.appendChild(createArticleCard(article));
  });
}

function createArticleCard(article) {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  const mediaSlot = card.querySelector(".article-media-slot");
  const meta = card.querySelector(".article-meta");
  const title = card.querySelector("h3");
  const excerpt = card.querySelector("p");
  const readButton = card.querySelector("[data-action='read']");
  const toggleFeatured = card.querySelector("[data-action='toggle-featured']");
  const deleteButton = card.querySelector("[data-action='delete']");
  const primaryMedia = article.media[0];

  if (primaryMedia?.type.startsWith("image/")) {
    const image = document.createElement("img");
    image.src = primaryMedia.dataUrl;
    image.alt = primaryMedia.name;
    mediaSlot.appendChild(image);
  } else if (primaryMedia?.type.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = primaryMedia.dataUrl;
    video.controls = true;
    mediaSlot.appendChild(video);
  } else {
    mediaSlot.textContent = article.media.length > 0 ? `${article.media.length} ${t("attachmentCount")}` : t("noMedia");
  }

  meta.textContent = `${formatDate(article.createdAt)} - ${article.media.length} ${t("mediaCount")}`;
  title.textContent = article.title;
  excerpt.textContent = createExcerpt(article.content);
  readButton.textContent = t("readButton");
  readButton.addEventListener("click", () => openReader(article.id));
  toggleFeatured.textContent = article.featured ? t("removeFeaturedButton") : t("featureButton");
  toggleFeatured.addEventListener("click", () => toggleFeaturedArticle(article.id));
  deleteButton.textContent = t("deleteButton");
  deleteButton.addEventListener("click", () => deleteArticle(article.id));

  return card;
}

function createExcerpt(content) {
  const normalized = content.replace(/\s+/g, " ").trim();
  return normalized.length > 220 ? `${normalized.slice(0, 220)}...` : normalized;
}

function openReader(id) {
  const article = state.articles.find((item) => item.id === id);

  if (!article) {
    return;
  }

  readerMeta.textContent = `${formatDate(article.createdAt)} - ${article.media.length} ${t("mediaCount")}`;
  readerTitle.textContent = article.title;
  readerContent.textContent = article.content;
  readerMedia.innerHTML = "";
  article.media.forEach((media) => readerMedia.appendChild(createMediaElement(media)));
  reader.showModal();
}

function toggleFeaturedArticle(id) {
  state.articles = state.articles.map((article) => {
    if (article.id !== id) {
      return article;
    }

    return { ...article, featured: !article.featured };
  });

  saveArticles();
  renderArticles();
}

function deleteArticle(id) {
  state.articles = state.articles.filter((article) => article.id !== id);
  saveArticles();
  renderArticles();
}

function resetForm() {
  form.reset();
  state.media = [];
  mediaPreview.innerHTML = "";
  updateLineCount();
}

function addBook(event) {
  event.preventDefault();

  const book = {
    id: crypto.randomUUID(),
    title: bookTitleInput.value.trim(),
    author: bookAuthorInput.value.trim(),
    rating: Number(bookRatingInput.value),
    notes: bookNotesInput.value.trim(),
    createdAt: new Date().toISOString(),
  };

  state.books.unshift(book);
  saveBooks();
  bookForm.reset();
  renderBooks();
}

function renderBooks() {
  bookList.innerHTML = "";

  if (state.books.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = t("booksEmpty");
    bookList.appendChild(emptyState);
    return;
  }

  state.books.forEach((book) => {
    bookList.appendChild(createBookCard(book));
  });
}

function createBookCard(book) {
  const card = bookCardTemplate.content.firstElementChild.cloneNode(true);
  const meta = card.querySelector(".article-meta");
  const title = card.querySelector("h3");
  const notes = card.querySelector("p:last-child");
  const deleteButton = card.querySelector("[data-action='delete-book']");
  const author = book.author ? ` - ${book.author}` : "";

  meta.textContent = `${formatDate(book.createdAt)}${author} - ${renderStars(book.rating)}`;
  title.textContent = book.title;
  notes.textContent = book.notes || `${book.rating} / 5`;
  deleteButton.textContent = t("deleteButton");
  deleteButton.addEventListener("click", () => deleteBook(book.id));

  return card;
}

function renderStars(rating) {
  return `${"★".repeat(rating)}${"☆".repeat(5 - rating)} ${rating}/5`;
}

function deleteBook(id) {
  state.books = state.books.filter((book) => book.id !== id);
  saveBooks();
  renderBooks();
}

function loadFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  } catch {
    return [];
  }
}

function saveArticles() {
  localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(state.articles));
}

function saveBooks() {
  localStorage.setItem(BOOK_STORAGE_KEY, JSON.stringify(state.books));
}

function formatDate(value) {
  return new Intl.DateTimeFormat(state.language === "pt" ? "pt-BR" : "en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
