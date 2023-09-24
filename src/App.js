import React from 'react'
import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import { Routes , Route } from 'react-router-dom'
import "./App.css"
const Apps = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path="/body" element={<Body/>}/>
      </Routes>
    </div>
  )
}

export default Apps