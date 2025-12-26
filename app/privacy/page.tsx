"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <p>
          Welcome to Slicvidia. This Privacy Policy describes how{" "}
          <strong>Hakeem software solutions</strong> (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;), the operator of{" "}
          <strong>Slicvidia</strong>, collects, uses, and shares your personal
          information when you visit our website or use our services. We are
          committed to protecting your privacy and ensuring your personal data
          is handled securely and in compliance with applicable laws.
        </p>
      ),
    },
    {
      title: "2. Information We Collect",
      content: (
        <div className="space-y-4">
          <p>We may collect several types of information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Identification Information:</strong> Name, email
              address, phone number, and physical billing/shipping address.
            </li>
            <li>
              <strong>Financial Information:</strong> Payment card details and
              billing information. Please note that all payments are processed
              securely through <strong>Stripe</strong>. We do not store your
              full credit card numbers on our servers.
            </li>
            <li>
              <strong>Technical and Usage Data:</strong> IP address, browser
              type, device information, and how you interact with our website.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and maintain our services.</li>
          <li>
            To process transactions and send related information, including
            confirmations and invoices via Stripe.
          </li>
          <li>
            To communicate with you regarding support, updates, and promotional
            offers (where you have opted in).
          </li>
          <li>
            To monitor and analyze usage patterns to improve our website and
            services.
          </li>
          <li>
            To comply with legal obligations, such as GST compliance and tax
            reporting.
          </li>
        </ul>
      ),
    },
    {
      title: "4. Sharing Your Information",
      content: (
        <p>
          We do not sell your personal information. We only share data with
          third-party service providers who help us operate our business, such
          as <strong>Stripe</strong> for payment processing. These providers are
          obligated to protect your data. We may also disclose information if
          required by law or to protect our rights.
        </p>
      ),
    },
    {
      title: "5. Data Security",
      content: (
        <p>
          Under the brand name <strong>Slicvidia</strong>, we implement
          industry-standard security measures, including SSL encryption, to
          protect your data during transmission. While we strive to use
          commercially acceptable means to protect your personal information, no
          method of transmission over the Internet is 100% secure.
        </p>
      ),
    },
    {
      title: "6. Your Rights",
      content: (
        <p>
          Depending on your location, you may have the right to access, correct,
          or delete your personal data. You may also object to or restrict
          certain processing of your data. To exercise these rights, please
          contact us at the email provided below.
        </p>
      ),
    },
    {
      title: "7. Cookies",
      content: (
        <p>
          We use cookies and similar tracking technologies to track activity on
          our service and hold certain information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent.
        </p>
      ),
    },
    {
      title: "8. Contact Us",
      content: (
        <div className="space-y-2">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p>
            <strong>Brand:</strong> Slicvidia
          </p>
          <p>
            <strong>Legal Entity:</strong> Hakeem software solutions
          </p>
          <p>
            <strong>Email:</strong> privacy@slicvidia.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1117] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-[#A3B3C9] text-lg max-w-2xl mx-auto">
            Last Updated: December 25, 2025
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="bg-[#1A1F29] border border-[#2A3240] p-8 rounded-2xl hover:border-[#3B82F6]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-sm font-mono">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="text-[#A3B3C9] leading-relaxed">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-16 p-8 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-center"
          {...fadeIn}
        >
          <p className="text-[#A3B3C9] text-sm">
            This Privacy Policy applies to the services provided by{" "}
            <strong>Hakeem software solutions</strong> operating as{" "}
            <strong>Slicvidia</strong>. By using our website, you agree to the
            terms outlined above.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
