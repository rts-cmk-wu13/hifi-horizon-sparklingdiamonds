import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import { fetchUserById } from "../../api/authService";


/* ---------------------------------------------------------------- */
import { parseJwt } from "../../api/authService";
import InfoElement from "../../components/InfoElement";
import { Fragment } from "react";
/* ----------------------------------------------------------------- */
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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

            <ul>
            {Users.map((myUser) => (
                <Fragment key={myUser.id}>
                <li>
                    <InfoElement elementName="Name" elementInfo={myUser.name} icon={<FaUser/>}/>
                </li>
                <li>
                    <InfoElement elementName="Phone" elementInfo={myUser.phone} icon={<FaPhone/>}/>
                </li>
                <li>
                    <InfoElement elementName="Email" elementInfo={myUser.email} icon={<FaEnvelope/>}/>
                </li>
                <li>
                    <InfoElement elementName="Password" elementInfo="********" icon={<FaLock />}/>
                </li>
                <li>
                    <InfoElement elementName="Address" elementInfo={myUser.address} 
                    addressChild={
                    <div>
                        <p>{myUser.city}</p> 
                        <p>{myUser.country} </p> 
                    </div>}
                    icon={<FaLocationDot/>}/>
                </li>
                </Fragment>
            ))}
            </ul>

            {error}

         </section>
        </>
    );
}
