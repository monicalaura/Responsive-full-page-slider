const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

//NEXT
const nextSlide = () => { 
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

//PREVIOUS
const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {   
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime); 
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {   
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime); 
  }
});

// Auto slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
