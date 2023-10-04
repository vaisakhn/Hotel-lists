import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import Home1 from '../Components/page1/Home'
import Home2 from '../Components/page2/Home'
import Home3 from '../Components/page3/Home'
import Home from '../Components/Home/Home'

function Layouts() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
    <Route path='/1' element={<Home/>}></Route>
        <Route path='/Hotel-lists'element={<Home/>}></Route>
        <Route path='/2' element={<Home1/>}></Route>
        <Route path='/3' element={<Home2/>}></Route>
        <Route path='/4' element={<Home3/>}></Route>
    </Routes>
   </Router>

    </>
  )
}

export default Layouts