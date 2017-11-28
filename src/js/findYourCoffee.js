const quizzQuestions = document.querySelectorAll('.quizz__questionIndividual');
const quizzRestart = document.querySelector('.quizz__restart');
const quizzStart = document.querySelector('.quizz__start');

const quizzButtons = document.querySelectorAll('.quizz__questionList .button');
// quizzButtons[0] --> start button
// quizzButtons[1] --> restart button
// quizzButtons[2] --> previous button
// quizzButtons[3] --> next button
// quizzButtons[4] --> validate button

let currentQuizzQuestion = 0;
let startOnce = false;

quizzButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    // Start button
    if ( (element == quizzButtons[0]) && (!startOnce) ) {
      // Display first question
      setClassList(false, quizzStart, 'question--displayed');
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');

      setClassList(true, quizzButtons[3], 'button--displayed');

      startOnce = true;

    // Next button
    } else if ( (element == quizzButtons[3]) && ( currentQuizzQuestion < quizzQuestions.length - 1 ) ) {
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      currentQuizzQuestion++;
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');

    // Previous button
    } else if ( (element == quizzButtons[2]) && ( currentQuizzQuestion > 0 ) ) {
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      currentQuizzQuestion--;
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');
    
    // Validate button
    } else if ( (element == quizzButtons[4])) {
      setClassList(false, quizzButtons[2], 'button--displayed');
      
      // display restart quizz content
      setClassList(false, quizzButtons[4], 'button--displayed');
      setClassList(false, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      setClassList(true, quizzRestart, 'question--displayed');
    
      currentQuizzQuestion = 0;
    
    // Restart button
    }  else if ( (element == quizzButtons[1])) {
      // Restart quizz
      setClassList(false, quizzRestart, 'question--displayed');
      
      // display first quizz question
      setClassList(true, quizzQuestions[currentQuizzQuestion], 'question--displayed');
      setClassList(true, quizzButtons[3], 'button--displayed');
    }

    if ((currentQuizzQuestion > 0) && (startOnce)) {
    // display previous button
    setClassList(true, quizzButtons[2], 'button--displayed');

      if (currentQuizzQuestion == quizzQuestions.length - 1) {
        // don't display next button and display validate button
        setClassList(false, quizzButtons[3], 'button--displayed');
        setClassList(true, quizzButtons[4], 'button--displayed');
      
      } else {
        // display next button and don't display validate button
        setClassList(true, quizzButtons[3], 'button--displayed');
        setClassList(false, quizzButtons[4], 'button--displayed');
      }

    } else {
      // Display previous button
      setClassList(false, quizzButtons[2], 'button--displayed');
    }
  });
});