import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useData } from '../context/DataContext'
import TestimonialCard from '../components/testimonials/TestimonialCard'
import SectionTitle from '../components/common/SectionTitle'

function OverallRating() {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 text-center border border-emerald-100 dark:border-emerald-800 mb-12">
      <p className="text-6xl font-bold text-slate-900 dark:text-white mb-1">4.9</p>
      <div className="flex justify-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Based on 200+ Google Reviews
      </p>
    </div>
  )
}

export default function Testimonials() {
  const { testimonials } = useData()

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Student Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg"
          >
            Real reviews. Real people. Real results.
          </motion.p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <OverallRating />

          {/* Grid of testimonials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          {/* Video testimonials placeholder */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-700">
            <SectionTitle
              label="Video Testimonials"
              title="Hear From Our Students Directly"
              subtitle="Watch short interviews with students who transformed their financial journey."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm"
                >
                  Video Testimonial #{n}
                  <br />
                  (Coming Soon)
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
