const quizzQuestions = document.querySelectorAll('.quizz__questionIndividual');
const quizzRestart = document.querySelector('.quizz__restart');

const quizzButtons = document.querySelectorAll('.quizz__questionList .button');
// quizzButtons[0] --> restart button
// quizzButtons[1] --> previous button
// quizzButtons[2] --> next button
// quizzButtons[3] --> validate button

let currentQuizzQuestion = 0;

quizzButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    // Next button
    if ( (element == quizzButtons[2]) && ( currentQuizzQuestion < quizzQuestions.length - 1 ) ) {
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
      
      // display restart quizz content
      setClassList(false, quizzButtons[3], 'button--displayed');
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      setClassList(true, quizzRestart, 'question--displayed');
    
      currentQuizzQuestion = 0;
    
    // Restart button
    }  else if ( (element == quizzButtons[0])) {
      // Restart quizz
      setClassList(false, quizzRestart, 'question--displayed');
      
      // display first quizz question
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      setClassList(true, quizzButtons[2], 'button--displayed');
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
      // Display previous button
      setClassList(false, quizzButtons[1], 'button--displayed');
    }
  });
});

// Function add or remove class after a check
export function setClassList(addClass, elementName, elementClassName) {
  if (addClass) {
    if (!elementName.classList.contains(elementClassName))
      elementName.classList.add(elementClassName);
  } else {
    if (elementName.classList.contains(elementClassName))
      elementName.classList.remove(elementClassName);
  }
}