import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from './auth/pages'

export const App = () => {
  return (
    <>
    <h1>soyAPP</h1>
    <Routes>
      
      {/* <Route path="/login" element={ <LoginPage/> } />
      <Route path="register" element={ <RegisterPage/> } /> */}
      {/* <Route path="/*" element={ <Navigate to="/auth/login"/> } /> */}
    </Routes>
    </>
  )
}
