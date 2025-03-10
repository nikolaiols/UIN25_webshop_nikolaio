import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Signup from './components/Signup'

function App() {
 const [SignedIn, setSignedIn] = useState(false);
 
 const [storageUser, setStorageUser] = useState(localStorage.getItem("user"));

 console.log("kommer fra storage:",storageUser);

  return (
    <>
    <Layout>
      {/**alt som legges her blir rendret imellom header og footer, eller bassert på hvor du legger children i layout */}
      <Routes>
        <Route path='/' element={SignedIn ?<Welcome/> : <Login storageUser={storageUser} setSignedIn={setSignedIn}/>}/>
        <Route path='login' element={<Login storageUser={storageUser} setSignedIn={setSignedIn}/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>

    </Layout>
    </>
  )
}

export default App
