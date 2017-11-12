// DATA CONST
const JsonCapsulesLink = 'datas/capsules.json';
const TablesCapsules = [];


fetch(JsonCapsulesLink)
  .then(capsule => capsule.json())
  .then((data) => {
    TablesCapsules.push(...data);
    // console.log(TablesCapsules);
  })
  .catch(err => console.log(Error(err)));




// ONLOEAD FUNCTION FOR MEXIQUE
// window.onload = () => {

// }







//  DOM ELMENTS FOR BINDING : 
const capsuleName = document.querySelector('.data__name');
const capsuleArom = document.querySelector('.data__aroma');
const shortDescription = document.querySelector('.data__description');
const countries = document.querySelectorAll('.country');
const wrapperCapsules = document.querySelector('.capsules__slider .capsules');

const previous = document.querySelector('.slider_previousBtn');
const next = document.querySelector('.slider_nextBtn');


const allcapsules = document.querySelectorAll('.capsule')





// VARIABLES

let allcurrentCapsulesElements = [];



let currentCapsuleId;

let currentCountryDataTable;
let currentData;
let capsules = [];




















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
    } else {
      allcurrentCapsulesElements[0].classList.add('currentCap');
    }
  }
}







// FUNCTION GET THE COUNTRY BY CLICK
countries.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const countryDatas = findCountryDatas(element.dataset.country);

    // Creat all capsules element
    creatCapsuleSlides(countryDatas);

    // Add Class for current Cap
    setcurrentCapsule();
  });
});



// EVENT ON NEXT BTN

// next.addEventListener('click', () => {
//   console.log(allcurrentCapsulesElements)
//   if (allcurrentCapsulesElements.length > 0) {

//     allcurrentCapsulesElements[currentCapsuleId].classList.remove('currentCap');
//     currentCapsuleId++;
//     allcurrentCapsulesElements[currentCapsuleId].classList.add('currentCap');
//   }
// }




  // currentId = CAPSULES[currentCapsule].dataset.id;
  // console.log(`current capsule id ${currentId}`);
  // // return capsules[currentCapsule].dataset;

  // currentData = findCurrentData(currentId);
  // insertData(currentData);
// });




















window.addEventListener('load', () => {
  const onloadCountryDatas = findCountryDatas('Mexique');
  creatCapsuleSlides(onloadCountryDatas);
  setcurrentCapsule();
  console.log(allcurrentCapsulesElements);
});

























































//FUNCTION  
// function findCurrentData(id) {
// 	return TablesCapsules.find(item => {
// 		return item.id == id;
// 	});
// }

// TablesCapsules.find(findCurrentData());
// {name: "cherries", quantity: 5}































// EVENT ON PREVIOUS BTN
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
// function insertDescription(data) {
//   // console.log(data.casuleName);
//   capsuleName.textContent = `${data.casuleName}`;
//   shortDescription.textContent = `${data.shortDescription}`;


//   let currentAromData;

//   for (let i = 0; i < data.aromatic_notes.length; i++) {
//     if (i == 0) {


//       currentAromData = data.aromatic_notes[0];
//     }
//     else {
//       currentAromData += ` • ${data.aromatic_notes[i]}`;
//     }


//   }
//   capsuleArom.innerHTML = currentAromData;
// }