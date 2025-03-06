import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Signup from './components/Signup'

function App() {
 const [SignedIn, setSignedIn] = useState(false);

  return (
    <>
    <Layout>
      {/**alt som legges her blir rendret imellom header og footer, eller bassert på hvor du legger children i layout */}
      <Routes>
        <Route path='/' element={SignedIn ?<Welcome/> : <Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>

    </Layout>
    </>
  )
}

export default App
