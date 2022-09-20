import "./App.css";

function App() {
  let choices = ["Rock", "Paper", "Scissors"];

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      <h4>Computer Character</h4>
      <h4>Computer Choice</h4>

      <h4>Display</h4>

      {choices.map((choice) => {
        return <button>{choice}</button>;
      })}
    </div>
  );
}

export default App;
