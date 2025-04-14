'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ modalType, selected, userName, phoneNumber, additional }) => {
  const htmlContent = `
    <div style="padding: 20px">
      <img src="public/images/logo-big.svg" />
      <p style="color: #727efc; font-size: 1.25rem;"><strong>Тема звернення:</strong> ${modalType}</p>
      <p style="color: #727efc; font-size: 1.25rem;"><strong>Що цікавить:</strong> ${selected}</p>
      <p style="color: #727efc; font-size: 1.25rem;"><strong>Ім’я:</strong> ${userName}</p>
      <p style="color: #727efc; font-size: 1.25rem;"><strong>Телефон:</strong> <a href="tel:${phoneNumber}">${phoneNumber}</a></p>
      ${additional ? `<p style="color: #727efc; font-size: 1.25rem;"><strong>Коментар:</strong> ${additional}</p>` : ''}
    </div>
  `;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'datsenkodev@gmail.com',
    subject: `Пізнайки. Анкета`,
    html: htmlContent,
  });
};
