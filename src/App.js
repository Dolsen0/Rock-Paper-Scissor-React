import { useState } from "react";
import "./App.css";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  const[playerChoice, setPlayerChoice] = useState("Rock, Paper, or Scissors?")
  let randChoice = choices[Math.floor(Math.random() * 3)]
  const[compChoice, setCompChoice] = useState(randChoice)


  return (
    <div className="App">
      <>
      <h1>Rock Paper Scissors</h1>

      <h4>Computer Character</h4>
      <h4>{compChoice}</h4>
      
      <h4>{playerChoice}</h4>

      {choices.map((choice) => {
        return <button onClick={()=>{
          setPlayerChoice(choice)
          setCompChoice(randChoice)
        }}>{choice}</button>;
      })}
    </>
    </div>
  );
}

export default App;
