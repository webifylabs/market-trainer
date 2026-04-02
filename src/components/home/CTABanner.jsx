import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../data/mockData'

export default function CTABanner() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-3xl p-10 md:p-14 overflow-hidden text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Limited Seats Available
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Take Control of Your Financial Future?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their financial
              lives with structured, practical market education.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/batches"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Explore Batches <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
