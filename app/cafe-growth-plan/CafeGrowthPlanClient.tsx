"use client";

import { useEffect, useState } from "react";
import { Download, FileText, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CafeGrowthPlan() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    // Small delay to ensure the page has loaded and user sees the animation
    const timer = setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/cafes_growth_plan.pdf";
      link.download = "cafes_growth_plan.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadStarted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 relative"
        >
          {downloadStarted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <CheckCircle2 className="w-10 h-10 text-blue-500" />
            </motion.div>
          ) : (
            <div className="relative">
              <FileText className="w-10 h-10 text-blue-500" />
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 -right-1"
              >
                <Download className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
          )}
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Cafe Growth Plan
        </h1>

        <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          {downloadStarted
            ? "Your download has started. If it didn't start automatically, please use the button below."
            : "Preparing your exclusive Cafe Growth Plan. Your download will begin in a moment..."}
        </p>

        <div className="space-y-4">
          <a
            href="/cafes_growth_plan.pdf"
            download="cafes_growth_plan.pdf"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-[0.98]"
          >
            <Download className="w-5 h-5" />
            Download Manually
          </a>

          <div className="block pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-zinc-600 text-sm font-medium tracking-wider uppercase z-10">
        Slicvidia Premium Resources
      </div>
    </div>
  );
}
