const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

const closeBtn = document.querySelector('.close-menu');
closeBtn.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.mobile-nav .nav-link-mobile');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();
  });
});

function toggleMenu() {
  document.querySelector('.mobile-nav').classList.toggle('active');
}

