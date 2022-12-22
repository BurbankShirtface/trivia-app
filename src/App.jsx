import { useState } from "react";

function App() {
  const [question, setQuestion] = useState({
    questionText: "",
    incorrectAnswers: [],
    correctAnswer: "",
    id: "",
  });
  const [intro, setIntro] = useState(true);
  const [gametime, setGametime] = useState(false);
  let answers;
  let answerMap;

  const url = "https://the-trivia-api.com/api/questions?limit=1";
  function getQuestion() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestion({
          questionText: data[0].question,
          incorrectAnswers: data[0].incorrectAnswers,
          correctAnswer: data[0].correctAnswer,
          id: data[0].id,
        });
        setIntro(false);
        setGametime(true);
        displayAnswers(question.incorrectAnswers, question.correctAnswer);
      });
  }

  // function literallyDisplayAnswers(answers) {
  //   console.log(answers);
  //   answerMap = answers.map((item) => {
  //     return (
  //       <li>
  //         <button key={item}>{item}</button>
  //       </li>
  //     );
  //   });
  // }

  function displayAnswers(answerArray, correctAnswer) {
    answers = answerArray.concat(correctAnswer);
    // shuffle answers array
    for (let i = 0; i < answers.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
    console.log(answers);
    // literallyDisplayAnswers(answers);
    answerMap = answers.map((item) => {
      return <li>{item}</li>;
    });
    console.log(answerMap);
  }

  return (
    <div className="App">
      {intro ? (
        <div className="welcome-screen">
          <h1>TRIVIA</h1>
          <span>
            <h4>Instructions:</h4>
            <p className="welcome-text">
              Answer random questions... you know how trivia works.
            </p>
          </span>
          <button className="get-question-button" onClick={getQuestion}>
            Start Trivia
          </button>
        </div>
      ) : null}
      {gametime ? (
        <div className="gametime-screen">
          <h2>{question.questionText}?</h2>
          <ul>{displayAnswers}</ul>
          <button className="get-question-button" onClick={getQuestion}>
            Next Question
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;

// maybe make the joke 'card' a different component?

// THIS IS A TEST
