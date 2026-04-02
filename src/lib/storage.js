/**
 * localStorage CRUD utility — used by Admin panel
 * Falls back to in-memory mock data when Supabase is not configured.
 */
import {
  COURSES as MOCK_COURSES,
  BATCHES as MOCK_BATCHES,
  BLOGS as MOCK_BLOGS,
  TESTIMONIALS as MOCK_TESTIMONIALS,
} from '../data/mockData'

const LS_KEYS = {
  courses: 'ptc_courses',
  batches: 'ptc_batches',
  blogs: 'ptc_blogs',
  testimonials: 'ptc_testimonials',
}

const DEFAULTS = {
  courses: MOCK_COURSES,
  batches: MOCK_BATCHES,
  blogs: MOCK_BLOGS,
  testimonials: MOCK_TESTIMONIALS,
}

function getAll(key) {
  try {
    const raw = localStorage.getItem(LS_KEYS[key])
    return raw ? JSON.parse(raw) : DEFAULTS[key]
  } catch {
    return DEFAULTS[key]
  }
}

function saveAll(key, data) {
  localStorage.setItem(LS_KEYS[key], JSON.stringify(data))
}

export const storage = {
  // ── READ ─────────────────────────────────────────
  getCourses: () => getAll('courses'),
  getBatches: () => getAll('batches'),
  getBlogs: () => getAll('blogs'),
  getTestimonials: () => getAll('testimonials'),

  // ── CREATE ───────────────────────────────────────
  addCourse: (item) => {
    const list = getAll('courses')
    const updated = [...list, { ...item, id: item.id || crypto.randomUUID() }]
    saveAll('courses', updated)
    return updated
  },
  addBatch: (item) => {
    const list = getAll('batches')
    const updated = [...list, { ...item, id: item.id || crypto.randomUUID() }]
    saveAll('batches', updated)
    return updated
  },
  addBlog: (item) => {
    const list = getAll('blogs')
    const updated = [...list, { ...item, id: item.id || crypto.randomUUID() }]
    saveAll('blogs', updated)
    return updated
  },
  addTestimonial: (item) => {
    const list = getAll('testimonials')
    const updated = [...list, { ...item, id: item.id || crypto.randomUUID() }]
    saveAll('testimonials', updated)
    return updated
  },

  // ── UPDATE ───────────────────────────────────────
  updateItem: (key, id, updates) => {
    const list = getAll(key)
    const updated = list.map((item) =>
      item.id === id ? { ...item, ...updates } : item,
    )
    saveAll(key, updated)
    return updated
  },

  // ── DELETE ───────────────────────────────────────
  deleteItem: (key, id) => {
    const list = getAll(key)
    const updated = list.filter((item) => item.id !== id)
    saveAll(key, updated)
    return updated
  },

  // ── RESET to defaults ────────────────────────────
  reset: (key) => {
    saveAll(key, DEFAULTS[key])
    return DEFAULTS[key]
  },
}
