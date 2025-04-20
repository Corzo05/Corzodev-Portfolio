import { Resend } from 'resend';
import EmailTemplate from '@/app/components/EmailTemplate';
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const emailDestinatario = process.env.EMAIL_DESTINATARIO;

export async function POST(req: any) {

  const body = await req.json();

  const { email, subject, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: String(emailDestinatario),
      subject: subject,
      react: EmailTemplate({message, email}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}