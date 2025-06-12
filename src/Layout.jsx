
import { Outlet } from "react-router"
import '/src/style/style.scss'
// import Header from "./components/Header"


function Layout() {
 

  return (
    <>

      {/* <Header /> */}
    
     <main>
      <Outlet />
     </main>

   
    </>
  )
}

export default  Layout
