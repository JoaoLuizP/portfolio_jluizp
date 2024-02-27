const hamburguer = document.querySelector('.hamburguer');
const navList = document.querySelector('.nav-list');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navList.classList.remove('active');
}))


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



