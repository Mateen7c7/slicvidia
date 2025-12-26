"use client";

import { motion } from "framer-motion";

export default function ReviewsSection() {
  const reviews = [
    {
      quote:
        "We saw a 200% increase in leads within the first month. Slicvidia didn't just build a website; they built a sales engine.",
      author: "Elena Rodriguez",
      role: "Marketing Director",
      company: "Growth Tech",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      quote:
        "Their developer-led approach meant no communication gaps. Features were delivered faster and bug-free.",
      author: "David Chen",
      role: "CTO",
      company: "SaaS Flow",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      quote:
        "Finally, an agency that cares about long-term growth. The ongoing support has been a game-changer for scaling our platform.",
      author: "Sarah Jenkins",
      role: "Founder",
      company: "Bright Mind",
      image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
  ];

  return (
    <section className="py-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: reviews.map((review, index) => ({
              "@type": "Review",
              position: index + 1,
              author: {
                "@type": "Person",
                name: review.author,
              },
              reviewBody: review.quote,
              publisher: {
                "@type": "Organization",
                name: "Slicvidia",
              },
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Trusted by Innovative Brands
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 relative flex flex-col items-center text-center hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-800 rounded-full border-2 border-zinc-900 overflow-hidden flex items-center justify-center">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-4xl text-blue-500/20 mb-4 font-serif">
                &quot;
              </div>
              <p className="text-lg text-zinc-300 mb-8 italic leading-relaxed">
                {review.quote}
              </p>
              <div className="mt-auto">
                <div className="font-bold text-white text-lg">
                  {review.author}
                </div>
                <div className="text-sm text-blue-400 font-medium">
                  {review.role}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                  {review.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
