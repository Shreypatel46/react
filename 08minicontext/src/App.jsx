
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  return (
    <UserContextProvider>
      {/* add whatever component you want */}
      {/* in our case component has already access data so no need here  */}
      <h1>chai aur react me context api sikhte he </h1>
      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
