import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Calendar,
  Code,
  Loader,
  AlertCircle
} from 'lucide-react'

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/SandeepKumarDubey7/repos?sort=updated&per_page=100')
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        
        const repos = await response.json()
        
        // Filter and format repositories
        const formattedProjects = repos
          .filter(repo => !repo.fork) // Exclude forks but include all repos (with or without description)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            updated_at: repo.updated_at,
            topics: repo.topics || [],
            created_at: repo.created_at
          }))
          // Show all projects (no limit)
        
        setProjects(formattedProjects)
      } catch (err) {
        setError(err.message)
        // Fallback projects if GitHub API fails
        setProjects([
          {
            id: 1,
            name: 'Modern Portfolio Website',
            description: 'Animated 3D portfolio website built with React, Three.js, and Framer Motion',
            html_url: 'https://github.com/SandeepKumarDubey7',
            homepage: 'https://sandeepkumardubey.dev',
            language: 'JavaScript',
            stargazers_count: 15,
            forks_count: 3,
            topics: ['react', 'threejs', 'portfolio', 'framer-motion'],
            updated_at: new Date().toISOString()
          },
          {
            id: 2,
            name: 'AI Chat Application',
            description: 'Real-time chat application with AI integration using modern web technologies',
            html_url: 'https://github.com/SandeepKumarDubey7',
            language: 'Python',
            stargazers_count: 8,
            forks_count: 2,
            topics: ['python', 'ai', 'chatbot', 'machine-learning'],
            updated_at: new Date().toISOString()
          },
          {
            id: 3,
            name: 'E-commerce Dashboard',
            description: 'Admin dashboard for e-commerce platform with analytics and management features',
            html_url: 'https://github.com/SandeepKumarDubey7',
            language: 'TypeScript',
            stargazers_count: 12,
            forks_count: 4,
            topics: ['typescript', 'react', 'dashboard', 'ecommerce'],
            updated_at: new Date().toISOString()
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubProjects()
  }, [])

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#ed8b00',
      'C++': '#00599c',
      HTML: '#e34f26',
      CSS: '#1572b6',
      React: '#61dafb',
      Vue: '#4fc08d',
      PHP: '#777bb4',
    }
    return colors[language] || '#6b7280'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
              Featured Projects
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and contributions to innovative solutions
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center py-20"
            >
              <div className="flex items-center space-x-3 text-blue-400">
                <Loader className="animate-spin" size={24} />
                <span>Loading projects from GitHub...</span>
              </div>
            </motion.div>
          )}

          {/* Error State */}
          {error && !loading && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center py-10"
            >
              <div className="flex items-center space-x-3 text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2">
                <AlertCircle size={20} />
                <span>Showing featured projects (GitHub API unavailable)</span>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          {!loading && (
            <>
              <motion.div variants={itemVariants} className="text-center mb-8">
                <p className="text-gray-400">
                  Showing <span className="text-blue-400 font-semibold">{projects.length}</span> repositories from GitHub
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20 group space-y-4 h-full flex flex-col"
                >
                  {/* Project Header */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </h3>
                      <div className="flex space-x-1 flex-shrink-0 ml-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-700/50 hover:bg-slate-600/50 rounded-md transition-colors duration-300 border border-blue-500/20"
                          aria-label="View on GitHub"
                        >
                          <Github size={14} />
                        </motion.a>
                        {project.homepage && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-700/50 hover:bg-slate-600/50 rounded-md transition-colors duration-300 border border-blue-500/20"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={14} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    
                    {project.description && (
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-slate-700 pt-4">
                    <div className="flex items-center space-x-4">
                      {project.language && (
                        <div className="flex items-center space-x-1">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(project.language) }}
                          />
                          <span>{project.language}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Star size={12} />
                        <span>{project.stargazers_count}</span>
                      </div>
                      {project.forks_count > 0 && (
                        <div className="flex items-center space-x-1">
                          <GitFork size={12} />
                          <span>{project.forks_count}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{formatDate(project.updated_at)}</span>
                    </div>
                  </div>

                  {/* Technologies/Topics */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.topics.length > 3 && (
                        <span className="px-2 py-0.5 bg-slate-700 text-gray-400 rounded text-xs">
                          +{project.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
              </div>
            </>
          )}

          {/* View More Projects */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/SandeepKumarDubey7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 border border-blue-500/20 backdrop-blur-sm"
            >
              <Github size={18} />
              <span>View All Projects on GitHub</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection