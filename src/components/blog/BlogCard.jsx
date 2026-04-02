import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../common/Badge'

export default function BlogCard({ blog, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge color="blue">{blog.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(blog.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {blog.readTime}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-1">
          {blog.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <Link
          to={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-2.5 transition-all mt-auto"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  )
}
