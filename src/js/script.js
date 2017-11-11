// DATA CONST
const JsonCapsulesLink = 'datas/capsules.json';
const TablesCapsules = [];


fetch(JsonCapsulesLink)
  .then(capsule => capsule.json())
  .then((data) => {
    TablesCapsules.push(...data);
    console.log(TablesCapsules);
  })
  .catch(err => console.log(Error(err)));










//  DOM ELMENTS FOR BINDING : 
const capsuleName = document.querySelector('.capsuleName');
const capsuleArom = document.querySelector('.capsuleArom');
const shortDescription = document.querySelector('.capsuleShortDescription');
// const CAPSULES = document.querySelectorAll(".capsule");
// const PREVIOUS = document.querySelector(".previous");
// const NEXT = document.querySelector(".next");
const countries = document.querySelectorAll('.country');
const allCapsules = document.querySelector('.countries__currentCapsules');









// VARIABLES
// let currentCapsule = 0;
// let currentId;
// let currentCountry;
let currentCountryDataTable;
let currentData;
let capsules = [];




















// FUNCTION CHECK THE SEARCHED COUNTRY
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
  while (allCapsules.hasChildNodes()) {
    allCapsules.removeChild(allCapsules.firstChild);
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
    const capsuleWrapper = document.createElement('div');
    capsuleWrapper.setAttribute('class', 'capsule');
    capsuleWrapper.setAttribute('data-name', `${element.casuleName}`);

    // Create image
    const capsuleImage = document.createElement('img');
    capsuleImage.src = `img/test`;
    capsuleImage.setAttribute('alt', `Nesspresso ${element.countries}`);

    capsuleWrapper.appendChild(capsuleImage);

    // Stocking all in variable

    capsules.push(capsuleWrapper);
  });

  // append all chidrens
  capsules.forEach((element) => {
    allCapsules.appendChild(element);
  });
}





















// ONLOEAD FUNCTION
window.onload = () => {

  const onloadCountryDatas = findCountryDatas('Mexique');
  creatCapsuleSlides(onloadCountryDatas);
};






















// FUNCTION GET THE COUNTRY BY CLICK
countries.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const countryDatas = findCountryDatas(element.dataset.country);

    creatCapsuleSlides(countryDatas);
    insertDescription(element);
  });
});














//FUNCTION  
// function findCurrentData(id) {
// 	return TablesCapsules.find(item => {
// 		return item.id == id;
// 	});
// }

// TablesCapsules.find(findCurrentData());
// {name: "cherries", quantity: 5}
























// NEXT.addEventListener("click", function getIdOfCapsule() {

// 	if (currentCapsule >= CAPSULES.length - 1) {
// 		currentCapsule = 0;
// 		CAPSULES[2].classList.remove("currentCap");
// 		CAPSULES[currentCapsule].classList.add("currentCap");

// 	}
// 	else {
// 		CAPSULES[currentCapsule].classList.remove("currentCap");
// 		currentCapsule++;
// 		CAPSULES[currentCapsule].classList.add("currentCap");


// 	}

// 	currentId = CAPSULES[currentCapsule].dataset.id;
// 	console.log(`current capsule id ${currentId}`);
// 	// return capsules[currentCapsule].dataset;

// 	currentData = findCurrentData(currentId);
// 	insertData(currentData);
// });








// PREVIOUS.addEventListener("click", function getIdOfCapsule() {

// 	if (currentCapsule === 0) {
// 		currentCapsule = CAPSULES.length - 1;
// 		CAPSULES[0].classList.remove("currentCap");
// 		CAPSULES[currentCapsule].classList.add("currentCap");

// 	}
// 	else {
// 		CAPSULES[currentCapsule].classList.remove("currentCap");
// 		currentCapsule--;
// 		CAPSULES[currentCapsule].classList.add("currentCap");


// 	}

// 	currentId = CAPSULES[currentCapsule].dataset.id;
// 	console.log(`current capsule id ${currentId}`);

// 	// currentData = findCurrentData(currentId);
// });








// FUNCION AFFICHE LA DATA
function insertDescription(data) {
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

