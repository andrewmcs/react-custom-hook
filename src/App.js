import './App.css';
import { useState } from "react";


export default function App() {

  const [day, setDay] = useState("Monday");
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div className="App">
      <h1>Today is {day}</h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

function usePrevious(val) { }