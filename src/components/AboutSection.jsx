import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, Award, Target, BookOpen, Users, Sparkles, ArrowUpRight } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { icon: Code, label: 'Projects', value: '15+', color: 'from-blue-500 to-cyan-400', bg: 'bg-blue-500/10' },
    { icon: Award, label: 'Certifications', value: '10+', color: 'from-violet-500 to-purple-400', bg: 'bg-violet-500/10' },
    { icon: BookOpen, label: 'Technologies', value: '20+', color: 'from-emerald-500 to-green-400', bg: 'bg-emerald-500/10' },
    { icon: Users, label: 'Collaborations', value: '5+', color: 'from-amber-500 to-orange-400', bg: 'bg-amber-500/10' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[100px]" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-4"
            >
              <Sparkles size={14} />
              <span>About Me</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-white">Driven by </span>
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Curiosity
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate developer with a strong foundation in computer science and emerging technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Content - 3/5 */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
              <div className="space-y-5">
                <h3 className="text-2xl font-heading font-semibold text-white">
                  Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Sandeep Kumar Dubey</span>
                </h3>
                
                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    I'm a B.Tech Computer Science Engineering student specializing in AI and Machine Learning. 
                    With a strong foundation in both frontend and full-stack development, I create innovative 
                    solutions that bridge the gap between technology and user experience.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    My journey started with curiosity about how software works, leading me to explore various 
                    languages and frameworks. Today, I specialize in responsive web applications, AI/ML models, 
                    and developer tools that make a real impact.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source, or learning about the latest trends in AI. I believe in continuous 
                    learning and staying updated with the evolving tech landscape.
                  </motion.p>
                </div>
              </div>

              {/* Education Card */}
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl shadow-lg shadow-blue-500/20">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-semibold text-white">Education</h4>
                      <p className="text-gray-500 text-xs">Academic Background</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pl-1">
                    <h5 className="font-semibold text-blue-400 text-sm">B.Tech in Computer Science Engineering</h5>
                    <p className="text-violet-400 font-medium text-xs">Specialization: Artificial Intelligence & Machine Learning</p>
                    <p className="text-gray-500 text-xs">2022 - Present</p>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      Focused on AI/ML technologies, data structures, algorithms, and software engineering principles.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Interest Tags */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Interests & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Full-Stack Development',
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Web Technologies',
                    'Data Structures',
                    'Algorithm Design',
                    'Open Source',
                    'Problem Solving'
                  ].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm text-gray-300 rounded-lg text-xs border border-white/[0.06] hover:border-white/[0.12] cursor-default transition-all duration-300 hover:text-white"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Stats & Achievements - 2/5 */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 text-center space-y-3 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500">
                      <div className="flex justify-center">
                        <div className={`p-2.5 ${stat.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className={`bg-gradient-to-r ${stat.color} bg-clip-text`} size={22} style={{ color: 'transparent', stroke: 'url(#gradient)' }} />
                          <stat.icon className="text-blue-400" size={22} />
                        </div>
                      </div>
                      <div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                          className={`text-2xl font-heading font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.value}
                        </motion.div>
                        <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Achievements */}
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500">
                  <h4 className="text-sm font-heading font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="text-blue-400" size={16} />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Completed internship at Hindalco Industries Limited',
                      'Earned 10+ professional certifications',
                      'Built 15+ projects with modern web tech',
                      'Active open-source contributor'
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-gray-400 text-xs leading-relaxed group-hover/item:text-gray-300 transition-colors">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection