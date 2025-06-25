import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import { fetchUserById } from "../../api/authService";
import { Link } from "react-router";


/* ---------------------------------------------------------------- */
import { parseJwt } from "../../api/authService";
import InfoElement from "../../components/InfoElement";
import { Fragment } from "react";
import SectionHeader from "../../components/SectionHeader";
/* ----------------------------------------------------------------- */
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
/* -------------------------------------------------------------------- */

export default function MyProfile() {
    const [Users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const { token } = useAuth();
    // const location = useLocation();

    useEffect(() => {

    async function loadUsers() {
            try {
            const decoded = parseJwt(token);
            const userId = decoded?.sub; // sub = user ID
            if (!userId) throw new Error("Invalid token");

            const data = await fetchUserById(userId, token);
            setUsers([data]); // wrap in array for .map()
            } catch (err) {
            setError(err.message);
            }
        }

            if (token) {
                loadUsers();
            }
            
    }, [token]);


    return (
        <>
         <section className="card">

        
           <SectionHeader
          text="YOUR PROFILE INFORMATION"
          style="page__header"
          />

            <ul>
            {Users.map((myUser) => (
                <Fragment key={myUser.id}>
                <li className="profile__elmt">
                    <div className="info__row">
                    <InfoElement elementName="Name" elementInfo={myUser.name} icon={<FaUser/>}/>

                    <Link to="/editprofile/name" className="Info__element__btn">
                        <button  className="Info__element__btn"><MdEdit /></button>
                    </Link>

                    </div>
                </li>
                <li className="profile__elmt">
                    <div className="info__row">
                    <InfoElement elementName="Phone" elementInfo={myUser.phone} icon={<FaPhone/>}/>
                      <Link to="/editprofile/phone" className="Info__element__btn">
                        <button  className="Info__element__btn"><MdEdit /></button>
                    </Link>
                    </div>
                </li>
                <li className="profile__elmt">
                    <div className="info__row">
                    <InfoElement elementName="Email" elementInfo={myUser.email} icon={<FaEnvelope/>}/>
                    <Link to="/editprofile/email" className="Info__element__btn">
                        <button  className="Info__element__btn"><MdEdit /></button>
                    </Link>
                    </div>
                </li>
                <li className="profile__elmt">
                    <div className="info__row">
                    <InfoElement elementName="Password" elementInfo="********" icon={<FaLock />}/>
                    <Link to="/editprofile/password" className="Info__element__btn">
                        <button  className="Info__element__btn"><MdEdit /></button>
                    </Link>
                    </div>
                </li>
                <li className="profile__elmt">
                    <div className="info__row">
                    <InfoElement elementName="Address" elementInfo={myUser.address} 
                    addressChild={
                    <div>
                        <p>{myUser.city}</p> 
                        <p>{myUser.country} </p> 
                    </div>}
                    icon={<FaLocationDot/>}/>
                    <Link to="/editprofile/address" className="Info__element__btn">
                        <button  className="Info__element__btn"><MdEdit /></button>
                    </Link>

                    </div>
                </li>
                </Fragment>
            ))}
            </ul>

            {error}

         </section>
        </>
    );
}
