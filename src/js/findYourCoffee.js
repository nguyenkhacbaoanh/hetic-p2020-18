// quizz elements
const findYourCoffeeHeader = document.querySelector('.findYourCoffee__header');
const findYourCoffeeHeaderContent = document.querySelector('.findYourCoffee__headerContent');
const quizzQuestions = document.querySelectorAll('.quizz__questionIndividual');
const quizzRestart = document.querySelector('.capsuleResult__restart');
const quizzStart = document.querySelector('.quizz__start');

const quizzButtons = document.querySelectorAll('.quizz__questionList .button');
// quizzButtons[0] --> start button
// quizzButtons[1] --> previous button
// quizzButtons[2] --> next button
// quizzButtons[3] --> validate button

// quizz result elements
const cup = document.querySelector('.cup');
const capsuleResult = document.querySelector('.capsuleResult');
const capsuleResultHeader = document.querySelector('.capsuleResult__description');

const capShortDescription = document.querySelector('.capsuleResult__capsuleShortDescription');
const capImg = document.querySelector('.capsuleResult__capsuleImg img');
const capName = document.querySelector('.capsuleResult__capsuleName');
const capAromas = document.querySelector('.capsuleResult__capsuleAromas');
const capIntensity = document.querySelector('.capsuleResult__capsuleIntensity');
const capBitterness = document.querySelector('.capsuleResult__capsuleBitterness');
const capAcidity = document.querySelector('.capsuleResult__capsuleAcidity');
const capCorps = document.querySelector('.capsuleResult__capsuleCorps');
const capRoasting = document.querySelector('.capsuleResult__capslueRoasting');
const capBuy = document.querySelector('.capsuleResult__button a');
const capLongDescription = document.querySelector('.capsuleResult__description p');

// Json constants
const JsonCapsulesLink = 'datas/capsules.json';
const capsTable = [];

let currentQuizzQuestion = 0;
let startOnce = false;

// Capsule research elements
let family = 'Intense',
    deca = false,
    matchingCaps = [];

// Fetch Json capsule data
fetch(JsonCapsulesLink)
.then(capsule => capsule.json())
.then((data) => {
  capsTable.push(...data);
  // console.log(TablesCapsules);
})
.catch(err => console.log(Error(err)));

// import setClassList function & random function
import { setClassList } from "./helper.js";
import { getRandom } from "./helper.js";

// quizzButtons on click function, change question, display right buttons
quizzButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    // Start button
    if ( (element == quizzButtons[0]) && (!startOnce) ) {
      // Display first question
      setClassList(false, quizzStart, 'question--displayed');
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');

      setClassList(true, quizzButtons[2], 'button--displayed');

      startOnce = true;

    // Next button
    } else if ( (element == quizzButtons[2]) && ( currentQuizzQuestion < quizzQuestions.length - 1 ) ) {
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      currentQuizzQuestion++;
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');

    // Previous button
    } else if ( (element == quizzButtons[1]) && ( currentQuizzQuestion > 0 ) ) {
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      currentQuizzQuestion--;
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');
    
    // Validate button
    } else if ( (element == quizzButtons[3])) {
      setClassList(false, quizzButtons[1], 'button--displayed');

      displayResult(4);
      
      // display restart quizz content
      setClassList(false, quizzButtons[3], 'button--displayed');
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      setClassList(true, quizzRestart, 'question--displayed');

      // set classes to display the right content
      setClassList(false, cup, 'active--content');
      setClassList(true, capsuleResult, 'active--content');

      setClassList(true, findYourCoffeeHeader, 'blue--header');

      setClassList(false, findYourCoffeeHeaderContent, 'active--header');
      setClassList(true, capsuleResultHeader, 'active--header');
    
      currentQuizzQuestion = 0;
    }  

    if ((currentQuizzQuestion > 0) && (startOnce)) {
    // display previous button
    setClassList(true, quizzButtons[1], 'button--displayed');

      if (currentQuizzQuestion == quizzQuestions.length - 1) {
        // don't display next button and display validate button
        setClassList(false, quizzButtons[2], 'button--displayed');
        setClassList(true, quizzButtons[3], 'button--displayed');
      
      } else {
        // display next button and don't display validate button
        setClassList(true, quizzButtons[2], 'button--displayed');
        setClassList(false, quizzButtons[3], 'button--displayed');
      }

    } else {
      // Display previous button
      setClassList(false, quizzButtons[1], 'button--displayed');
    }
  });
});

// 
quizzRestart.addEventListener('click', (e) => {
  e.preventDefault();
  // Restart quizz
  setClassList(false, quizzRestart, 'question--displayed');
  
  // set classes to display the right content
  setClassList(true, cup, 'active--content');
  setClassList(false, capsuleResult, 'active--content');

  setClassList(false, findYourCoffeeHeader, 'blue--header');

  setClassList(true, findYourCoffeeHeaderContent, 'active--header');
  setClassList(false, capsuleResultHeader, 'active--header');

  // display first quizz question
  setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');
  setClassList(true, quizzButtons[3], 'button--displayed');

  // display right buttons
  setClassList(false, quizzButtons[3], 'button--displayed');
  setClassList(true, quizzButtons[2], 'button--displayed');
});

function findCapsuleByIntensity(intensity) {
  for (let i = 0; i < capsTable.length; i++) {
    if (capsTable[i].intensity == intensity) {
      matchingCaps.push(capsTable[i]);
    }
  }

  return matchingCaps;
}

function setCapData(capsule) {
  // capName.textContent = capsule.capsuleName;
  // capShortDescription.textContent = capsule.shortDescription;
  // capName.capLongDescription = capsule.longDescription;
  // capIntensity.textContent = capName + capsule.intensity;
  // capBitterness.textContent = capName + capsule.bitterness;
  // capAcidity.textContent = capName + capsule.acidity;
  // capCorps.textContent = capName + capsule.corps;
  // capRoasting.textContent = capName + capsule.roasting;
  // capAromas.textContent =  --> capsule.roasting; //  boucle
  // capImg --> '../img/gammes_capsules/' + capsule.mainImage; // set img src
  // capBuy
}

function displayResult(intensity) {
  findCapsuleByIntensity(intensity);

  let randomCap = getRandom(0, matchingCaps.length-1);
  
  setCapData(randomCap);
}