function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    // efeito de hover
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // NOVO: anima carrossel + depois entra na página
    card.addEventListener('click', function (event) {
      event.preventDefault(); // impede entrar na página na hora

      const id = this.id;
      const lastTwo = id.slice(-2);
      const num = Number(lastTwo);

      const button = document.getElementById(String(num));
      if (button) {
        selectCarouselItem(button);
      }

      const link = this.getAttribute("href");

      // delay pro carrossel girar antes de trocar de página
      setTimeout(() => {
        window.location.href = link;
      }, 600); // 0.6s
    });
  }
}

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;

  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }
  selectedButtonElement.classList.add('s-controller__button--active');
}

document.addEventListener("DOMContentLoaded", function () {
  addEventListenersToCards();
}, false);
