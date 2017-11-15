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
const wrapperCapsules = document.querySelector('.capsules__slider .capsules');

const previous = document.querySelector('.slider_previousBtn');
const next = document.querySelector('.slider_nextBtn');
// const allcapsules = document.querySelectorAll('.capsule');

const producer = [...document.querySelectorAll('#producer')];





// VARIABLES
// This array will contains all de capsules of all countries
let capsules = [];

//Array contrains alls the country capsules
let currentCountryDataTable;

let currentData;


//This array will contain all the dom element per country caps
let allcurrentCapsulesElements = [];
// This is variable will serve check id or the capsule in previous array
let currentCapsuleId;





















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

  // removing last country children 
  removeLasCountryCapsules();
  capsules.length = 0;

  // Create the new elements
  countryDatas.forEach((element) => {

    // Creat wrapper
    const capsule = document.createElement('div');
    capsule.setAttribute('class', 'capsule');
    capsule.setAttribute('data-name', `${element.casuleName}`);
    capsule.setAttribute('data-id', `${element.id}`);


    // Create image
    const capsuleImage = document.createElement('img');
    capsuleImage.src = `img/gammes_capsules/${element.mainImage}`;
    capsuleImage.setAttribute('alt', `Nesspresso ${element.countries}`);
    capsule.appendChild(capsuleImage);


    // Stocking all in variable
    capsules.push(capsule);
  });

  allcurrentCapsulesElements = [...capsules];

  // append all chidrens
  capsules.forEach((element) => {
    wrapperCapsules.appendChild(element);
  });
}







// FUNCTION INIT CLASS FOR SLIDER
function setcurrentCapsule() {
  for (let i = 0; i < allcurrentCapsulesElements.length; i++) {
    if (allcurrentCapsulesElements.length >= 3) {
      allcurrentCapsulesElements[1].classList.add('currentCap');
      currentCapsuleId = 1
    } else {
      allcurrentCapsulesElements[0].classList.add('currentCap');
      currentCapsuleId = 0;
    }
  }
}




function GetShowCountryOnMap(country) {
  producer.forEach((element) => {
    if (element.dataset.country === country) {
      console.log(element.classList);
      element.classList.add('country--active');
      console.log('ok')
    } else {
      element.classList.remove('country--active');
    }
  });
}



// FUNCTION GET THE COUNTRY BY CLICK
countries.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const countryDatas = findCountryDatas(element.dataset.country);
    GetShowCountryOnMap(element.dataset.country);
    // Creat all capsules element
    creatCapsuleSlides(countryDatas);

    // Add Class for current Cap
    setcurrentCapsule();
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


// FUNCION AFFICHE LA DATA
function getCurrentCapsuleDomDescription(data) {
  // console.log(data.casuleName);
  capsuleName.textContent = `${data.casuleName}`;
  shortDescription.textContent = `${data.shortDescription}`;

  let currentAromData;

  for (let i = 0; i < data.aromatic_notes.length; i++) {
    if (i == 0) {


      currentAromData = data.aromatic_notes[0];
    }
    else {
      currentAromData += ` • ${data.aromatic_notes[i]}`;
    }
  }
  capsuleArom.innerHTML = currentAromData;
}











// EVENT ON NEXT BTN
next.addEventListener('click', () => {
  // console.log(allcurrentCapsulesElements)
  if (currentCapsuleId < allcurrentCapsulesElements.length - 1) {

    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId++;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  } else {
    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId = 0;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');

  }

  let currentId = allcurrentCapsulesElements[currentCapsuleId].dataset.id;
  console.log(`current capsule id ${currentId}`);

  let currentCapsuleDataId = findCurrentCapsuleDatas(currentId);
  console.log(currentCapsuleDataId);
  getCurrentCapsuleDomDescription(currentCapsuleDataId );
});








// EVENT ON PREVIOUS BTN 
previous.addEventListener('click', () => {
  // console.log(allcurrentCapsulesElements)
  if (currentCapsuleId > 0) {

    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId--;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  } else {
    allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
    currentCapsuleId = allcurrentCapsulesElements.length - 1;
    allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
  }
  let currentId = allcurrentCapsulesElements[currentCapsuleId].dataset.id;
  console.log(`current capsule id ${currentId}`);
  let currentCapsuleDataId = findCurrentCapsuleDatas(currentId);
  console.log(currentCapsuleDataId);
  getCurrentCapsuleDomDescription(currentCapsuleDataId);

});



























// ONLOAD FUNCTION
window.addEventListener('load', () => {
  const onloadCountryDatas = findCountryDatas('Mexique');
  GetShowCountryOnMap('Mexique');
  creatCapsuleSlides(onloadCountryDatas);
  setcurrentCapsule();
  console.log(allcurrentCapsulesElements);
});
