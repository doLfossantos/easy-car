class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(n) {
  showSlide((currentSlide += n));
}

function showSlide(n) {
  if (n >= totalSlides) {
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = totalSlides - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let intervalId; // Variável para armazenar o ID do intervalo
  let buttonClicked = false; // Variável para controlar se o botão foi clicado

  function changeSlide(n) {
    showSlide((currentSlide += n));
    resetInterval();
  }

  function showSlide(n) {
    if (n >= totalSlides) {
      currentSlide = 0;
    }
    if (n < 0) {
      currentSlide = totalSlides - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

    slides[currentSlide].classList.add('active');
  }

  // Inicialmente, mostra o primeiro slide.
  showSlide(currentSlide);

  // Define um intervalo para avançar automaticamente os slides após 3 segundos (3000 milissegundos)
  function startInterval() {
    intervalId = setInterval(function () {
      if (!buttonClicked) {
        changeSlide(1); // Avança para o próximo slide se o botão não foi clicado
      }
    }, 4000);
  }

  // Limpa o intervalo atual
  function resetInterval() {
    clearInterval(intervalId);
    startInterval(); // Inicia o intervalo novamente
  }

  // Iniciar o intervalo quando a página é carregada
  startInterval();

  // Adicionar evento de clique ao botão da direita
  const nextButton = document.querySelector('.slider-arrow-right');
  nextButton.addEventListener('click', function () {
    changeSlide(1);
    buttonClicked = true; // Define que o botão foi clicado
  });

  // Adicionar evento de clique ao botão da esquerda
  const prevButton = document.querySelector('.slider-arrow-left');
  prevButton.addEventListener('click', function () {
    changeSlide(-1); // Retrocede para o slide anterior
    buttonClicked = true; // Define que o botão foi clicado
  });
});
