import { useState } from 'react'
import { motion } from 'framer-motion'
import { useData } from '../context/DataContext'
import BatchCard from '../components/batches/BatchCard'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

const tabs = [
  { id: 'upcoming', label: 'Upcoming Batches' },
  { id: 'full', label: 'Full / Waitlist' },
  { id: 'completed', label: 'Past Batches' },
]

export default function Batches() {
  const { batches } = useData()
  const [tab, setTab] = useState('upcoming')

  const filtered = batches.filter((b) => b.status === tab)

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
            Batches & Schedule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-xl mx-auto mb-6"
          >
            Seats fill up fast. Secure yours early to avoid missing a batch.
          </motion.p>
          <Button to="/contact" size="lg">Book Free Demo</Button>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                  tab === t.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {t.label} ({batches.filter((b) => b.status === t.id).length})
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500 dark:text-slate-400">
              No batches in this category right now.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((batch, i) => (
                <BatchCard key={batch.id} batch={batch} index={i} />
              ))}
            </div>
          )}

          {/* Notice */}
          <div className="mt-12 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 text-center">
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Don't see a batch that fits your schedule?{' '}
              <a
                href="https://wa.me/919876543210?text=Hi! I'd like to know about custom batch timings."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                WhatsApp us
              </a>{' '}
              and we'll arrange a suitable batch for you.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
