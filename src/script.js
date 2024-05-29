$(document).ready(function() {
  $('.mobile-btn').on('click', function () {
    $('#mobile-menu').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
  });
});

const initSlider = () =>{
  const imageList = document.querySelector('.slider-wrapper .image-list')
  const slidebtns = document.querySelectorAll('.slider-wrapper .slide-btn')
  const slideScrollbar= document.querySelector('.container .slider-scrollbar')
  const scrollbarThumb = slideScrollbar.querySelector('.scrollbar-thumb')
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

  const scrollbarTrack = document.querySelector('.scrollbar-track'); // Certifique-se de ter um contêiner para o track

  scrollbarThumb.addEventListener('mousedown', (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
  
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      let newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = slideScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth
  
      // Limitar o movimento do polegar dentro do track
      const maxPosition = scrollbarTrack.clientWidth - scrollbarThumb.clientWidth;
      if (newThumbPosition < 0) {
        newThumbPosition = 0;
      } else if (newThumbPosition > maxPosition) {
        newThumbPosition = maxPosition;
      }
  const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
const scrollPoistion = (boundedPosition / maxThumbPosition) * maxScrollLeft
      scrollbarThumb.style.left = `${newThumbPosition}px`;
      imageList.scrollLeft = scrollPoistion;
    };
  
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });
  
  
  slidebtns.forEach(button => {
    button.addEventListener('click', () => {
const direction = button.id === 'prev-slide' ? -1 :1;
const scrollAmount = imageList.clientWidth * direction;
imageList.scrollBy ({left: scrollAmount, behavior: 'smooth'})
    })
  })
  const handlesSlideButtons = () => {
    slidebtns[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block'
    slidebtns[1].style.display = imageList.scrollLeft >=  maxScrollLeft ? 'none' : 'block'

  }
const updateScrollThumbPosition = () => {
  const scrollPoistion = imageList.scrollLeft
  const thumbPosition = (scrollPoistion / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left =  `${thumbPosition}px`

}


  imageList.addEventListener('scroll', () => {
    handlesSlideButtons();
    updateScrollThumbPosition();
  })
}
window.addEventListener('load', initSlider)