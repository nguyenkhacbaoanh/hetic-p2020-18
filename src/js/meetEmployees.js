// DATA CONST
const JsonEmployeesLink = 'datas/employees.json';
const TablesEmployees = [];

//  DOM ELMENTS FOR BINDING : 
const employeeName = document.querySelector('.employee__name');
const employeeCountry = document.querySelector('.country__span');
const employeeQuote = document.querySelector('.employee__quote');
const iconSun = document.querySelector('.icon__dataSun');
const iconAltitude = document.querySelector('.icon__dataAltitude');
const iconRain = document.querySelector('.icon__dataRain');
const arrows = document.querySelectorAll('.employee__slider .slider__arrow');

console.log(TablesEmployees);

// JSON FILE FETCH FUNCTION
fetch(JsonEmployeesLink)
  .then(employee => employee.json())
  .then((data) => {
    TablesEmployees.push(...data);
    console.log(TablesEmployees);
  })
  .catch(err => console.log(Error(err)));

let currentEmployee = 1;

console.log(TablesEmployees);



// employeeName.textContent = TablesEmployees[currentEmployee].employeeName;
// console.log(TablesEmployees);








// FUNCTION ON CLICK ON SLIDER ARROWS - UPDATE CONTENT
arrows.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    rotateWrapper = 0;
    wrapperCapsules.style.transform = `rotateY(0deg)`;
    currentCapsuleId = 0;
    const countryDatas = findCountryDatas(element.dataset.country);

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