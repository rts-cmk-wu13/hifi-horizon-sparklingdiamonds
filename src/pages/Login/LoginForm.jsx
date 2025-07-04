import { Form, Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { loginUser } from "../../api/authService";

/* ------------------------------- Components --------------------------------- */
import PrimaryButton from "../../components/PrimaryButton";
import SectionHeader from "../../components/SectionHeader";
/* ---------------------------------------------------------------- */

export default function LoginForm() {


   const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const from = location.state?.from?.pathname || "/profile"; 


   async function handleLogin(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
  
      try {
        const userData = await loginUser(data);
        login(userData.accessToken);
        navigate(from, { replace: true });
      } catch (err) {
        setError('Login Failed. Please check your data' ||err.message);
     
        
      }
    }

    

    return (

      <section className="card">

        <PageTitle
        text="LOGIN"
        style="page__header"
        />

         <Form className="form" onSubmit={handleLogin}>


        <SectionHeader
        text="Registered Customers"
        text2="If you have an account, sign in with your email address."
        />

        <div className="form__group">
           <label htmlFor="email">Email<span style={{ color: 'red' }}>*</span></label> 
          <input type="email" id="email" name="email" placeholder="Email address" required />
        </div>

        <div className="form__group">
          <label htmlFor="password">Password<span style={{ color: 'red' }}>*</span></label> 
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>

        <div className="form__checkbox">  
          <input type="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>

        {error && <div className="error">{error}</div>}

              <PrimaryButton
              style="form__btn"
              text="Login"
              />
      </Form>
      </section>
    )
}