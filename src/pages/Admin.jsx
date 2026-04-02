import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  LayoutDashboard, BookOpen, Calendar, FileText, Star,
  Plus, Edit2, Trash2, Save, X, TrendingUp, LogOut,
  ChevronDown, Users, ArrowUpRight
} from 'lucide-react'
import { useData } from '../context/DataContext'

// ── Simple in-app admin password protection ─────────────────────────────────
const ADMIN_PASS = 'admin123' // Change this!

function LoginScreen({ onLogin }) {
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (pass === ADMIN_PASS) {
      onLogin()
    } else {
      setErr('Incorrect password')
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 rounded-2xl p-8 w-full max-w-sm border border-slate-700"
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold">StockPro Admin</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-6">Admin Login</h2>
        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={pass}
            onChange={(e) => { setPass(e.target.value); setErr('') }}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm mb-2"
          />
          {err && <p className="text-red-400 text-xs mb-3">{err}</p>}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
          >
            Login
          </button>
        </form>
        <p className="text-slate-500 text-xs mt-4 text-center">
          Default password: <code className="text-emerald-400">admin123</code>
        </p>
      </motion.div>
    </div>
  )
}

// ── Sidebar ──────────────────────────────────────────────────────────────────
const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'courses', icon: BookOpen, label: 'Courses' },
  { id: 'batches', icon: Calendar, label: 'Batches' },
  { id: 'blogs', icon: FileText, label: 'Blogs' },
  { id: 'testimonials', icon: Star, label: 'Testimonials' },
]

function Sidebar({ active, setActive, onLogout }) {
  return (
    <aside className="w-60 bg-slate-900 border-r border-slate-800 flex flex-col min-h-screen shrink-0">
      <div className="p-5 border-b border-slate-800">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white font-bold text-sm">StockPro Admin</span>
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active === item.id
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          )
        })}
      </nav>
      <div className="p-3 border-t border-slate-800">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors mb-1"
        >
          <ArrowUpRight className="w-4 h-4" /> View Site
        </Link>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  )
}

// ── Dashboard ────────────────────────────────────────────────────────────────
function Dashboard({ courses, batches, blogs, testimonials }) {
  const stats = [
    { label: 'Total Courses', value: courses.length, icon: BookOpen, color: 'emerald' },
    { label: 'Active Batches', value: batches.filter(b => b.status === 'upcoming').length, icon: Calendar, color: 'blue' },
    { label: 'Blog Posts', value: blogs.length, icon: FileText, color: 'purple' },
    { label: 'Testimonials', value: testimonials.length, icon: Star, color: 'amber' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <p className="text-slate-400 text-sm">{s.label}</p>
                <Icon className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-3xl font-bold text-white">{s.value}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
        <h2 className="font-semibold text-white mb-4">Recent Batches</h2>
        <div className="space-y-3">
          {batches.slice(0, 3).map((b) => (
            <div key={b.id} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
              <div>
                <p className="text-sm text-white font-medium">{b.courseName}</p>
                <p className="text-xs text-slate-400">{b.startDate} · {b.mode}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                b.status === 'upcoming' ? 'bg-emerald-500/20 text-emerald-400' :
                b.status === 'full' ? 'bg-red-500/20 text-red-400' :
                'bg-slate-700 text-slate-400'
              }`}>
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Generic Table ─────────────────────────────────────────────────────────────
function DataTable({ title, items, columns, onAdd, onEdit, onDelete }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <button
          onClick={onAdd}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-left px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    {col.label}
                  </th>
                ))}
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="text-center py-10 text-slate-500 text-sm"
                  >
                    No items yet. Click "Add New" to create one.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-700/50 last:border-0 hover:bg-slate-700/30 transition-colors"
                  >
                    {columns.map((col) => (
                      <td key={col.key} className="px-5 py-3.5 text-sm text-slate-300">
                        {col.render ? col.render(item[col.key], item) : (item[col.key] ?? '—')}
                      </td>
                    ))}
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onEdit(item)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDelete(item.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Simple JSON form modal ────────────────────────────────────────────────────
function JsonModal({ title, data, onSave, onClose }) {
  const [json, setJson] = useState(JSON.stringify(data, null, 2))
  const [error, setError] = useState('')

  const save = () => {
    try {
      const parsed = JSON.parse(json)
      onSave(parsed)
    } catch {
      setError('Invalid JSON. Please fix the syntax.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-800 rounded-2xl w-full max-w-lg border border-slate-700 shadow-2xl"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
          <h3 className="font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5">
          <p className="text-slate-400 text-xs mb-2">
            Edit the JSON below. Field names must match existing data structure.
          </p>
          <textarea
            value={json}
            onChange={(e) => { setJson(e.target.value); setError('') }}
            rows={16}
            className="w-full font-mono text-xs bg-slate-900 text-emerald-400 rounded-xl p-4 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
          {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
        <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-slate-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={save}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// ── Section panels ─────────────────────────────────────────────────────────────
function CoursesPanel() {
  const { courses, addCourse, updateCourse, deleteCourse } = useData()
  const [modal, setModal] = useState(null)

  const blankCourse = {
    id: '', title: '', subtitle: '', duration: '', mode: 'Online',
    level: 'Beginner', fee: '', originalFee: '', badge: null, badgeColor: null,
    shortDesc: '', image: '', topics: [], outcomes: [], faqs: [],
  }

  const cols = [
    { key: 'title', label: 'Title' },
    { key: 'duration', label: 'Duration' },
    { key: 'mode', label: 'Mode' },
    { key: 'level', label: 'Level' },
    { key: 'fee', label: 'Fee' },
  ]

  const handleSave = (data) => {
    if (courses.find((c) => c.id === data.id)) {
      updateCourse(data.id, data)
      toast.success('Course updated')
    } else {
      addCourse({ ...data, id: data.id || crypto.randomUUID() })
      toast.success('Course added')
    }
    setModal(null)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this course?')) {
      deleteCourse(id)
      toast.success('Course deleted')
    }
  }

  return (
    <>
      <DataTable
        title="Courses"
        items={courses}
        columns={cols}
        onAdd={() => setModal({ data: { ...blankCourse, id: crypto.randomUUID() }, title: 'Add Course' })}
        onEdit={(item) => setModal({ data: item, title: 'Edit Course' })}
        onDelete={handleDelete}
      />
      {modal && (
        <JsonModal
          title={modal.title}
          data={modal.data}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

function BatchesPanel() {
  const { batches, addBatch, updateBatch, deleteBatch } = useData()
  const [modal, setModal] = useState(null)

  const blankBatch = {
    id: '', courseId: '', courseName: '', startDate: '', endDate: '',
    time: '', mode: 'Online', seatsTotal: 30, seatsLeft: 30,
    status: 'upcoming', fee: '', instructor: 'Rajesh Kumar', highlight: false,
  }

  const cols = [
    { key: 'courseName', label: 'Course' },
    { key: 'startDate', label: 'Start Date' },
    { key: 'mode', label: 'Mode' },
    { key: 'seatsLeft', label: 'Seats Left' },
    { key: 'status', label: 'Status', render: (v) => (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
        v === 'upcoming' ? 'bg-emerald-500/20 text-emerald-400' :
        v === 'full' ? 'bg-red-500/20 text-red-400' :
        'bg-slate-700 text-slate-400'
      }`}>{v}</span>
    )},
  ]

  const handleSave = (data) => {
    if (batches.find((b) => b.id === data.id)) {
      updateBatch(data.id, data)
      toast.success('Batch updated')
    } else {
      addBatch({ ...data, id: data.id || crypto.randomUUID() })
      toast.success('Batch added')
    }
    setModal(null)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this batch?')) {
      deleteBatch(id)
      toast.success('Batch deleted')
    }
  }

  return (
    <>
      <DataTable
        title="Batches"
        items={batches}
        columns={cols}
        onAdd={() => setModal({ data: { ...blankBatch, id: crypto.randomUUID() }, title: 'Add Batch' })}
        onEdit={(item) => setModal({ data: item, title: 'Edit Batch' })}
        onDelete={handleDelete}
      />
      {modal && (
        <JsonModal
          title={modal.title}
          data={modal.data}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

function BlogsPanel() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useData()
  const [modal, setModal] = useState(null)

  const blankBlog = {
    id: '', title: '', slug: '', category: 'Investing', readTime: '5 min read',
    date: new Date().toISOString().split('T')[0], author: 'Rajesh Kumar',
    coverImage: '', excerpt: '', content: '', tags: [],
  }

  const cols = [
    { key: 'title', label: 'Title', render: (v) => <span className="font-medium truncate block max-w-xs">{v}</span> },
    { key: 'category', label: 'Category' },
    { key: 'date', label: 'Published On' },
    { key: 'readTime', label: 'Read Time' },
  ]

  const handleSave = (data) => {
    if (blogs.find((b) => b.id === data.id)) {
      updateBlog(data.id, data)
      toast.success('Blog updated')
    } else {
      addBlog({ ...data, id: data.id || crypto.randomUUID() })
      toast.success('Blog added')
    }
    setModal(null)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this blog post?')) {
      deleteBlog(id)
      toast.success('Blog deleted')
    }
  }

  return (
    <>
      <DataTable
        title="Blog Posts"
        items={blogs}
        columns={cols}
        onAdd={() => setModal({ data: { ...blankBlog, id: crypto.randomUUID() }, title: 'Add Blog Post' })}
        onEdit={(item) => setModal({ data: item, title: 'Edit Blog Post' })}
        onDelete={handleDelete}
      />
      {modal && (
        <JsonModal
          title={modal.title}
          data={modal.data}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

function TestimonialsPanel() {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useData()
  const [modal, setModal] = useState(null)

  const blankTestimonial = {
    id: '', name: '', location: '', course: '', rating: 5,
    text: '', photo: '', date: new Date().toISOString().split('T')[0], platform: 'Google',
  }

  const cols = [
    { key: 'name', label: 'Name' },
    { key: 'location', label: 'Location' },
    { key: 'course', label: 'Course', render: (v) => <span className="truncate block max-w-xs">{v}</span> },
    { key: 'rating', label: 'Rating', render: (v) => `${v}★` },
  ]

  const handleSave = (data) => {
    if (testimonials.find((t) => t.id === data.id)) {
      updateTestimonial(data.id, data)
      toast.success('Testimonial updated')
    } else {
      addTestimonial({ ...data, id: data.id || crypto.randomUUID() })
      toast.success('Testimonial added')
    }
    setModal(null)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this testimonial?')) {
      deleteTestimonial(id)
      toast.success('Testimonial deleted')
    }
  }

  return (
    <>
      <DataTable
        title="Testimonials"
        items={testimonials}
        columns={cols}
        onAdd={() => setModal({ data: { ...blankTestimonial, id: crypto.randomUUID() }, title: 'Add Testimonial' })}
        onEdit={(item) => setModal({ data: item, title: 'Edit Testimonial' })}
        onDelete={handleDelete}
      />
      {modal && (
        <JsonModal
          title={modal.title}
          data={modal.data}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

// ── Main Admin component ──────────────────────────────────────────────────────
export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('ptc_admin') === '1')
  const [active, setActive] = useState('dashboard')
  const { courses, batches, blogs, testimonials } = useData()

  const handleLogin = () => {
    sessionStorage.setItem('ptc_admin', '1')
    setAuthed(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('ptc_admin')
    setAuthed(false)
  }

  if (!authed) return <LoginScreen onLogin={handleLogin} />

  const panels = {
    dashboard: <Dashboard courses={courses} batches={batches} blogs={blogs} testimonials={testimonials} />,
    courses: <CoursesPanel />,
    batches: <BatchesPanel />,
    blogs: <BlogsPanel />,
    testimonials: <TestimonialsPanel />,
  }

  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar active={active} setActive={setActive} onLogout={handleLogout} />
      <main className="flex-1 p-8 overflow-auto">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {panels[active]}
        </motion.div>
      </main>
    </div>
  )
}
