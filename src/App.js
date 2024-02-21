import React from 'react'
import HomePage from './components/pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App