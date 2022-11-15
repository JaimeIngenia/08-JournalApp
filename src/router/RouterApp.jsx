import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const RouterApp = () => {
  return (
    <Routes>
        {/* login y registro */}
        <Route path = "auth/*" element = { <AuthRoutes/> }/>
        {/* jounarlApp */}
        <Route path = "/*" element = { <JournalRoutes/> }/>

        
    </Routes>
  )
}
