const i18nFiles = {
  en: '../static/i18n/en.json',
  pt: '../static/i18n/pt.json'
};

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
  document.title = translations.title || document.title;
}

function loadLanguage() {
  const lang = localStorage.getItem('lang') || 'en';
  fetch(i18nFiles[lang])
  .then(res => res.json())
  .then(applyTranslations);
  document.getElementById('languageSwitcher').value = lang;
}

document.getElementById('languageSwitcher').addEventListener('change', function () {
  localStorage.setItem('lang', this.value);
  location.reload();
});

window.addEventListener('DOMContentLoaded', loadLanguage);
