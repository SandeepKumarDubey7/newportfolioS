import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart, ExternalLink } from 'lucide-react'

const ModernFooter = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SandeepKumarDubey7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sandeep-dubey-a6a9b5289', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=sandeepdk180@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918595547675', label: 'Phone' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#040912] border-t border-white/[0.04]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/[0.02] rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="py-14 space-y-10">
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-heading font-bold text-sm">SD</span>
                </div>
                <div>
                  <span className="text-base font-heading font-bold text-white">Sandeep</span>
                  <span className="text-base font-heading font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent ml-1">Dubey</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                B.Tech CSE · Full Stack Developer · AI & ML Enthusiast
                <br />
                Building innovative web solutions and exploring the frontiers of technology.
              </p>

              {/* Contact */}
              <div className="space-y-2">
                <a href="https://mail.google.com/mail/?view=cm&to=sandeepdk180@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-xs">
                  <Mail size={13} />
                  <span>sandeepdk180@gmail.com</span>
                </a>
                <a href="tel:+918595547675" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-xs">
                  <Phone size={13} />
                  <span>+91 8595547675</span>
                </a>
              </div>
            </motion.div>

            {/* Social & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 md:text-right"
            >
              <h4 className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Connect</h4>
              
              <div className="flex gap-2.5 md:justify-end">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-800/40 hover:bg-slate-700/50 rounded-xl transition-all duration-300 border border-white/[0.04] hover:border-white/[0.1] text-gray-500 hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon size={15} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-slate-800/40 hover:bg-slate-700/50 text-gray-400 hover:text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 border border-white/[0.04] hover:border-white/[0.1] text-xs"
              >
                <ArrowUp size={13} />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-[11px] flex items-center gap-1"
            >
              © {currentYear} Sandeep Kumar Dubey · Built with
              <Heart size={10} className="text-rose-500 fill-rose-500" />
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-700 text-[10px]"
            >
              React · Three.js · Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ModernFooter