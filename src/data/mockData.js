// ============================================================
//  MOCK DATA — Share Market Training Website
// ============================================================

export const SITE_CONFIG = {
  name: 'StockPro Academy',
  tagline: 'Learn Share Market the Right Way',
  phone: '+91 98765 43210',
  email: 'contact@stockproacademy.com',
  whatsapp: '919876543210',
  address: '3rd Floor, Finance Tower, MG Road, Bengaluru – 560001',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9756!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1680000000000',
  socialLinks: {
    youtube: 'https://youtube.com/@stockproacademy',
    instagram: 'https://instagram.com/stockproacademy',
    telegram: 'https://t.me/stockproacademy',
    twitter: 'https://twitter.com/stockproacademy',
  },
};

// -------- TRAINER --------
export const TRAINER = {
  name: 'Rajesh Kumar',
  title: 'SEBI-Registered Research Analyst & Stock Market Educator',
  experience: '12+ Years',
  students: '5,000+',
  rating: 4.9,
  photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  bio: `With over 12 years of hands-on trading and investment experience, Rajesh Kumar has helped more than 5,000 students build financial independence through disciplined stock market education. He is a certified SEBI-Registered Research Analyst and has been featured in leading financial media across India.`,
  achievements: [
    'SEBI-Registered Research Analyst (INH000XXXXX)',
    'Featured in Economic Times & Mint',
    '5,000+ students trained nationally',
    'Ex-Fund Manager at a leading NBFC',
    'NISM Series VIII Certified',
    'YouTube channel with 2L+ subscribers',
  ],
  philosophy:
    'Practical, risk-first education. Markets reward patience and discipline, not speculation.',
};

// -------- COURSES --------
export const COURSES = [
  {
    id: 'fundamentals',
    title: 'Stock Market Fundamentals',
    subtitle: 'Start your investing journey',
    duration: '4 Weeks',
    mode: 'Online',
    level: 'Beginner',
    fee: '₹4,999',
    originalFee: '₹7,999',
    badge: 'Most Popular',
    badgeColor: 'emerald',
    shortDesc:
      'Master the basics of stock markets, IPOs, indices, and how to start investing with confidence.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    topics: [
      'Introduction to Capital Markets',
      'How Stock Exchanges Work (NSE/BSE)',
      'IPO & Listing Gains Strategy',
      'Fundamental Analysis Basics',
      'Demat & Trading Account Setup',
      'Portfolio Building Principles',
      'Risk Management Essentials',
      'Live Demo: Buying Your First Stock',
    ],
    outcomes: [
      'Open and operate a Demat account confidently',
      'Evaluate stocks using fundamental analysis',
      'Build a diversified beginner portfolio',
      'Understand IPOs and how to apply for them',
      'Avoid common beginner mistakes',
    ],
    faqs: [
      {
        q: 'Is this course suitable for absolute beginners?',
        a: 'Absolutely. This course is designed specifically for people with zero prior market knowledge.',
      },
      {
        q: 'Will I get lifetime access to recordings?',
        a: 'Yes, all live sessions are recorded and available for 1 year after course completion.',
      },
      {
        q: 'Is there any support after the course?',
        a: 'Yes, you get access to our private Telegram group with ongoing market discussions for 6 months.',
      },
    ],
  },
  {
    id: 'technical-analysis',
    title: 'Technical Analysis Mastery',
    subtitle: 'Trade with charts like a pro',
    duration: '6 Weeks',
    mode: 'Online + Offline',
    level: 'Intermediate',
    fee: '₹8,999',
    originalFee: '₹12,999',
    badge: 'Best Value',
    badgeColor: 'blue',
    shortDesc:
      'Deep-dive into chart patterns, indicators, and price action to make data-driven trading decisions.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    topics: [
      'Candlestick Patterns (20+ patterns)',
      'Support & Resistance Levels',
      'Trend Lines & Channels',
      'Moving Averages (SMA, EMA)',
      'RSI, MACD, Bollinger Bands',
      'Volume Analysis',
      'Chart Pattern Trading',
      'Intraday & Swing Trading Setup',
      'Live Market Trading Sessions',
    ],
    outcomes: [
      'Read and interpret any stock chart',
      'Identify high-probability trade setups',
      'Use 10+ technical indicators effectively',
      'Manage entries, exits, and stop-losses',
      'Trade intraday and swing positions',
    ],
    faqs: [
      {
        q: 'Do I need to know fundamentals before this?',
        a: 'Basic market knowledge helps but is not mandatory. We cover prerequisite concepts at the start.',
      },
      {
        q: 'Which software/platform do we use?',
        a: 'We use TradingView (free version) and Zerodha Kite for all live demo sessions.',
      },
    ],
  },
  {
    id: 'options-trading',
    title: 'Options Trading Pro',
    subtitle: 'Advanced derivatives strategies',
    duration: '8 Weeks',
    mode: 'Online',
    level: 'Advanced',
    fee: '₹14,999',
    originalFee: '₹19,999',
    badge: 'New',
    badgeColor: 'purple',
    shortDesc:
      'Learn options pricing, Greeks, and multi-leg strategies to generate consistent income from markets.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    topics: [
      'Options Basics & Terminology',
      'Options Pricing & Intrinsic Value',
      'The Greeks (Delta, Gamma, Theta, Vega)',
      'Bull Call Spread & Bear Put Spread',
      'Iron Condor & Butterfly Strategies',
      'Hedging Techniques',
      'Options Chain Analysis',
      'Weekly Options Income Strategy',
      'Risk Management in Options',
    ],
    outcomes: [
      'Understand options pricing and Greeks',
      'Design and execute multi-leg strategies',
      'Hedge existing portfolio positions',
      'Trade weekly expiry for consistent income',
      'Manage risk in high-volatility environments',
    ],
    faqs: [
      {
        q: 'Is this course for F&O beginners?',
        a: 'This course requires knowledge of technical analysis. Completing our TA Mastery course first is recommended.',
      },
      {
        q: 'How much capital do I need to practice?',
        a: 'We recommend a practice capital of ₹50,000–₹1L for paper trading during the course.',
      },
    ],
  },
  {
    id: 'long-term-investing',
    title: 'Long-Term Wealth Creation',
    subtitle: 'Invest like Buffett, Indian edition',
    duration: '5 Weeks',
    mode: 'Offline',
    level: 'Beginner',
    fee: '₹6,999',
    originalFee: '₹9,999',
    badge: null,
    badgeColor: null,
    shortDesc:
      'Master value investing and fundamental analysis to build wealth over the long term through disciplined investing.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    topics: [
      'Value Investing Philosophy',
      'Reading Annual Reports & Financials',
      'Ratio Analysis (P/E, P/B, ROE, ROCE)',
      'Sector & Industry Analysis',
      'Competitive Moat Analysis',
      'Portfolio Construction & Rebalancing',
      'Mutual Funds vs Direct Stocks',
      'Tax Planning for Investors (LTCG/STCG)',
    ],
    outcomes: [
      'Analyse company financials like a professional',
      'Find undervalued stocks using ratios',
      'Build a long-term wealth creation portfolio',
      'Understand when to hold vs sell',
      'Tax-efficient wealth planning strategies',
    ],
    faqs: [
      {
        q: 'Is offline attendance mandatory?',
        a: 'This course is classroom-based in Bengaluru. Online recordings are shared as backup.',
      },
    ],
  },
];

// -------- BATCHES --------
export const BATCHES = [
  {
    id: 'b1',
    courseId: 'fundamentals',
    courseName: 'Stock Market Fundamentals',
    startDate: '2026-04-15',
    endDate: '2026-05-13',
    time: 'Tue & Thu, 7:00 PM – 9:00 PM',
    mode: 'Online',
    seatsTotal: 30,
    seatsLeft: 8,
    status: 'upcoming',
    fee: '₹4,999',
    instructor: 'Rajesh Kumar',
    highlight: true,
  },
  {
    id: 'b2',
    courseId: 'technical-analysis',
    courseName: 'Technical Analysis Mastery',
    startDate: '2026-04-20',
    endDate: '2026-06-01',
    time: 'Mon, Wed & Fri, 6:30 PM – 8:30 PM',
    mode: 'Online + Offline',
    seatsTotal: 20,
    seatsLeft: 3,
    status: 'upcoming',
    fee: '₹8,999',
    instructor: 'Rajesh Kumar',
    highlight: true,
  },
  {
    id: 'b3',
    courseId: 'options-trading',
    courseName: 'Options Trading Pro',
    startDate: '2026-05-01',
    endDate: '2026-06-30',
    time: 'Sat & Sun, 10:00 AM – 1:00 PM',
    mode: 'Online',
    seatsTotal: 25,
    seatsLeft: 15,
    status: 'upcoming',
    fee: '₹14,999',
    instructor: 'Rajesh Kumar',
    highlight: false,
  },
  {
    id: 'b4',
    courseId: 'long-term-investing',
    courseName: 'Long-Term Wealth Creation',
    startDate: '2026-05-10',
    endDate: '2026-06-07',
    time: 'Sat, 2:00 PM – 5:00 PM',
    mode: 'Offline',
    seatsTotal: 15,
    seatsLeft: 0,
    status: 'full',
    fee: '₹6,999',
    instructor: 'Rajesh Kumar',
    highlight: false,
  },
  {
    id: 'b5',
    courseId: 'fundamentals',
    courseName: 'Stock Market Fundamentals',
    startDate: '2026-03-01',
    endDate: '2026-03-29',
    time: 'Tue & Thu, 7:00 PM – 9:00 PM',
    mode: 'Online',
    seatsTotal: 30,
    seatsLeft: 0,
    status: 'completed',
    fee: '₹4,999',
    instructor: 'Rajesh Kumar',
    highlight: false,
  },
];

// -------- TESTIMONIALS --------
export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Priya Sharma',
    location: 'Bengaluru',
    course: 'Stock Market Fundamentals',
    rating: 5,
    text: 'I had zero knowledge about markets. After completing the Fundamentals course, I built a ₹50K portfolio with confidence. Rajesh sir explains concepts in such a simple way!',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    date: '2026-02-15',
    platform: 'Google',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    location: 'Mumbai',
    course: 'Technical Analysis Mastery',
    rating: 5,
    text: 'The TA Mastery course completely changed how I look at charts. I am now consistently profitable in swing trading. Best investment I made this year.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: '2026-01-20',
    platform: 'Google',
  },
  {
    id: 't3',
    name: 'Sunita Patel',
    location: 'Ahmedabad',
    course: 'Long-Term Wealth Creation',
    rating: 5,
    text: 'Sir taught me how to read balance sheets and find quality stocks. I now manage my own portfolio and have stopped relying on tips. Highly recommended!',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
    date: '2026-01-05',
    platform: 'Google',
  },
  {
    id: 't4',
    name: 'Vikram Nair',
    location: 'Hyderabad',
    course: 'Options Trading Pro',
    rating: 5,
    text: 'Options used to scare me. Now I run iron condors every week for consistent income. The risk management framework in this course is worth 10x the fee.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: '2025-12-10',
    platform: 'Google',
  },
  {
    id: 't5',
    name: 'Deepika Rao',
    location: 'Chennai',
    course: 'Stock Market Fundamentals',
    rating: 5,
    text: 'As a homemaker, I was hesitant but Rajesh sir made it so easy to understand. Now I invest in SIPs and direct equity confidently. Life-changing course!',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
    date: '2025-11-22',
    platform: 'Google',
  },
  {
    id: 't6',
    name: 'Rahul Gupta',
    location: 'Delhi',
    course: 'Technical Analysis Mastery',
    rating: 4,
    text: 'Very detailed and practical course. The live market sessions are gold. Would love more content on futures. Overall excellent value.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    date: '2025-10-30',
    platform: 'Google',
  },
];

// -------- BLOGS --------
export const BLOGS = [
  {
    id: 'blog-1',
    title: '10 Mistakes Every Beginner Investor Makes (And How to Avoid Them)',
    slug: 'beginner-investor-mistakes',
    category: 'Investing',
    readTime: '7 min read',
    date: '2026-03-25',
    author: 'Rajesh Kumar',
    coverImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    excerpt:
      "Starting your investment journey is exciting, but most beginners fall into the same traps. Here's how to sidestep the 10 most common mistakes.",
    content: `
## Introduction

Investing in the stock market is one of the most powerful ways to build long-term wealth. But for beginners, the journey often starts with costly mistakes that could have been avoided with the right knowledge.

In this article, we'll walk through the 10 most common mistakes beginner investors make — and, more importantly, how you can avoid them.

---

## 1. Investing Without a Plan

Most beginners buy stocks based on tips from friends, social media, or YouTube videos without any clear strategy.

**Solution:** Define your goals (retirement, house, child's education), time horizon, and risk tolerance before investing a single rupee.

## 2. Trying to Time the Market

"I'll buy when the market falls" — this is the most common trap. Waiting for the "perfect" moment often means missing out entirely.

**Solution:** Use Systematic Investment Plans (SIPs) and invest regularly, regardless of market conditions. Time *in* the market beats timing the market.

## 3. Putting All Eggs in One Basket

Concentrating your entire portfolio in one stock or sector amplifies risk dramatically.

**Solution:** Diversify across 10–15 quality stocks across 4–5 different sectors.

## 4. Panic Selling During Corrections

Market corrections of 10–20% are normal. Selling in panic locks in losses.

**Solution:** Stay invested in quality businesses. Use corrections as buying opportunities.

## 5. Chasing Hot Tips

Following stock tips without research is speculation, not investing.

**Solution:** Do your own research. Understand the business before you buy.

## 6. Ignoring Fees and Charges

Brokerage, STT, and exit loads can significantly eat into returns.

**Solution:** Use low-cost discount brokers and be aware of all transaction costs.

## 7. Not Having an Emergency Fund First

Investing money you might need in 6 months is a recipe for forced selling at wrong times.

**Solution:** Maintain 6 months of expenses in liquid form before investing in equities.

## 8. Over-Trading

More trades = more losses from costs and emotional decisions.

**Solution:** Be patient. Great returns come from holding quality stocks, not from daily trading.

## 9. Ignoring Taxes

Not understanding LTCG and STCG can lead to unexpected tax bills.

**Solution:** Hold quality stocks for more than 1 year to benefit from lower long-term capital gains tax.

## 10. Not Learning Continuously

Markets evolve. What worked in 2010 may not work today.

**Solution:** Keep learning — take structured courses, read annual reports, and follow quality financial media.

---

## Conclusion

The good news is that all these mistakes are preventable with education and discipline. Starting right sets the foundation for a lifetime of successful investing.

*Ready to start your investing journey the right way? [Enroll in our Fundamentals course](/courses/fundamentals) today.*
    `,
    tags: ['Beginners', 'Investing Tips', 'Portfolio'],
  },
  {
    id: 'blog-2',
    title: 'RSI vs MACD: Which Indicator Should You Use for Trading?',
    slug: 'rsi-vs-macd',
    category: 'Technical Analysis',
    readTime: '9 min read',
    date: '2026-03-10',
    author: 'Rajesh Kumar',
    coverImage:
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
    excerpt:
      "RSI and MACD are the two most popular technical indicators. But which one should you rely on? Here's a deep dive.",
    content: `
## The Great Debate: RSI vs MACD

Both RSI and MACD are momentum indicators, but they work differently and are suited for different trading styles.

## What is RSI?

The **Relative Strength Index (RSI)** is a momentum oscillator that measures the speed and change of price movements. It oscillates between 0 and 100.

- **RSI above 70** = Overbought (potential sell signal)
- **RSI below 30** = Oversold (potential buy signal)

RSI works best in ranging (sideways) markets.

## What is MACD?

The **Moving Average Convergence Divergence (MACD)** is a trend-following momentum indicator. It shows the relationship between two moving averages.

- **MACD crosses above signal line** = Bullish signal
- **MACD crosses below signal line** = Bearish signal

MACD works best in trending markets.

## When to Use RSI

- Identifying overbought/oversold conditions
- Divergence trading (price makes new high, RSI doesn't)
- Mean-reversion strategies in sideways markets

## When to Use MACD

- Trend-following trades
- Identifying momentum shifts
- Confirming breakouts

## The Best Strategy: Combine Both

Use **MACD to identify the trend** direction, then use **RSI to time your entry**.

Example: MACD shows uptrend → Wait for RSI to dip to 40-45 → Enter long position.

## Conclusion

Neither RSI nor MACD is superior. The best traders use them together to get a complete picture of market momentum.
    `,
    tags: ['Technical Analysis', 'RSI', 'MACD', 'Indicators'],
  },
  {
    id: 'blog-3',
    title: "How to Read a Company's Annual Report: A Step-by-Step Guide",
    slug: 'how-to-read-annual-report',
    category: 'Fundamental Analysis',
    readTime: '11 min read',
    date: '2026-02-20',
    author: 'Rajesh Kumar',
    coverImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    excerpt:
      "The annual report is the most comprehensive source of information about a company. Here's exactly how to read and analyse one.",
    content: `
## Why Annual Reports Matter

Warren Buffett spends months reading annual reports. If the world's greatest investor relies on them, so should you.

## Structure of an Annual Report

1. **Chairman's Letter** – Strategic overview and candid assessment
2. **Management Discussion & Analysis (MD&A)** – Detailed business performance
3. **Financial Statements** – Balance Sheet, P&L, Cash Flow
4. **Notes to Financial Statements** – Critical details
5. **Auditor's Report** – Independent verification

## What to Look For

### In the P&L Statement
- Revenue growth (consistent upward trend?)
- Operating profit margin (is it expanding?)
- Net profit margin (10%+ is generally healthy)

### In the Balance Sheet
- Debt-to-equity ratio (less than 1 is ideal)
- Return on Equity (ROE) > 15%
- Working capital management

### In the Cash Flow Statement
- Operating cash flow should be positive
- Free cash flow = Operating CF - Capex

## Red Flags to Watch

- Revenue growing but profitability declining
- Rising debt levels year after year
- Frequent changes in accounting policies
- Qualified auditor report

## Conclusion

Reading annual reports is a skill that separates serious investors from speculators. It takes practice but pays enormous dividends.
    `,
    tags: ['Fundamental Analysis', 'Annual Report', 'Value Investing'],
  },
  {
    id: 'blog-4',
    title: 'What is Option Greeks? Delta, Gamma, Theta Explained Simply',
    slug: 'options-greeks-explained',
    category: 'Options Trading',
    readTime: '8 min read',
    date: '2026-02-05',
    author: 'Rajesh Kumar',
    coverImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    excerpt:
      'Option Greeks sound intimidating but once you understand them, they become your best friends in options trading.',
    content: `
## What Are Options Greeks?

Greeks are measures of the sensitivity of an option's price to various factors. Understanding them is critical for anyone trading options.

## Delta (Δ)

Delta measures how much an option's price changes for a ₹1 move in the underlying stock.

- **Call options**: Delta between 0 and 1
- **Put options**: Delta between -1 and 0
- **ATM option** typically has Delta of ~0.5

## Gamma (Γ)

Gamma measures the rate of change of Delta. High Gamma means Delta changes quickly — important for short-term traders.

## Theta (Θ)

Theta is time decay — how much value an option loses each day as it approaches expiry.

- Options buyers **lose** value due to Theta
- Options sellers **earn** from Theta
- Theta accelerates in the last 30 days before expiry

## Vega (ν)

Vega measures sensitivity to implied volatility changes.

- **Buy options** when IV is low (you want IV to rise)
- **Sell options** when IV is high (you want IV to fall)

## Practical Application

Understanding Greeks allows you to:
- Design precise risk/reward strategies
- Hedge positions effectively
- Time your entries and exits better

## Conclusion

Don't trade options without understanding the Greeks. Once mastered, they give you an edge most retail traders don't have.
    `,
    tags: ['Options', 'Greeks', 'Delta', 'Theta', 'Advanced'],
  },
];

// -------- FAQs --------
export const FAQS = [
  {
    category: 'Courses',
    items: [
      {
        q: 'Which course should I start with as a complete beginner?',
        a: 'Start with "Stock Market Fundamentals." It covers everything from scratch — how markets work, how to open a Demat account, and how to place your first trade.',
      },
      {
        q: 'Are classes live or recorded?',
        a: 'All batches are conducted live so you can ask questions in real-time. Recordings are provided within 24 hours of each session and are accessible for 1 year.',
      },
      {
        q: 'Do you provide course certificates?',
        a: 'Yes, we provide a course completion certificate. NISM certifications are separate and we guide you to register for them post-course.',
      },
      {
        q: 'What platform do you use for online classes?',
        a: 'We use Zoom for live sessions, TradingView for chart analysis, and a private Telegram group for ongoing support.',
      },
    ],
  },
  {
    category: 'Fees & Payment',
    items: [
      {
        q: 'What payment methods are accepted?',
        a: 'We accept UPI (GPay, PhonePe, Paytm), NEFT/IMPS, and credit/debit cards. Payment after demo session is also available.',
      },
      {
        q: 'Do you offer EMI options?',
        a: 'Yes, EMI options are available for courses above ₹5,000 via credit card (0% EMI with select banks) or Bajaj Finserv.',
      },
      {
        q: 'Is there a refund policy?',
        a: 'We offer a 7-day money-back guarantee from the first class date if you are not satisfied. No questions asked.',
      },
      {
        q: 'Are there any group discounts?',
        a: 'Yes! Enroll with 2+ friends and get 15% off. Contact us on WhatsApp for group enrollment.',
      },
    ],
  },
  {
    category: 'After Course',
    items: [
      {
        q: 'How long does it take to become a profitable trader?',
        a: 'There is no fixed timeline. With consistent practice and discipline, most students start seeing consistency within 6–12 months of completing the TA course.',
      },
      {
        q: 'Do you provide ongoing mentorship?',
        a: 'Yes, our premium mentorship program is available for advanced students. We also run monthly review sessions open to all alumni.',
      },
      {
        q: 'Will I get stock recommendations in the course?',
        a: 'No. We do NOT give stock tips or investment recommendations. We teach you how to find your own ideas — that is far more valuable and legally compliant.',
      },
    ],
  },
  {
    category: 'Technical',
    items: [
      {
        q: 'What hardware/software do I need?',
        a: 'A laptop or desktop with stable internet connection. We use Zoom (free) and TradingView (free tier is sufficient). A smartphone works for attending sessions but a desktop is recommended for charting.',
      },
      {
        q: 'Do I need to invest real money during the course?',
        a: 'No. We use paper trading (virtual money) during the course. Real capital is only recommended after you complete the course and practice for 2–3 months.',
      },
    ],
  },
];

// -------- WHY CHOOSE US --------
export const WHY_CHOOSE_US = [
  {
    icon: 'Shield',
    title: 'SEBI-Registered Educator',
    desc: 'Learn from a certified, regulated professional — not random YouTube gurus.',
  },
  {
    icon: 'Users',
    title: '5,000+ Students Trained',
    desc: 'Proven track record with students from across India building real wealth.',
  },
  {
    icon: 'Zap',
    title: 'Live + Practical Sessions',
    desc: 'Every concept is backed by live market demos on real charts.',
  },
  {
    icon: 'TrendingUp',
    title: 'Beginner to Advanced Path',
    desc: 'Structured curriculum from zero to options trading — one academy.',
  },
  {
    icon: 'MessageCircle',
    title: 'Lifetime Community Access',
    desc: 'Join our private Telegram group with 10,000+ active investors and traders.',
  },
  {
    icon: 'Star',
    title: '4.9★ Google Rating',
    desc: 'Consistently rated 5-star by our students — quality you can trust.',
  },
];

// -------- STATS --------
export const STATS = [
  { label: 'Students Trained', value: '5,000+' },
  { label: 'Courses Offered', value: '4' },
  { label: 'Years Experience', value: '12+' },
  { label: 'Google Rating', value: '4.9★' },
];
