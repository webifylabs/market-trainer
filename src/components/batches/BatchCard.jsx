import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Wifi, MapPin, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../common/Badge'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const statusConfig = {
  upcoming: { color: 'emerald', label: 'Upcoming' },
  full: { color: 'red', label: 'Full' },
  completed: { color: 'slate', label: 'Completed' },
}

export default function BatchCard({ batch, index = 0 }) {
  const status = statusConfig[batch.status] || statusConfig.upcoming
  const isFull = batch.seatsLeft === 0 && batch.status !== 'completed'
  const isCompleted = batch.status === 'completed'
  const seatsPercent = Math.round(
    ((batch.seatsTotal - batch.seatsLeft) / batch.seatsTotal) * 100,
  )

  return (
    <motion.div
      id={batch.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`bg-white dark:bg-slate-800 rounded-2xl border p-6 transition-all duration-300 ${
        batch.highlight && !isCompleted
          ? 'border-emerald-400 dark:border-emerald-600 ring-2 ring-emerald-400/20 shadow-lg'
          : 'border-slate-200 dark:border-slate-700 hover:border-emerald-200 hover:shadow-lg'
      } ${isCompleted ? 'opacity-70' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            {batch.mode}
          </p>
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            {batch.courseName}
          </h3>
        </div>
        <Badge color={status.color}>{status.label}</Badge>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Starts {formatDate(batch.startDate)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{batch.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          {batch.mode === 'Offline' ? (
            <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : (
            <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
          )}
          <span>{batch.mode}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Users className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            {isCompleted
              ? `${batch.seatsTotal} enrolled`
              : `${batch.seatsLeft} seats left`}
          </span>
        </div>
      </div>

      {/* Seat bar */}
      {!isCompleted && (
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>{batch.seatsTotal - batch.seatsLeft} enrolled</span>
            <span>{batch.seatsLeft} seats left</span>
          </div>
          <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                seatsPercent > 80 ? 'bg-red-400' : 'bg-emerald-400'
              }`}
              style={{ width: `${seatsPercent}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
        <p className="text-xl font-bold text-slate-900 dark:text-white">
          {batch.fee}
        </p>
        {isCompleted ? (
          <span className="flex items-center gap-1.5 text-sm text-slate-400">
            <CheckCircle className="w-4 h-4" /> Completed
          </span>
        ) : isFull ? (
          <Link
            to="/contact"
            className="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700"
          >
            Join Waitlist
          </Link>
        ) : (
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Join Now
          </Link>
        )}
      </div>
    </motion.div>
  )
}
