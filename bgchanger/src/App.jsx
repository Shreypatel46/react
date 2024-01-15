import { useState } from "react"

function App() {
  const [color, setcolor] = useState("orange");
  return (
  
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl">
          <button onClick={()=>setcolor("red")}
          className="outline-none px-4  rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
            Red
            </button>
          <button onClick={()=>setcolor("green")}
          className="outline-none px-4  rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
            green
            </button>
          <button onClick={()=>setcolor("blue")}
          className="outline-none px-4  rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
            blue
            </button>
        </div>
      </div>
    </div>

  )
}

export default App
