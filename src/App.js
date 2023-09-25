import React from 'react'
import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import { Routes , Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import "./App.css"
import About from './components/About/About'
const Apps = () => {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Header/>}/>
       <Route path="/body" element={<Body/>}/>
       <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Apps