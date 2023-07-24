import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Skills from './components/Skills'
import ContactUs from './components/ContactUs'


const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Portfolio/>
      <About/>
      <Blog/>
      <Skills/>
      <ContactUs/>
    </>
  )
}

export default App