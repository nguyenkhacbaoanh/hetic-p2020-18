//  DOM ELMENTS FOR BINDING : 
const employeeName = document.querySelector('.employee__name');
const employeeCountry = document.querySelector('.country__span');
const employeeQuote = document.querySelector('.employee__quote');
const employeeImg = document.querySelector('.meetEmployees__farmerWrapper img');
const iconSun = document.querySelector('.icon__dataSun');
const iconAltitude = document.querySelector('.icon__dataAltitude');
const iconRain = document.querySelector('.icon__dataRain');
const sliderCounter = document.querySelector('.slider__counter');

const sliderArrows = document.querySelectorAll('.employee__slider .slider__arrow');

// EMPLOYEES CONTENT ARRAY
const tablesEmployees = [
  {
    "id": 1,
    "employeeName": "Humberto Galeano",
    "employeeCountry": "Brésil",
    "employeeQuote": "Nespresso respecte la qualité de mon travail et m’accompagne au quotidien dans la production de mon café.",
    "iconSun": "176 jours / an",
    "iconAltitude": "910 m",
    "iconRain": "135 jours / an",
    "employeeImg": "../img/meet_employees/employees-humberto-galeano-coffee-farmer.jpg"
  },
  {
    "id": 2,
    "employeeName": "Gabriela Evano",
    "employeeCountry": "Guatemala",
    "employeeQuote": "Pouvoir me réveiller tous les matins en sachant que je vais travailler dans un cadre aussi magnifique me rappelle chaque jour à quel point j’adore mon métier.",
    "iconSun": "156 jours / an",
    "iconAltitude": "780 m",
    "iconRain": "145 jours / an",
    "employeeImg": "../img/meet_employees/grabriela-evano-coffee-farmer-guatemala.jpg"
   } ,
  {
    "id": 3,
    "employeeName": "Esteban Suarez",
    "employeeCountry": "Colombie",
    "employeeQuote": "Ma famille cultive le café depuis toujours, pour rien au monde je ne ferais autre chose. Nespresso nous a permis de perpétuer cette tradition familiale en nous offrant de meilleurs moyens de cultiver.",
    "iconSun": "184 jours / an",
    "iconAltitude": "820 m",
    "iconRain": "127 jours / an",
    "employeeImg": "../img/meet_employees/esteban-suarez-coffee-farmer-colombia.jpg"
  }
];

// INITIALIZE EMPLOYEE CURRENTLY DISPLAYED
let currentEmployee = 0;

// FUNCTION SET EMPLOYEE DATA IN HTML
function employeeSetData() {
  employeeName.textContent = tablesEmployees[currentEmployee].employeeName;
  employeeCountry.textContent = tablesEmployees[currentEmployee].employeeCountry;
  employeeQuote.textContent = tablesEmployees[currentEmployee].employeeQuote;
  iconSun.textContent = tablesEmployees[currentEmployee].iconSun;
  iconAltitude.textContent = tablesEmployees[currentEmployee].iconAltitude;
  iconRain.textContent = tablesEmployees[currentEmployee].iconRain;

  employeeImg.setAttribute('src', tablesEmployees[currentEmployee].employeeImg);
  employeeImg.setAttribute('alt', tablesEmployees[currentEmployee].employeeName);

  sliderCounter.textContent = "- " + (currentEmployee + 1) + " / 3";
}

// FUNCTION ON CLICK ON SLIDER ARROWS - UPDATE EMPLOYEE CONTENT
sliderArrows.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    if (element.classList.contains("arrows__arrowRight")) {
      if ( (currentEmployee + 1) > tablesEmployees.length - 1)
        currentEmployee = 0;

      else 
        currentEmployee++;

    } else {
      if ( (currentEmployee - 1) < 0)
        currentEmployee = tablesEmployees.length - 1;
    
      else
        currentEmployee--;
    }
      
    employeeSetData();

  });
});

// Initialize employee display
employeeSetData();