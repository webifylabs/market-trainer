import { motion } from 'framer-motion'
import { CheckCircle, Award, BookOpen, Users, Star } from 'lucide-react'
import { TRAINER, SITE_CONFIG } from '../data/mockData'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'

const values = [
  {
    icon: BookOpen,
    title: 'Practice First',
    desc: 'Every concept is demonstrated on live charts. No dry theory.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    desc: 'Learning happens best in groups. Our Telegram community is always active.',
  },
  {
    icon: Award,
    title: 'Regulated & Ethical',
    desc: "We're SEBI-registered. No stock tips, no pump-and-dump. Pure education.",
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About StockPro Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Our mission: make financial literacy accessible and actionable for every Indian.
          </motion.p>
        </div>
      </div>

      {/* Trainer section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={TRAINER.photo}
                  alt={TRAINER.name}
                  className="w-full h-[480px] object-cover object-top"
                />
              </div>
              {/* Stat chips */}
              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3">
                {[
                  { val: TRAINER.experience, label: 'Experience' },
                  { val: TRAINER.students, label: 'Students' },
                  { val: `${TRAINER.rating}★`, label: 'Rating' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center shadow-lg border border-slate-100 dark:border-slate-700"
                  >
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      {s.val}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-0"
            >
              <span className="text-emerald-500 font-semibold text-sm tracking-widest uppercase">
                Your Mentor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
                {TRAINER.name}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-5">
                {TRAINER.title}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {TRAINER.bio}
              </p>

              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Achievements & Credentials
              </h3>
              <ul className="space-y-2.5 mb-8">
                {TRAINER.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
              <Button to="/contact" size="lg">Book a Free Demo Session</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle label="Teaching Philosophy" title="The Principles Behind Our Approach" />
          <blockquote className="bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed shadow-sm">
            "{TRAINER.philosophy}"
            <footer className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400 not-italic">
              — {TRAINER.name}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Our Values" title="What Makes Us Different" />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700"
                >
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
