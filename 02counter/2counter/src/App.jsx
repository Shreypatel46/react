import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(10) //give 2 output a value and function 
 
  //let counter =25
  const addValue =() =>{
    //counter= counter+1;
    console.log("clicked",counter);
    setCounter((counter)=>{
      if(counter +1 <21)
        return counter+1;
      else
        return counter;
      }
    );
  }
  const subValue =() =>{
    //counter= counter+1;
    console.log("clicked",counter);
    setCounter( (counter)=>{
      if(counter -1 >0)
        return counter-1;
      else
        return counter;
    }

    );
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={subValue}>remove val</button>
    </>
  )
}

export default App
