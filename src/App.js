import { useState } from "react";
import "./App.css";

function App() {
  const[playerChoice, setPlayerChoice] = useState("Rock, Paper, or Scissors?")
  let choices = ["Rock", "Paper", "Scissors"];

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      <h4>Computer Character</h4>
      <h4>{choices[Math.floor(Math.random() * 3)]}</h4>

      <h3>You win</h3>

      <h4>{playerChoice}</h4>

      {choices.map((choice) => {
        return <button onClick={()=>{
          setPlayerChoice(choice)
        }}>{choice}</button>;
      })}
    </div>
  );
}

export default App;
