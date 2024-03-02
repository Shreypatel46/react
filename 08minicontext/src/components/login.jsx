import React, {useState,useContext} from 'react'
import UserContext  from "../context/UserContext"
// in usercontext how would i fetch data that help useContext
// login is send 
function Login() {
    const [username,setUsername]=useState('')
    const [password, setpassword] = useState('');

    const {setUser}= useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        //  by default url goes somewhere or by post method it happen n we dont want that hapen here
        setUser({username,password})
        // passes data
         
    }
    return ( 
        <div>
            <h2>login</h2>
            <input type="text" value={username} onChange={ (e)=>setUsername(e.target.value)} placeholder='username' />
            <input type="text"  value={password }onChange={ (e)=>setpassword(e.target.value)} placeholder='password'/>
            <button onClick={handleSubmit}>submit</button>
        </div>
     );
}

export default Login;
