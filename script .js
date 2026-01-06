// Мови перекладу
const translations = {
  uk: {
    // Заголовки
    title: "Поштова система Inbox Pro",
    tagline: "Персональна поштова система",
    inboxTitle: "Вхідні",
    
    // Меню
    compose: "Написати листа",
    inbox: "Вхідні",
    sent: "Надіслані",
    drafts: "Чернетки",
    spam: "Спам",
    categories: "Категорії",
    work: "Робота",
    study: "Навчання",
    personal: "Особисті",
    travel: "Подорожі",
    
    // Кнопки
    refresh: "Оновити",
    selectAll: "Вибрати всі",
    delete: "Видалити",
    markRead: "Відмітити прочитаним",
    sendEmail: "Надіслати",
    saveDraft: "Зберегти чернетку",
    
    // Модальне вікно
    newEmail: "Новий лист",
    to: "Кому:",
    subject: "Тема:",
    message: "Повідомлення:",
    
    // Пошук
    searchPlaceholder: "Пошук в пошті...",
    
    // Інше
    user: "Користувач",
    email: "user@inboxpro.com",
    language: "Українська",
    
    // Повідомлення
    emailSent: "Лист успішно надіслано!",
    emailDeleted: "Лист(и) успішно видалено!",
    emailSaved: "Лист збережено в чернетках!",
    markedRead: "Лист(и) відмічено прочитаними!",
    selectEmail: "Виберіть листи для видалення",
    emailStarred: "Лист додано до обраних!",
    emailUnstarred: "Лист видалено з обраних!"
  },
  
  en: {
    title: "Inbox Pro Mail System",
    tagline: "Personal mail system",
    inboxTitle: "Inbox",
    
    compose: "Compose",
    inbox: "Inbox",
    sent: "Sent",
    drafts: "Drafts",
    spam: "Spam",
    categories: "Categories",
    work: "Work",
    study: "Study",
    personal: "Personal",
    travel: "Travel",
    
    refresh: "Refresh",
    selectAll: "Select all",
    delete: "Delete",
    markRead: "Mark as read",
    sendEmail: "Send",
    saveDraft: "Save draft",
    
    newEmail: "New email",
    to: "To:",
    subject: "Subject:",
    message: "Message:",
    
    searchPlaceholder: "Search in mail...",
    
    user: "User",
    email: "user@inboxpro.com",
    language: "English",
    
    emailSent: "Email sent successfully!",
    emailDeleted: "Email(s) deleted successfully!",
    emailSaved: "Email saved to drafts!",
    markedRead: "Email(s) marked as read!",
    selectEmail: "Select emails to delete",
    emailStarred: "Email added to favorites!",
    emailUnstarred: "Email removed from favorites!"
  },
  
  de: {
    title: "Inbox Pro Mail System",
    tagline: "Persönliches Mail-System",
    inboxTitle: "Posteingang",
    
    compose: "Verfassen",
    inbox: "Posteingang",
    sent: "Gesendet",
    drafts: "Entwürfe",
    spam: "Spam",
    categories: "Kategorien",
    work: "Arbeit",
    study: "Studium",
    personal: "Persönlich",
    travel: "Reisen",
    
    refresh: "Aktualisieren",
    selectAll: "Alle auswählen",
    delete: "Löschen",
    markRead: "Als gelesen markieren",
    sendEmail: "Senden",
    saveDraft: "Entwurf speichern",
    
    newEmail: "Neue E-Mail",
    to: "An:",
    subject: "Betreff:",
    message: "Nachricht:",
    
    searchPlaceholder: "In Mails suchen...",
    
    user: "Benutzer",
    email: "user@inboxpro.com",
    language: "Deutsch",
    
    emailSent: "E-Mail erfolgreich gesendet!",
    emailDeleted: "E-Mail(s) erfolgreich gelöscht!",
    emailSaved: "E-Mail als Entwurf gespeichert!",
    markedRead: "E-Mail(s) als gelesen markiert!",
    selectEmail: "Wählen Sie E-Mails zum Löschen aus",
    emailStarred: "E-Mail zu Favoriten hinzugefügt!",
    emailUnstarred: "E-Mail aus Favoriten entfernt!"
  },
  
  ru: {
    title: "Почтовая система Inbox Pro",
    tagline: "Персональная почтовая система",
    inboxTitle: "Входящие",
    
    compose: "Написать письмо",
    inbox: "Входящие",
    sent: "Отправленные",
    drafts: "Черновики",
    spam: "Спам",
    categories: "Категории",
    work: "Работа",
    study: "Учёба",
    personal: "Личное",
    travel: "Путешествия",
    
    refresh: "Обновить",
    selectAll: "Выбрать все",
    delete: "Удалить",
    markRead: "Отметить прочитанным",
    sendEmail: "Отправить",
    saveDraft: "Сохранить черновик",
    
    newEmail: "Новое письмо",
    to: "Кому:",
    subject: "Тема:",
    message: "Сообщение:",
    
    searchPlaceholder: "Поиск в почте...",
    
    user: "Пользователь",
    email: "user@inboxpro.com",
    language: "Русский",
    
    emailSent: "Письмо успешно отправлено!",
    emailDeleted: "Письмо(а) успешно удалены!",
    emailSaved: "Письмо сохранено в черновиках!",
    markedRead: "Письмо(а) отмечены прочитанными!",
    selectEmail: "Выберите письма для удаления",
    emailStarred: "Письмо добавлено в избранное!",
    emailUnstarred: "Письмо удалено из избранного!"
  }
};

// Початкові дані
let currentLanguage = 'uk';
let emails = [];
let selectedEmails = new Set();
let isSelectAll = false;

// Демо дані email
const demoEmails = [
  {
    id: 1,
    from: "Український Національний Університет",
    avatar: "УН",
    subject: "Запрошення на конференцію 'Цифрові технології'",
    preview: "Шановні студенти та викладачі! Запрошуємо взяти участь у щорічній конференції з веб-розробки та дизайну...",
    date: "Вчора, 14:15",
    unread: true,
    starred: false,
    tag: "study"
  },
  {
    id: 2,
    from: "Олена Кравець",
    avatar: "ОК",
    subject: "Зустріч завтра о 14:00",
    preview: "Привіт! Не забудь про нашу зустріч у Zoom завтра. Готуй презентацію щодо нового проекту...",
    date: "15 бер, 09:45",
    unread: false,
    starred: true,
    tag: "work"
  },
  {
    id: 3,
    from: "Максим Шевчук",
    avatar: "МШ",
    subject: "Фото з походу в Карпати",
    preview: "Привіт, кидаю пару крутих фоток з нашої останньої подорожі до Карпат. Погода була ідеальною...",
    date: "14 бер, 18:30",
    unread: true,
    starred: false,
    tag: "personal"
  },
  {
    id: 4,
    from: "Дмитро Пономаренко",
    avatar: "ДП",
    subject: "Футбол у суботу",
    preview: "Хлопці, граємо 7 на 7 о 17:00 на стадіоні. Будь обов'язково, твої навички потрібні...",
    date: "8 бер, 11:20",
    unread: true,
    starred: true,
    tag: "personal"
  },
  {
    id: 5,
    from: "Тамара Прокопенко",
    avatar: "ТП",
    subject: "Привіт з Італії!",
    preview: "Привіт з Риму! Погода чудова, архітектура вражає. Згадав наші розмови про веб-дизайн стародавніх...",
    date: "5 бер, 22:15",
    unread: false,
    starred: true,
    tag: "travel"
  },
  {
    id: 6,
    from: "Богдан Коваль",
    avatar: "БК",
    subject: "Re: Співпраця над новим проектом",
    preview: "Дякую за пропозицію! Мені дуже сподобалася ідея. Запропонував свої доповнення в прикріпленому...",
    date: "3 бер, 16:40",
    unread: false,
    starred: false,
    tag: "work"
  }
];

// Ініціалізація
document.addEventListener('DOMContentLoaded', function() {
  initApp();
});

function initApp() {
  // Завантажуємо демо дані
  emails = [...demoEmails];
  
  // Завантажуємо збережену мову
  const savedLanguage = localStorage.getItem('mailLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
  
  // Встановлюємо мову
  setLanguage(currentLanguage);
  
  // Рендеримо листи
  renderEmails();
  
  // Додаємо обробники подій
  addEventListeners();
}

// Встановлення мови
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('mailLanguage', lang);
  
  const t = translations[lang];
  
  // Оновлюємо всі тексти
  document.title = t.title;
  document.querySelector('.tagline').textContent = t.tagline;
  document.getElementById('current-language').textContent = t.language;
  document.getElementById('compose-text').textContent = t.compose;
  document.getElementById('menu-inbox').textContent = t.inbox;
  document.getElementById('menu-sent').textContent = t.sent;
  document.getElementById('menu-drafts').textContent = t.drafts;
  document.getElementById('menu-spam').textContent = t.spam;
  document.getElementById('categories-title').textContent = t.categories;
  document.getElementById('category-work').textContent = t.work;
  document.getElementById('category-study').textContent = t.study;
  document.getElementById('category-personal').textContent = t.personal;
  document.getElementById('category-travel').textContent = t.travel;
  document.getElementById('inbox-title').textContent = t.inboxTitle;
  document.getElementById('refresh-text').textContent = t.refresh;
  document.getElementById('select-all-text').textContent = t.selectAll;
  document.getElementById('delete-text').textContent = t.delete;
  document.getElementById('mark-read-text').textContent = t.markRead;
  document.getElementById('compose-modal-title').textContent = t.newEmail;
  document.getElementById('to-label').textContent = t.to;
  document.getElementById('subject-label').textContent = t.subject;
  document.getElementById('message-label').textContent = t.message;
  document.getElementById('send-email-text').textContent = t.sendEmail;
  document.getElementById('save-draft-text').textContent = t.saveDraft;
  document.getElementById('search-input').placeholder = t.searchPlaceholder;
  document.getElementById('user-name').textContent = t.user;
  document.getElementById('user-email').textContent = t.email;
  
  // Оновлюємо активну мову в випадаючому списку
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
    const langCode = option.getAttribute('data-lang');
    if (langCode === lang) {
      option.classList.add('active');
    }
  });
  
  // Оновлюємо аватар
  document.getElementById('user-avatar').textContent = t.user.charAt(0);
}

// Рендеринг листів
function renderEmails(filteredEmails = null) {
  const emailsToRender = filteredEmails || emails;
  const emailsList = document.getElementById('emails-list');
  
  if (emailsToRender.length === 0) {
    emailsList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-inbox"></i>
        <h3>${translations[currentLanguage].inboxTitle} порожній</h3>
        <p>Тут будуть відображатися ваші листи</p>
      </div>
    `;
    return;
  }
  
  emailsList.innerHTML = '';
  
  emailsToRender.forEach(email => {
    const emailElement = document.createElement('div');
    emailElement.className = `email ${email.unread ? 'unread' : ''} ${selectedEmails.has(email.id) ? 'selected' : ''}`;
    emailElement.dataset.id = email.id;
    
    const tagClass = `tag tag-${email.tag}`;
    const tagText = translations[currentLanguage][email.tag] || email.tag;
    
    emailElement.innerHTML = `
      <input type="checkbox" class="email-checkbox" ${selectedEmails.has(email.id) ? 'checked' : ''}>
      <i class="fas fa-star star ${email.starred ? 'active' : ''}"></i>
      <div class="sender">
        <div class="sender-avatar">${email.avatar}</div>
        ${email.from}
      </div>
      <div class="email-content">
        <div class="email-title">
          ${email.subject}
          <span class="${tagClass}">${tagText}</span>
        </div>
        <div class="email-preview">${email.preview}</div>
      </div>
      <div class="email-date">${email.date}</div>
    `;
    
    emailsList.appendChild(emailElement);
  });
  
  // Оновлюємо стан кнопки видалення
  updateDeleteButton();
}

// Додавання обробників подій
function addEventListeners() {
  // Перемикач мови
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
  
  // Відкриття модального вікна написання листа
  document.getElementById('compose-btn').addEventListener('click', function() {
    document.getElementById('compose-modal').style.display = 'flex';
    document.getElementById('to-input').focus();
  });
  
  // Закриття модального вікна
  document.getElementById('close-compose').addEventListener('click', function() {
    document.getElementById('compose-modal').style.display = 'none';
    clearComposeForm();
  });
  
  // Відправлення листа
  document.getElementById('send-email-btn').addEventListener('click', function() {
    sendEmail();
  });
  
  // Збереження чернетки
  document.getElementById('save-draft-btn').addEventListener('click', function() {
    saveDraft();
  });
  
  // Оновлення пошти
  document.getElementById('refresh-btn').addEventListener('click', function() {
    refreshEmails();
  });
  
  // Вибрати всі листи
  document.getElementById('select-all-btn').addEventListener('click', function() {
    toggleSelectAll();
  });
  
  // Видалити вибрані листи
  document.getElementById('delete-btn').addEventListener('click', function() {
    deleteSelectedEmails();
  });
  
  // Відмітити прочитаними
  document.getElementById('mark-read-btn').addEventListener('click', function() {
    markAsRead();
  });
  
  // Пошук
  document.getElementById('search-input').addEventListener('input', function(e) {
    searchEmails(e.target.value);
  });
  
  // Закриття модального вікна при кліку на оверлей
  document.getElementById('compose-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      clearComposeForm();
    }
  });
  
  // Обробка подій на листах (делегування)
  document.getElementById('emails-list').addEventListener('click', function(e) {
    const emailElement = e.target.closest('.email');
    if (!emailElement) return;
    
    const emailId = parseInt(emailElement.dataset.id);
    const email = emails.find(e => e.id === emailId);
    
    if (!email) return;
    
    // Клік на чекбокс
    if (e.target.classList.contains('email-checkbox')) {
      toggleEmailSelection(emailId, e.target.checked);
      e.stopPropagation();
      return;
    }
    
    // Клік на зірочку
    if (e.target.classList.contains('star')) {
      toggleStar(emailId);
      e.stopPropagation();
      return;
    }
    
    // Клік на лист (відкриття)
    openEmail(email);
  });
  
  // Обробка натискання клавіш
  document.addEventListener('keydown', function(e) {
    // ESC закриває модальне вікно
    if (e.key === 'Escape') {
      document.getElementById('compose-modal').style.display = 'none';
      clearComposeForm();
    }
    
    // Ctrl+Enter відправляє лист
    if (e.ctrlKey && e.key === 'Enter' && 
        document.getElementById('compose-modal').style.display === 'flex') {
      sendEmail();
    }
  });
}

// Відправлення листа
function sendEmail() {
  const to = document.getElementById('to-input').value.trim();
  const subject = document.getElementById('subject-input').value.trim();
  const message = document.getElementById('message-input').value.trim();
  
  if (!to || !subject || !message) {
    showNotification('Будь ласка, заповніть всі поля', 'warning');
    return;
  }
  
  // Додаємо новий лист до "Надіслані"
  const newEmail = {
    id: emails.length > 0 ? Math.max(...emails.map(e => e.id)) + 1 : 1,
    from: "Ви",
    avatar: "В",
    subject: subject,
    preview: message.substring(0, 80) + '...',
    date: "Сьогодні, " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    unread: false,
    starred: false,
    tag: "work"
  };
  
  emails.unshift(newEmail);
  
  // Оновлюємо кількість відправлених
  updateSentCount();
  
  // Закриваємо модальне вікно
  document.getElementById('compose-modal').style.display = 'none';
  clearComposeForm();
  
  // Показуємо сповіщення
  showNotification(translations[currentLanguage].emailSent);
  
  // Оновлюємо список листів
  renderEmails();
}

// Збереження чернетки
function saveDraft() {
  showNotification(translations[currentLanguage].emailSaved);
  document.getElementById('compose-modal').style.display = 'none';
  clearComposeForm();
}

// Очищення форми написання листа
function clearComposeForm() {
  document.getElementById('to-input').value = '';
  document.getElementById('subject-input').value = '';
  document.getElementById('message-input').value = '';
}

// Оновлення пошти
function refreshEmails() {
  // Симуляція оновлення
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  
  setTimeout(() => {
    refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i><span>' + translations[currentLanguage].refresh + '</span>';
    renderEmails();
  }, 1000);
}

// Вибрати всі листи
function toggleSelectAll() {
  isSelectAll = !isSelectAll;
  const checkboxes = document.querySelectorAll('.email-checkbox');
  const selectAllBtn = document.getElementById('select-all-btn');
  
  if (isSelectAll) {
    // Вибираємо всі
    selectedEmails.clear();
    emails.forEach(email => selectedEmails.add(email.id));
    checkboxes.forEach(checkbox => checkbox.checked = true);
    selectAllBtn.innerHTML = '<i class="far fa-check-square"></i><span>' + translations[currentLanguage].selectAll + '</span>';
  } else {
    // Знімаємо виділення
    selectedEmails.clear();
    checkboxes.forEach(checkbox => checkbox.checked = false);
    selectAllBtn.innerHTML = '<i class="far fa-square"></i><span>' + translations[currentLanguage].selectAll + '</span>';
  }
  
  // Оновлюємо класи листів
  document.querySelectorAll('.email').forEach(email => {
    const emailId = parseInt(email.dataset.id);
    if (selectedEmails.has(emailId)) {
      email.classList.add('selected');
    } else {
      email.classList.remove('selected');
    }
  });
  
  updateDeleteButton();
}

// Перемикання вибору листа
function toggleEmailSelection(emailId, isChecked) {
  if (isChecked) {
    selectedEmails.add(emailId);
  } else {
    selectedEmails.delete(emailId);
    isSelectAll = false;
    document.getElementById('select-all-btn').innerHTML = '<i class="far fa-square"></i><span>' + translations[currentLanguage].selectAll + '</span>';
  }
  
  // Оновлюємо клас листа
  const emailElement = document.querySelector(`.email[data-id="${emailId}"]`);
  if (emailElement) {
    if (isChecked) {
      emailElement.classList.add('selected');
    } else {
      emailElement.classList.remove('selected');
    }
  }
  
  updateDeleteButton();
}

// Оновлення стану кнопки видалення
function updateDeleteButton() {
  const deleteBtn = document.getElementById('delete-btn');
  if (selectedEmails.size > 0) {
    deleteBtn.disabled = false;
    deleteBtn.title = '';
  } else {
    deleteBtn.disabled = true;
    deleteBtn.title = translations[currentLanguage].selectEmail;
  }
}

// Видалення вибраних листів
function deleteSelectedEmails() {
  if (selectedEmails.size === 0) return;
  
  // Підтвердження
  if (!confirm(`Видалити ${selectedEmails.size} лист(ів)?`)) {
    return;
  }
  
  // Видаляємо листи
  emails = emails.filter(email => !selectedEmails.has(email.id));
  selectedEmails.clear();
  isSelectAll = false;
  
  // Оновлюємо кнопку "Вибрати всі"
  document.getElementById('select-all-btn').innerHTML = '<i class="far fa-square"></i><span>' + translations[currentLanguage].selectAll + '</span>';
  
  // Показуємо сповіщення
  showNotification(translations[currentLanguage].emailDeleted);
  
  // Оновлюємо список листів
  renderEmails();
}

// Відмітити прочитаними
function markAsRead() {
  let markedCount = 0;
  
  emails.forEach(email => {
    if (selectedEmails.has(email.id) && email.unread) {
      email.unread = false;
      markedCount++;
    }
  });
  
  if (markedCount > 0) {
    showNotification(translations[currentLanguage].markedRead);
    renderEmails();
  }
}

// Перемикання зірочки
function toggleStar(emailId) {
  const email = emails.find(e => e.id === emailId);
  if (email) {
    email.starred = !email.starred;
    
    // Показуємо сповіщення
    if (email.starred) {
      showNotification(translations[currentLanguage].emailStarred);
    } else {
      showNotification(translations[currentLanguage].emailUnstarred);
    }
    
    renderEmails();
  }
}

// Відкриття листа
function openEmail(email) {
  // В реальному додатку тут буде відкриття листа
  // Зараз просто відмітимо як прочитаний
  if (email.unread) {
    email.unread = false;
    renderEmails();
  }
  
  // Показуємо модальне вікно з листом
  alert(`Від: ${email.from}\nТема: ${email.subject}\n\n${email.preview}\n\n[Це демо версія. В реальному додатку тут буде повний текст листа]`);
}

// Пошук листів
function searchEmails(query) {
  if (!query.trim()) {
    renderEmails();
    return;
  }
  
  const lowerQuery = query.toLowerCase();
  const filteredEmails = emails.filter(email => 
    email.from.toLowerCase().includes(lowerQuery) ||
    email.subject.toLowerCase().includes(lowerQuery) ||
    email.preview.toLowerCase().includes(lowerQuery)
  );
  
  renderEmails(filteredEmails);
}

// Оновлення кількості відправлених листів
function updateSentCount() {
  // В реальному додатку тут буде підрахунок відправлених листів
  // Зараз просто збільшимо лічильник
  const sentCountElement = document.getElementById('sent-count');
  let currentCount = parseInt(sentCountElement.textContent);
  sentCountElement.textContent = currentCount + 1;
}

// Показ сповіщення
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');
  
  // Встановлюємо текст
  notificationText.textContent = message;
  
  // Встановлюємо колір в залежності від типу
  if (type === 'success') {
    notification.style.background = 'var(--success)';
  } else if (type === 'warning') {
    notification.style.background = 'var(--warning)';
  } else if (type === 'danger') {
    notification.style.background = 'var(--danger)';
  }
  
  // Показуємо сповіщення
  notification.style.display = 'flex';
  
  // Ховаємо через 3 секунди
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}
