const btns = document.querySelectorAll('.coffeeBeans__sliderBtn');
const slides = document.querySelectorAll('.coffeeBeans__slide');
const carousel = document.querySelector('.coffeeBeans__sliderCarousel');
const allDescritpions = [...document.querySelectorAll('.coffeeBean')];


// console.log(slides);
let currenSlide = 0;
let rotationY = 0;

// import setClassList function
import { setClassList } from "./helper.js";
// setClassList(false, morphingInfos[0], 'info--active');

// DATAS OF THE SECTON
const TablesCoffeeFamiliesJson = [
  {
    "id": 0,
    "coffeeFamily": "Titre0",
    "coffeeDescription": "description0"
  },
  {
    "id": 1,
    "coffeeFamily": "Titre1",
    "coffeeDescription": "description 1"
  },
  {
    "id": 2,
    "coffeeFamily": "Titre2",
    "coffeeDescription": "description 2"
  }
];

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // console.log('click')
    if (btn.classList.contains('coffeeBeans__sliderBtnPrev')) {
      rotationY-= 120;
      if(currenSlide >=  slides.length-1) {
        slides[currenSlide].classList.remove('currentSlide');
        console.log(allDescritpions[currenSlide]);
        setClassList(false,allDescritpions[currenSlide], 'coffeeBean--active');
        // allDescritpions[currenSlide].classList.remove('coffeeBean--active');
        
        currenSlide = 0;

        slides[currenSlide].classList.add('currentSlide');
        // allDescritpions[currenSlide].classList.add('coffeeBean--active');
        setClassList(true, allDescritpions[currenSlide], 'coffeeBean--active');
        // currentSliderData(currenSlide)
      } else {
        slides[currenSlide].classList.remove('currentSlide');
        // allDescritpions[currenSlide].classList.remove('coffeeBean--active');
        setClassList(false,allDescritpions[currenSlide], 'coffeeBean--active');

        currenSlide++;

        slides[currenSlide].classList.add('currentSlide');
        // allDescritpions[currenSlide].classList.add('coffeeBean--active');
        setClassList(true,allDescritpions[currenSlide], 'coffeeBean--active');
        // currentSliderData(currenSlide)
      }

    } else {
      rotationY+= 120;

      if(currenSlide <= 0 ) {
        slides[currenSlide].classList.remove('currentSlide');
        // allDescritpions[currenSlide].classList.remove('coffeeBean--active');
        setClassList(false,allDescritpions[currenSlide], 'coffeeBean--active');

        currenSlide = slides.length-1;

        slides[currenSlide].classList.add('currentSlide');
        // allDescritpions[currenSlide].classList.add('coffeeBean--active');
        setClassList(true,allDescritpions[currenSlide], 'coffeeBean--active');
        // currentSliderData(currenSlide)
      } else {
        slides[currenSlide].classList.remove('currentSlide');
        // allDescritpions[currenSlide].classList.remove('coffeeBean--active');
        setClassList(false,allDescritpions[currenSlide], 'coffeeBean--active');

        currenSlide--;

        slides[currenSlide].classList.add('currentSlide');
        // allDescritpions[currenSlide].classList.add('coffeeBean--active');
        setClassList(true,allDescritpions[currenSlide], 'coffeeBean--active');
        // currentSliderData(currenSlide)
      }
    }
    carousel.style.transform = "rotateY(" + rotationY+ "deg)";
    carousel.style.webkitTransform = "rotateY(" + rotationY+ "deg)";
    carousel.style.mozTransform = "rotateY(" + rotationY+ "deg)";
  });
});

// FUNCTION SET DATA
// function currentSliderData(index) {
//   document.querySelector('.coffeeBean__family').textContent = TablesCoffeeFamiliesJson[index].coffeeFamily;
//   document.querySelector('.coffeeBean__description p').textContent = TablesCoffeeFamiliesJson[index].coffeeDescription;
// }