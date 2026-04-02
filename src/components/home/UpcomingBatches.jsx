import { motion } from 'framer-motion'
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import SectionTitle from '../common/SectionTitle'
import Badge from '../common/Badge'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function UpcomingBatches() {
  const { batches } = useData()
  const upcoming = batches
    .filter((b) => b.status === 'upcoming')
    .slice(0, 3)

  if (upcoming.length === 0) return null

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Enroll Now"
          title="Upcoming Batches"
          subtitle="Limited seats. Register early to secure your spot."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {upcoming.map((batch, i) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                batch.highlight
                  ? 'border-emerald-400 dark:border-emerald-600 ring-2 ring-emerald-400/20 shadow-lg shadow-emerald-100 dark:shadow-emerald-900/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-emerald-200'
              }`}
            >
              {batch.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
              )}
              {batch.seatsLeft <= 5 && batch.seatsLeft > 0 && (
                <div className="absolute top-4 right-4">
                  <Badge color="red">Only {batch.seatsLeft} left!</Badge>
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                    {batch.mode}
                  </p>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                    {batch.courseName}
                  </h3>
                </div>
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Starts {formatDate(batch.startDate)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{batch.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Users className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      {batch.seatsLeft > 0
                        ? `${batch.seatsLeft} of ${batch.seatsTotal} seats left`
                        : 'Batch Full'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    {batch.fee}
                  </p>
                  <Link
                    to={`/batches#${batch.id}`}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      batch.seatsLeft > 0
                        ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700'
                        : 'text-slate-400 cursor-not-allowed pointer-events-none'
                    }`}
                  >
                    {batch.seatsLeft > 0 ? 'Join Now' : 'Full'}
                    {batch.seatsLeft > 0 && <ArrowRight className="w-4 h-4" />}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/batches"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-3 transition-all"
          >
            View all batches <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
