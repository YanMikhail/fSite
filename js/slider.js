const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = (n) => {
  const countSlide = document.querySelectorAll('.slide');
  for (let slide of countSlide) {
    slide.classList.remove('active');
  }
  countSlide[n].classList.add('active');
};

const activeDot = (n) => {
  const countDots = document.querySelectorAll('.dot');
  for (let dot of countDots) {
    dot.classList.remove('active');
  }
  countDots[n].classList.add('active');
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  const count = document.querySelectorAll('.slide').length;
  if (index == count - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
