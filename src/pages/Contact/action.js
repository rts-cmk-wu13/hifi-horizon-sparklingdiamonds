import { redirect } from 'react-router';
import { z } from 'zod/v4'; 
    
const contactSchema = z.object({
    name: z.string ().min(2, 'Name is required'),
    email: z.email(),
    subject: z.string(),
    message: z.string().min(3, 'Message is required')
})
    
    
    export async function handleSubmit ({request}) {
            

            const formData = await request.formData();
            const data = Object.fromEntries(formData.entries());
            // Here you would typically send the data to your server
            const result = contactSchema.safeParse(data); 
            //console.log(result);
            
                if (!result.success) {
                    const errors =  z.treeifyError(result.error);
                    return errors.properties 
                } 
                                    
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(result.data),
                })
                    
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }

                    //The redirect() function from react-router doesn't perform an immediate
                    //  navigation by itself like window.location. 
                    // Instead, it's meant to return a response from a loader or action, 
                    // and React Router will handle the redirect based on that returned value.
                    console.log('Form submitted successfully');
                    return  redirect('/thanks');

    }