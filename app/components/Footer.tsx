import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E13] border-t border-[#2A3240] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="text-2xl font-bold bg-linear-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
            Slicvidia
          </div>
          <p className="text-[#A3B3C9] leading-relaxed">
            Empowering businesses with scalable digital solutions that
            accelerate growth and build long-term success.
          </p>
          <div className="pt-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
              Innovation • Integrity • Quality
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white text-lg hover:text-blue-400 transition-colors">
            <Link href="/services">Services</Link>
          </h4>
          <ul className="space-y-3 text-[#A3B3C9]">
            <li>
              <Link
                href="/services/website-development"
                className="hover:text-blue-400 transition-colors"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/software-development"
                className="hover:text-blue-400 transition-colors"
              >
                Software Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services/digital-marketing"
                className="hover:text-blue-400 transition-colors"
              >
                Digital Marketing & SEO
              </Link>
            </li>
            <li>
              <Link
                href="/services/web-management-maintenance"
                className="hover:text-blue-400 transition-colors"
              >
                Web Maintenance
              </Link>
            </li>
            <li>
              <Link
                href="/services/content-video-editing"
                className="hover:text-blue-400 transition-colors"
              >
                Content & Video
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white text-lg">Company</h4>
          <ul className="space-y-3 text-[#A3B3C9]">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="hover:text-white transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white text-lg">
            Let&apos;s Connect
          </h4>
          <ul className="space-y-4 text-[#A3B3C9]">
            <li>
              <a
                href="mailto:info@slicvidia.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors">
                  ✉️
                </span>
                info@slicvidia.com
              </a>
            </li>
            <li>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors">
                  📞
                </span>
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex gap-4 mt-6">
              {/* Social Icons */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors text-white border border-white/10 hover:border-transparent"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors text-white border border-white/10 hover:border-transparent"
              >
                In
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors text-white border border-white/10 hover:border-transparent"
              >
                Ig
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#2A3240] flex flex-col md:flex-row justify-between items-center gap-4 text-[#8290A5] text-sm">
        <div>© 2025 Slicvidia. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/refund" className="hover:text-white">
            Refund Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
