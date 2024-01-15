import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // for update one varible in multiple places
  let [counter, setCounter] = useState(15)

  // let counter = 6;

  // Arrow function Style
  const addValue = () => {
    setCounter(counter +1)
    if (counter == 20){
      alert("Maxium is 20")
      setCounter (counter)
    }
  }

  // Classic Function Style
  // function addValue() {
  //   console.log("Value Added", Math.random());
  // }

  const removeValue = () =>{
    setCounter(counter - 1)
    if(counter == 0){
      alert ("Minimum is 0")
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Conter : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
