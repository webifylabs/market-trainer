import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data/mockData'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
      >
        <span className="font-medium text-slate-900 dark:text-white text-sm pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
            isOpen ? 'rotate-180 text-emerald-500' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-emerald-50/50 dark:bg-emerald-900/10 border-t border-slate-200 dark:border-slate-700">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openMap, setOpenMap] = useState({})

  const toggle = (key) =>
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }))

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg"
          >
            Everything you need to know before enrolling.
          </motion.p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {FAQS.map((cat) => (
            <div key={cat.category} className="mb-10">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => {
                  const key = `${cat.category}-${item.q}`
                  return (
                    <FAQItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={!!openMap[key]}
                      onToggle={() => toggle(key)}
                    />
                  )
                })}
              </div>
            </div>
          ))}

          {/* Still have questions? */}
          <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 text-center border border-emerald-100 dark:border-emerald-800">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
              We're happy to help. Reach out by phone, WhatsApp, or our contact form.
            </p>
            <Button to="/contact" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
