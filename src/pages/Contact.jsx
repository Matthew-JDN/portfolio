import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import clsx from "clsx";
import Footer from "../Components/Footer.jsx";
import ContactCard from "../Components/ContactCard.jsx";
import Nav from "../Components/Nav";

const Contact = () => {
  const form = useRef();
  const [isSending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_6e7nzcl",
        "template_hcvf8uk",
        form.current,
        "D6AbhslPhWLgucbGy"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setSending(false);
        }
      );
  };
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <Nav />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-4 mt-10">
          <h1 className="text-5xl text-red-800 font-bold">Contact</h1>
          <p className="text-lg text-gray-500">
            Get in touch with me, I'd love to hear from you!
          </p>

          <div className="mt-4 flex flex-col justify-center bg-white shadow-xl py-6 px-8 rounded-lg">
            <h1 className="text-xl text-red-800 font-bold mb-4">
              Contact Information
            </h1>
            <div className="flex flex-col space-y-6">
              <ContactCard title="Email" desc="leiprtla@gmail.com" icon="📧" />
              <ContactCard title="Phone" desc="+63 969 060 3058" icon="📱" />
              <ContactCard
                title="Location"
                desc="Baliwag City, Bulacan"
                icon="📍"
              />
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white shadow-xl p-6 rounded-lg space-y-4 mt-6"
            >
              <h1 className="text-xl text-red-800 font-bold mb-2">
                Send a Message
              </h1>

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="p-3 border rounded-lg w-full"
                required
              />

              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                className="p-3 border rounded-lg w-full"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="p-3 border rounded-lg w-full resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={clsx(
                  "w-full p-3 rounded-lg font-semibold transition",
                  isSending
                    ? "bg-red-800 opacity-70 text-white cursor-not-allowed"
                    : "bg-red-800 hover:bg-red-700 text-white"
                )}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
