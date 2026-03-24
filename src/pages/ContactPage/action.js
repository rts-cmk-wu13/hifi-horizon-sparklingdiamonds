import { redirect } from 'react-router';
import { z } from 'zod';
import { success } from 'zod/v4';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').nonempty('Name is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  subject: z.string().nonempty('Please write a subject'),
  message: z.string().min(3, 'Message must be at least 3 characters').nonempty('Message is required'),
});

export async function handleSubmit(_, formData) {
  const values = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    subject: formData.get('subject')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? '',
  };

  console.log(values);

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    const errors = result.error.flatten();
    return { errors: errors.fieldErrors, values };
  }

  //console.log(result, '❤️');
  

  try {
    const response = await fetch('https://hifi-mail.onrender.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.data),
    });

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        values,
        errors: {},
        serverMessage: {
          error: responseData?.error || 'There was a problem submitting the form.',
        },
      };
    }

    // console.log('your message was sent 🦾💕');
    // console.log(response);
    
   return {
     success: true,
    status: 200,
    values:responseData
   }

  } catch (error) {
    return {
      values,
      errors: {},
      serverMessage: {
        error: 'There was a problem submitting the form. Please try again later.',
      },
    };
  }
}