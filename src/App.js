import './App.css';
import { useState } from "react";


export default function App() {

  const [day, setDay] = useState("Monday");

  return (
    <div className="App">
      <h1>Today is {day}</h1>
    </div>
  );
}

