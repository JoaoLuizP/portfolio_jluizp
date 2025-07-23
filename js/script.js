// === DARK MODE COM ÍCONE ===
const toggleBtn = document.getElementById('toggle-theme');
const themeIcon = toggleBtn?.querySelector('i');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  if (themeIcon) {
    themeIcon.classList.remove('bi-moon');
    themeIcon.classList.add('bi-sun');
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    if (themeIcon) {
      themeIcon.classList.toggle('bi-moon', !isDark);
      themeIcon.classList.toggle('bi-sun', isDark);
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
