import { motion } from 'framer-motion'
import { Clock, Monitor, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../common/Badge'

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        {course.badge && (
          <div className="absolute top-3 left-3">
            <Badge color={course.badgeColor}>{course.badge}</Badge>
          </div>
        )}
        {/* Level badge */}
        <div className="absolute bottom-3 left-3">
          <Badge color="slate">{course.level}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {course.shortDesc}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            {course.mode === 'Offline' ? (
              <MapPin className="w-3.5 h-3.5" />
            ) : (
              <Monitor className="w-3.5 h-3.5" />
            )}
            {course.mode}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              {course.fee}
            </span>
            {course.originalFee && (
              <span className="text-sm text-slate-400 line-through ml-2">
                {course.originalFee}
              </span>
            )}
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 group-hover:gap-2.5 transition-all"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
