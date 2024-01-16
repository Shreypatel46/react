import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number,setNumberAllow]=useState(false)
  const [char,setCharAllow]=useState(false)
  const [password,setPassword]=useState("")
  
  //use ref hook
  const passwordRef =useRef()


  const passwordGenreator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str +="0123456789"
    if(char) str +="!@#$%^&*{}[]~`-+_"

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() * str.length +1)
      pass +=str.charAt(char)
    }

    setPassword(pass)
  },[length,number,char,setPassword])

  const copyToClipBoard =useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{ 
    passwordGenreator()
  },[length,number,char,passwordGenreator])
  return (
    <>
      <div className="w-full max-w-md mx-auto 
      shadow-md rounded-lg px-4  py-4 my-12 
       text-center text-orange-600 bg-gray-600">
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-8">
          <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'   
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyToClipBoard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              copy</button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label >length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={number}
            id='numberInput'
            onChange={()=>{setNumberAllow((prev)=>!prev)}}
             />
             <label htmlFor='numberInput' >Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={char}
            id='charInput'
            onChange={()=>{setCharAllow((prev)=>!prev)}}
             />
             <label htmlFor='charInput' >char</label>
          </div>
        </div> 
      </div>
         
    </>
  )
}

export default App
