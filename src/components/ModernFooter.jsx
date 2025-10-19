import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  
  ArrowUp,

} from 'lucide-react'

const ModernFooter = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/SandeepKumarDubey7',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sandeep-dubey-a6a9b5289',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:sandeepdk180@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: Phone,
      href: 'tel:+918595547675',
      label: 'Phone',
      color: 'hover:text-green-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-900 border-t border-blue-500/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 space-y-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Sandeep Kumar Dubey
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  B.Tech in Computer Science | Full Stack Developer | Java Enthusiast
                  <br />
                  Building innovative web solutions and exploring the endless possibilities of technology.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={16} />
                  <a 
                    href="mailto:sandeepdk180@gmail.com"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    sandeepdk180@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone size={16} />
                  <a 
                    href="tel:+918595547675"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 8595547675
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg transition-all duration-300 border border-blue-500/20 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 border border-blue-500/20 backdrop-blur-sm"
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-500/20" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            {/* Copyright */}
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Sandeep Kumar Dubey. All rights reserved.</span>
            </div>
          </motion.div>
            

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-xs space-y-2"
          >
            <p>
              Built with React, Three.js, and Tailwind CSS
            </p>
            <p>
              Optimized for performance, accessibility, and SEO
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default ModernFooter