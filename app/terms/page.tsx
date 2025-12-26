"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsAndConditions() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By accessing and using the website and services provided by{" "}
          <strong>Hakeem software solutions</strong> (&quot;Company&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating under
          the brand name <strong>Slicvidia</strong>, you agree to be bound by
          these Terms & Conditions. If you do not agree to these terms, please
          refrain from using our services.
        </p>
      ),
    },
    {
      title: "2. Description of Services",
      content: (
        <p>
          Slicvidia provides digital solutions, including but not limited to web
          development, UI/UX design, digital marketing, and software
          consultancy. Any new features or tools added to the current services
          shall also be subject to these Terms.
        </p>
      ),
    },
    {
      title: "3. Payments and Billing",
      content: (
        <div className="space-y-4">
          <p>
            All payments for services are processed through{" "}
            <strong>Stripe</strong>. By choosing a service, you agree to provide
            accurate and complete payment information.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Pricing:</strong> All prices are subject to change but
              will be communicated before any transaction.
            </li>
            <li>
              <strong>Taxes:</strong> As a registered entity in India,{" "}
              <strong>Hakeem software solutions</strong> complies with GST
              regulations. Applicable GST will be added to the invoice where
              required by law.
            </li>
            <li>
              <strong>Currency:</strong> Unless otherwise stated, all
              transactions are processed in the currency specified at the time
              of checkout.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Refund and Cancellation Policy",
      content: (
        <div className="space-y-4">
          <p>
            We strive for 100% client satisfaction. However, given the nature of
            digital services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cancellations:</strong> Clients may cancel a project
              within 24 hours of the initial payment for a full refund, provided
              work has not commenced.
            </li>
            <li>
              <strong>Refunds:</strong> Refund requests made after work has
              started will be handled on a case-by-line basis and may involve a
              deduction for the labor/resources already expended.
            </li>
            <li>
              <strong>Subscription Services:</strong> For any recurring
              services, cancellations will take effect at the end of the current
              billing cycle.
            </li>
          </ul>
          <p className="pt-4 italic">
            For more details, please view our full{" "}
            <Link href="/refund" className="text-blue-400 hover:underline">
              Refund & Cancellation Policy
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      title: "5. Intellectual Property",
      content: (
        <p>
          Unless otherwise agreed in writing, <strong>Slicvidia</strong> retains
          ownership of all original templates, code, and design assets until
          full payment is received. Upon final payment, the client is granted a
          non-exclusive, non-transferable license or full ownership of the final
          deliverables as specified in individual project contracts.
        </p>
      ),
    },
    {
      title: "6. Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law,{" "}
          <strong>Hakeem software solutions</strong> shall not be liable for any
          indirect, incidental, or consequential damages resulting from the use
          or inability to use our services, even if we have been advised of the
          possibility of such damages.
        </p>
      ),
    },
    {
      title: "7. Governing Law",
      content: (
        <p>
          These Terms & Conditions are governed by and construed in accordance
          with the laws of India. Any disputes arising from these terms shall be
          subject to the exclusive jurisdiction of the courts in Hyderabad,
          Telangana.
        </p>
      ),
    },
    {
      title: "8. Contact Information",
      content: (
        <div className="space-y-2">
          <p>
            If you have any questions or concerns regarding these Terms, please
            contact us:
          </p>
          <p>
            <strong>Brand:</strong> Slicvidia
          </p>
          <p>
            <strong>Legal Entity:</strong> Hakeem software solutions
          </p>
          <p>
            <strong>Email:</strong> legal@slicvidia.com
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
            Terms & Conditions
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
            Thank you for choosing <strong>Slicvidia</strong>. We look forward
            to working with you and providing exceptional digital solutions via{" "}
            <strong>Hakeem software solutions</strong>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
