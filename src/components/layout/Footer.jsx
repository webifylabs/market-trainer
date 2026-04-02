import { Link } from 'react-router-dom'
import { TrendingUp, Phone, Mail, MapPin, Play, Camera, Send } from 'lucide-react'
import { SITE_CONFIG } from '../../data/mockData'

const footerLinks = {
  Courses: [
    { to: '/courses/fundamentals', label: 'Stock Market Fundamentals' },
    { to: '/courses/technical-analysis', label: 'Technical Analysis Mastery' },
    { to: '/courses/options-trading', label: 'Options Trading Pro' },
    { to: '/courses/long-term-investing', label: 'Long-Term Wealth Creation' },
  ],
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/batches', label: 'Upcoming Batches' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              SEBI-registered stock market education for beginners and
              intermediate investors. 5,000+ lives transformed.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Play className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  {SITE_CONFIG.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>
              ⚠️ Stock market investments involve risk. Past performance is not
              indicative of future results. We do not provide investment advice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
