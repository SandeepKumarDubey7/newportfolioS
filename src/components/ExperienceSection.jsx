import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, GraduationCap, Calendar, MapPin, Award, Building, BookOpen, Target, Sparkles, ArrowUpRight
} from 'lucide-react'

const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      type: 'On-Site Internship',
      title: 'IT Intern',
      company: 'Hindalco Industries Limited (Aditya Birla Group)',
      location: 'Renusagar, Uttar Pradesh India',
      period: '2024',
      description: 'Developed an Employee Attendance System using Oracle APEX. Designed and implemented modules for attendance tracking, daily reports, and monthly summaries. Gained hands-on experience with SQL, PL/SQL, and Oracle APEX.',
      skills: ['SQL', 'PL/SQL', 'Oracle APEX', 'Team Collaboration', 'Project Management'],
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-400',
      bg: 'bg-blue-500/10',
    },
    {
      type: 'Internship',
      title: 'Research Intern',
      company: 'India Space Academy (Summer School)',
      location: 'Delhi, India',
      period: '2024',
      description: 'Conducted research in Data-Driven Astronomy. Completed a project on Supernova Cosmology, estimating the Hubble constant. Analyzed JWST MIRI data identifying spectral lines in NGC 7469.',
      skills: ['Astrophysical Data Analysis', 'Scientific Report Writing'],
      icon: Briefcase,
      gradient: 'from-violet-500 to-purple-400',
      bg: 'bg-violet-500/10',
    },
    {
      type: 'Education',
      title: 'B.Tech Computer Science Engineering',
      company: 'Specialization: AI/ML',
      location: 'India',
      period: '2022 - Present',
      description: 'Pursuing B.Tech in CSE with specialization in Artificial Intelligence and Machine Learning. Focusing on data structures, algorithms, software engineering, and AI/ML technologies.',
      skills: ['AI/ML', 'Data Structures', 'Algorithms', 'Software Engineering'],
      icon: GraduationCap,
      gradient: 'from-emerald-500 to-green-400',
      bg: 'bg-emerald-500/10',
    }
  ]

  const achievements = [
    { title: 'Hindalco Industries Internship', description: 'Software development at a leading industrial company', icon: Award, year: '2024', gradient: 'from-blue-500 to-cyan-400' },
    { title: 'Technical Certifications', description: '10+ certifications in programming & data science', icon: Target, year: '2023-24', gradient: 'from-emerald-500 to-green-400' },
    { title: 'Hack-o-Relay Participation', description: 'Coding hackathon with innovative solutions', icon: BookOpen, year: '2024', gradient: 'from-violet-500 to-purple-400' },
    { title: 'Academic Excellence', description: 'Strong performance in CSE program', icon: GraduationCap, year: 'Ongoing', gradient: 'from-amber-500 to-orange-400' }
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
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-16">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-widest mb-4"
            >
              <Briefcase size={14} />
              <span>Journey</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-white">Experience & </span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Timeline - 3/5 */}
            <div className="lg:col-span-3 space-y-6">
              <motion.h3 variants={itemVariants} className="text-sm font-heading font-semibold text-gray-400 uppercase tracking-wider">
                Professional Timeline
              </motion.h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={inView ? { height: '100%' } : { height: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute left-5 top-0 w-px bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-emerald-500/30"
                />

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
                      className="relative flex items-start gap-5 group"
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center shadow-lg border-2 border-slate-900 z-10`}
                      >
                        <exp.icon className="text-white" size={16} />
                      </motion.div>

                      {/* Content */}
                      <div className="relative flex-1">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                        <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] group-hover:border-white/[0.1] transition-all duration-500 space-y-3">
                          
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-base font-heading font-semibold text-white">{exp.title}</h4>
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-medium ${
                              exp.type === 'Education'
                                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                                : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-blue-400 font-medium text-xs flex items-center gap-1.5">
                              <Building size={12} />
                              {exp.company}
                            </p>
                            <div className="flex items-center gap-4 text-[11px] text-gray-500">
                              <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                              <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                            </div>
                          </div>

                          <p className="text-gray-400 text-xs leading-relaxed">{exp.description}</p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.skills.map((skill) => (
                              <span key={skill} className="px-2 py-0.5 bg-slate-700/40 text-gray-400 rounded-md text-[10px] border border-white/[0.04]">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Sidebar - 2/5 */}
            <div className="lg:col-span-2 space-y-6">
              <motion.h3 variants={itemVariants} className="text-sm font-heading font-semibold text-gray-400 uppercase tracking-wider">
                Key Achievements
              </motion.h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-500`} />
                    <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-white/[0.06] group-hover:border-white/[0.1] transition-all duration-500">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 bg-gradient-to-br ${achievement.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <achievement.icon className="text-white" size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-heading font-semibold text-white text-xs truncate">{achievement.title}</h4>
                            <span className="text-[10px] text-gray-500 flex-shrink-0">{achievement.year}</span>
                          </div>
                          <p className="text-gray-500 text-[11px] leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-sm" />
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] space-y-3">
                  <h4 className="font-heading font-semibold text-white text-sm flex items-center gap-2">
                    <Sparkles size={14} className="text-violet-400" />
                    Current Focus
                  </h4>
                  <div className="space-y-2.5">
                    {['Full-Stack Development', 'AI/ML Applications', 'Software Engineering', 'Continuous Learning'].map((focus) => (
                      <div key={focus} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full" />
                        <span className="text-gray-400 text-xs">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection