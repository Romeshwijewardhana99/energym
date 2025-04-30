import React, { useState } from "react";
import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Clock as ClockIcon } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setToast({ show: true, type: "error", message: "Please fill in all required fields." });
      return;
    }

    setLoading(true);

    // Simulate async send (like API call)
    setTimeout(() => {
      setLoading(false);
      setToast({ show: true, type: "success", message: "Your message has been sent successfully!" });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Clear form
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200 relative">
      {/* Toast Message */}
      {toast.show && (
        <div className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-md text-white ${toast.type === "success" ? "bg-green-600" : "bg-red-600"} shadow-lg`}>
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">CONTACT US</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to start your fitness journey? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors" required>
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="class">Class Information</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors" required></textarea>
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium py-3 px-4 rounded-md transition-colors">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div>
            <div className="bg-blue-600 dark:bg-blue-700 rounded-lg shadow-md p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPinIcon size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>37 Hiripitiya Rd, Muththettugala 60000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p><a href="tel:+94771234567" className="hover:underline">+94 77 123 4567</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MailIcon size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p><a href="mailto:info@energym.com" className="hover:underline">info@energym.com</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ClockIcon size={24} className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p>Monday - Saturday: 06:00 h - 22:00 h</p>
                    <p>Sunday: 06:00 h - 12:00 h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <iframe
                title="Energym Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6874601575278!2d80.37563287476291!3d7.499715192512657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3392a1a64381d%3A0x6f8e8d0e7ff86b43!2sEnergym!5e0!3m2!1sen!2slk!4v1744542040441!5m2!1sen!2slk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
