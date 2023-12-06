import { Email } from '@/components/Email';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
  name: z.string().min(2),
  emailAddress: z.string().email(),
  content: z.string().min(2),
});

export async function POST(req: NextRequest) {
  const { name, emailAddress, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const data = await resend.emails.send({
    from: 'my CV-website',
    to: 'rudofiloveugene@gmail.com',
    subject: `${name} has a message!`,
    react: Email({ name, emailAddress, content }),
    text: `${name} left a message from CV-website! Here is the message: ${content}. Contact email: ${emailAddress}`,
  });

  return NextResponse.json({ data, error: null }, { status: 200 });
}
