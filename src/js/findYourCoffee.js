const quizzButtons = document.querySelectorAll('.quizz__questionList .button');
const quizzQuestions = document.querySelectorAll('.quizz__questionIndividual');
// const quizzRestart = document.querySelector('.quizz__restart');

console.log(quizzQuestions);
console.log(quizzButtons);

let currentQuizzQuestion = 0;

quizzButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    if ( (element.classList.contains("quizz__buttonsNext")) && ( currentQuizzQuestion < quizzQuestions.length - 1 ) ) {
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      currentQuizzQuestion++;
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');

    } else if ( (element.classList.contains("quizz__buttonsPrevious")) && ( currentQuizzQuestion > 0 ) ) {
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      currentQuizzQuestion--;
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');
    }

    if (currentQuizzQuestion > 0) {
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
      setClassList(false, quizzButtons[1], 'button--displayed');
    }
  });
});

// quizz__restart.addEventListener('click', (e) => {
//   e.preventDefault();

//   setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
//   setClassList(true, quizzRestart, 'question--displayed');
    
// });

function setClassList(addClass, elementName, elementClassName) {
  if (addClass) {
    if (!elementName.classList.contains(elementClassName))
      elementName.classList.add(elementClassName);
  } else {
    if (elementName.classList.contains(elementClassName))
      elementName.classList.remove(elementClassName);
  }
}