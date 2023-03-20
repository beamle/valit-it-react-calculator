// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [calcAnswer, setCalcAnswer] = useState(0);

    let addition = () => {
        let result = parseInt(numberOne)+parseInt(numberTwo);
        setCalcAnswer(result) // currently changing value t
        return result
    }

    let subtraction = () => {
        setCalcAnswer(parseInt(numberOne) - parseInt(numberTwo))
    }

    let multiplication = () => {
        setCalcAnswer(parseInt(numberOne) * parseInt(numberTwo))
    }


    let dividing = () => {
        setCalcAnswer(parseInt(numberOne) / parseInt(numberTwo))
    }




  return (
    <div className="App">
      <header className="App-header">
          <h1>Calculator</h1>
      </header>
        <main>
            <input id="numberOne" type="number" onChange={ event => {
                console.log(event.target.value)
                setNumberOne(event.target.value)}}></input><br/>
            <input id="numberTwo" type="number" onChange={ event => {
                console.log(event.target.value)
                setNumberTwo(event.target.value)}}></input><br/>

            <button id="addition" onClick={addition}>Addition</button>
            <button id="subtraction" onClick={subtraction}>Subtraction</button>
            <button id="multiple" onClick={multiplication}>Multiple</button>
            <button id="divide" onClick={dividing}>Divide</button>

            <h2>Result: {calcAnswer}</h2>
        </main>
    </div>
  );
}

export default App;
