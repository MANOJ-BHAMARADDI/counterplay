import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const aValue = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }
  const rValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter value {counter} </h1>
      <button onClick={aValue}>Add Value {counter}</button>
      <br />
      <button onClick={rValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
