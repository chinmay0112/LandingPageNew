function toggleInfo(button) {
    var infoDiv = button.parentElement.nextElementSibling;
    button.classList.toggle('visible');
    infoDiv.classList.toggle('visible');
    button.textContent = button.textContent === '+' ? '-' : '+';
  }

  function changeFontSize(size) {
    const body = document.body;
    const currentSize = parseInt(window.getComputedStyle(body).fontSize);

    switch (size) {
        case 'normal':
            body.style.fontSize = '16px';
            break;
        case 'larger':
            body.style.fontSize = (currentSize + 1) + 'px';
            break;
        case 'largest':
            body.style.fontSize = (currentSize + 2) + 'px';
            break;
    }
}

document.querySelector('.footer-slider').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  const footerSlider = document.querySelector('.footer-slider');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
      footerSlider.style.transform = 'translateY(0)';
  } else {
      footerSlider.style.transform = 'translateY(0)';
  }
});