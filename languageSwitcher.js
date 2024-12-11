document.addEventListener('DOMContentLoaded', () => {
  const defaultLanguage = 'en';
  loadLanguage(defaultLanguage);
});

function changeLanguage() {
  const selectedLanguage = document.getElementById('languageSwitcher').value;
  loadLanguage(selectedLanguage);
}

function loadLanguage(language) {
  fetch(`${language}.json`)
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll('[data-translate]').forEach(element => {
              const key = element.getAttribute('data-translate');
              element.textContent = data[key] || element.textContent;
          });
      })
      .catch(error => console.error('Error loading language:', error));
}
