import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navo from './components/Navo'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
 
   
  return (

    <>
    <Router>
    <Navo/>
      <Routes>
        <Route exact path="/"   element={<Home/>}>  
        </Route>
        <Route exact path="/Login"     element={<Login/>}>
        </Route>
        <Route exact path="/Signup"    element={<Signup/>}>
        </Route>
      </Routes>
    </Router>
  </>
   
  )
}

export default App
