
import { Outlet } from "react-router"
import './global-styling/style.scss'
// import Header from "./components/Header"
import Navegation from "./components/navagationbar/Navigation"
import Footer from "./components/footer/Footer"
import BottomBurgerMenu from "./components/navagationbar/burger"


function Layout() {
 

  return (
    <>

    <Navegation/>
    
     <main>
      <Outlet />
     </main>

    <Footer/>
    <BottomBurgerMenu/>
  
    </>
  )
}

export default  Layout
