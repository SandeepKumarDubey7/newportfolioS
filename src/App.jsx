import React, { Suspense, lazy, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Lazy load components for optimal performance
const ModernHeader = lazy(() => import('./components/ModernHeader'))
const AnimatedHero = lazy(() => import('./components/AnimatedHero'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const CertificationsSection = lazy(() => import('./components/CertificationsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const ModernFooter = lazy(() => import('./components/ModernFooter'))
const ThemeProvider = lazy(() => import('./context/ThemeContext'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))
const CustomCursor = lazy(() => import('./components/CustomCursor'))

// Loading screen component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#040912] flex items-center justify-center z-50">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/[0.05] rounded-full blur-[120px]" />
    <div className="text-center relative z-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-2 border-white/[0.06] border-t-violet-500 rounded-full mx-auto mb-6"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-heading font-bold text-white mb-2"
      >
        Sandeep Kumar Dubey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-500 text-sm"
      >
        Loading Portfolio...
      </motion.p>
    </div>
  </div>
)

// Section loader for lazy components
const SectionLoader = ({ height = "min-h-screen" }) => (
  <div className={`${height} bg-[#040912] flex items-center justify-center`}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-6 h-6 border-2 border-white/[0.06] border-t-violet-500 rounded-full"
    />
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={null}>
              <ThemeProvider>
                <Suspense fallback={null}>
                  <CustomCursor />
                </Suspense>
                
                <Suspense fallback={<div className="h-20 bg-slate-900" />}>
                  <ModernHeader />
                </Suspense>
                
                <main>
                  <Suspense fallback={<SectionLoader />}>
                    <AnimatedHero />
                  </Suspense>
                  
                  <Suspense fallback={<SectionLoader height="min-h-96" />}>
                    <AboutSection />
                  </Suspense>
                  
                  <Suspense fallback={<SectionLoader height="min-h-96" />}>
                    <SkillsSection />
                  </Suspense>
                  
                  <Suspense fallback={<SectionLoader height="min-h-96" />}>
                    <ProjectsSection />
                  </Suspense>
                  
                  <Suspense fallback={<SectionLoader height="min-h-96" />}>
                    <ExperienceSection />
                  </Suspense>
                  
                  <Suspense fallback={<SectionLoader height="min-h-96" />}>
                    <CertificationsSection />
                  </Suspense>
                  
                  <Suspense fallback={<SectionLoader height="min-h-96" />}>
                    <ContactSection />
                  </Suspense>
                </main>
                
                <Suspense fallback={<div className="h-20 bg-slate-800" />}>
                  <ModernFooter />
                </Suspense>
                
                <Suspense fallback={null}>
                  <ScrollToTop />
                </Suspense>
              </ThemeProvider>
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App