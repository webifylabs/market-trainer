import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import SectionTitle from '../common/SectionTitle'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function TestimonialsPreview() {
  const { testimonials } = useData()
  const [idx, setIdx] = useState(0)
  const total = testimonials.length
  if (total === 0) return null

  const prev = () => setIdx((p) => (p - 1 + total) % total)
  const next = () => setIdx((p) => (p + 1) % total)
  const t = testimonials[idx]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Student Stories"
          title="What Our Students Say"
          subtitle="Real reviews from real students — no paid testimonials."
          light
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-10 text-center"
            >
              <Quote className="w-8 h-8 text-emerald-400/40 mx-auto mb-6" />
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/50"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.location} · {t.course}</p>
                </div>
                <Stars count={t.rating} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === idx ? 'bg-emerald-400 w-6' : 'bg-slate-600'
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/testimonials"
            className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            Read all {total} reviews →
          </Link>
        </div>
      </div>
    </section>
  )
}
