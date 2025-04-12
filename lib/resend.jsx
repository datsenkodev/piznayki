'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ userName, phoneNumber, additional }) => {
  const htmlContent = `
    <div style="padding: 20px; background-color: #f0f0f0; text-align: center;">
      <h1><strong>Ім’я:</strong> ${userName}</h1>
      <h2><strong>Телефон:</strong> <a href="tel:${phoneNumber}">${phoneNumber}</a></h2>
      ${additional ? `<h2><strong>Коментар:</strong> ${additional}</h2>` : ''}
    </div>
  `;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'datsenkodev@gmail.com',
    subject: `Пізнайки. Анкета`,
    html: htmlContent,
  });
};
