// DATA CONST
const JsonCapsulesLink = 'datas/capsules.json';
const TablesCapsules = [];

// JSON FILE FETCH FUNCTION
fetch(JsonCapsulesLink)
  .then(capsule => capsule.json())
  .then((data) => {
    TablesCapsules.push(...data);
    // console.log(TablesCapsules);
  })
  .catch(err => console.log(Error(err)));


//  DOM ELMENTS FOR BINDING : 
const capsuleName = document.querySelector('.data__name');
const capsuleArom = document.querySelector('.data__aroma');
const shortDescription = document.querySelector('.data__description');
const countries = document.querySelectorAll('.country');
const wrapperCapsules = document.querySelector('.slider__contentCapsulesWrapper');
const border = document.querySelector('.nav__lineBorder');
const previous = document.querySelector('.slider_previousBtn');
const next = document.querySelector('.slider_nextBtn');
const intensity_svg = document.querySelector('.intensity__gold');
const intensity_strength = document.querySelector('.intensity__strength ');

// const allcapsules = document.querySelectorAll('.capsule');
const producer = [...document.querySelectorAll('#producer')];


// VARIABLES
// This array will contains all de capsules of all countries
let capsules = [];
let LastCountryActive = document.querySelector('.activeCountry')

//Array contrains alls the country capsules
let currentCountryDataTable;

let currentData;

//This array will contain all the dom element per country caps
let allcurrentCapsulesElements = [];


// This is variable will serve check id or the capsule in previous array
let currentCapsuleId = 0;
let rotateWrapper = 0;

let lastIntensity = 4;

// FUNCTION WHICH LOOK FOR ALL THE CLIKED COUNTRY CAPSULES IN THE JSON FILE
function findCountryDatas(country) {
  currentCountryDataTable = [];
  for (let i = 0; i < TablesCapsules.length; i++) {
    for (let j = 0; j < TablesCapsules[i].countries.length; j++) {
      if (TablesCapsules[i].countries[j] === country) {
        currentCountryDataTable.push(TablesCapsules[i])
      }
    }
  }

  return currentCountryDataTable;
}

// FUNCTION REMOVE LAST COUNTRY DOM CAPSULE
function removeLasCountryCapsules() {
  while (wrapperCapsules.hasChildNodes()) {
    wrapperCapsules.removeChild(wrapperCapsules.firstChild);
  }
}

// FUNCTION CREAT CPASULE SLIDE
function creatCapsuleSlides(countryDatas) {

  // let rotateYCapsule = 0;
  const ratio = 360 / countryDatas.length;

  // Stockable variable initialize
  capsules.length = 0;

  // Create the new elements
  countryDatas.forEach((element) => {

    // Creat wrapper
    const capsule = document.createElement('div');
    capsule.setAttribute('class', 'capsule');
    capsule.setAttribute('data-name', `${element.casuleName}`);
    capsule.setAttribute('data-id', `${element.id}`);
    // capsule.style.transform = `rotateY(30deg) translateZ(288px)`;

    // Create image
    const capsuleImage = document.createElement('img');
    capsuleImage.src = `img/gammes_capsules/${element.mainImage}`;
    capsuleImage.setAttribute('alt', `Nesspresso ${element.countries}`);
    capsule.appendChild(capsuleImage);


    // Stocking all in variable
    capsules.push(capsule);
  });

  for (let i = 0; i < capsules.length; i++) {
    capsules[i].style.transform = `rotateY(${ratio * i}deg) translateZ(280px) translateX(-50%)`;
  }

  allcurrentCapsulesElements = [...capsules];

  // append all chidrens
  capsules.forEach((element) => {
    wrapperCapsules.appendChild(element);
  });
}

// FUNCTION INIT CLASS FOR SLIDER
function setcurrentCapsule() {
  for (let i = 0; i < allcurrentCapsulesElements.length; i++) {
    allcurrentCapsulesElements[0].classList.add('currentCap');

  }
}

// FUNCTION SHOW THE COUNTRY IN MAP
function GetShowCountryOnMap(country) {
  producer.forEach((element) => {
    if (element.dataset.country === country) {
      element.classList.add('country--active');
    } else {
      element.classList.remove('country--active');
    }
  });
}

function setBorderPosition(element) {
  border.style.transform = `translateX(${element.offsetLeft}px)`;
}

// function Sect Intensity 
function setIntensity() {

}

// FUNCTION GET THE COUNTRY BY CLICK
countries.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    rotateWrapper = 0;
    wrapperCapsules.style.transform = `rotateY(0deg)`;
    currentCapsuleId = 0;

    LastCountryActive.classList.remove('activeCountry');
    LastCountryActive = element;
    LastCountryActive.classList.add('activeCountry');
    const countryDatas = findCountryDatas(element.dataset.country);

    console.log(countryDatas);

    GetShowCountryOnMap(element.dataset.country);

    // removing last country children
    removeLasCountryCapsules();

    // Creat all capsules element
    creatCapsuleSlides(countryDatas);

    // Add Class for current Cap
    setcurrentCapsule();

    // Get current capsule id a show his DOM like Next and Previous BTN
    getCurrentCapsuleId(currentCapsuleId);



    setBorderPosition(element);

  });
});































/***********************************************************
 *
 *   BELLOW : FUNCTION WIHCH TRAIT THE CAPSULES
 * 
 **********************************************************/






// FUNCTION  FIN THE CURRENT CAPSULE DATAS
function findCurrentCapsuleDatas(id) {
  return currentCountryDataTable.find((item) => {
    return item.id == id;
  });
}


// FUNCION AFFICHE THE DATA
function getCurrentCapsuleDomDescription(data) {
  console.log('data',data);

  capsuleName.textContent = `${data.casuleName}`;
  shortDescription.textContent = `${data.shortDescription}`;


  // set intensity 
  intensity_svg.classList.remove(`intensity__gold-${lastIntensity}`);
  lastIntensity = data.intensity;
  intensity_svg.classList.add(`intensity__gold-${data.intensity}`);


  // set strength 
  if (data.intensity <= 4) {
    intensity_strength.textContent = 'Doux';
  } else if (data.intensity <= 8) {
    intensity_strength.textContent = 'Moyen';
  } else {
    intensity_strength.textContent = 'Fort';
  }

  // set Aromatique
  let currentAromData;
  for (let i = 0; i < data.aromatic_notes.length; i++) {
    if (i == 0) {
      currentAromData = data.aromatic_notes[0];
    }else {
      currentAromData += ` • ${data.aromatic_notes[i]}`;
    }
  }
  capsuleArom.innerHTML = currentAromData;
}








function getCurrentCapsuleId(id) {
  const currentId = allcurrentCapsulesElements[id].dataset.id;
  // console.log(`current capsule id ${currentId}`);
  const currentCapsuleDataId = findCurrentCapsuleDatas(currentId);
  getCurrentCapsuleDomDescription(currentCapsuleDataId);
}







// EVENT ON NEXT BTN

next.addEventListener('click', () => {
  // console.log('allcurrentCapsule', allcurrentCapsulesElements.length);
  const rotateCaroussel = 360 / allcurrentCapsulesElements.length;
  if (allcurrentCapsulesElements.length > 1) {
    wrapperCapsules.style.transform = `rotateY(${rotateWrapper += rotateCaroussel}deg)`;
  }

  if (currentCapsuleId == 0) {
    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId = allcurrentCapsulesElements.length - 1;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  } else {
    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId--;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  }
  getCurrentCapsuleId(currentCapsuleId);
});








// EVENT ON PREVIOUS BTN 
previous.addEventListener('click', () => {
  // console.log(allcurrentCapsulesElements)
  const rotateCaroussel = 360 / allcurrentCapsulesElements.length;
  if (allcurrentCapsulesElements.length > 1) {
    wrapperCapsules.style.transform = `rotateY(${rotateWrapper -= rotateCaroussel}deg)`;
  }
  // capsules[i].style.transform = `rotateY(${ratio * i}deg) translateZ(280px) scale(.6)`;

  if (currentCapsuleId == allcurrentCapsulesElements.length - 1) {
    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId = 0;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  }

  else {
    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId++;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  }
  getCurrentCapsuleId(currentCapsuleId);

});





























// ONLOAD FUNCTION
window.addEventListener('load', () => {
  const onloadCountryDatas = findCountryDatas('Mexique');
  GetShowCountryOnMap('Mexique');
  creatCapsuleSlides(onloadCountryDatas);
  setcurrentCapsule();
});



