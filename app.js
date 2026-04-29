const ARTICLE_STORAGE_KEY = "study-blog-articles";
const BOOK_STORAGE_KEY = "study-blog-books";
const LANGUAGE_STORAGE_KEY = "study-blog-language";
const THEME_STORAGE_KEY = "study-blog-theme";
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
    copiedButton: "Copied",
    copyButton: "Copy",
    codeBlockButton: "Add Code",
    codeComposerHeading: "Write and preview code",
    codeComposerTitle: "Code Block",
    codeLanguageLabel: "Language",
    codeLanguagePlaceholder: "javascript",
    codePreviewLabel: "Preview",
    codeWriteLabel: "Write",
    codeWritePlaceholder: "const message = 'Hello';",
    contentLabel: "Content",
    contentPlaceholder: "Write your study notes here...",
    createEyebrow: "Create",
    darkModeButton: "Dark Mode",
    deleteButton: "Delete",
    backgroundColorLabel: "Background",
    borderColorLabel: "Border",
    bringFrontButton: "Front",
    dividerButton: "Divider",
    diagramBlockButton: "Add Diagram",
    diagramComposerHeading: "Create and customize a diagram",
    diagramComposerTitle: "Diagram Builder",
    diagramTextLabel: "Text",
    editorTab: "New Article",
    featuredEmpty: "No featured studies yet. Mark an article as featured when publishing.",
    featuredEyebrow: "Manually selected",
    featuredTitle: "Featured",
    featureButton: "Feature",
    featureCheckbox: "Feature on homepage",
    fontSizeLabel: "Font size",
    fontSizeOption: "Font size",
    formattingTools: "Formatting tools",
    formulaBlockButton: "Add Formula",
    formulaComposerHeading: "Write and preview LaTeX",
    formulaComposerTitle: "Formula Block",
    formulaInlineLabel: "Inline formula",
    formulaPreviewLabel: "Preview",
    formulaWriteLabel: "Formula",
    formulaWritePlaceholder: "\\color{#ff5f56}{H(X)}=-\\sum_{i=1}^{n}p(x_i)\\ln p(x_i)",
    homeTab: "Home",
    insertCodeButton: "Insert Code Block",
    insertDiagramButton: "Insert Diagram into Post",
    insertFormulaButton: "Insert into Post",
    languageSelector: "Language selector",
    lightModeButton: "Light Mode",
    lineLimit: "/ 1,000 lines",
    mainSections: "Main sections",
    mediaCount: "media item(s)",
    mediaLabel: "Upload images or media",
    noArticles: "No published articles yet. Your study notes will appear here.",
    noMedia: "No media",
    paragraphButton: "Paragraph",
    propertiesTitle: "Properties",
    previewEmpty: "Your formatted preview will appear here.",
    previewTitle: "Preview",
    publishButton: "Publish Article",
    publishedEyebrow: "Published",
    readButton: "Read",
    removeFeaturedButton: "Remove from featured",
    redoButton: "Redo",
    sendBackButton: "Back",
    shapeCircle: "Circle",
    shapeDiamond: "Diamond",
    shapeParallelogram: "Parallelogram",
    shapeRectangle: "Rectangle",
    shapeSquare: "Square",
    shapeTriangle: "Triangle",
    siteEyebrow: "Study notes",
    siteTitle: "Study Blog",
    textColors: "Text colors",
    textColorLabel: "Text color",
    undoButton: "Undo",
    widthLabel: "Width",
    heightLabel: "Height",
    exportSvgButton: "Export SVG",
    writeStudyNote: "Write a study note",
  },
  pt: {
    addBookButton: "Adicionar livro",
    allArticlesTitle: "Todos os artigos",
    archiveTab: "Todos os artigos",
    articleEditorTitle: "Editor de artigo",
    articleTitleLabel: "Titulo do artigo",
    articleTitlePlaceholder: "Exemplo: Closures em JavaScript",
    attachmentCount: "anexo(s)",
    bookAuthorLabel: "Autor",
    bookAuthorPlaceholder: "Exemplo: Robert C. Martin",
    bookNotesLabel: "Anotacoes",
    bookNotesPlaceholder: "O que este livro te ensinou?",
    bookRatingLabel: "Nota",
    booksEmpty: "Nenhum livro adicionado ainda. Adicione um livro depois de terminar a leitura.",
    booksEyebrow: "Registro de leitura",
    booksTab: "Livros",
    booksTitle: "Livros",
    bookTitleLabel: "Titulo do livro",
    bookTitlePlaceholder: "Exemplo: Codigo Limpo",
    clearButton: "Limpar",
    closeButton: "Fechar",
    copiedButton: "Copiado",
    copyButton: "Copiar",
    codeBlockButton: "Adicionar codigo",
    codeComposerHeading: "Escreva e visualize o codigo",
    codeComposerTitle: "Bloco de codigo",
    codeLanguageLabel: "Linguagem",
    codeLanguagePlaceholder: "javascript",
    codePreviewLabel: "Previa",
    codeWriteLabel: "Escrever",
    codeWritePlaceholder: "const mensagem = 'Ola';",
    contentLabel: "Conteudo",
    contentPlaceholder: "Escreva suas anotacoes de estudo aqui...",
    createEyebrow: "Criar",
    darkModeButton: "Modo escuro",
    deleteButton: "Excluir",
    backgroundColorLabel: "Fundo",
    borderColorLabel: "Borda",
    bringFrontButton: "Frente",
    dividerButton: "Divisor",
    diagramBlockButton: "Adicionar diagrama",
    diagramComposerHeading: "Crie e personalize um diagrama",
    diagramComposerTitle: "Construtor de diagrama",
    diagramTextLabel: "Texto",
    editorTab: "Novo artigo",
    featuredEmpty: "Nenhum estudo em destaque ainda. Marque um artigo como destaque ao publicar.",
    featuredEyebrow: "Selecionados manualmente",
    featuredTitle: "Destaques",
    featureButton: "Destacar",
    featureCheckbox: "Destacar na pagina inicial",
    fontSizeLabel: "Tamanho da fonte",
    fontSizeOption: "Tamanho da fonte",
    formattingTools: "Ferramentas de formatacao",
    formulaBlockButton: "Adicionar formula",
    formulaComposerHeading: "Escreva e visualize LaTeX",
    formulaComposerTitle: "Bloco de formula",
    formulaInlineLabel: "Formula inline",
    formulaPreviewLabel: "Previa",
    formulaWriteLabel: "Formula",
    formulaWritePlaceholder: "\\color{#ff5f56}{H(X)}=-\\sum_{i=1}^{n}p(x_i)\\ln p(x_i)",
    homeTab: "Inicio",
    insertCodeButton: "Inserir bloco de codigo",
    insertDiagramButton: "Inserir diagrama no post",
    insertFormulaButton: "Inserir no post",
    languageSelector: "Seletor de idioma",
    lightModeButton: "Modo claro",
    lineLimit: "/ 1.000 linhas",
    mainSections: "Secoes principais",
    mediaCount: "item(ns) de midia",
    mediaLabel: "Enviar imagens ou midia",
    noArticles: "Nenhum artigo publicado ainda. Suas anotacoes de estudo aparecerao aqui.",
    noMedia: "Sem midia",
    paragraphButton: "Paragrafo",
    propertiesTitle: "Propriedades",
    previewEmpty: "Sua pre-visualizacao formatada aparecera aqui.",
    previewTitle: "Previa",
    publishButton: "Publicar artigo",
    publishedEyebrow: "Publicado",
    readButton: "Ler",
    removeFeaturedButton: "Remover dos destaques",
    redoButton: "Refazer",
    sendBackButton: "Tras",
    shapeCircle: "Circulo",
    shapeDiamond: "Losango",
    shapeParallelogram: "Paralelogramo",
    shapeRectangle: "Retangulo",
    shapeSquare: "Quadrado",
    shapeTriangle: "Triangulo",
    siteEyebrow: "Anotacoes de estudo",
    siteTitle: "Blog de Estudos",
    textColors: "Cores do texto",
    textColorLabel: "Cor do texto",
    undoButton: "Desfazer",
    widthLabel: "Largura",
    heightLabel: "Altura",
    exportSvgButton: "Exportar SVG",
    writeStudyNote: "Escrever anotacao",
  },
};

const state = {
  articles: loadFromStorage(ARTICLE_STORAGE_KEY),
  books: loadFromStorage(BOOK_STORAGE_KEY),
  language: localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en",
  theme: localStorage.getItem(THEME_STORAGE_KEY) || "light",
  media: [],
};

const diagramState = {
  shapes: [],
  connections: [],
  selectedId: null,
  selectedType: "shape",
  action: null,
  connectFrom: null,
  zoom: 1,
  panX: 0,
  panY: 0,
  history: [],
  future: [],
};

const tabs = document.querySelectorAll("[data-tab]");
const tabTargets = document.querySelectorAll("[data-tab-target]");
const languageButtons = document.querySelectorAll("[data-lang]");
const themeToggle = document.querySelector("#theme-toggle");
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
const customColorInput = document.querySelector("#custom-color");
const fontSizeSelect = document.querySelector("#font-size-select");
const formatButtons = document.querySelectorAll("[data-format]");
const colorButtons = document.querySelectorAll("[data-color]");
const codeBlockButton = document.querySelector("#code-block-button");
const codeComposer = document.querySelector("#code-composer");
const closeCodeComposerButton = document.querySelector("#close-code-composer");
const codeLanguageInput = document.querySelector("#code-language");
const codeEditor = document.querySelector("#code-editor");
const codeLivePreview = document.querySelector("#code-live-preview");
const insertCodeBlockButton = document.querySelector("#insert-code-block");
const formulaBlockButton = document.querySelector("#formula-block-button");
const formulaComposer = document.querySelector("#formula-composer");
const closeFormulaComposerButton = document.querySelector("#close-formula-composer");
const formulaEditor = document.querySelector("#formula-editor");
const formulaLivePreview = document.querySelector("#formula-live-preview");
const formulaInlineInput = document.querySelector("#formula-inline-mode");
const insertFormulaBlockButton = document.querySelector("#insert-formula-block");
const diagramBlockButton = document.querySelector("#diagram-block-button");
const diagramComposer = document.querySelector("#diagram-composer");
const closeDiagramComposerButton = document.querySelector("#close-diagram-composer");
const diagramStage = document.querySelector("#diagram-stage");
const diagramShapeButtons = document.querySelectorAll("[data-shape]");
const diagramTextInput = document.querySelector("#diagram-text");
const diagramTextColorInput = document.querySelector("#diagram-text-color");
const diagramBgColorInput = document.querySelector("#diagram-bg-color");
const diagramBorderColorInput = document.querySelector("#diagram-border-color");
const diagramWidthInput = document.querySelector("#diagram-width");
const diagramHeightInput = document.querySelector("#diagram-height");
const diagramFrontButton = document.querySelector("#diagram-front");
const diagramBackButton = document.querySelector("#diagram-back");
const diagramDeleteButton = document.querySelector("#diagram-delete");
const diagramZoomInButton = document.querySelector("#diagram-zoom-in");
const diagramZoomOutButton = document.querySelector("#diagram-zoom-out");
const diagramUndoButton = document.querySelector("#diagram-undo");
const diagramRedoButton = document.querySelector("#diagram-redo");
const diagramExportSvgButton = document.querySelector("#diagram-export-svg");
const insertDiagramBlockButton = document.querySelector("#insert-diagram-block");
const featuredInput = document.querySelector("#article-featured");
const lineCount = document.querySelector("#line-count");
const articlePreview = document.querySelector("#article-preview");
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
contentInput.addEventListener("input", renderArticlePreview);
colorButtons.forEach((button) => {
  button.addEventListener("click", () => applyInlineFormat("color", button.dataset.color));
});
customColorInput.addEventListener("change", () => applyInlineFormat("color", customColorInput.value));
fontSizeSelect.addEventListener("change", () => {
  if (fontSizeSelect.value) {
    applyInlineFormat("size", fontSizeSelect.value);
    fontSizeSelect.value = "";
  }
});
formatButtons.forEach((button) => {
  button.addEventListener("click", () => applyFormat(button.dataset.format));
});
codeBlockButton.addEventListener("click", openCodeComposer);
closeCodeComposerButton.addEventListener("click", closeCodeComposer);
codeLanguageInput.addEventListener("input", renderCodeComposerPreview);
codeEditor.addEventListener("input", renderCodeComposerPreview);
insertCodeBlockButton.addEventListener("click", insertCodeBlock);
formulaBlockButton.addEventListener("click", openFormulaComposer);
closeFormulaComposerButton.addEventListener("click", closeFormulaComposer);
formulaEditor.addEventListener("input", renderFormulaComposerPreview);
formulaInlineInput.addEventListener("change", renderFormulaComposerPreview);
insertFormulaBlockButton.addEventListener("click", insertFormulaBlock);
diagramBlockButton.addEventListener("click", openDiagramComposer);
closeDiagramComposerButton.addEventListener("click", closeDiagramComposer);
diagramShapeButtons.forEach((button) => {
  button.addEventListener("click", () => addDiagramShape(button.dataset.shape));
});
diagramStage.addEventListener("pointerdown", handleDiagramPointerDown);
diagramStage.addEventListener("pointermove", handleDiagramPointerMove);
diagramStage.addEventListener("pointerup", handleDiagramPointerUp);
diagramStage.addEventListener("pointerleave", handleDiagramPointerUp);
diagramStage.addEventListener("dblclick", handleDiagramDoubleClick);
diagramTextInput.addEventListener("input", () => updateSelectedDiagramShape({ text: diagramTextInput.value }));
diagramTextColorInput.addEventListener("input", () => updateSelectedDiagramShape({ textColor: diagramTextColorInput.value }));
diagramBgColorInput.addEventListener("input", () => updateSelectedDiagramShape({ fill: diagramBgColorInput.value }));
diagramBorderColorInput.addEventListener("input", () => updateSelectedDiagramShape({ stroke: diagramBorderColorInput.value }));
diagramWidthInput.addEventListener("change", () => updateSelectedDiagramShape({ width: Number(diagramWidthInput.value) }));
diagramHeightInput.addEventListener("change", () => updateSelectedDiagramShape({ height: Number(diagramHeightInput.value) }));
diagramFrontButton.addEventListener("click", bringDiagramShapeToFront);
diagramBackButton.addEventListener("click", sendDiagramShapeToBack);
diagramDeleteButton.addEventListener("click", deleteSelectedDiagramItem);
diagramZoomInButton.addEventListener("click", () => setDiagramZoom(diagramState.zoom + 0.15));
diagramZoomOutButton.addEventListener("click", () => setDiagramZoom(diagramState.zoom - 0.15));
diagramUndoButton.addEventListener("click", undoDiagram);
diagramRedoButton.addEventListener("click", redoDiagram);
diagramExportSvgButton.addEventListener("click", copyDiagramSvg);
insertDiagramBlockButton.addEventListener("click", insertDiagramBlock);
themeToggle.addEventListener("click", toggleTheme);
mediaInput.addEventListener("change", handleMediaSelection);
clearFormButton.addEventListener("click", resetForm);
form.addEventListener("submit", publishArticle);
document.addEventListener("click", handleCodeCopy);
document.addEventListener("click", handleFormulaCopy);
closeReaderButton.addEventListener("click", () => reader.close());
bookForm.addEventListener("submit", addBook);
clearBookFormButton.addEventListener("click", () => bookForm.reset());

applyTheme();
applyLanguage();
renderArticles();
renderBooks();
updateLineCount();
renderArticlePreview();
renderCodeComposerPreview();
renderFormulaComposerPreview();
renderDiagram();

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
    if ("placeholder" in element) {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    } else {
      element.dataset.placeholder = t(element.dataset.i18nPlaceholder);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });

  themeToggle.textContent = state.theme === "dark" ? t("lightModeButton") : t("darkModeButton");
  renderArticlePreview();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_STORAGE_KEY, state.theme);
  applyTheme();
  applyLanguage();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
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
  updateLineCount();
}

function updateLineCount() {
  const text = getEditorText();
  const count = text.length === 0 ? 0 : text.split("\n").length;
  lineCount.textContent = count.toLocaleString(state.language === "pt" ? "pt-BR" : "en");
}

function applyInlineFormat(type, value) {
  contentInput.focus();
  ensureEditorSelection();

  const span = document.createElement("span");
  if (type === "color") {
    span.style.color = value;
  } else {
    span.style.fontSize = `${Number(value)}px`;
  }

  wrapCurrentSelection(span);
  enforceLineLimit();
  renderArticlePreview();
}

function applyFormat(format) {
  contentInput.focus();
  ensureEditorSelection();

  if (format === "h1") {
    document.execCommand("formatBlock", false, "h1");
    renderArticlePreview();
    return;
  }

  if (format === "h2") {
    document.execCommand("formatBlock", false, "h2");
    renderArticlePreview();
    return;
  }

  if (format === "divider") {
    insertHtmlAtSelection("<hr><p><br></p>");
    return;
  }

  if (format === "paragraph") {
    document.execCommand("formatBlock", false, "p");
    insertHtmlAtSelection("<p><br></p>");
  }
}

function openCodeComposer() {
  codeComposer.classList.remove("is-hidden");
  codeEditor.focus();
  renderCodeComposerPreview();
}

function closeCodeComposer() {
  codeComposer.classList.add("is-hidden");
}

function renderCodeComposerPreview() {
  const language = codeLanguageInput.value.trim() || "text";
  const code = codeEditor.value || "// Write your code here";
  codeLivePreview.innerHTML = renderCodeBlock(language, code);
}

function insertCodeBlock() {
  const language = codeLanguageInput.value.trim() || "text";
  const code = codeEditor.value.trimEnd() || "// Write your code here";

  insertHtmlAtSelection(`${renderCodeBlock(language, code)}<p><br></p>`);
  codeEditor.value = "";
  renderCodeComposerPreview();
  closeCodeComposer();
}

function openFormulaComposer() {
  formulaComposer.classList.remove("is-hidden");
  formulaEditor.focus();
  renderFormulaComposerPreview();
}

function closeFormulaComposer() {
  formulaComposer.classList.add("is-hidden");
}

function renderFormulaComposerPreview() {
  const latex = formulaEditor.value.trim() || t("formulaWritePlaceholder");
  formulaLivePreview.innerHTML = renderFormulaBlock(latex, formulaInlineInput.checked);
}

function insertFormulaBlock() {
  const latex = formulaEditor.value.trim() || t("formulaWritePlaceholder");
  insertHtmlAtSelection(`${renderFormulaBlock(latex, formulaInlineInput.checked)}<p><br></p>`);
  formulaEditor.value = "";
  formulaInlineInput.checked = false;
  renderFormulaComposerPreview();
  closeFormulaComposer();
}

function openDiagramComposer() {
  diagramComposer.classList.remove("is-hidden");
  if (diagramState.shapes.length === 0) {
    addDiagramShape("rectangle", false);
  }
  renderDiagram();
}

function closeDiagramComposer() {
  diagramComposer.classList.add("is-hidden");
}

function addDiagramShape(type, record = true) {
  if (record) {
    pushDiagramHistory();
  }

  const size = type === "square" ? { width: 120, height: 120 } : { width: 160, height: 100 };
  const shape = {
    id: crypto.randomUUID(),
    type,
    x: 120 + diagramState.shapes.length * 28,
    y: 120 + diagramState.shapes.length * 24,
    width: size.width,
    height: size.height,
    text: type.charAt(0).toUpperCase() + type.slice(1),
    fill: "#2563eb",
    stroke: "#93c5fd",
    textColor: "#ffffff",
  };

  diagramState.shapes.push(shape);
  diagramState.selectedId = shape.id;
  diagramState.selectedType = "shape";
  renderDiagram();
}

function renderDiagram() {
  diagramStage.setAttribute("viewBox", `${diagramState.panX} ${diagramState.panY} ${1000 / diagramState.zoom} ${620 / diagramState.zoom}`);
  diagramStage.innerHTML = `
    <defs>
      <marker id="diagram-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor"></path>
      </marker>
    </defs>
    <g class="diagram-connections">${diagramState.connections.map(renderDiagramConnection).join("")}</g>
    <g class="diagram-shapes">${diagramState.shapes.map(renderDiagramShape).join("")}</g>
  `;
  syncDiagramProperties();
}

function renderDiagramShape(shape) {
  const selected = diagramState.selectedId === shape.id && diagramState.selectedType === "shape";
  const body = getShapeSvg(shape);
  const ports = getDiagramPorts(shape)
    .map((port) => `
      <g class="diagram-port" data-port-shape="${shape.id}" data-port="${port.name}" transform="translate(${port.x} ${port.y})">
        <circle r="10"></circle>
        <text y="1">+</text>
      </g>
    `)
    .join("");
  const resize = selected
    ? `<rect class="diagram-resize" data-resize-id="${shape.id}" x="${shape.x + shape.width - 7}" y="${shape.y + shape.height - 7}" width="14" height="14" rx="3"></rect>`
    : "";

  return `
    <g class="diagram-shape${selected ? " is-selected" : ""}" data-shape-id="${shape.id}">
      ${body}
      <text class="diagram-label" x="${shape.x + shape.width / 2}" y="${shape.y + shape.height / 2}" fill="${shape.textColor}">${escapeHtml(shape.text)}</text>
      ${ports}
      ${resize}
    </g>
  `;
}

function getShapeSvg(shape) {
  const base = `class="diagram-main" fill="${shape.fill}" stroke="${shape.stroke}" stroke-width="2"`;
  if (shape.type === "circle") {
    return `<ellipse ${base} cx="${shape.x + shape.width / 2}" cy="${shape.y + shape.height / 2}" rx="${shape.width / 2}" ry="${shape.height / 2}"></ellipse>`;
  }
  if (shape.type === "triangle") {
    return `<polygon ${base} points="${shape.x + shape.width / 2},${shape.y} ${shape.x + shape.width},${shape.y + shape.height} ${shape.x},${shape.y + shape.height}"></polygon>`;
  }
  if (shape.type === "parallelogram") {
    const skew = Math.min(36, shape.width * 0.22);
    return `<polygon ${base} points="${shape.x + skew},${shape.y} ${shape.x + shape.width},${shape.y} ${shape.x + shape.width - skew},${shape.y + shape.height} ${shape.x},${shape.y + shape.height}"></polygon>`;
  }
  if (shape.type === "diamond") {
    return `<polygon ${base} points="${shape.x + shape.width / 2},${shape.y} ${shape.x + shape.width},${shape.y + shape.height / 2} ${shape.x + shape.width / 2},${shape.y + shape.height} ${shape.x},${shape.y + shape.height / 2}"></polygon>`;
  }
  return `<rect ${base} x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" rx="10"></rect>`;
}

function renderDiagramConnection(connection) {
  const from = getDiagramPortPoint(connection.fromShapeId, connection.fromPort);
  const to = getDiagramPortPoint(connection.toShapeId, connection.toPort);
  if (!from || !to) {
    return "";
  }
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - 8;
  const addY = (from.y + to.y) / 2;
  return `
    <g data-connection-id="${connection.id}">
      <line class="diagram-connection" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"></line>
      <g class="diagram-connection-add" data-connection-add="${connection.id}" transform="translate(${midX} ${addY})">
        <circle r="12"></circle>
        <text y="1">+</text>
      </g>
      ${connection.label ? `<text class="diagram-connection-label" x="${midX}" y="${midY}">${escapeHtml(connection.label)}</text>` : ""}
    </g>
  `;
}

function getDiagramPorts(shape) {
  return [
    { name: "top", x: shape.x + shape.width / 2, y: shape.y },
    { name: "right", x: shape.x + shape.width, y: shape.y + shape.height / 2 },
    { name: "bottom", x: shape.x + shape.width / 2, y: shape.y + shape.height },
    { name: "left", x: shape.x, y: shape.y + shape.height / 2 },
  ];
}

function getDiagramPortPoint(shapeId, portName) {
  const shape = diagramState.shapes.find((item) => item.id === shapeId);
  return shape ? getDiagramPorts(shape).find((port) => port.name === portName) : null;
}

function addShapeOnConnection(connectionId) {
  const connection = diagramState.connections.find((item) => item.id === connectionId);
  if (!connection) {
    return;
  }

  const from = getDiagramPortPoint(connection.fromShapeId, connection.fromPort);
  const to = getDiagramPortPoint(connection.toShapeId, connection.toPort);
  if (!from || !to) {
    return;
  }

  const shapeType = prompt("Shape: rectangle, square, circle, triangle, parallelogram, diamond", "rectangle");
  const allowedTypes = ["rectangle", "square", "circle", "triangle", "parallelogram", "diamond"];
  const type = allowedTypes.includes((shapeType || "").toLowerCase()) ? shapeType.toLowerCase() : "rectangle";
  const horizontal = Math.abs(to.x - from.x) >= Math.abs(to.y - from.y);
  const width = type === "square" || type === "circle" || type === "diamond" ? 64 : 92;
  const height = type === "square" || type === "circle" || type === "diamond" ? 64 : 56;
  const shape = {
    id: crypto.randomUUID(),
    type,
    x: snapDiagram((from.x + to.x) / 2 - width / 2),
    y: snapDiagram((from.y + to.y) / 2 - height / 2),
    width,
    height,
    text: type.charAt(0).toUpperCase() + type.slice(1),
    fill: "#0f766e",
    stroke: "#5eead4",
    textColor: "#ffffff",
  };

  pushDiagramHistory();
  diagramState.connections = diagramState.connections.filter((item) => item.id !== connectionId);
  diagramState.shapes.push(shape);
  diagramState.connections.push(
    {
      id: crypto.randomUUID(),
      fromShapeId: connection.fromShapeId,
      fromPort: connection.fromPort,
      toShapeId: shape.id,
      toPort: horizontal ? "left" : "top",
      label: connection.label || "",
    },
    {
      id: crypto.randomUUID(),
      fromShapeId: shape.id,
      fromPort: horizontal ? "right" : "bottom",
      toShapeId: connection.toShapeId,
      toPort: connection.toPort,
      label: "",
    },
  );
  diagramState.selectedId = shape.id;
  diagramState.selectedType = "shape";
  renderDiagram();
}

function handleDiagramPointerDown(event) {
  const addOnConnection = event.target.closest("[data-connection-add]");
  if (addOnConnection) {
    event.stopPropagation();
    addShapeOnConnection(addOnConnection.dataset.connectionAdd);
    return;
  }

  const port = event.target.closest("[data-port-shape]");
  const resize = event.target.closest("[data-resize-id]");
  const shapeGroup = event.target.closest("[data-shape-id]");
  const point = getDiagramPointer(event);

  if (port) {
    diagramState.connectFrom = {
      shapeId: port.dataset.portShape,
      port: port.dataset.port,
    };
    return;
  }

  if (resize) {
    const shape = getSelectedDiagramShapeById(resize.dataset.resizeId);
    if (!shape) return;
    pushDiagramHistory();
    diagramState.action = {
      type: "resize",
      id: shape.id,
      startX: point.x,
      startY: point.y,
      width: shape.width,
      height: shape.height,
    };
    diagramStage.setPointerCapture(event.pointerId);
    return;
  }

  if (shapeGroup) {
    const shape = getSelectedDiagramShapeById(shapeGroup.dataset.shapeId);
    if (!shape) return;
    pushDiagramHistory();
    diagramState.selectedId = shape.id;
    diagramState.selectedType = "shape";
    diagramState.action = {
      type: "drag",
      id: shape.id,
      offsetX: point.x - shape.x,
      offsetY: point.y - shape.y,
    };
    diagramStage.classList.add("is-dragging");
    diagramStage.setPointerCapture(event.pointerId);
    renderDiagram();
    return;
  }

  diagramState.selectedId = null;
  diagramState.action = {
    type: "pan",
    startClientX: event.clientX,
    startClientY: event.clientY,
    panX: diagramState.panX,
    panY: diagramState.panY,
    moved: false,
  };
  diagramStage.classList.add("is-dragging");
  diagramStage.setPointerCapture(event.pointerId);
  renderDiagram();
}

function handleDiagramPointerMove(event) {
  if (!diagramState.action) {
    return;
  }

  const point = getDiagramPointer(event);

  if (diagramState.action.type === "pan") {
    const scale = 1 / diagramState.zoom;
    const dx = (event.clientX - diagramState.action.startClientX) * scale;
    const dy = (event.clientY - diagramState.action.startClientY) * scale;
    diagramState.panX = diagramState.action.panX - dx;
    diagramState.panY = diagramState.action.panY - dy;
    diagramState.action.moved = Math.abs(dx) > 2 || Math.abs(dy) > 2;
    renderDiagram();
    return;
  }

  const shape = getSelectedDiagramShapeById(diagramState.action.id);
  if (!shape) {
    return;
  }

  if (diagramState.action.type === "drag") {
    shape.x = snapDiagram(point.x - diagramState.action.offsetX);
    shape.y = snapDiagram(point.y - diagramState.action.offsetY);
  }

  if (diagramState.action.type === "resize") {
    shape.width = Math.max(40, snapDiagram(diagramState.action.width + point.x - diagramState.action.startX));
    shape.height = Math.max(40, snapDiagram(diagramState.action.height + point.y - diagramState.action.startY));
  }

  renderDiagram();
}

function handleDiagramPointerUp(event) {
  const port = event.target.closest("[data-port-shape]");
  if (diagramState.connectFrom && port && port.dataset.portShape !== diagramState.connectFrom.shapeId) {
    pushDiagramHistory();
    diagramState.connections.push({
      id: crypto.randomUUID(),
      fromShapeId: diagramState.connectFrom.shapeId,
      fromPort: diagramState.connectFrom.port,
      toShapeId: port.dataset.portShape,
      toPort: port.dataset.port,
      label: "",
    });
  }

  diagramState.connectFrom = null;
  diagramState.action = null;
  diagramStage.classList.remove("is-dragging");
  renderDiagram();
}

function handleDiagramDoubleClick(event) {
  const connectionGroup = event.target.closest("[data-connection-id]");
  if (!connectionGroup) {
    return;
  }
  const connection = diagramState.connections.find((item) => item.id === connectionGroup.dataset.connectionId);
  if (!connection) {
    return;
  }
  const label = prompt("Connection label", connection.label || "");
  if (label !== null) {
    pushDiagramHistory();
    connection.label = label;
    renderDiagram();
  }
}

function getDiagramPointer(event) {
  const point = diagramStage.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const transformed = point.matrixTransform(diagramStage.getScreenCTM().inverse());
  return { x: transformed.x, y: transformed.y };
}

function snapDiagram(value) {
  return Math.round(value / 12) * 12;
}

function getSelectedDiagramShape() {
  return getSelectedDiagramShapeById(diagramState.selectedId);
}

function getSelectedDiagramShapeById(id) {
  return diagramState.shapes.find((shape) => shape.id === id);
}

function syncDiagramProperties() {
  const shape = getSelectedDiagramShape();
  const disabled = !shape;
  [diagramTextInput, diagramTextColorInput, diagramBgColorInput, diagramBorderColorInput, diagramWidthInput, diagramHeightInput].forEach((input) => {
    input.disabled = disabled;
  });
  [diagramFrontButton, diagramBackButton, diagramDeleteButton].forEach((button) => {
    button.disabled = disabled;
  });
  if (!shape) {
    return;
  }
  diagramTextInput.value = shape.text;
  diagramTextColorInput.value = shape.textColor;
  diagramBgColorInput.value = shape.fill;
  diagramBorderColorInput.value = shape.stroke;
  diagramWidthInput.value = Math.round(shape.width);
  diagramHeightInput.value = Math.round(shape.height);
}

function updateSelectedDiagramShape(patch) {
  const shape = getSelectedDiagramShape();
  if (!shape) {
    return;
  }
  Object.assign(shape, patch);
  renderDiagram();
}

function bringDiagramShapeToFront() {
  const shape = getSelectedDiagramShape();
  if (!shape) return;
  pushDiagramHistory();
  diagramState.shapes = diagramState.shapes.filter((item) => item.id !== shape.id);
  diagramState.shapes.push(shape);
  renderDiagram();
}

function sendDiagramShapeToBack() {
  const shape = getSelectedDiagramShape();
  if (!shape) return;
  pushDiagramHistory();
  diagramState.shapes = diagramState.shapes.filter((item) => item.id !== shape.id);
  diagramState.shapes.unshift(shape);
  renderDiagram();
}

function deleteSelectedDiagramItem() {
  const shape = getSelectedDiagramShape();
  if (!shape) return;
  pushDiagramHistory();
  diagramState.shapes = diagramState.shapes.filter((item) => item.id !== shape.id);
  diagramState.connections = diagramState.connections.filter((item) => item.fromShapeId !== shape.id && item.toShapeId !== shape.id);
  diagramState.selectedId = null;
  renderDiagram();
}

function setDiagramZoom(value) {
  diagramState.zoom = Math.min(1.8, Math.max(0.55, value));
  renderDiagram();
}

function pushDiagramHistory() {
  diagramState.history.push(JSON.stringify({ shapes: diagramState.shapes, connections: diagramState.connections }));
  diagramState.future = [];
}

function undoDiagram() {
  const previous = diagramState.history.pop();
  if (!previous) return;
  diagramState.future.push(JSON.stringify({ shapes: diagramState.shapes, connections: diagramState.connections }));
  const parsed = JSON.parse(previous);
  diagramState.shapes = parsed.shapes;
  diagramState.connections = parsed.connections;
  diagramState.selectedId = null;
  renderDiagram();
}

function redoDiagram() {
  const next = diagramState.future.pop();
  if (!next) return;
  diagramState.history.push(JSON.stringify({ shapes: diagramState.shapes, connections: diagramState.connections }));
  const parsed = JSON.parse(next);
  diagramState.shapes = parsed.shapes;
  diagramState.connections = parsed.connections;
  diagramState.selectedId = null;
  renderDiagram();
}

function getDiagramSvg() {
  const clone = diagramStage.cloneNode(true);
  clone.querySelectorAll(".diagram-port,.diagram-resize,.diagram-connection-add").forEach((node) => node.remove());
  clone.querySelectorAll(".is-selected").forEach((node) => node.classList.remove("is-selected"));
  clone.querySelectorAll("[data-shape-id],[data-connection-id],[data-port-shape],[data-port],[data-resize-id]").forEach((node) => {
    [...node.attributes]
      .filter((attribute) => attribute.name.startsWith("data-"))
      .forEach((attribute) => node.removeAttribute(attribute.name));
  });
  clone.classList.remove("diagram-stage");
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("viewBox", "0 0 1000 620");
  clone.setAttribute("role", "img");
  clone.removeAttribute("style");
  return clone.outerHTML;
}

async function copyDiagramSvg() {
  const svg = getDiagramSvg();
  try {
    await navigator.clipboard.writeText(svg);
  } catch {
    // Clipboard can be blocked for local files; insertion still works.
  }
}

function insertDiagramBlock() {
  insertHtmlAtSelection(`<figure class="diagram-embed" contenteditable="false">${getDiagramSvg()}</figure><p><br></p>`);
  closeDiagramComposer();
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

  if (!getEditorText().trim()) {
    contentInput.focus();
    return;
  }

  const article = {
    id: crypto.randomUUID(),
    title: titleInput.value.trim(),
    content: getEditorHtml(),
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
  const normalized = content
    .replace(/<[^>]+>/g, " ")
    .replace(/```[\s\S]*?```/g, " code block ")
    .replace(/\[(color|size)=[^\]]+\]|\[\/(color|size)\]/g, "")
    .replace(/[#`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return normalized.length > 220 ? `${normalized.slice(0, 220)}...` : normalized;
}

function openReader(id) {
  const article = state.articles.find((item) => item.id === id);

  if (!article) {
    return;
  }

  readerMeta.textContent = `${formatDate(article.createdAt)} - ${article.media.length} ${t("mediaCount")}`;
  readerTitle.textContent = article.title;
  readerContent.innerHTML = renderArticleContent(article.content);
  readerMedia.innerHTML = "";
  article.media.forEach((media) => readerMedia.appendChild(createMediaElement(media)));
  reader.showModal();
}

function renderArticlePreview() {
  if (!getEditorText().trim()) {
    articlePreview.innerHTML = `<p class="empty-preview">${escapeHtml(t("previewEmpty"))}</p>`;
    return;
  }

  articlePreview.innerHTML = getEditorHtml();
}

function renderArticleContent(content) {
  if (isRichHtmlContent(content)) {
    return content;
  }

  const parts = [];
  const codeFence = /```([\w-]*)\n([\s\S]*?)```/g;
  let cursor = 0;
  let match = codeFence.exec(content);

  while (match) {
    parts.push(renderTextBlocks(content.slice(cursor, match.index)));
    parts.push(renderCodeBlock(match[1], match[2]));
    cursor = match.index + match[0].length;
    match = codeFence.exec(content);
  }

  parts.push(renderTextBlocks(content.slice(cursor)));
  return parts.join("");
}

function isRichHtmlContent(content) {
  return /<\/?(p|h1|h2|span|hr|article|div|pre|code)\b/i.test(content);
}

function renderTextBlocks(text) {
  return text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (/^-{3,}$/.test(block)) {
        return "<hr>";
      }

      if (block.startsWith("# ")) {
        return `<h1>${renderInline(block.slice(2))}</h1>`;
      }

      if (block.startsWith("## ")) {
        return `<h2>${renderInline(block.slice(3))}</h2>`;
      }

      return `<p>${renderInline(block).replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

function renderInline(text) {
  return parseInlineMarkup(text).html;
}

function parseInlineMarkup(text, start = 0, closingType = "") {
  const tagPattern = /\[(\/?)(color|size)(?:=([^\]]+))?\]/g;
  let html = "";
  let cursor = start;
  tagPattern.lastIndex = start;

  let match = tagPattern.exec(text);
  while (match) {
    html += escapeHtml(text.slice(cursor, match.index));

    const isClosing = match[1] === "/";
    const type = match[2];
    const value = match[3] || "";

    if (isClosing) {
      if (type === closingType) {
        return { html, nextIndex: tagPattern.lastIndex };
      }

      cursor = tagPattern.lastIndex;
      match = tagPattern.exec(text);
      continue;
    }

    const parsed = parseInlineMarkup(text, tagPattern.lastIndex, type);
    html += wrapInlineMarkup(type, value, parsed.html);
    cursor = parsed.nextIndex;
    tagPattern.lastIndex = parsed.nextIndex;
    match = tagPattern.exec(text);
  }

  html += escapeHtml(text.slice(cursor));
  return { html, nextIndex: text.length };
}

function wrapInlineMarkup(type, value, html) {
  if (type === "color" && isSafeColor(value)) {
    return `<span style="color: ${escapeHtml(value)}">${html}</span>`;
  }

  if (type === "size" && isSafeFontSize(value)) {
    return `<span style="font-size: ${Number(value)}px">${html}</span>`;
  }

  return html;
}

function isSafeColor(value) {
  return /^#[0-9a-fA-F]{3,8}$/.test(value) || /^[a-zA-Z]+$/.test(value);
}

function isSafeFontSize(value) {
  const size = Number(value);
  return Number.isInteger(size) && size >= 10 && size <= 48;
}

function renderCodeBlock(language, code) {
  const normalizedLanguage = normalizeLanguage(language);
  const fileName = getSnippetFileName(normalizedLanguage);
  const encodedCode = encodeURIComponent(code);

  return `
    <article class="code-card" contenteditable="false">
      <div class="code-card-topbar">
        <div class="window-dots" aria-hidden="true">
          <span class="window-dot is-red"></span>
          <span class="window-dot is-yellow"></span>
          <span class="window-dot is-green"></span>
        </div>
        <span class="code-file-name">${escapeHtml(fileName)}</span>
        <button class="code-copy-button" type="button" data-copy-code="${encodedCode}">
          <span class="copy-icon" aria-hidden="true"></span>
          ${escapeHtml(t("copyButton"))}
        </button>
      </div>
      <pre class="notion-code-block"><code>${highlightCode(code, normalizedLanguage)}</code></pre>
    </article>
  `;
}

function renderFormulaBlock(latex, inline = false) {
  const encodedLatex = encodeURIComponent(latex);
  const rendered = renderLatex(latex, inline);

  return `
    <article class="code-card formula-card" contenteditable="false">
      <div class="code-card-topbar">
        <span class="code-file-name">formula.tex</span>
        <span class="formula-kind">LATEX</span>
        <button class="code-copy-button" type="button" data-copy-formula="${encodedLatex}">
          <span class="copy-icon" aria-hidden="true"></span>
          ${escapeHtml(t("copyButton"))}
        </button>
      </div>
      <div class="formula-body${inline ? " is-inline" : ""}">
        <div class="formula-rendered">${rendered}</div>
      </div>
    </article>
  `;
}

function renderLatex(latex, inline) {
  if (window.katex) {
    try {
      return window.katex.renderToString(latex, {
        displayMode: !inline,
        throwOnError: false,
        trust: true,
        strict: "ignore",
      });
    } catch {
      return `<span class="formula-fallback">${escapeHtml(latex)}</span>`;
    }
  }

  return `<span class="formula-fallback">${escapeHtml(latex)}</span>`;
}

function highlightCode(code, language) {
  const normalizedLanguage = normalizeLanguage(language);

  if (["html", "xml"].includes(normalizedLanguage)) {
    return highlightHtml(code);
  }

  if (["css", "scss"].includes(normalizedLanguage)) {
    return highlightCss(code);
  }

  if (["py", "python"].includes(normalizedLanguage)) {
    return highlightPython(code);
  }

  if (!["js", "javascript", "ts", "typescript", "jsx", "tsx"].includes(normalizedLanguage)) {
    return escapeHtml(code);
  }

  return highlightJavaScript(code);
}

function normalizeLanguage(language) {
  return (language || "text").trim().toLowerCase();
}

function getSnippetFileName(language) {
  const fileNames = {
    bash: "snippet.sh",
    css: "snippet.css",
    html: "snippet.html",
    javascript: "snippet.js",
    js: "snippet.js",
    json: "snippet.json",
    jsx: "snippet.jsx",
    python: "snippet.py",
    py: "snippet.py",
    scss: "snippet.scss",
    ts: "snippet.ts",
    tsx: "snippet.tsx",
    typescript: "snippet.ts",
    xml: "snippet.xml",
  };

  return fileNames[language] || `snippet.${language || "txt"}`;
}

function highlightJavaScript(code) {
  const tokens = [];
  let highlighted = escapeHtml(code);

  highlighted = protectTokens(highlighted, /(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, "syntax-comment", tokens);
  highlighted = protectTokens(highlighted, /(&quot;[^&]*?&quot;|&#039;[\s\S]*?&#039;|`[\s\S]*?`)/g, "syntax-string", tokens);
  highlighted = highlighted.replace(/\b(function)(\s+)([A-Za-z_$][\w$]*)/g, (match, keyword, space, name) => {
    const token = createToken(`<span class="syntax-function">${name}</span>`, tokens);
    return `${keyword}${space}${token}`;
  });
  highlighted = highlighted.replace(/\b(const|let|var)(\s+)([A-Za-z_$][\w$]*)/g, (match, keyword, space, name) => {
    const token = createToken(`<span class="syntax-variable">${name}</span>`, tokens);
    return `${keyword}${space}${token}`;
  });
  highlighted = highlighted.replace(
    /\b(const|let|var|function|return|if|else|for|while|class|new|import|from|export|async|await|try|catch|throw|true|false|null|undefined|switch|case|break|continue|default|extends|super|this|typeof|instanceof)\b/g,
    '<span class="syntax-keyword">$1</span>',
  );
  highlighted = highlighted.replace(/\b([A-Za-z_$][\w$]*)(?=\s*\()/g, '<span class="syntax-function">$1</span>');
  highlighted = highlighted.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="syntax-number">$1</span>');

  return restoreTokens(highlighted, tokens);
}

function highlightCss(code) {
  const tokens = [];
  let highlighted = escapeHtml(code);

  highlighted = protectTokens(highlighted, /(\/\*[\s\S]*?\*\/)/gm, "syntax-comment", tokens);
  highlighted = protectTokens(highlighted, /(&quot;[^&]*?&quot;|&#039;[\s\S]*?&#039;)/g, "syntax-string", tokens);
  highlighted = highlighted.replace(/([a-z-]+)(?=\s*:)/gi, '<span class="syntax-variable">$1</span>');
  highlighted = highlighted.replace(/(:\s*)([^;{}]+)/g, '$1<span class="syntax-string">$2</span>');
  highlighted = highlighted.replace(/\b(\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)?)\b/g, '<span class="syntax-number">$1</span>');

  return restoreTokens(highlighted, tokens);
}

function highlightPython(code) {
  const tokens = [];
  let highlighted = escapeHtml(code);

  highlighted = protectTokens(highlighted, /(#.*$)/gm, "syntax-comment", tokens);
  highlighted = protectTokens(highlighted, /(&quot;{3}[\s\S]*?&quot;{3}|&#039;{3}[\s\S]*?&#039;{3}|&quot;[^&]*?&quot;|&#039;[\s\S]*?&#039;)/g, "syntax-string", tokens);
  highlighted = highlighted.replace(/\b(def|class)(\s+)([A-Za-z_]\w*)/g, (match, keyword, space, name) => {
    const token = createToken(`<span class="syntax-function">${name}</span>`, tokens);
    return `<span class="syntax-keyword">${keyword}</span>${space}${token}`;
  });
  highlighted = highlighted.replace(
    /\b(import|from|as|return|if|elif|else|for|while|in|try|except|finally|with|lambda|yield|True|False|None|and|or|not|is|pass|break|continue|global|nonlocal)\b/g,
    '<span class="syntax-keyword">$1</span>',
  );
  highlighted = highlighted.replace(/\b([A-Za-z_]\w*)(?=\s*\()/g, '<span class="syntax-function">$1</span>');
  highlighted = highlighted.replace(/\b([A-Za-z_]\w*)(?=\s*=)/g, '<span class="syntax-variable">$1</span>');
  highlighted = highlighted.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="syntax-number">$1</span>');

  return restoreTokens(highlighted, tokens);
}

function highlightHtml(code) {
  let highlighted = escapeHtml(code);

  highlighted = highlighted.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="syntax-comment">$1</span>');
  highlighted = highlighted.replace(/(&lt;\/?)([a-z0-9-]+)/gi, '$1<span class="syntax-keyword">$2</span>');
  highlighted = highlighted.replace(/\s([a-z-]+)=/gi, ' <span class="syntax-variable">$1</span>=');
  highlighted = highlighted.replace(/(&quot;.*?&quot;|&#039;.*?&#039;)/g, '<span class="syntax-string">$1</span>');

  return highlighted;
}

function protectTokens(value, pattern, className, tokens) {
  return value.replace(pattern, (match) => {
    return createToken(`<span class="${className}">${match}</span>`, tokens);
  });
}

function createToken(html, tokens) {
  const placeholder = `@@PH_${tokenName(tokens.length)}@@`;
  tokens.push({ placeholder, html });
  return placeholder;
}

function tokenName(index) {
  let name = "";
  let value = index;

  do {
    name = String.fromCharCode(65 + (value % 26)) + name;
    value = Math.floor(value / 26) - 1;
  } while (value >= 0);

  return name;
}

function restoreTokens(value, tokens) {
  return tokens.reduce((result, token) => result.replace(token.placeholder, token.html), value);
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
  contentInput.innerHTML = "";
  state.media = [];
  mediaPreview.innerHTML = "";
  codeEditor.value = "";
  codeLanguageInput.value = "javascript";
  closeCodeComposer();
  formulaEditor.value = "";
  formulaInlineInput.checked = false;
  closeFormulaComposer();
  updateLineCount();
  renderArticlePreview();
  renderCodeComposerPreview();
  renderFormulaComposerPreview();
}

function getEditorText() {
  return contentInput.innerText.replace(/\u00a0/g, " ").trim();
}

function getEditorHtml() {
  return contentInput.innerHTML.trim();
}

function ensureEditorSelection() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0 && contentInput.contains(selection.anchorNode)) {
    return;
  }

  const range = document.createRange();
  range.selectNodeContents(contentInput);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function wrapCurrentSelection(wrapper) {
  const selection = window.getSelection();
  const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  if (!range || !contentInput.contains(range.commonAncestorContainer)) {
    return;
  }

  if (range.collapsed) {
    return;
  }

  const selectedContent = range.extractContents();
  wrapper.appendChild(selectedContent);
  range.insertNode(wrapper);
  placeCaretAfter(wrapper);
}

function selectNodeContents(node) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(node);
  selection.removeAllRanges();
  selection.addRange(range);
}

function placeCaretAfter(node) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.setStartAfter(node);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
}

function insertHtmlAtSelection(html) {
  contentInput.focus();
  ensureEditorSelection();
  document.execCommand("insertHTML", false, html);
  enforceLineLimit();
  renderArticlePreview();
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
  return `${"*".repeat(rating)}${"-".repeat(5 - rating)} ${rating}/5`;
}

function deleteBook(id) {
  state.books = state.books.filter((book) => book.id !== id);
  saveBooks();
  renderBooks();
}

async function handleCodeCopy(event) {
  const button = event.target.closest("[data-copy-code]");

  if (!button) {
    return;
  }

  const code = decodeURIComponent(button.dataset.copyCode);

  try {
    await navigator.clipboard.writeText(code);
    const originalText = button.textContent.trim();
    button.textContent = t("copiedButton");
    window.setTimeout(() => {
      button.innerHTML = `<span class="copy-icon" aria-hidden="true"></span>${escapeHtml(originalText || t("copyButton"))}`;
    }, 1400);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = code;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
}

async function handleFormulaCopy(event) {
  const button = event.target.closest("[data-copy-formula]");

  if (!button) {
    return;
  }

  const latex = decodeURIComponent(button.dataset.copyFormula);

  try {
    await navigator.clipboard.writeText(latex);
    const originalText = button.textContent.trim();
    button.textContent = t("copiedButton");
    window.setTimeout(() => {
      button.innerHTML = `<span class="copy-icon" aria-hidden="true"></span>${escapeHtml(originalText || t("copyButton"))}`;
    }, 1400);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = latex;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
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

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
