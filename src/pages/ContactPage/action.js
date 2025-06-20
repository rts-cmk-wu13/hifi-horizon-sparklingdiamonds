import { redirect } from 'react-router';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').nonempty('Name is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  subject: z.string().optional(),
  message: z.string().min(3, 'Message must be at least 3 characters').nonempty('Message is required'),
});

export async function handleSubmit({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    // This will create a structured error object for the fields
    const errors = result.error.flatten();
    
    return { errors: errors.fieldErrors, values: data };
  }

  try {
    const response = await fetch('https://hifi-mail.onrender.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // console.log('Form submitted successfully');
    return redirect('/thanks');
    } catch (error) {
      console.error('Error submitting form:', error);
      return {
        error: 'There was a problem submitting the form. Please try again later!!!',
        values: data,
      };
    }
}
