// === MENU HAMBÚRGUER ===
const hamburguer = document.querySelector('.hamburguer');
const navList = document.querySelector('.nav-list');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navList.classList.remove('active');
}));

// === EFEITO FLUTUANTE AO ROLAR ===
window.addEventListener('scroll', function() {
  var elementos = document.querySelectorAll('.flutuante');
  
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var rect = elemento.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      elemento.classList.add('flutuando');
    } else {
      elemento.classList.remove('flutuando');
    }
  }
});

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
