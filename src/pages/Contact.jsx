import { useEffect } from "react";
import { Link } from "react-router-dom";

// ✏️ Replace these with YOUR real contact details
const contact = {
  email: "your-email@example.com",
  phone: "+91 00000 00000",
  phoneLink: "+910000000000", // digits only, used for the tap-to-call link
  addressLines: ["Your Organization Name", "Street / Building", "City", "State, Country"],
};

export default function Contact() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Contact – Typing Tutor";
    return () => {
      document.title = previous;
    };
  }, []);

  const card = "bg-white border border-gray-200 rounded-xl p-5";
  const label = "text-sm font-semibold uppercase tracking-wide text-gray-500";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Get In Touch</p>
      <h1 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-3 text-gray-600">
        Have a question, a suggestion, or need help with your account? Reach out and we will get back to you.
      </p>

      {/* Reach Us */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Reach Us</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className={card}>
            <div className="text-2xl" aria-hidden="true">✉️</div>
            <h3 className={`mt-2 ${label}`}>Email</h3>
            <a href={`mailto:${contact.email}`} className="mt-1 block text-blue-600 font-medium break-all hover:underline">
              {contact.email}
            </a>
          </div>

          <div className={card}>
            <div className="text-2xl" aria-hidden="true">📞</div>
            <h3 className={`mt-2 ${label}`}>Phone</h3>
            <a href={`tel:${contact.phoneLink}`} className="mt-1 block text-blue-600 font-medium hover:underline">
              {contact.phone}
            </a>
          </div>

          <div className={`${card} sm:col-span-2`}>
            <div className="text-2xl" aria-hidden="true">📍</div>
            <h3 className={`mt-2 ${label}`}>Address</h3>
            <address className="mt-1 not-italic text-gray-800 leading-relaxed">
              {contact.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>
        </div>
      </section>

      {/* Help link */}
      <section className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
        <p className="text-gray-800 font-medium">Want to know more about the platform first?</p>
        <Link to="/about" className="mt-3 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          About Typing Tutor
        </Link>
      </section>

      <p className="mt-10 text-center text-sm text-gray-400">Typing Tutor © 2026</p>
    </div>
  );
}