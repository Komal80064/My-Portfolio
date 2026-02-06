import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ui51dcr",
        "template_ono4gbe",
        form.current,
        "Oa-S880auyKrAhCx2"
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");
          setLoading(false);
          form.current.reset(); // Reset form after success
        },
        () => {
          toast.error("Failed to send message ❌ Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950  text-white flex items-center justify-center px-4 py-3"
    >
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-5xl font-bold text-center mb-6 bg-linear-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-gray-300 text-center mb-8">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 outline-none focus:border-teal-400 text-white placeholder-gray-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 outline-none focus:border-teal-400 text-white placeholder-gray-300"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 outline-none focus:border-teal-400 text-white placeholder-gray-300"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 w-full rounded-lg transition-all duration-300 bg-linear-to-r from-teal-400 to-purple-500 hover:scale-105 text-black font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
