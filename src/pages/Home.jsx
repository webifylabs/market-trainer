import Hero from '../components/home/Hero'
import CoursesPreview from '../components/home/CoursesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import UpcomingBatches from '../components/home/UpcomingBatches'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import TrainerIntro from '../components/home/TrainerIntro'
import CTABanner from '../components/home/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesPreview />
      <WhyChooseUs />
      <UpcomingBatches />
      <TrainerIntro />
      <TestimonialsPreview />
      <CTABanner />
    </>
  )
}
