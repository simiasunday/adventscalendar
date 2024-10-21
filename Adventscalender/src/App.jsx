import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './components/Header'
import { Calendar } from "./components/Calendar";
import { useState } from 'react'
import './App.css'

function App() {
   return (
    <div>
      <Header />
      <Calendar />
    </div>
  )
}

export default App
