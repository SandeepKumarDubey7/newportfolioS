import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Calendar,
  Loader,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  FolderGit2,
  Globe
} from 'lucide-react'

const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/SandeepKumarDubey7/repos?sort=updated&per_page=100')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        
        const repos = await response.json()
        const formattedProjects = repos
          .filter(repo => !repo.fork && repo.homepage && /^https?:\/\/.+/.test(repo.homepage.trim()))
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
        
        setProjects(formattedProjects)
      } catch (err) {
        setError(err.message)
        setProjects([
          {
            id: 1, name: 'Modern Portfolio Website',
            description: 'Animated 3D portfolio with React, Three.js, and Framer Motion',
            html_url: 'https://github.com/SandeepKumarDubey7',
            homepage: 'https://sandeepkumardubey7.github.io',
            language: 'JavaScript', stargazers_count: 15, forks_count: 3,
            topics: ['react', 'threejs', 'portfolio'], updated_at: new Date().toISOString()
          },
          {
            id: 2, name: 'AI Chat Application',
            description: 'Real-time chat application with AI integration',
            html_url: 'https://github.com/SandeepKumarDubey7',
            homepage: 'https://ai-chat-demo.vercel.app',
            language: 'Python', stargazers_count: 8, forks_count: 2,
            topics: ['python', 'ai', 'chatbot'], updated_at: new Date().toISOString()
          },
          {
            id: 3, name: 'E-commerce Dashboard',
            description: 'Admin dashboard with analytics and management features',
            html_url: 'https://github.com/SandeepKumarDubey7',
            homepage: 'https://ecommerce-dash.vercel.app',
            language: 'TypeScript', stargazers_count: 12, forks_count: 4,
            topics: ['typescript', 'react', 'dashboard'], updated_at: new Date().toISOString()
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
      JavaScript: '#f7df1e', TypeScript: '#3178c6', Python: '#3776ab',
      Java: '#ed8b00', 'C++': '#00599c', HTML: '#e34f26',
      CSS: '#1572b6', React: '#61dafb', Vue: '#4fc08d', PHP: '#777bb4',
    }
    return colors[language] || '#6b7280'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short'
    })
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
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-14">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-widest mb-4"
            >
              <FolderGit2 size={14} />
              <span>Portfolio</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-white">Featured </span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my work and contributions to innovative solutions
            </p>
          </motion.div>

          {/* Loading */}
          {loading && (
            <motion.div variants={itemVariants} className="flex justify-center py-20">
              <div className="flex items-center gap-3 text-blue-400">
                <Loader className="animate-spin" size={20} />
                <span className="text-sm">Fetching from GitHub...</span>
              </div>
            </motion.div>
          )}

          {/* Error notice */}
          {error && !loading && (
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="flex items-center gap-2 text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2.5 text-xs">
                <AlertCircle size={14} />
                <span>Showing featured projects (GitHub API unavailable)</span>
              </div>
            </motion.div>
          )}

          {/* Projects */}
          {!loading && (
            <>
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-gray-500 text-sm">
                  <span className="text-blue-400 font-semibold font-heading">{projects.length}</span> live projects with demos
                </p>
              </motion.div>
              
              {projects.length === 0 ? (
                <motion.div variants={itemVariants} className="flex justify-center py-16">
                  <div className="text-center space-y-3">
                    <Globe size={40} className="mx-auto text-gray-600" />
                    <p className="text-gray-400 text-base font-medium">No live projects available</p>
                    <p className="text-gray-500 text-sm max-w-md">Check back later or visit my GitHub profile to explore all repositories.</p>
                  </div>
                </motion.div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.04 }}
                      className="relative group h-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] group-hover:border-white/[0.1] transition-all duration-500 h-full flex flex-col space-y-3">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-heading font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug flex-1">
                            {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </h3>
                          <div className="flex gap-1 flex-shrink-0">
                            <a
                              href={project.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-slate-700/40 hover:bg-slate-600/50 rounded-lg transition-colors text-gray-400 hover:text-white"
                              title="View on GitHub"
                            >
                              <Github size={12} />
                            </a>
                            <a
                              href={project.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-colors text-emerald-400 hover:text-emerald-300"
                              title="View Demo"
                            >
                              <ArrowUpRight size={12} />
                            </a>
                          </div>
                        </div>
                        
                        {project.description && (
                          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-grow">{project.description}</p>
                        )}

                        {/* View Demo Button */}
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 rounded-lg text-xs font-medium transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/30"
                        >
                          <Globe size={11} />
                          <span>View Demo</span>
                          <ExternalLink size={10} />
                        </a>

                        {/* Footer */}
                        <div className="pt-2 mt-auto border-t border-white/[0.04]">
                          <div className="flex items-center justify-between text-[10px] text-gray-500">
                            <div className="flex items-center gap-3">
                              {project.language && (
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getLanguageColor(project.language) }} />
                                  <span>{project.language}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-0.5">
                                <Star size={10} />
                                <span>{project.stargazers_count}</span>
                              </div>
                              {project.forks_count > 0 && (
                                <div className="flex items-center gap-0.5">
                                  <GitFork size={10} />
                                  <span>{project.forks_count}</span>
                                </div>
                              )}
                            </div>
                            <span>{formatDate(project.updated_at)}</span>
                          </div>
                        </div>

                        {/* Topics */}
                        {project.topics?.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {project.topics.slice(0, 3).map((topic) => (
                              <span key={topic} className="px-2 py-0.5 bg-blue-500/10 text-blue-400/80 rounded text-[10px] border border-blue-500/10">
                                {topic}
                              </span>
                            ))}
                            {project.topics.length > 3 && (
                              <span className="px-2 py-0.5 bg-slate-700/40 text-gray-500 rounded text-[10px]">+{project.topics.length - 3}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* View All */}
          <motion.div variants={itemVariants} className="text-center pt-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/SandeepKumarDubey7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-slate-800/40 hover:bg-slate-700/50 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-sm text-sm group"
            >
              <Github size={16} />
              <span>View All on GitHub</span>
              <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection