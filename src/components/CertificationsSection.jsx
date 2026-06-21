import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award, ExternalLink, Calendar, BookOpen, Code, Database, Brain, Palette, Trophy,
  CheckCircle, Eye, X, Download, Sparkles, Shield
} from 'lucide-react'

// ─── Add / remove certificates by editing this array only ───
const certificates = [
  { title: 'C Programming Training', issuer: 'Technical Training Institute', date: '2024', category: 'Programming', icon: Code, gradient: 'from-blue-500 to-blue-400', skills: ['C Programming', 'Data Structures', 'Algorithms', 'Memory Management'], verified: true, file: 'certifications of completion C training .pdf' },
  { title: 'CSS Fundamentals', issuer: 'Web Development Institute', date: '2024', category: 'Frontend', icon: Palette, gradient: 'from-pink-500 to-rose-400', skills: ['CSS3', 'Responsive Design', 'Flexbox', 'Grid Layout'], verified: true, file: 'CSS.pdf' },
  { title: 'Data Analysis with Python', issuer: 'IBM', date: '2024', category: 'Data Science', icon: Brain, gradient: 'from-emerald-500 to-green-400', skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis'], verified: true, file: 'Data Analysis with python IBM.pdf' },
  { title: 'Data Structures and Algorithms', issuer: 'Computer Science Institute', date: '2024', category: 'Programming', icon: Database, gradient: 'from-violet-500 to-purple-400', skills: ['DSA', 'Problem Solving', 'Algorithm Optimization', 'Complexity Analysis'], verified: true, file: 'Data Structure and Algorithm.pdf' },
  { title: 'Debugging Techniques', issuer: 'Software Engineering Institute', date: '2024', category: 'Programming', icon: Code, gradient: 'from-red-500 to-rose-400', skills: ['Debugging', 'Testing', 'Code Quality', 'Error Handling'], verified: true, file: 'debug .pdf' },
  { title: 'HTML Fundamentals', issuer: 'Web Development Institute', date: '2024', category: 'Frontend', icon: Code, gradient: 'from-orange-500 to-amber-400', skills: ['HTML5', 'Semantic HTML', 'Web Standards', 'Accessibility'], verified: true, file: 'HTML.pdf' },
  { title: 'Python 101 for Data Science', issuer: 'Data Science Academy', date: '2024', category: 'Data Science', icon: Brain, gradient: 'from-teal-500 to-cyan-400', skills: ['Python Basics', 'Data Science', 'Scientific Computing', 'Libraries'], verified: true, file: 'Python 101 for Data Science.pdf' },
  { title: 'Python Programming', issuer: 'Programming Institute', date: '2024', category: 'Programming', icon: Code, gradient: 'from-yellow-500 to-amber-400', skills: ['Python', 'OOP', 'Libraries', 'Best Practices'], verified: true, file: 'sandeep python inforses.pdf' },
  { title: 'NCAT Certification', issuer: 'National Computer Academy', date: '2024', category: 'Professional', icon: Trophy, gradient: 'from-indigo-500 to-blue-400', skills: ['Computer Fundamentals', 'IT Skills', 'Digital Literacy'], verified: true, file: 'ncat.pdf' },
  { title: 'Hack-o-Relay Participation', issuer: 'Hackathon Organization', date: '2024', category: 'Professional', icon: Trophy, gradient: 'from-cyan-500 to-blue-400', skills: ['Problem Solving', 'Team Work', 'Innovation', 'Time Management'], verified: true, file: 'Hack-o relay.pdf' },
  { title: 'Hindalco Internship', issuer: 'Hindalco Industries Limited', date: '2024', category: 'Professional', icon: Award, gradient: 'from-emerald-500 to-teal-400', skills: ['Software Development', 'Industry Experience', 'Professional Skills'], verified: true, file: 'Hindalco internship certificate.jpg' },
  { title: 'ISA Certificate', issuer: 'ISA Organization', date: '2024', category: 'Professional', icon: Award, gradient: 'from-violet-500 to-indigo-400', skills: ['Professional Development', 'Industry Standards'], verified: true, file: 'Isa certificate.jpg' },
]

const CertificationsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryList = useMemo(() => {
    const cats = [...new Set(certificates.map(c => c.category))]
    return ['All', ...cats]
  }, [])

  const categoryStats = useMemo(() => {
    const map = {}
    certificates.forEach(c => {
      map[c.category] = (map[c.category] || 0) + 1
    })
    return map
  }, [])

  const filteredCertifications = useMemo(() => {
    return activeCategory === 'All'
      ? [...certificates]
      : certificates.filter(c => c.category === activeCategory)
  }, [activeCategory])

  const categoryGradients = {
    Programming: 'from-blue-500 to-cyan-400',
    Frontend: 'from-pink-500 to-rose-400',
    'Data Science': 'from-emerald-500 to-green-400',
    Professional: 'from-violet-500 to-purple-400',
  }

  const handleViewCertificate = (cert) => {
    window.open(`/CERTIFICATE/${cert.file}`, '_blank')
  }

  const handleDownloadCertificate = (cert) => {
    const link = document.createElement('a')
    link.href = `/CERTIFICATE/${cert.file}`
    link.download = cert.file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getCategoryStyle = (cat) => {
    const styles = {
      Programming: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      Frontend: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'Data Science': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      Professional: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    }
    return styles[cat] || 'bg-gray-500/10 text-gray-400 border-gray-500/20'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="certifications" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-14">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-medium uppercase tracking-widest mb-4"
            >
              <Shield size={14} />
              <span>Credentials</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-white">Certifications & </span>
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-violet-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and continuous learning milestones
            </p>
          </motion.div>

          {/* Category Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(categoryStats).map(([name, count], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.08 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className={`text-2xl font-heading font-bold bg-gradient-to-r ${categoryGradients[name] || 'from-gray-400 to-gray-300'} bg-clip-text text-transparent mb-1`}>
                  {count}
                </div>
                <div className="text-gray-500 text-xs">{name}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : 'bg-slate-800/40 text-gray-400 border-white/[0.06] hover:border-white/[0.12] hover:text-white'
                }`}
              >
                {cat}{cat !== 'All' && ` (${categoryStats[cat] || 0})`}
              </button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                variants={itemVariants}
                className="relative group"
                layout
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-500`} />
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] group-hover:border-white/[0.1] transition-all duration-500 space-y-3 h-full flex flex-col">
                  
                  {/* Verified Badge */}
                  {cert.verified && (
                    <div className="absolute top-3.5 right-3.5">
                      <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] border border-emerald-500/15">
                        <CheckCircle size={10} />
                        <span>Verified</span>
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start gap-3 pr-16">
                    <div className={`p-2.5 bg-gradient-to-br ${cert.gradient} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <cert.icon className="text-white" size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-heading font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-blue-400/70 text-[11px] mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[10px] text-gray-500">
                      <Calendar size={10} />{cert.date}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] border ${getCategoryStyle(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 flex-grow">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-slate-700/40 text-gray-400 rounded text-[10px] border border-white/[0.04]">
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-700/30 text-gray-500 rounded text-[10px]">+{cert.skills.length - 3}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto pt-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-1 relative group/btn overflow-hidden rounded-xl text-sm"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-20 group-hover/btn:opacity-30 transition-opacity`} />
                      <div className="relative flex items-center justify-center gap-1.5 px-3 py-2 text-white text-xs font-medium">
                        <Eye size={12} />
                        <span>View</span>
                      </div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDownloadCertificate(cert)}
                      className="p-2 bg-slate-700/30 hover:bg-slate-600/40 rounded-xl transition-colors border border-white/[0.04] text-gray-400 hover:text-white"
                    >
                      <Download size={12} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 max-w-lg w-full border border-white/[0.1] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-heading font-semibold text-white">{selectedCertificate.title}</h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-slate-700/50 rounded-xl transition-colors"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-700/30 rounded-xl p-4 space-y-2.5 text-sm">
                  <p className="text-gray-300"><span className="text-gray-500">Issuer:</span> {selectedCertificate.issuer}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Date:</span> {selectedCertificate.date}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Category:</span> {selectedCertificate.category}</p>
                  
                  <div className="pt-2">
                    <span className="text-gray-500 text-xs">Skills Covered:</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedCertificate.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleViewCertificate(selectedCertificate)}
                  className="w-full relative group overflow-hidden rounded-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedCertificate.gradient}`} />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-3 text-white font-medium text-sm">
                    <Eye size={14} />
                    <span>View Certificate</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CertificationsSection