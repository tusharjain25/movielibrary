import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
 
   
  return (

    <>
    <Router>
    
      <Routes>
        <Route exact path="/Home"   element={<Home/>}>  
        </Route>
        <Route exact path="/"     element={<Login/>}>
        </Route>
        <Route exact path="/Signup"    element={<Signup/>}>
        </Route>
      </Routes>
    </Router>
  </>
   
  )
}

export default App
