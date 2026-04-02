import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import CourseCard from '../courses/CourseCard'
import { useData } from '../../context/DataContext'

export default function CoursesPreview() {
  const { courses } = useData()
  const preview = courses.slice(0, 4)

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Our Courses"
          title="Everything You Need to Master Markets"
          subtitle="From basics to advanced derivatives — a structured learning path for every stage."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {preview.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-3 transition-all"
          >
            View all courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
