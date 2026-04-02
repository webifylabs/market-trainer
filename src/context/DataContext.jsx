import { createContext, useContext, useState, useCallback } from 'react'
import { storage } from '../lib/storage'

const DataContext = createContext()

export function DataProvider({ children }) {
  const [courses, setCourses] = useState(() => storage.getCourses())
  const [batches, setBatches] = useState(() => storage.getBatches())
  const [blogs, setBlogs] = useState(() => storage.getBlogs())
  const [testimonials, setTestimonials] = useState(() =>
    storage.getTestimonials(),
  )

  const refresh = useCallback(() => {
    setCourses(storage.getCourses())
    setBatches(storage.getBatches())
    setBlogs(storage.getBlogs())
    setTestimonials(storage.getTestimonials())
  }, [])

  // Courses
  const addCourse = (item) => setCourses(storage.addCourse(item))
  const updateCourse = (id, updates) =>
    setCourses(storage.updateItem('courses', id, updates))
  const deleteCourse = (id) => setCourses(storage.deleteItem('courses', id))

  // Batches
  const addBatch = (item) => setBatches(storage.addBatch(item))
  const updateBatch = (id, updates) =>
    setBatches(storage.updateItem('batches', id, updates))
  const deleteBatch = (id) => setBatches(storage.deleteItem('batches', id))

  // Blogs
  const addBlog = (item) => setBlogs(storage.addBlog(item))
  const updateBlog = (id, updates) =>
    setBlogs(storage.updateItem('blogs', id, updates))
  const deleteBlog = (id) => setBlogs(storage.deleteItem('blogs', id))

  // Testimonials
  const addTestimonial = (item) =>
    setTestimonials(storage.addTestimonial(item))
  const updateTestimonial = (id, updates) =>
    setTestimonials(storage.updateItem('testimonials', id, updates))
  const deleteTestimonial = (id) =>
    setTestimonials(storage.deleteItem('testimonials', id))

  return (
    <DataContext.Provider
      value={{
        courses,
        batches,
        blogs,
        testimonials,
        refresh,
        addCourse,
        updateCourse,
        deleteCourse,
        addBatch,
        updateBatch,
        deleteBatch,
        addBlog,
        updateBlog,
        deleteBlog,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  return useContext(DataContext)
}
