import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Wrench, Brain, Globe } from 'lucide-react'

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedSkills, setAnimatedSkills] = useState({})

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'C', level: 85 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'R', level: 75 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 80 },
      ]
    },
    {
      title: 'Libraries',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'Numpy', level: 85 },
        { name: 'NLTK', level: 75 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 80 },
        { name: 'Flask', level: 75 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Bootstrap', level: 85 },
        { name: 'GitHub', level: 90 },
      ]
    }
  ]

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const animated = {}
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            animated[skill.name] = skill.level
          })
        })
        setAnimatedSkills(animated)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [inView])

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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
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
              Skills & Technologies
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ 
                            width: inView ? `${animatedSkills[skill.name] || 0}%` : 0 
                          }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center border border-blue-500/20"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Full-Stack Development',
                  description: 'End-to-end web application development'
                },
                {
                  icon: Brain,
                  title: 'AI/ML Integration',
                  description: 'Machine learning models and data analysis'
                },
                {
                  icon: Database,
                  title: 'Database Design',
                  description: 'Efficient database architecture and optimization'
                },
                {
                  icon: Wrench,
                  title: 'DevOps & Tools',
                  description: 'Modern development tools and workflows'
                }
              ].map((competency, index) => (
                <motion.div
                  key={competency.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="space-y-4 group cursor-default"
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <competency.icon className="text-blue-400" size={32} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {competency.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {competency.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection