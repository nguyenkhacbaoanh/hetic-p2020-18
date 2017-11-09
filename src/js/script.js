// DATA CONST
const JSON_CAPSULES_LINK = "datas/capsules.json";
const TABLECAPSULES = [];


fetch(JSON_CAPSULES_LINK)
	.then(capsule => capsule.json())
	.then(data => {
		TABLECAPSULES.push(...data);
		console.log(TABLECAPSULES);
	})
	.catch(err => console.log(Error(err)));


















//  DOM ELMENTS FOR BINDING : 
// const capsuleName = document.querySelector(".capsuleName");
// const capsuleArom = document.querySelector(".capsuleArom");
// const shortDescription = document.querySelector(".shortDescription");
// const CAPSULES = document.querySelectorAll(".capsule");
// const PREVIOUS = document.querySelector(".previous");
// const NEXT = document.querySelector(".next");
const countries = document.querySelectorAll(".country");









// VARIABLES
// let currentCapsule = 0;
// let currentId;
let currentCountry;
let currentCountryData;
// let currentData;
































// FUNCTION GET THE COUNTRY BY CLICK
countries.forEach(function (element) {
	element.addEventListener("click", () => {

		currentCountry = element.dataset.country;
		findCountryDatas(currentCountry);
	});

});


window.onload = function () {
	findCountryDatas("Mexique");
};



// FUNCTION CALLED BY 
function findCountryDatas(country) {
	currentCountryData = [];
	for (let i = 0; i < TABLECAPSULES.length; i++) {
		for (let j = 0; j < TABLECAPSULES[i].countries.length; j++) {
			if (TABLECAPSULES[i].countries[j] === country) {
				currentCountryData.push(TABLECAPSULES[i]);

			}
		}
	}
	console.log(currentCountryData);
	return currentCountryData;

}


//FUNCTION  
// function findCurrentData(id) {
// 	return TABLECAPSULES.find(item => {
// 		return item.id == id;
// 	});
// }

// TABLECAPSULES.find(findCurrentData());
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








//FUNCION AFFICHE LA DATA
// function insertData(data) {
// 	// console.log(data.casuleName);
// 	capsuleName.textContent = `${data.casuleName}`;
// 	shortDescription.textContent = `${data.shortDescription}`;


// 	let currentAromData; 

// 	for (let i = 0; i < data.aromatic_notes.length; i++) {
// 		if (i == 0) {


// 			currentAromData = data.aromatic_notes[0];
// 		}
// 		else {
// 			currentAromData += ` • ${data.aromatic_notes[i]}`;
// 		}


// 	}
// 	capsuleArom.innerHTML = currentAromData;

// }





















