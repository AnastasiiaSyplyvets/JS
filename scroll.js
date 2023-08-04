'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

function handleDocScroll() {
   console.log(window.pageYOffset)

    if(window.pageYOffset > 500) {
        const foundClass = document.querySelector('.animated-section');

        foundClass.classList.add('.active');
    }
   
    
}

const throttledFunc = _.throttle(handleDocScroll, 500)

document.addEventListener('scroll', throttledFunc)