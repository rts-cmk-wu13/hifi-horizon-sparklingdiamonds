import SectionHeader from '../../components/SectionHeader';
import './contact.scss'
import { handleSubmit } from './action';
import { useActionState, useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function Contact() {
    const nav = useNavigate()
    const initialState = {
    values: {
        name: "",
        email: "",
        message:"",
     },
    errors: {},
    serverMessage:{},
    success:false,
  };


   const [state, formAction, isPending] = useActionState(handleSubmit, initialState);

   useEffect(()=> {
    if(state.success){
        nav('/thanks')
    }
   }, [state?.success, nav])

    return (
    <>
    
        <section className="card">

           <SectionHeader
           text="GET IN TOUCH WITH US"
           style="page__header"
           />

            <form noValidate className='form' action={formAction}>
            <div className="form__group">
                <label htmlFor="name">Full name 
                    <span style={{ color: 'red' }}>*</span>
                </label> 
                <input type="text" name="name" id="name" defaultValue={state?.values?.name ?? ""}/>
                {state?.errors?.name && (<p className="error">{state.errors.name[0]}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="email">Email 
                    <span style={{ color: 'red' }}>*</span>
                    </label> 
                <input type="email" name="email" id="email" defaultValue={state?.values?.email ?? ""}/>
                {state?.errors?.email && ( <p className="error">{state.errors.email[0]}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="email">Subject
                    <span style={{ color: 'red' }}>*</span>
                    </label> 
                <input type="text" name="subject" id="subject" defaultValue={state?.values?.subject ?? ""}/>
                {state?.errors?.subject && ( <p className="error">{state.errors.subject[0]}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="message">Message 
                    <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea name="message" id="message" rows="10" defaultValue={state?.values?.message ?? ""}></textarea>
                {state?.errors?.message && ( <p className="error">{state.errors.message[0]}</p>)}
            </div>

    
              <div className="error submit__error">
                {state?.serverMessage?.error && (
                <p className="form__error-message">{state?.serverMessage?.error}</p>
                )}  

            {/* <button className='form__btn flex__end' type="submit">Send</button> */}
             <button
                className="form__btn"
                disabled={isPending}
                type="submit"
                >
                {isPending ? "Sending..." : "Send Message"}
            </button>
            
            </div>
            </form>



         <div className="contact__footer">
            <p>Visit our sister companies <span className="primary__color"> Home Sound </span> and <span className="primary__color">  The Movie Rooms </span> part of the HiFi Horizon Group. </p> 
         </div>
        </section>
    </>
      
        
    )
}