import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username:"dubey",
    age:20
  }
  return (
    <>
      <h1 className='bg-green-400 text-black mb-4'>tailwind test</h1>
      <Card username="shrey" someobj ={myobj} btnText="click me" />
      <Card username="goli" btnText="visit me"/>
    </>
  )
}

export default App
