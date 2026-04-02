import { motion } from 'framer-motion'
import {
  Shield, Users, Zap, TrendingUp, MessageCircle, Star
} from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import { WHY_CHOOSE_US } from '../../data/mockData'

const iconMap = { Shield, Users, Zap, TrendingUp, MessageCircle, Star }

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Why StockPro Academy"
          title="The Smartest Way to Start Your Market Journey"
          subtitle="Not just another course. A complete ecosystem to learn, practice, and grow."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Star
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg hover:shadow-emerald-50 dark:hover:shadow-none transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
