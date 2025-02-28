import { useState } from 'react'
import './App.css'

import Nav from "./components/Nav";
import SanityPage from "./components/SanityPage";
import ReactPage from "./components/ReactPage"
import JavascriptPage from "./components/Javascript"
import CssPage from "./components/CssPage"
import HtmlPage from "./components/HtmlPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Nav  
  HtmlPage={HtmlPage} 
  CssPage={CssPage} 
  JavascriptPage={JavascriptPage} 
  ReactPage={ReactPage} 
  SanityPage={SanityPage}
/>
    </>
  )
}

export default App
