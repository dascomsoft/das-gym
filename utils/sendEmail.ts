

import emailjs from "@emailjs/browser";

export const sendEmail = async (userName: string, userEmail: string, gymClass: string) => {
    try {
        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            gym_class: gymClass,
        };

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        console.log("✅ Email envoyé avec succès:", response);
    } catch (error) {
        console.error("❌ Erreur envoi Email:", error);
    }
};
