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


// === DARK MODE ===
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Carrega o tema salvo do localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  if (toggleBtn) toggleBtn.textContent = '☀️ Modo Claro';
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️ Modo Claro';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙 Modo Escuro';
      localStorage.setItem('theme', 'light');
    }
  });
}
