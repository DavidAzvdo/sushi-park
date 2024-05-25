$(document).ready(function() {
  $('.mobile-btn').on('click', function () {
    $('#mobile-menu').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
  });

  const carousel = $('.carousel');
  const itemWidth = $('.carousel-item-menu').outerWidth(true);
  const numItems = $('.carousel-item-menu').length;
  const carouselWidth = numItems * itemWidth;
  let currentPosition = 0;

  $('.prev').click(function() {
    currentPosition -= itemWidth;
    currentPosition = Math.max(currentPosition, 0);
    carousel.css('transform', `translateX(-${currentPosition}px)`);
  });

  $('.next').click(function() {
    currentPosition += itemWidth;
    currentPosition = Math.min(currentPosition, carouselWidth - $('.carousel').width()); // Ajuste aqui
    carousel.css('transform', `translateX(-${currentPosition}px)`);
  });
  $('#nav-list a, .mobile-menu a').on('click', function(event) {
    // Verifica se o link possui um hash (ID da seção)
    if (this.hash !== "") {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Guarda o hash (ID da seção)
        var hash = this.hash;

        // Usa jQuery animate para rolar suavemente até a seção
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            // Adiciona o hash na URL após a rolagem (comportamento padrão)
            window.location.hash = hash;
        });
    }
});

});
