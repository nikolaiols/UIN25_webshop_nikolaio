import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import SanityPage from "./components/SanityPage";
import ReactPage from "./components/ReactPage"
import JavascriptPage from "./components/Javascript"
import CssPage from "./components/CssPage"
import HtmlPage from "./components/HtmlPage"

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <Router>
   <Nav  
  HtmlPage={HtmlPage} 
  CssPage={CssPage} 
  JavascriptPage={JavascriptPage} 
  ReactPage={ReactPage} 
  SanityPage={SanityPage}
/>
</Router>
 
  )
}

export default App
