// Мови та переклади
const translations = {
    uk: {
        title: "Мої Листи",
        addLetter: "Додати лист",
        searchPlaceholder: "Пошук листів...",
        allDates: "Усі дати",
        today: "Сьогодні",
        thisWeek: "Цього тижня",
        thisMonth: "Цього місяця",
        allTags: "Усі теги",
        important: "Важливе",
        personal: "Особисте",
        work: "Робота",
        clearFilters: "Очистити",
        deleteConfirm: "Підтвердження видалення",
        deleteMessage: "Ви впевнені, що хочете видалити",
        letters: "лист(и)",
        warning: "Цю дію неможливо скасувати!",
        cancel: "Скасувати",
        delete: "Видалити",
        editLetter: "Редагувати лист",
        addLetterModal: "Додати лист",
        titleLabel: "Заголовок",
        contentLabel: "Зміст",
        tagsLabel: "Теги (через кому)",
        tagsPlaceholder: "робота, важливе, особисте",
        save: "Зберегти",
        readMode: "Режим читання",
        theme: "Тема",
        lightTheme: "Світла",
        darkTheme: "Темна",
        blueTheme: "Синя",
        greenTheme: "Зелена",
        exportPDF: "Експорт PDF",
        exportTXT: "Експорт TXT",
        expand: "Розгорнути",
        collapse: "Згорнути",
        noLetters: "Немає листів",
        addFirstLetter: "Додайте свій перший лист"
    },
    en: {
        title: "My Letters",
        addLetter: "Add Letter",
        searchPlaceholder: "Search letters...",
        allDates: "All dates",
        today: "Today",
        thisWeek: "This week",
        thisMonth: "This month",
        allTags: "All tags",
        important: "Important",
        personal: "Personal",
        work: "Work",
        clearFilters: "Clear",
        deleteConfirm: "Delete Confirmation",
        deleteMessage: "Are you sure you want to delete",
        letters: "letter(s)",
        warning: "This action cannot be undone!",
        cancel: "Cancel",
        delete: "Delete",
        editLetter: "Edit Letter",
        addLetterModal: "Add Letter",
        titleLabel: "Title",
        contentLabel: "Content",
        tagsLabel: "Tags (comma separated)",
        tagsPlaceholder: "work, important, personal",
        save: "Save",
        readMode: "Reading Mode",
        theme: "Theme",
        lightTheme: "Light",
        darkTheme: "Dark",
        blueTheme: "Blue",
        greenTheme: "Green",
        exportPDF: "Export PDF",
        exportTXT: "Export TXT",
        expand: "Expand",
        collapse: "Collapse",
        noLetters: "No letters",
        addFirstLetter: "Add your first letter"
    },
    pl: {
        title: "Moje Listy",
        addLetter: "Dodaj list",
        searchPlaceholder: "Szukaj listów...",
        allDates: "Wszystkie daty",
        today: "Dziś",
        thisWeek: "W tym tygodniu",
        thisMonth: "W tym miesiącu",
        allTags: "Wszystkie tagi",
        important: "Ważne",
        personal: "Osobiste",
        work: "Praca",
        clearFilters: "Wyczyść",
        deleteConfirm: "Potwierdzenie usunięcia",
        deleteMessage: "Czy na pewno chcesz usunąć",
        letters: "list(y)",
        warning: "Tej czynności nie można cofnąć!",
        cancel: "Anuluj",
        delete: "Usuń",
        editLetter: "Edytuj list",
        addLetterModal: "Dodaj list",
        titleLabel: "Tytuł",
        contentLabel: "Treść",
        tagsLabel: "Tagi (oddzielone przecinkami)",
        tagsPlaceholder: "praca, ważne, osobiste",
        save: "Zapisz",
        readMode: "Tryb czytania",
        theme: "Motyw",
        lightTheme: "Jasny",
        darkTheme: "Ciemny",
        blueTheme: "Niebieski",
        greenTheme: "Zielony",
        exportPDF: "Eksportuj PDF",
        exportTXT: "Eksportuj TXT",
        expand: "Rozwiń",
        collapse: "Zwiń",
        noLetters: "Brak listów",
        addFirstLetter: "Dodaj swój pierwszy list"
    },
    de: {
        title: "Meine Briefe",
        addLetter: "Brief hinzufügen",
        searchPlaceholder: "Briefe suchen...",
        allDates: "Alle Daten",
        today: "Heute",
        thisWeek: "Diese Woche",
        thisMonth: "Diesen Monat",
        allTags: "Alle Tags",
        important: "Wichtig",
        personal: "Persönlich",
        work: "Arbeit",
        clearFilters: "Löschen",
        deleteConfirm: "Löschbestätigung",
        deleteMessage: "Sind Sie sicher, dass Sie löschen möchten",
        letters: "Brief(e)",
        warning: "Diese Aktion kann nicht rückgängig gemacht werden!",
        cancel: "Abbrechen",
        delete: "Löschen",
        editLetter: "Brief bearbeiten",
        addLetterModal: "Brief hinzufügen",
        titleLabel: "Titel",
        contentLabel: "Inhalt",
        tagsLabel: "Tags (kommagetrennt)",
        tagsPlaceholder: "Arbeit, wichtig, persönlich",
        save: "Speichern",
        readMode: "Lesemodus",
        theme: "Thema",
        lightTheme: "Hell",
        darkTheme: "Dunkel",
        blueTheme: "Blau",
        greenTheme: "Grün",
        exportPDF: "PDF exportieren",
        exportTXT: "TXT exportieren",
        expand: "Erweitern",
        collapse: "Zusammenklappen",
        noLetters: "Keine Briefe",
        addFirstLetter: "Fügen Sie Ihren ersten Brief hinzu"
    }
};

// Стан додатку
let letters = JSON.parse(localStorage.getItem('letters')) || [
    {
        id: 1,
        title: "Перший лист",
        content: "Це приклад першого листа. Тут може бути ваш текст.",
        date: new Date().toISOString(),
        tags: ["приклад", "перший"]
    },
    {
        id: 2,
        title: "Важливе повідомлення",
        content: "Це важливий лист з довгим текстом, який демонструє можливість розгортання та згортання контенту. Можна додати багато тексту тут.",
        date: new Date(Date.now() - 86400000).toISOString(),
        tags: ["важливе", "робота"]
    }
];

let currentLanguage = localStorage.getItem('language') || 'uk';
let currentTheme = localStorage.getItem('theme') || 'light';
let isReadMode = localStorage.getItem('readMode') === 'true';
let lettersToDelete = [];
let editingLetterId = null;

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadLanguage();
    loadTheme();
    loadReadMode();
    renderLetters();
    setupEventListeners();
}

// Завантаження мови
function loadLanguage() {
    const lang = localStorage.getItem('language') || 'uk';
    setLanguage(lang);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    const translation = translations[lang];
    document.querySelector('title').textContent = translation.title;
    document.querySelector('h1').innerHTML = `<i class="fas fa-envelope"></i> ${translation.title}`;
    
    // Оновлення всіх текстов елементів
    updateTextElements(translation);
    
    // Оновлення випадаючих списків
    updateDropdowns(translation);
}

function updateTextElements(t) {
    // Основні елементи
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.querySelector('#addLetterBtn').innerHTML = `<i class="fas fa-plus"></i> ${t.addLetter}`;
    document.querySelector('.current-lang').textContent = getLanguageName(currentLanguage);
    document.querySelector('.current-theme').textContent = t.theme;
    
    // Фільтри
    document.getElementById('dateFilter').innerHTML = `
        <option value="all">${t.allDates}</option>
        <option value="today">${t.today}</option>
        <option value="week">${t.thisWeek}</option>
        <option value="month">${t.thisMonth}</option>
    `;
    
    document.getElementById('tagFilter').innerHTML = `
        <option value="all">${t.allTags}</option>
        <option value="important">${t.important}</option>
        <option value="personal">${t.personal}</option>
        <option value="work">${t.work}</option>
    `;
    
    document.querySelector('#clearFilters').innerHTML = `<i class="fas fa-times"></i> ${t.clearFilters}`;
    
    // Модальні вікна
    document.getElementById('modalTitle').textContent = t.deleteConfirm;
    document.getElementById('editModalTitle').textContent = t.addLetterModal;
    
    // Форма
    document.querySelector('label[for="letterTitle"]').textContent = t.titleLabel;
    document.querySelector('label[for="letterContent"]').textContent = t.contentLabel;
    document.querySelector('label[for="letterTags"]').textContent = t.tagsLabel;
    document.getElementById('letterTags').placeholder = t.tagsPlaceholder;
    
    // Кнопки форми
    const formButtons = document.querySelectorAll('#letterForm .btn');
    formButtons[0].textContent = t.cancel;
    formButtons[1].textContent = t.save;
    
    // Кнопки модального вікна видалення
    const deleteButtons = document.querySelectorAll('#deleteModal .btn');
    deleteButtons[0].textContent = t.cancel;
    deleteButtons[1].innerHTML = `<i class="fas fa-trash"></i> ${t.delete}`;
    
    // Оновити заголовок редагування якщо потрібно
    if (editingLetterId) {
        document.getElementById('editModalTitle').textContent = t.editLetter;
    }
    
    // Оновити листи
    renderLetters();
}

function getLanguageName(lang) {
    const names = {
        uk: '🇺🇦 Українська',
        en: '🇺🇸 English',
        pl: '🇵🇱 Polski',
        de: '🇩🇪 Deutsch'
    };
    return names[lang] || names.uk;
}

function updateDropdowns(t) {
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions[0].innerHTML = `<i class="fas fa-sun"></i> ${t.lightTheme}`;
    themeOptions[1].innerHTML = `<i class="fas fa-moon"></i> ${t.darkTheme}`;
    themeOptions[2].innerHTML = `<i class="fas fa-droplet" style="color: #1e90ff;"></i> ${t.blueTheme}`;
    themeOptions[3].innerHTML = `<i class="fas fa-leaf" style="color: #27ae60;"></i> ${t.greenTheme}`;
}

// Завантаження теми
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Оновити активну опцію теми
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.dataset.theme === theme);
    });
}

// Завантаження режиму читання
function loadReadMode() {
    if (isReadMode) {
        document.body.classList.add('read-mode-active');
        document.getElementById('readModeToggle').classList.add('active');
    }
}

// Рендер листів
function renderLetters(filteredLetters = letters) {
    const container = document.getElementById('lettersContainer');
    const emptyState = document.getElementById('emptyState');
    const t = translations[currentLanguage];
    
    if (filteredLetters.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.querySelector('h3').textContent = t.noLetters;
        emptyState.querySelector('p').textContent = t.addFirstLetter;
        return;
    }
    
    emptyState.style.display = 'none';
    
    container.innerHTML = filteredLetters.map(letter => `
        <div class="letter-card" data-id="${letter.id}">
            <div class="letter-header">
                <div>
                    <h3 class="letter-title">${escapeHtml(letter.title)}</h3>
                    <div class="letter-date">${formatDate(letter.date)}</div>
                </div>
                <div class="letter-checkbox">
                    <input type="checkbox" class="select-letter" data-id="${letter.id}">
                </div>
            </div>
            
            <div class="letter-tags">
                ${letter.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
            
            <div class="letter-content" id="content-${letter.id}">
                ${escapeHtml(letter.content)}
                ${letter.content.length > 200 ? `<div class="read-more"><button class="btn-expand" onclick="toggleExpand(${letter.id})">${t.expand}</button></div>` : ''}
            </div>
            
            <div class="letter-actions">
                <button class="action-btn" onclick="editLetter(${letter.id})" title="${t.editLetter}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn" onclick="exportAsPDF(${letter.id})" title="${t.exportPDF}">
                    <i class="fas fa-file-pdf"></i>
                </button>
                <button class="action-btn" onclick="exportAsTXT(${letter.id})" title="${t.exportTXT}">
                    <i class="fas fa-file-alt"></i>
                </button>
                <button class="action-btn" onclick="showDeleteModal([${letter.id}])" title="${t.delete}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Форматування дати
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'uk' ? 'uk-UA' : currentLanguage, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Екранування HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Пошук та фільтри
function searchAndFilter() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;
    const tagFilter = document.getElementById('tagFilter').value;
    
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const filtered = letters.filter(letter => {
        // Пошук
        const matchesSearch = !searchTerm || 
            letter.title.toLowerCase().includes(searchTerm) ||
            letter.content.toLowerCase().includes(searchTerm) ||
            letter.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Фільтр за датою
        let matchesDate = true;
        const letterDate = new Date(letter.date);
        
        if (dateFilter === 'today') {
            matchesDate = letterDate >= startOfDay;
        } else if (dateFilter === 'week') {
            matchesDate = letterDate >= startOfWeek;
        } else if (dateFilter === 'month') {
            matchesDate = letterDate >= startOfMonth;
        }
        
        // Фільтр за тегом
        let matchesTag = true;
        if (tagFilter !== 'all') {
            matchesTag = letter.tags.map(t => t.toLowerCase()).includes(tagFilter);
        }
        
        return matchesSearch && matchesDate && matchesTag;
    });
    
    renderLetters(filtered);
}

// Модальне вікно видалення
function showDeleteModal(letterIds = []) {
    lettersToDelete = letterIds;
    const t = translations[currentLanguage];
    
    if (letterIds.length === 0) {
        // Перевірити вибрані чекбокси
        const selected = document.querySelectorAll('.select-letter:checked');
        letterIds = Array.from(selected).map(cb => parseInt(cb.dataset.id));
        
        if (letterIds.length === 0) {
            alert('Виберіть хоча б один лист для видалення');
            return;
        }
    }
    
    lettersToDelete = letterIds;
    document.getElementById('itemCount').textContent = letterIds.length;
    document.getElementById('deleteMessage').innerHTML = `
        ${t.deleteMessage} <span id="itemCount">${letterIds.length}</span> ${t.letters}?
    `;
    document.getElementById('deleteModal').style.display = 'flex';
}

// Підтвердження видалення
function confirmDelete() {
    letters = letters.filter(letter => !lettersToDelete.includes(letter.id));
    localStorage.setItem('letters', JSON.stringify(letters));
    renderLetters();
    hideDeleteModal();
}

function hideDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
    lettersToDelete = [];
    
    // Скинути всі чекбокси
    document.querySelectorAll('.select-letter').forEach(cb => cb.checked = false);
}

// Редагування листа
function editLetter(id) {
    const letter = letters.find(l => l.id === id);
    if (!letter) return;
    
    editingLetterId = id;
    const t = translations[currentLanguage];
    
    document.getElementById('editModalTitle').textContent = t.editLetter;
    document.getElementById('letterTitle').value = letter.title;
    document.getElementById('letterContent').value = letter.content;
    document.getElementById('letterTags').value = letter.tags.join(', ');
    document.getElementById('editModal').style.display = 'flex';
}

function saveLetter(e) {
    e.preventDefault();
    
    const title = document.getElementById('letterTitle').value.trim();
    const content = document.getElementById('letterContent').value.trim();
    const tags = document.getElementById('letterTags').value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
    
    if (!title || !content) {
        alert('Заповніть обов\'язкові поля');
        return;
    }
    
    if (editingLetterId) {
        // Оновити існуючий лист
        const index = letters.findIndex(l => l.id === editingLetterId);
        if (index !== -1) {
            letters[index] = {
                ...letters[index],
                title,
                content,
                tags,
                date: new Date().toISOString()
            };
        }
        editingLetterId = null;
    } else {
        // Додати новий лист
        const newLetter = {
            id: Date.now(),
            title,
            content,
            tags,
            date: new Date().toISOString()
        };
        letters.unshift(newLetter);
    }
    
    localStorage.setItem('letters', JSON.stringify(letters));
    renderLetters();
    hideEditModal();
}

function hideEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.getElementById('letterForm').reset();
    editingLetterId = null;
}

// Експорт
function exportAsPDF(id) {
    const letter = letters.find(l => l.id === id);
    if (!letter) return;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text(letter.title, 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Дата: ${formatDate(letter.date)}`, 20, 35);
    
    if (letter.tags.length > 0) {
        doc.text(`Теги: ${letter.tags.join(', ')}`, 20, 45);
    }
    
    doc.setFontSize(14);
    const lines = doc.splitTextToSize(letter.content, 170);
    doc.text(lines, 20, 60);
    
    doc.save(`лист_${letter.id}.pdf`);
}

function exportAsTXT(id) {
    const letter = letters.find(l => l.id === id);
    if (!letter) return;
    
    const content = `
${letter.title}
${'='.repeat(letter.title.length)}

Дата: ${formatDate(letter.date)}
Теги: ${letter.tags.join(', ')}

${letter.content}
    `.trim();
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `лист_${letter.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Розгортання/згортання контенту
function toggleExpand(id) {
    const content = document.getElementById(`content-${id}`);
    const button = content.querySelector('.btn-expand');
    const t = translations[currentLanguage];
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = t.expand;
    } else {
        content.classList.add('expanded');
        button.textContent = t.collapse;
    }
}

// Налаштування обробників подій
function setupEventListeners() {
    // Пошук та фільтри
    document.getElementById('searchInput').addEventListener('input', searchAndFilter);
    document.getElementById('dateFilter').addEventListener('change', searchAndFilter);
    document.getElementById('tagFilter').addEventListener('change', searchAndFilter);
    document.getElementById('clearFilters').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('dateFilter').value = 'all';
        document.getElementById('tagFilter').value = 'all';
        searchAndFilter();
    });
    
    // Додати лист
    document.getElementById('addLetterBtn').addEventListener('click', () => {
        editingLetterId = null;
        const t = translations[currentLanguage];
        document.getElementById('editModalTitle').textContent = t.addLetterModal;
        document.getElementById('letterForm').reset();
        document.getElementById('editModal').style.display = 'flex';
    });
    
    // Форма листа
    document.getElementById('letterForm').addEventListener('submit', saveLetter);
    
    // Модальні вікна
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', hideDeleteModal);
    });
    
    document.querySelectorAll('.close-edit-modal').forEach(btn => {
        btn.addEventListener('click', hideEditModal);
    });
    
    document.getElementById('confirmDelete').addEventListener('click', confirmDelete);
    
    // Вибір мови
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            document.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.lang === lang);
            });
            document.querySelector('.current-lang').textContent = getLanguageName(lang);
        });
    });
    
    // Вибір теми
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            setTheme(theme);
        });
    });
    
    // Режим читання
    document.getElementById('readModeToggle').addEventListener('click', () => {
        isReadMode = !isReadMode;
        document.body.classList.toggle('read-mode-active', isReadMode);
        document.getElementById('readModeToggle').classList.toggle('active', isReadMode);
        localStorage.setItem('readMode', isReadMode);
    });
    
    // Закриття модальних вікон по кліку на тло
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                if (modal.id === 'editModal') {
                    hideEditModal();
                } else if (modal.id === 'deleteModal') {
                    hideDeleteModal();
                }
            }
        });
    });
    
    // Обробка клавіші Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideDeleteModal();
            hideEditModal();
        }
    });
}

// Ініціалізація при завантаженні
window.onload = initApp;

// Глобальні функції для HTML атрибутів onclick
window.toggleExpand = toggleExpand;
window.editLetter = editLetter;
window.exportAsPDF = exportAsPDF;
window.exportAsTXT = exportAsTXT;
window.showDeleteModal = showDeleteModal;
