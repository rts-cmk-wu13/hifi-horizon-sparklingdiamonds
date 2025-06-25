import { Form } from "react-router-dom"
import { useState } from "react"
import { z } from "zod"


const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone is required'),
  address: z.string().nonempty('Address is required'),
  zip: z.string().min(4, 'Zip-code must be at least 4 digits'),
  city: z.string().nonempty('City is required'),
  country: z.string().nonempty('Country is required'),
  responsive: z.boolean()/* refine(val => val === true, {
    message: "You must confirm your information is correct.",
  }), */
})

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
  })

  console.log(formData.responsive);
  

  const [formErrors, setFormErrors] = useState({}) 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }

    setFormData(updatedData);

    // Validate when checkbox is clicked
    if (name === "responsive" && checked) {
      const validation = contactSchema.safeParse(updatedData)

      if (validation.success) {
        sessionStorage.setItem("paymentInfo", JSON.stringify(updatedData))
        setFormErrors({})
        updatedData.responsive == true
      } else {
        const formattedErrors = validation.error.format()
        setFormErrors(formattedErrors) 
        updatedData.responsive == false
      }
    }
  }

  return (
    <Form className="form">
      <div className="form__group">
        <label htmlFor="fullName">Full name <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="fullName" name="fullName" onChange={handleChange} />
        {formErrors.fullName && <p className="error">{formErrors.fullName._errors[0]}</p>}
      </div>

      <div className="form__group">
        <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        {formErrors.email && <p className="error">{formErrors.email._errors[0]}</p>}
      </div>

      <div className="form__group">
        <label htmlFor="phone">Phone no. <span style={{ color: "red" }}>*</span></label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} />
        {formErrors.phone && <p className="error">{formErrors.phone._errors[0]}</p>}
      </div>

      <div className="form__group">
        <label htmlFor="address">Address <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="address" name="address" onChange={handleChange} />
        {formErrors.address && <p className="error">{formErrors.address._errors[0]}</p>}
      </div>

      <div className="form__row1">
        <div className="form__group">
          <label htmlFor="zip">Zip-code <span style={{ color: "red" }}>*</span></label>
          <input type="text" id="zip" name="zip" onChange={handleChange} />
          {formErrors.zip && <p className="error">{formErrors.zip._errors[0]}</p>}
        </div>
        <div className="form__group">
          <label htmlFor="city">City <span style={{ color: "red" }}>*</span></label>
          <input type="text" id="city" name="city" onChange={handleChange} />
          {formErrors.city && <p className="error">{formErrors.city._errors[0]}</p>}
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="country">Country <span style={{ color: "red" }}>*</span></label>
        <input type="text" id="country" name="country" onChange={handleChange} />
        {formErrors.country && <p className="error">{formErrors.country._errors[0]}</p>}
      </div>

      <div className="form__checkbox">
        <input
          className="checkbox"
          type="checkbox"
          name="responsive"
          id="responsive"
          onChange={handleChange}
        />
        <label htmlFor="responsive">
          I declare that all my information is correct and real.
        </label>
        {formErrors.responsive && <p className="error">{formErrors.responsive._errors[0]}</p>}
      </div>
    </Form>
  )
}

