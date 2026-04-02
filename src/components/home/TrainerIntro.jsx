import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TRAINER } from '../../data/mockData'

export default function TrainerIntro() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={TRAINER.photo}
                alt={TRAINER.name}
                className="w-full h-80 md:h-96 object-cover object-top"
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white font-semibold">{TRAINER.name}</p>
                <p className="text-emerald-400 text-sm">{TRAINER.title}</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-emerald-500 font-semibold text-sm tracking-widest uppercase">
              Meet Your Mentor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              {TRAINER.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {TRAINER.bio}
            </p>

            {/* Achievements */}
            <ul className="space-y-2.5 mb-8">
              {TRAINER.achievements.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all"
            >
              Learn more about Rajesh <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
