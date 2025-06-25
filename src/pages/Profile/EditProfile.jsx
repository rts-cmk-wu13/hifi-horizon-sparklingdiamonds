import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { editUser, fetchUserById } from "../../api/authService";
import { parseJwt } from "../../api/authService";

import Loader from "../../components/Loader/Loader";
import {Form } from "react-router";
import SectionHeader from "../../components/SectionHeader";

import { GiCheckMark } from "react-icons/gi";



export default function EditProfile() {
 
  const { elmt } = useParams(); // elmt is 'name', 'email', etc.
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  //console.log(error);
  
  const { token} = useAuth();

  useEffect(() => {
        async function loadUser() {
        try {
            const decoded = parseJwt(token); // return { sub: userId, exp: expirationTime, iat: issuedAt }
            const userId = decoded?.sub; // its the actual user ID
            //console.log("userId:", userId);

            const userData = await fetchUserById(userId, token);
            setData(userData);
        } catch (err) {
            setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

    if (token) {
      loadUser();
    }
    
  }, [token]);

  const handleChange = (e) => {
    setData({ ...data, [elmt]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const decoded = parseJwt(token);
    const userId = decoded?.sub;
    //console.log("userId:", userId);

    let payload;
    if (elmt === "address") {
      payload = {
        city: data.city,
        country: data.country,
      };
    } else {
      payload = { [elmt]: data[elmt] };
    }

    await editUser(userId, payload, token);
    setSuccess(`Your ${elmt} has been updated successfully!`);
  } catch (err) {
    setError(err.message);
  }
};


     console.log(data)
  
  if (isLoading) return <Loader />;

  return (

    <>

    <SectionHeader
    text={`EDIT YOUR ${elmt.toUpperCase()}`}
    style="page__header"
    />
    
    <Form className="form card" onSubmit={handleSubmit}>
        <div className="form__group">
            <label>Edit {elmt}:</label>
            <input type="text" value={data[elmt] || ""}  onChange={handleChange}/>

            {elmt == "address" ? (
              <>
                <input
                  type="text"
                  value={data.city || ""}
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                  placeholder="City"
                />
                <input
                  type="text"
                  value={data.country || ""}
                  onChange={(e) => setData({ ...data, country: e.target.value })}
                  placeholder="Country"
                />
              </>
            ) : null}


            {error && <p className="error">{error}</p>}
        </div>
            <button className="form__btn" type="submit">Save</button>

            {success && <p className="success">{success} <GiCheckMark /></p>}
    </Form>
    </>
  );
}
