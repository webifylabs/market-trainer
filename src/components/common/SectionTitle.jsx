import { motion } from 'framer-motion'

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-emerald-500 font-semibold text-sm tracking-widest uppercase mb-3"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`text-3xl md:text-4xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light
              ? 'text-slate-300'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
