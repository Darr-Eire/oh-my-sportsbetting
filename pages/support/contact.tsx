import { useState } from "react";
import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder: You can replace this with your backend API call
    console.log("Form submitted:", form);
    setSubmitted(true);

    // Clear form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <InfoPageLayout
      title="Contact Support"
      description="Need help? Our team is available 24/7 to assist you."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Live Support Options</h2>
        <p className="text-gray-300 mb-2">Live Chat available directly inside your dashboard.</p>
        <p className="text-gray-300 mb-8">Email us directly: support@ohmysportsbetting.com</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Submit a Support Request</h2>

        {submitted ? (
          <p className="text-green-400 font-semibold text-center mb-8">
            ✅ Your message has been submitted. Our team will respond shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto w-full">

            <div>
              <label htmlFor="name" className="block mb-2 text-left text-white font-semibold">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0a1024] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-electricCyan"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-left text-white font-semibold">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0a1024] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-electricCyan"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-left text-white font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0a1024] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-electricCyan"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-electricCyan text-white font-semibold py-3 px-6 rounded-full hover:brightness-110 transition"
            >
              Submit Request
            </button>
          </form>
        )}
      </section>
    </InfoPageLayout>
  );
}
