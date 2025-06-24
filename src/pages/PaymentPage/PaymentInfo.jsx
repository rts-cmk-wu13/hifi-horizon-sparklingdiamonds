import { Form } from "react-router"

export default function PaymentInfo() {

    return (
          <Form className='form'/*  onSubmit={handleSignUp} */>

          <h3>CREATE NEW CUSTOMER ACCOUNT</h3>

      <div className="form__group">
        <label htmlFor="fullName">Full name <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="fullName" name="fullName" required />
      </div>

       <div className="form__group">
        <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
        <input type="email" id="email" name="email" required />
      </div>

        <div className="form__group">
          <label htmlFor="phone">Phone no.<span style={{ color: "red" }}>*</span></label>
          <input type="tel" id="phone" name="phone" />
        </div>

      <div className="form__group">
        <label htmlFor="address">Address <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="address" name="address" required />
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


        <div className="form__group">
          <label htmlFor="country">Country<span style={{ color: "red" }}>*</span></label>
          <input type="text" id="country" name="country" />
        </div>
      


        {/* {error && <div className="error">{error}</div>} */}

    </Form>
    )
}