import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReportsPage from "./pages/ReportsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GlobalStyles from "./styles/GlobalStyles";

function App (){
  return (
  <>
  <GlobalStyles/>
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/reports' Component={ReportsPage}/>
    <Route path='/login' Component={LoginPage}/>
    <Route path='/signup' Component={SignupPage}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;