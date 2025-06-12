
import { redirect } from 'react-router';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string(),
  message: z.string().min(3, 'Message is required'),
});

export async function handleSubmit({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.format();
    return errors;
  }

  try {
        const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
        });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return redirect('/thanks');
  } catch (err) {
    console.error('Error submitting contact form:', err);
    throw new Error('Server error. Please try again later.');
  }
}


