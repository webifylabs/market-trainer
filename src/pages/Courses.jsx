import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import CourseCard from '../components/courses/CourseCard'
import { useData } from '../context/DataContext'

const modes = ['All', 'Online', 'Offline', 'Online + Offline']
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Courses() {
  const { courses } = useData()
  const [search, setSearch] = useState('')
  const [mode, setMode] = useState('All')
  const [level, setLevel] = useState('All')

  const filtered = courses.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(search.toLowerCase())
    const matchMode = mode === 'All' || c.mode === mode
    const matchLevel = level === 'All' || c.level === level
    return matchSearch && matchMode && matchLevel
  })

  return (
    <>
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-400 font-semibold text-sm tracking-widest uppercase"
          >
            Our Curriculum
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            All Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Beginner to advanced — structured, practical, and taught by an
            experienced market professional.
          </motion.p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            {/* Mode filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
              {modes.map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    mode === m
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Level filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    level === l
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No courses match your filters. Try adjusting them.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
