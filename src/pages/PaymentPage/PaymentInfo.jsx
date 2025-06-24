import { Form } from "react-router-dom"; // use react-router-dom instead of react-router
import { useState } from "react";

export default function PaymentInfo() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    responsive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // When checkbox is checked, save form data
    if (name === "responsive" && checked) {
      sessionStorage.setItem("paymentInfo", JSON.stringify({ ...formData, responsive: true }));
    }
  };

  return (
    <Form className="form">
      <div className="form__group">
        <label htmlFor="fullName">Full name <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="fullName" name="fullName" required onChange={handleChange} />
      </div>

      <div className="form__group">
        <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
        <input type="email" id="email" name="email" required onChange={handleChange} />
      </div>

      <div className="form__group">
        <label htmlFor="phone">Phone no.<span style={{ color: "red" }}>*</span></label>
        <input type="tel" id="phone" name="phone" required onChange={handleChange} />
      </div>

      <div className="form__group">
        <label htmlFor="address">Address <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="address" name="address" required onChange={handleChange} />
      </div>

      <div className="form__row1">
        <div className="form__group">
          <label htmlFor="zip">Zip-code <span style={{ color: "red" }}>*</span></label>
          <input type="text" id="zip" name="zip" required onChange={handleChange} />
        </div>
        <div className="form__group">
          <label htmlFor="city">City <span style={{ color: "red" }}>*</span></label>
          <input type="text" id="city" name="city" required onChange={handleChange} />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="country">Country<span style={{ color: "red" }}>*</span></label>
        <input type="text" id="country" name="country" required onChange={handleChange} />
      </div>

      <div className="form__checkbox">
        <input
          className="checkbox"
          type="checkbox"
          name="responsive"
          id="responsive"
          required
          onChange={handleChange}
        />
        <label htmlFor="responsive">
          I declare that all my information is correct and real.
        </label>
      </div>
    </Form>
  );
}
