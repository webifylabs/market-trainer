import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? 'fill-amber-400 text-amber-400'
              : 'text-slate-300 dark:text-slate-600'
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial, index = 0 }) {
  const t = testimonial
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between">
        <Quote className="w-8 h-8 text-emerald-400/30" />
        <Stars count={t.rating} />
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic flex-1">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-700">
        <img
          src={t.photo}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/30"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">
            {t.name}
          </p>
          <p className="text-xs text-slate-400">
            {t.location} · {t.course}
          </p>
        </div>
        <span className="ml-auto text-xs text-slate-400 shrink-0">{t.platform}</span>
      </div>
    </motion.div>
  )
}
