"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Send, Phone } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    businessName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    alert("Thank you for your request! We will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#0D1117] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#3B82F6]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-xl text-[#A3B3C9] max-w-2xl mx-auto">
            Ready to transform your digital presence? Fill out the form below or
            schedule a call with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1A1F29]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3240]"
          >
            <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#A3B3C9] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A3B3C9] mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formState.businessName}
                  onChange={handleChange}
                  className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder="Company Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A3B3C9] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A3B3C9] mb-2">
                  What service do you need?
                </label>
                <select
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3B82F6] transition-colors text-white"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A3B3C9] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send size={20} />
                Request a Quote
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#1A1F29]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3240]">
              <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-[#A3B3C9] mb-6">
                Prefer to talk directly? Schedule a free 30-minute consultation
                call with our experts to discuss your project.
              </p>
              <motion.a
                href="#" // Replace with actual Calendly link
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Calendar size={20} />
                Schedule a Call
              </motion.a>
            </div>

            <div className="bg-[#1A1F29]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3240]">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 text-[#A3B3C9]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                    <Send size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#8290A5]">Email Us</p>
                    <p className="text-white">hello@slicvidia.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#8290A5]">Call Us</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/20 transition-shadow flex items-center justify-center"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </motion.a>
    </main>
  );
}
