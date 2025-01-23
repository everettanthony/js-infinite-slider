const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderCount = (Array.from(document.querySelectorAll(".carousel .slider section"))).length;
let direction = -1;

slider.style.width = `${sliderCount * 100}vw`;

prev.addEventListener('click', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }

    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translateX(100vw)';
});

next.addEventListener('click', function() {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        direction = -1;
    }

    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translateX(-100vw)';
});

slider.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';

    setTimeout(function() {
        slider.style.transition = 'all 0.5s ease-in-out';
    });
});