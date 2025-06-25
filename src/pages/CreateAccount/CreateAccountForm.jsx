import { Form, useNavigate } from "react-router";
import { useState } from "react";
import registerUser from "../../api/authService";


/* ---------------------Import Components ------------------- */
import SectionHeader from "../../components/SectionHeader";
/* ---------------------Import Components ------------------- */


export default function CreateAccountForm() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    async function handleSignUp(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = {
        name: data.fullName,
        email: data.email,
        phone:data.phone,
        password: data.password,
        address:data.address,
        city:data.city,
        country:data.country
    };

    try {
      await registerUser(user);
      navigate("/success");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    
    <section className="card">


      <SectionHeader
      text="CREATE AN ACCOUNT"
       style="page__header"
      />

    <Form className='form' onSubmit={handleSignUp}>

          <h3>CREATE NEW CUSTOMER ACCOUNT</h3>

      <div className="form__group">
        <label htmlFor="fullName">Full name <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="fullName" name="fullName" required />
      </div>

      <div className="form__group">
        <label htmlFor="address">Address <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="address" name="address" required />
      </div>

      <div className="form__group">
        <label htmlFor="address2">Address - line 2</label>
        <input type="text" id="address2" name="address2" />
      </div>

      <div className="form__row1">
        <div className="form__group">
          <label htmlFor="zip">Zip-code <span style={{ color: "red" }}>*</span></label>
          <input type="text" id="zip" name="zip" required />
        </div>
        <div className="form__group">
          <label htmlFor="city">City <span style={{ color: "red" }}>*</span></label>
          <input type="text" id="city" name="city" required />
        </div>
      </div>

      <div className="form__row2">
        <div className="form__group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone no.</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form__group">
        <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
        <input type="password" id="password" name="password" required />
      </div>

      <div className="form__group">
        <label htmlFor="repeatPassword">Repeat password <span style={{ color: "red" }}>*</span></label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
      </div>

      <div className=" form__checkbox">
          <input className="checkbox" type="checkbox" name="agree" required />
          <label> By using this form you agree with the storage and handling of your data by this website. <span style={{ color: "red" }}>*</span> 
          </label>
      </div>

      <div className="form__checkbox">
        <input className="checkbox" type="checkbox" name="marketing" />
        <label> Accept marketing from HiFi Horizon (newsletter and discount offers by email).</label>
      </div>

        {error && <div className="error">{error}</div>}

      <button type="submit" className="form__btn flex__start">Create an Account</button>
    </Form>
      
    </section>
  );
}
