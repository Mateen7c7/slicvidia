"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Shield,
} from "lucide-react";

const contactInfo = [
  {
    icon: Shield,
    label: "Business Name",
    value: "Hakeem Software Solutions",
    href: null,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    label: "Brand Name",
    value: "Slicvidia",
    href: null,
    color: "text-[#28E7FF]",
    bg: "bg-[#28E7FF]/10",
  },
  {
    icon: Mail,
    label: "Support Email",
    value: "support@slicvidia.com",
    href: "mailto:support@slicvidia.com",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91-7207831604",
    href: "tel:+917207831604",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: MapPin,
    label: "Business Location",
    value: "India",
    href: "#",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat, 10am - 8pm IST",
    href: null,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/slicvidia_official/",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://x.com/slicvidia", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/slicvidia/",
    label: "LinkedIn",
  },
  
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formState);
    alert("Message sent successfully! We'll get back to you shortly.");
    setIsSubmitting(false);
    setFormState({
      name: "",
      email: "",
      subject: "",
      service: "",
      message: "",
    });
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
    <main className="min-h-screen bg-[#0D1117] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[120px] animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info & Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Let&apos;s Build Your <br />
                <span className="bg-linear-to-r from-[#3B82F6] via-[#7C3AED] to-[#28E7FF] bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-[#A3B3C9] max-w-lg leading-relaxed">
                Whether you have a specific project in mind or just want to
                explore possibilities, our team is ready to help you navigate
                the digital landscape.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href || "#"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="group p-6 bg-[#1A1F29]/40 border border-[#2A3240] rounded-2xl hover:border-[#3B82F6]/50 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                  >
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#8290A5] uppercase tracking-wider mb-1">
                    {info.label}
                  </h3>
                  <p className="text-white font-medium wrap-break-word">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#2A3240]">
              <h3 className="text-white font-bold mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-[#1A1F29] border border-[#2A3240] rounded-full flex items-center justify-center text-[#A3B3C9] hover:text-white transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-[#3B82F6] to-[#7C3AED] rounded-4xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#1A1F29]/80 backdrop-blur-xl p-8 md:p-10 rounded-4xl border border-[#2A3240] shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-[#A3B3C9]">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-[#A3B3C9] ml-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/50 transition-all placeholder:text-[#2A3240]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-[#A3B3C9] ml-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/50 transition-all placeholder:text-[#2A3240]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-[#A3B3C9] ml-1"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3B82F6] transition-all text-white appearance-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="web-dev">Web Development</option>
                    <option value="app-dev">Mobile App Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-[#A3B3C9] ml-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or goals..."
                    className="w-full bg-[#0D1117]/50 border border-[#2A3240] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/50 transition-all resize-none placeholder:text-[#2A3240]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  id="contact-submit"
                  className="w-full bg-linear-to-r from-[#3B82F6] to-[#7C3AED] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Brand Statement / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-linear-to-br from-[#1A1F29] to-[#0D1117] rounded-[3rem] border border-[#2A3240] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calendar size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prefer a Face-to-Face Chat?
          </h2>
          <p className="text-[#A3B3C9] mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Skip the back-and-forth emails. Book a discovery call directly with
            our founders to discuss strategy and execution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 mx-auto"
          >
            <Calendar size={22} />
            Schedule Strategy Session
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Messenger (WhatsApp) */}
      <motion.a
        href="https://wa.me/917207831604"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </div>
      </motion.a>
    </main>
  );
}
