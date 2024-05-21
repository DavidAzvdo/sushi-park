$(document).ready(function() {
  $('.mobile-btn').on('click', function () {
    $('#mobile-menu').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
  });

  // Defina currentIndex e totalSlides
  let currentIndex = 0;
  const totalSlides = $('.slide').length;

  function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    updateSlidePosition();
  }

  function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Defina o intervalo após o carregamento do documento
  setInterval(showNextSlide, 5000);
});
