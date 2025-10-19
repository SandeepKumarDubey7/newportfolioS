import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, 
  GraduationCap, 
  Calendar,
  MapPin,
  Award,
  Building,
  BookOpen,
  Target
} from 'lucide-react'

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'On-Site Internship',
      title: 'IT Intern',
      company: 'Hindalco Industries Limited (Aditya Birla Group)',
      location: 'Renusagar, Uttar Pradesh India',
      period: '2024',
      description: 'Developed an Employee Attendance System using Oracle APEX.Designed and implemented modules for attendance tracking, daily reports, and monthly summaries.Gained hands-on experience with SQL, PL/SQL, and Oracle APEX.Collaborated with team members to resolve issues and ensure smooth deployment.',
      skills: ['SQL','PL/SQL','Oracle APEX', 'Team Collaboration', 'Project Management', 'Software Engineering'],
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Internship',
      title: 'Intern',
      company: 'India Space Academy (Summer School)',
      location: 'Delhi India',
      period: '2024',
      description: 'Conducted research in Data-Driven Astronomy. Completed a project on Supernova Cosmology, estimating the Hubble constant and studying universe expansion.Analyzed JWST MIRI data in project Identifying Spectral Lines in NGC 7469.Acquired skills in astrophysical data analysis and scientific report writing.',
      skills: ['Astrophysical Data Analysis','Scientific Report Writing.'],
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Education',
      title: 'B.Tech Computer Science Engineering',
      company: 'Specialization: AI/ML',
      location: 'India',
      period: '2022 - Present',
      description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning. Focusing on data structures, algorithms, software engineering, and AI/ML technologies.',
      skills: ['AI/ML', 'Data Structures', 'Algorithms', 'Software Engineering', 'Computer Science'],
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const achievements = [
    {
      title: 'Hindalco Industries Limited (Aditya Birla Group) Internship',
      description: 'Successfully completed software development internship at a leading industrial company',
      icon: Award,
      year: '2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Multiple Technical Certifications',
      description: 'Earned 10+ certifications in programming languages, web development, and data science',
      icon: Target,
      year: '2023-2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hack-o-Relay Participation',
      description: 'Participated in coding hackathon and developed innovative technical solutions',
      icon: BookOpen,
      year: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Academic Excellence',
      description: 'Maintaining strong academic performance in Computer Science Engineering program',
      icon: GraduationCap,
      year: 'Ongoing',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
              Experience & Education
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey and academic background in technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="lg:col-span-2 space-y-8">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-white mb-8"
              >
                Professional Timeline
              </motion.h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={inView ? { height: '100%' } : { height: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"
                />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={timelineVariants}
                      className="relative flex items-start space-x-6"
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg border-4 border-slate-800`}
                      >
                        <exp.icon className="text-white" size={20} />
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        variants={itemVariants}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 flex-1 space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xl font-semibold text-white">
                              {exp.title}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              exp.type === 'internship' 
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            }`}>
                              {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-blue-400 font-medium flex items-center space-x-2">
                              <Building size={16} />
                              <span>{exp.company}</span>
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Calendar size={14} />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={14} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Sidebar */}
            <div className="space-y-8">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-white"
              >
                Key Achievements
              </motion.h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 space-y-3 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 bg-gradient-to-r ${achievement.color} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white text-sm">
                            {achievement.title}
                          </h4>
                          <span className="text-xs text-blue-400 font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus */}
              <motion.div 
                variants={itemVariants} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 space-y-4"
              >
                <h4 className="font-semibold text-white">Current Focus</h4>
                <div className="space-y-3">
                  {[
                    'Full-Stack Development',
                    'AI/ML Applications',
                    'Software Engineering',
                    'Continuous Learning'
                  ].map((focus, index) => (
                    <div key={focus} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{focus}</span>
                    </div>
                  ))}
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