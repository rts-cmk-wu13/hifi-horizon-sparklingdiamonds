import SectionHeader from "../../components/SectionHeader"
import MyProfile from "./MyProfileInfo"
import './Profile.scss'

export default function Profile() {

    return (
       <section className="card">
             <SectionHeader
          text="YOUR PROFILE INFORMATION"
          />

          <MyProfile/>
       </section> 
    )
}