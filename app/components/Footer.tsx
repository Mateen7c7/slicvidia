import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Slicvidia
          </div>
          <p className="text-zinc-400">
            Building the future of digital experiences.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Services</h4>
          <ul className="space-y-3 text-zinc-400">
            <li>
              <Link
                href="/services/website-development"
                className="hover:text-white"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/digital-marketing"
                className="hover:text-white"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/services/digital-marketing"
                className="hover:text-white"
              >
                SEO Optimization
              </Link>
            </li>
            <li>
              <Link
                href="/services/content-video-editing"
                className="hover:text-white"
              >
                Content Creation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Company</h4>
          <ul className="space-y-3 text-zinc-400">
            <li>
              <Link href="/#about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Connect</h4>
          <ul className="space-y-3 text-zinc-400">
            <li>hello@slicvidia.com</li>
            <li>+1 (555) 123-4567</li>
            <li className="flex gap-4 mt-4">
              {/* Social Icons */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-white"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-white"
              >
                In
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-white"
              >
                Ig
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
        <div>© 2024 Slicvidia. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
