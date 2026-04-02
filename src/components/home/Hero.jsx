import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { STATS } from '../../data/mockData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[92vh] flex items-center">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {/* Trust badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium rounded-full px-4 py-1.5 mb-6"
            >
              <Shield className="w-3.5 h-3.5" />
              SEBI-Registered Research Analyst
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Learn Share Market
              <span className="text-emerald-400 block">the Right Way</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg"
            >
              From complete beginner to confident investor. Structured courses,
              live market sessions, and a community of 5,000+ students across
              India.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/batches"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                Join Next Batch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current" />
                Book Free Demo
              </Link>
            </motion.div>

            {/* Micro-stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-slate-700"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main chart card */}
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-sm">NIFTY 50</span>
                  <span className="text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-2 py-0.5 rounded-full">+1.24%</span>
                </div>
                <p className="text-3xl font-bold text-white mb-1">22,450.50</p>
                <p className="text-slate-500 text-xs mb-6">Live Market Overview</p>
                {/* Fake sparkline */}
                <svg viewBox="0 0 300 100" className="w-full h-20 text-emerald-400">
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 L30,70 L60,75 L90,50 L120,60 L150,40 L180,45 L210,25 L240,30 L270,15 L300,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,80 L30,70 L60,75 L90,50 L120,60 L150,40 L180,45 L210,25 L240,30 L270,15 L300,10 L300,100 L0,100 Z"
                    fill="url(#sparkGrad)"
                  />
                </svg>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  5,000+ Students
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  4.9 ★ Google Rating
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-white dark:fill-slate-900">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
        </svg>
      </div>
    </section>
  )
}
