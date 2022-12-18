import { useState } from "react";

function App() {
  const [question, setQuestion] = useState({
    questionText: "",
    incorrectAnswers: [],
    correctAnswer: "",
    id: "",
  });

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
        console.log(question);
      });
  }

  return (
    <div className="App">
      <button onClick={getQuestion}>Get Question</button>
    </div>
  );
}

export default App;
