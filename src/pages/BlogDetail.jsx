import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react'
import { useData } from '../context/DataContext'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import BlogCard from '../components/blog/BlogCard'

// Very simple Markdown-to-HTML renderer for the blog content
function renderMarkdown(text) {
  return text
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 mb-1"><span class="text-emerald-500 mt-1">•</span><span>$1</span></li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-2 mb-1"><span class="text-emerald-500 font-semibold mt-0.5">$1.</span><span>$2</span></li>')
    .replace(/^---$/gm, '<hr class="border-slate-200 dark:border-slate-700 my-8" />')
    .replace(/^\*(.+)\*$/gm, '<p class="text-slate-500 dark:text-slate-400 italic text-sm mt-4">$1</p>')
    .replace(/\n\n/g, '</p><p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">')
    .replace(/^\n/, '')
}

export default function BlogDetail() {
  const { slug } = useParams()
  const { blogs } = useData()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) return <Navigate to="/blog" replace />

  const related = blogs.filter((b) => b.id !== blog.id && b.category === blog.category).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge color="blue">{blog.category}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(blog.date).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Article body */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: `<p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${renderMarkdown(blog.content.trim())}</p>`,
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <Tag className="w-4 h-4 text-slate-400 mt-0.5" />
            {blog.tags.map((tag) => (
              <Badge key={tag} color="slate">{tag}</Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 text-center border border-emerald-100 dark:border-emerald-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Want to learn more?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
              Turn this knowledge into skill with our structured courses. Book a free demo today.
            </p>
            <Button to="/contact" size="lg">Book Free Demo</Button>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
