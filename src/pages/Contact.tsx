import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_82pb8tn", "template_71e5wtp", form.current, "oaPPZB0lIg6puo0Ql")
      .then(() => alert("Email sent successfully!"))
      .catch((error) => console.error("Email sending error:", error));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" required className="p-2 border" />
        <input type="email" name="email" placeholder="Your Email" required className="p-2 border" />
        <textarea name="message" placeholder="Your Message" required className="p-2 border" />
        <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
      </form>
    </div>
  );
};

export default Contact;
