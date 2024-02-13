import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
export default function Main() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path ="/about" element ={<About/>}></Route>
      <Route path= "/sign-in" element ={<SignIn/>}></Route>
      <Route path= "/sign-up" element ={<SignUp/>}></Route>
      <Route path= "/dashboard" element ={<Dashboard/>}></Route>
      <Route path= "/project" element ={<Projects/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}
