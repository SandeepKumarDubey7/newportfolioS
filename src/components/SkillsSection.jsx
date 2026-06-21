import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Wrench, Brain, Globe, Sparkles, Zap } from 'lucide-react'

// Circular progress component
const CircularProgress = ({ value, size = 44, strokeWidth = 3, color }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#gradient-${color})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color === 'blue' ? '#3b82f6' : color === 'purple' ? '#8b5cf6' : color === 'green' ? '#10b981' : '#f59e0b'} />
            <stop offset="100%" stopColor={color === 'blue' ? '#22d3ee' : color === 'purple' ? '#ec4899' : color === 'green' ? '#34d399' : '#ef4444'} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-heading font-bold text-white">{value}%</span>
      </div>
    </div>
  )
}

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimated(true), 300)
    }
  }, [inView])

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-400',
      bg: 'bg-blue-500/10',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 80 },
        { name: 'R', level: 75 },
      ]
    },
    {
      title: 'Libraries',
      icon: Palette,
      color: 'purple',
      gradient: 'from-violet-500 to-pink-400',
      bg: 'bg-violet-500/10',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'Numpy', level: 85 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 80 },
        { name: 'NLTK', level: 75 },
        { name: 'Flask', level: 75 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'green',
      gradient: 'from-emerald-500 to-green-400',
      bg: 'bg-emerald-500/10',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-400',
      bg: 'bg-amber-500/10',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium uppercase tracking-widest mb-4"
            >
              <Zap size={14} />
              <span>Tech Stack</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-white">Skills & </span>
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-500`} />
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 ${category.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`text-${category.color === 'amber' ? 'amber' : category.color}-400`} size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-500 text-xs">{category.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className={`text-xs font-heading font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: animated ? `${skill.level}%` : 0 }}
                            transition={{ 
                              delay: categoryIndex * 0.15 + skillIndex * 0.06,
                              duration: 1.2,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 rounded-2xl blur-sm" />
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06]">
                <h3 className="text-xl font-heading font-semibold text-center mb-8">
                  <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Core Competencies
                  </span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Globe, title: 'Full-Stack Development', description: 'End-to-end web application development', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { icon: Brain, title: 'AI/ML Integration', description: 'Machine learning models and data analysis', color: 'text-violet-400', bg: 'bg-violet-500/10' },
                    { icon: Database, title: 'Database Design', description: 'Efficient database architecture', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { icon: Wrench, title: 'DevOps & Tools', description: 'Modern development workflows', color: 'text-amber-400', bg: 'bg-amber-500/10' }
                  ].map((competency, index) => (
                    <motion.div
                      key={competency.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center space-y-3 group/card cursor-default p-4 rounded-xl hover:bg-white/[0.02] transition-all duration-300"
                    >
                      <div className="flex justify-center">
                        <div className={`p-3.5 ${competency.bg} rounded-xl group-hover/card:scale-110 transition-transform duration-300`}>
                          <competency.icon className={competency.color} size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white text-sm mb-1">{competency.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{competency.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection