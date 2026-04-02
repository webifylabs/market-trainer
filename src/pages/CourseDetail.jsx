import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, Monitor, MapPin, CheckCircle, ChevronDown, ArrowLeft,
  BookOpen, Award, Users, Zap
} from 'lucide-react'
import { useData } from '../context/DataContext'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import { SITE_CONFIG } from '../data/mockData'

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
      >
        <span className="font-medium text-slate-900 dark:text-white text-sm pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CourseDetail() {
  const { id } = useParams()
  const { courses } = useData()
  const course = courses.find((c) => c.id === id)

  if (!course) return <Navigate to="/courses" replace />

  const waMsg = encodeURIComponent(
    `Hi! I'm interested in the "${course.title}" course. Please share enrollment details.`,
  )

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {course.badge && (
                  <Badge color={course.badgeColor}>{course.badge}</Badge>
                )}
                <Badge color="slate">{course.level}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {course.title}
              </h1>
              <p className="text-slate-300 text-lg mb-6">{course.shortDesc}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  {course.mode === 'Offline' ? (
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Monitor className="w-4 h-4 text-emerald-400" />
                  )}
                  {course.mode}
                </span>
              </div>
            </div>

            {/* Enrollment card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="mb-4">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {course.fee}
                </p>
                {course.originalFee && (
                  <p className="text-slate-400 text-sm">
                    <span className="line-through">{course.originalFee}</span>
                    <span className="ml-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                      Save{' '}
                      {Math.round(
                        ((parseInt(course.originalFee.replace(/[₹,]/g, '')) -
                          parseInt(course.fee.replace(/[₹,]/g, ''))) /
                          parseInt(course.originalFee.replace(/[₹,]/g, ''))) *
                          100,
                      )}
                      %
                    </span>
                  </p>
                )}
              </div>
              <div className="space-y-2 mb-6">
                <Button
                  to="/contact"
                  size="lg"
                  className="w-full justify-center"
                >
                  Enroll Now
                </Button>
                <Button
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${waMsg}`}
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Ask on WhatsApp
                </Button>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Lifetime recording access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Private Telegram community
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Completion certificate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> 7-day money-back guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              {/* What you'll learn */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-emerald-500" /> What You'll Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3.5"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Syllabus */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-emerald-500" /> Course Syllabus
                </h2>
                <div className="space-y-2">
                  {course.topics.map((topic, i) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                    >
                      <span className="w-7 h-7 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {topic}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {course.faqs.map((faq) => (
                      <FAQ key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Course Highlights
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      { icon: Clock, label: 'Duration', value: course.duration },
                      { icon: Monitor, label: 'Mode', value: course.mode },
                      { icon: Users, label: 'Level', value: course.level },
                      { icon: Zap, label: 'Fee', value: course.fee },
                    ].map(({ icon: Icon, label, value }) => (
                      <li
                        key={label}
                        className="flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          <Icon className="w-4 h-4" /> {label}
                        </span>
                        <span className="font-medium text-slate-900 dark:text-white">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button to="/contact" size="lg" className="w-full justify-center">
                  Book Free Demo First
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
