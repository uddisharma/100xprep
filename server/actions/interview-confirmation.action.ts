"use server";

import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import InterviewConfirmation from "@/lib/interview-confirmation-template";

export const sendInterviewEmail = async (data: { email: string }) => {
  const to = `Username <${data.email}>`;

  await sendEmail({
    to: to,
    subject: "Your Interview Confirmation !",
    html: render(InterviewConfirmation(data.email)),
  });

  return true;
};
