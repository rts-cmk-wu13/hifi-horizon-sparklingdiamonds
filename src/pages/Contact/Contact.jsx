import './contact.scss'
import { Form, useActionData } from 'react-router'


export default function Contact() {


    const errors = useActionData();

    return (

       
        <article className="contact">
            <h1>GEET IN TOUCH WITH US</h1>

            <Form method='post' /* onSubmit={handleSubmit} */>
            <div className="mandatory">
                <label htmlFor="name">Full name 
                    <span style={{ color: 'red' }}>*</span>
                </label> 
                <input type="text" name="name" id="name" />
                <p className="error">{errors && errors?.name?.errors[0]}</p>
            </div>

            <div className="mandatory">
                <label htmlFor="email">Email 
                    <span style={{ color: 'red' }}>*</span>
                    </label> 
                <input type="email" name="email" id="email" />
                <p className="error">{errors && errors?.email?.errors[0]}</p>
            </div>

            <div className="mandatory">
                <label htmlFor="email">Subject
                    <span style={{ color: 'red' }}>*</span>
                    </label> 
                <input type="text" name="subject" id="subject"/>
                <p className="error">{errors && errors?.subject?.errors[0]}</p>
            </div>

            <div className="mandatory">
                <label htmlFor="message">Message 
                    <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea name="message" id="message" rows="10"></textarea>
                <p className="error">{errors && errors?.message?.errors[0]}</p>
            </div>

            <button className='form__btn' type="submit">Send</button>
            </Form>

         <div className="contact__footer">
            <p>Visit our sister companies <span className="primary__color"> Home Sound </span> and <span className="primary__color">  The Movie Rooms </span> part of the HiFi Horizon Group. </p> 
         </div>
        </article>
      
        
    )
}