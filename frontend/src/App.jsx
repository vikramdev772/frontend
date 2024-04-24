
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {

  console.log("APP.js is running 💻")

  return (
    <>
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
