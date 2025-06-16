import SectionHeader from '../../components/SectionHeader';
import './contact.scss'
import { Form, useActionData } from 'react-router'


export default function Contact() {


    const actionData = useActionData();
    console.log(actionData);
    


    return (
    <>
    
        <section className="card">

           <SectionHeader
           text="GET IN TOUCH WITH US"
           style="page__header"
           />

            <Form className='form' method='post' /* onSubmit={handleSubmit} */>
            <div className="form__group">
                <label htmlFor="name">Full name 
                    <span style={{ color: 'red' }}>*</span>
                </label> 
                <input type="text" name="name" id="name" />
                {actionData?.errors?.name && (<p className="error">{actionData.errors.name[0]}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="email">Email 
                    <span style={{ color: 'red' }}>*</span>
                    </label> 
                <input type="email" name="email" id="email" />
                {actionData?.errors?.email && ( <p className="error">{actionData.errors.email[0]}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="email">Subject
                    <span style={{ color: 'red' }}>*</span>
                    </label> 
                <input type="text" name="subject" id="subject"/>
                {actionData?.errors?.subject && ( <p className="error">{actionData.errors.subject[0]}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="message">Message 
                    <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea name="message" id="message" rows="10"></textarea>
                {actionData?.errors?.message && ( <p className="error">{actionData.errors.message[0]}</p>)}
            </div>

            <button className='form__btn flex__end' type="submit">Send</button>
            </Form>

         <div className="contact__footer">
            <p>Visit our sister companies <span className="primary__color"> Home Sound </span> and <span className="primary__color">  The Movie Rooms </span> part of the HiFi Horizon Group. </p> 
         </div>
        </section>
    </>
      
        
    )
}