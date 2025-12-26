"use client";

import { motion } from "framer-motion";

export default function RefundPolicy() {
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
          At <strong>Slicvidia</strong>, operating under{" "}
          <strong>Hakeem Software Solutions</strong>, we are committed to
          providing high-quality digital solutions including web development,
          software services, and digital marketing. We value our clients&apos;
          satisfaction and have established this Refund and Cancellation Policy
          to ensure transparency in our business dealings.
        </p>
      ),
    },
    {
      title: "2. Cancellation Policy",
      content: (
        <div className="space-y-4">
          <p>
            We understand that business needs can change. Our cancellation
            policy is designed to be fair to both the client and our development
            team:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Project Cancellation:</strong> Clients may cancel a
              project within 24 hours of the initial payment for a full refund,
              provided work has not commenced.
            </li>
            <li>
              <strong>Post-Commencement:</strong> If a cancellation request is
              made after work has started, the refund will be pro-rated based on
              the milestones achieved and resources already expended.
            </li>
            <li>
              <strong>Notice Period:</strong> All cancellation requests must be
              submitted in writing to <strong>billing@slicvidia.com</strong>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Refund Eligibility",
      content: (
        <div className="space-y-4">
          <p>Refunds are evaluated on a case-by-case basis:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service-Based Refunds:</strong> Since digital services
              involve significant labor and custom development, refunds are
              generally not provided for completed work or delivered assets.
            </li>
            <li>
              <strong>Errors and Fixes:</strong> If there are technical errors
              or bugs in the delivered product that deviate from the agreed
              scope, we will rectify them free of charge within 30 days of
              delivery.
            </li>
            <li>
              <strong>Non-Refundable Items:</strong> Third-party costs (such as
              domain registration, hosting fees, premium plugins, or advertising
              spend) are non-refundable.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Subscription Services",
      content: (
        <div className="space-y-4">
          <p>For recurring services and maintenance plans:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cancellations:</strong> You may cancel your subscription
              at any time. The cancellation will take effect at the end of the
              current billing period.
            </li>
            <li>
              <strong>No Partial Refunds:</strong> We do not offer partial
              refunds for the remaining days of a billing cycle once it has
              started.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Processing Time",
      content: (
        <p>
          Approved refunds will be processed within{" "}
          <strong>5-7 business days</strong>. Refunds, if applicable, are
          processed by <strong>Hakeem Software Solutions</strong> through the
          original payment method.
        </p>
      ),
    },
    {
      title: "6. Contact Information",
      content: (
        <div className="space-y-2">
          <p>
            For any queries related to refunds or cancellations, please reach
            out to us:
          </p>
          <p>
            <strong>Brand:</strong> Slicvidia
          </p>
          <p>
            <strong>Legal Entity:</strong> Hakeem Software Solutions
          </p>
          <p>
            <strong>Email:</strong> billing@slicvidia.com
          </p>
          <p>
            <strong>Address:</strong> Hyderabad, Telangana, India
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
            Refund / Cancellation Policy
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
            Thank you for trusting <strong>Slicvidia</strong>. We value our
            partnership and strive to maintain the highest standards of service
            via <strong>Hakeem Software Solutions</strong>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
