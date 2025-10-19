import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award, 
  ExternalLink, 
  Calendar,
  BookOpen,
  Code,
  Database,
  Brain,
  Palette,
  Trophy,
  CheckCircle,
  Eye,
  X,
  Download
} from 'lucide-react'

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certifications = [
    {
      title: 'C Programming Training',
      issuer: 'Technical Training Institute',
      date: '2024',
      category: 'Programming',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['C Programming', 'Data Structures', 'Algorithms', 'Memory Management'],
      verified: true,
      file: 'certifications of completion C training .pdf'
    },
    {
      title: 'CSS Fundamentals',
      issuer: 'Web Development Institute',
      date: '2024',
      category: 'Frontend',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      skills: ['CSS3', 'Responsive Design', 'Flexbox', 'Grid Layout'],
      verified: true,
      file: 'CSS.pdf'
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      date: '2024',
      category: 'Data Science',
      icon: Brain,
      color: 'from-green-500 to-green-600',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis'],
      verified: true,
      file: 'Data Analysis with python IBM.pdf'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Computer Science Institute',
      date: '2024',
      category: 'Programming',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: ['DSA', 'Problem Solving', 'Algorithm Optimization', 'Complexity Analysis'],
      verified: true,
      file: 'Data Structure and Algorithm.pdf'
    },
    {
      title: 'Debugging Techniques',
      issuer: 'Software Engineering Institute',
      date: '2024',
      category: 'Development',
      icon: Code,
      color: 'from-red-500 to-red-600',
      skills: ['Debugging', 'Testing', 'Code Quality', 'Error Handling'],
      verified: true,
      file: 'debug .pdf'
    },
    {
      title: 'HTML Fundamentals',
      issuer: 'Web Development Institute',
      date: '2024',
      category: 'Frontend',
      icon: Code,
      color: 'from-orange-500 to-orange-600',
      skills: ['HTML5', 'Semantic HTML', 'Web Standards', 'Accessibility'],
      verified: true,
      file: 'HTML.pdf'
    },
    {
      title: 'Python 101 for Data Science',
      issuer: 'Data Science Academy',
      date: '2024',
      category: 'Data Science',
      icon: Brain,
      color: 'from-teal-500 to-teal-600',
      skills: ['Python Basics', 'Data Science', 'Scientific Computing', 'Libraries'],
      verified: true,
      file: 'Python 101 for Data Science.pdf'
    },
    {
      title: 'Python Programming',
      issuer: 'Programming Institute',
      date: '2024',
      category: 'Programming',
      icon: Code,
      color: 'from-yellow-500 to-yellow-600',
      skills: ['Python', 'Object-Oriented Programming', 'Libraries', 'Best Practices'],
      verified: true,
      file: 'sandeep python inforses.pdf'
    },
    {
      title: 'NCAT Certification',
      issuer: 'National Computer Academy',
      date: '2024',
      category: 'General',
      icon: Trophy,
      color: 'from-indigo-500 to-indigo-600',
      skills: ['Computer Fundamentals', 'IT Skills', 'Digital Literacy'],
      verified: true,
      file: 'ncat.pdf'
    },
    {
      title: 'Hack-o-Relay Participation',
      issuer: 'Hackathon Organization',
      date: '2024',
      category: 'Competition',
      icon: Trophy,
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Problem Solving', 'Team Work', 'Innovation', 'Time Management'],
      verified: true,
      file: 'Hack-o relay.pdf'
    },
    {
      title: 'Hindalco Internship',
      issuer: 'Hindalco Industries Limited',
      date: '2024',
      category: 'Internship',
      icon: Award,
      color: 'from-emerald-500 to-emerald-600',
      skills: ['Software Development', 'Industry Experience', 'Professional Skills'],
      verified: true,
      file: 'Hindalco internship certificate.jpg'
    },
    {
      title: 'ISA Certificate',
      issuer: 'ISA Organization',
      date: '2024',
      category: 'Professional',
      icon: Award,
      color: 'from-violet-500 to-violet-600',
      skills: ['Professional Development', 'Industry Standards'],
      verified: true,
      file: 'Isa certificate.jpg'
    }
  ]

  const categories = [
    { name: 'Programming', count: 4, color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'Frontend', count: 2, color: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
    { name: 'Data Science', count: 2, color: 'bg-green-500/20 text-green-300 border-green-500/30' },
    { name: 'Professional', count: 4, color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  ]

  const handleViewCertificate = (cert) => {
    setSelectedCertificate(cert)
  }

  const handleDownloadCertificate = (cert) => {
    const link = document.createElement('a')
    link.href = `/CERTIFICATE/${cert.file}`
    link.download = cert.file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Certifications & Achievements
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </motion.div>

          {/* Categories Overview */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center space-y-2 border border-blue-500/20"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {category.count}
                </div>
                <div className={`px-3 py-1 rounded-full text-sm border ${category.color}`}>
                  {category.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 group space-y-4 relative overflow-hidden"
              >
                {/* Verified Badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs border border-green-500/30">
                      <CheckCircle size={12} />
                      <span>Verified</span>
                    </div>
                  </div>
                )}

                {/* Certificate Header */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs border ${
                      cert.category === 'Programming' 
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : cert.category === 'Frontend'
                        ? 'bg-pink-500/20 text-pink-300 border-pink-500/30'
                        : cert.category === 'Data Science'
                        ? 'bg-green-500/20 text-green-300 border-green-500/30'
                        : cert.category === 'Development'
                        ? 'bg-red-500/20 text-red-300 border-red-500/30'
                        : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-200">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-gray-400 rounded text-xs">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleViewCertificate(cert)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                  >
                    <Eye size={14} />
                    <span>View</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDownloadCertificate(cert)}
                    className="bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-blue-500/20"
                  >
                    <Download size={14} />
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto border border-blue-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-gray-300 mb-2">
                    <strong>Issuer:</strong> {selectedCertificate.issuer}
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Date:</strong> {selectedCertificate.date}
                  </p>
                  <p className="text-gray-300 mb-4">
                    <strong>Category:</strong> {selectedCertificate.category}
                  </p>
                  
                  <div>
                    <strong className="text-gray-300">Skills Covered:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedCertificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-400 mb-4">
                    Certificate file: {selectedCertificate.file}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownloadCertificate(selectedCertificate)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <Download size={16} />
                    <span>Download Certificate</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CertificationsSection