import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'

export default function app() {
  return (
    <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='' element={<HomePage />} />
            </Routes>
        <Footer />
    </BrowserRouter>
  )
}
