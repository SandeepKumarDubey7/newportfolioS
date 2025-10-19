import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, Award, Target, BookOpen, Users } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, label: 'Certifications', value: '10+', color: 'from-purple-500 to-pink-500' },
    { icon: BookOpen, label: 'Technologies', value: '20+', color: 'from-green-500 to-emerald-500' },
    { icon: Users, label: 'Collaborations', value: '5+', color: 'from-orange-500 to-red-500' },
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      specialization: 'Artificial Intelligence & Machine Learning',
      period: '2022 - Present',
      description: 'Focused on AI/ML technologies, data structures, algorithms, and software engineering principles.'
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
              About Me
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with a strong foundation in computer science and emerging technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.h3 
                  className="text-3xl font-semibold text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  Hello, I'm Sandeep Kumar Dubey
                </motion.h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    I'm a passionate B.Tech Computer Science Engineering student specializing in 
                    Artificial Intelligence and Machine Learning. With a strong foundation in both 
                    frontend and full-stack development, I love creating innovative solutions that 
                    bridge the gap between technology and user experience.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    My journey in technology started with curiosity about how software works, which led me 
                    to explore various programming languages and frameworks. Today, I specialize in 
                    building responsive web applications, working with AI/ML models, and creating 
                    developer tools that make a real impact.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or learning about the latest trends in artificial intelligence 
                    and machine learning. I believe in continuous learning and staying updated with the 
                    ever-evolving tech landscape.
                  </motion.p>
                </div>
              </div>

              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Education</h4>
                    <p className="text-gray-400">Academic Background</p>
                  </div>
                </div>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <h5 className="font-semibold text-blue-400">{edu.degree}</h5>
                    <p className="text-purple-400 font-medium">{edu.specialization}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Interests */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Interests & Expertise</h4>
                <div className="flex flex-wrap gap-3">
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
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center space-y-4 border border-blue-500/20 group"
                  >
                    <div className="flex justify-center">
                      <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="text-white" size={32} />
                      </div>
                    </div>
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5, type: "spring" }}
                        className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Highlights */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Target className="text-blue-400" size={20} />
                  <span>Key Achievements</span>
                </h4>
                <div className="space-y-3">
                  {[
                    'Completed internship at Hindalco Industries Limited',
                    'Earned 10+ professional certifications in various technologies',
                    'Built 15+ projects using modern web technologies',
                    'Active contributor to open-source projects'
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
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