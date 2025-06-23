import SectionHeader from "../../components/SectionHeader"
import MyProfile from "./MyProfileInfo"
import './Profile.scss'
import ProfileNav from "../../components/navagationbar/ProfileNav"
import MyOrders from "./MyOrders"
import { Outlet } from "react-router"

export default function Profile() {

    return (
       <section className="form">
         
           <ProfileNav/>
          
             <Outlet/>
        
       </section> 
    )
}