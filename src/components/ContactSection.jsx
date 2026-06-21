import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  MessageCircle,
  User,
  CheckCircle,
  AlertCircle,
  Loader,
  ExternalLink,
  Sparkles,
  AtSign,
  FileText,
  Copy,
  Check
} from 'lucide-react'

// ─── Web3Forms Configuration ────────────────────────────────────────────────────
// FREE direct email sending — no Gmail/Outlook opens!
// 1. Go to https://web3forms.com
// 2. Enter your email (sandeepdk180@gmail.com) and click "Create Access Key"
// 3. Check your Gmail inbox for the access key
// 4. Paste it below or in .env as VITE_WEB3FORMS_KEY
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

// ─── Contact Data ───────────────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sandeepdk180@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=sandeepdk180@gmail.com',
    gradient: 'from-blue-500 to-cyan-400',
    bgGlow: 'bg-blue-500/10',
    description: 'Drop me an email anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8595547675',
    href: 'tel:+918595547675',
    gradient: 'from-emerald-500 to-green-400',
    bgGlow: 'bg-emerald-500/10',
    description: 'Available Mon-Sat, 10AM-8PM IST',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
    gradient: 'from-violet-500 to-purple-400',
    bgGlow: 'bg-violet-500/10',
    description: 'Open to remote opportunities worldwide',
  },
]

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/SandeepKumarDubey7',
    gradient: 'from-gray-400 to-gray-300',
    hoverBg: 'hover:bg-gray-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sandeep-dubey-a6a9b5289',
    gradient: 'from-blue-400 to-blue-300',
    hoverBg: 'hover:bg-blue-500/20',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=sandeepdk180@gmail.com',
    gradient: 'from-red-400 to-orange-300',
    hoverBg: 'hover:bg-red-500/20',
  },
]

// ─── Validation Utilities ───────────────────────────────────────────────────────
const validators = {
  name: (value) => {
    if (!value.trim()) return 'Name is required'
    if (value.trim().length < 2) return 'Name must be at least 2 characters'
    if (value.trim().length > 50) return 'Name must be less than 50 characters'
    return ''
  },
  email: (value) => {
    if (!value.trim()) return 'Email is required'
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(value)) return 'Please enter a valid email address'
    return ''
  },
  subject: (value) => {
    if (!value.trim()) return 'Subject is required'
    if (value.trim().length < 3) return 'Subject must be at least 3 characters'
    if (value.trim().length > 100) return 'Subject must be less than 100 characters'
    return ''
  },
  message: (value) => {
    if (!value.trim()) return 'Message is required'
    if (value.trim().length < 10) return 'Message must be at least 10 characters'
    if (value.trim().length > 2000) return 'Message must be less than 2000 characters'
    return ''
  },
}

// ─── Animation Variants ─────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

// ─── Floating Particle Component ────────────────────────────────────────────────
const FloatingParticle = ({ delay, size, x, y, duration }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

// ─── Contact Card Component ─────────────────────────────────────────────────────
const ContactCard = ({ contact, index, inView }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: do nothing
    }
  }, [contact.value])

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative"
    >
      {/* Card glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`} />
      
      <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-5 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`relative flex-shrink-0 p-3.5 bg-gradient-to-br ${contact.gradient} rounded-xl shadow-lg`}>
            <contact.icon className="text-white" size={20} />
            <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} rounded-xl blur-lg opacity-40`} />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">
              {contact.label}
            </p>
            {contact.href ? (
              <a
                href={contact.href}
                className="text-white font-semibold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 block truncate"
              >
                {contact.value}
              </a>
            ) : (
              <p className="text-white font-semibold text-sm">{contact.value}</p>
            )}
            <p className="text-gray-500 text-xs mt-0.5">{contact.description}</p>
          </div>

          {/* Copy button */}
          {contact.href && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              className="flex-shrink-0 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300"
              aria-label={`Copy ${contact.label}`}
              title={copied ? 'Copied!' : `Copy ${contact.value}`}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check size={14} className="text-green-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Form Input Component ───────────────────────────────────────────────────────
const FormInput = ({ 
  icon: Icon, 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  onBlur,
  error, 
  touched,
  placeholder, 
  index, 
  inView 
}) => (
  <motion.div
    custom={index}
    variants={formFieldVariants}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    className="space-y-1.5"
  >
    <label htmlFor={name} className="flex items-center gap-1.5 text-sm font-medium text-gray-300">
      {label}
      <span className="text-blue-400">*</span>
    </label>
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-300" size={16} />
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          className={`w-full pl-11 pr-4 py-3.5 bg-slate-800/60 backdrop-blur-sm border rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none text-sm ${
            error && touched
              ? 'border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-500/20'
              : 'border-white/[0.06] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 hover:border-white/[0.12]'
          }`}
          placeholder={placeholder}
        />
      </div>
    </div>
    <AnimatePresence>
      {error && touched && (
        <motion.p
          initial={{ opacity: 0, y: -5, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -5, height: 0 }}
          className="text-red-400 text-xs flex items-center gap-1 pl-1"
        >
          <AlertCircle size={12} />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
)

// ─── Form Textarea Component ────────────────────────────────────────────────────
const FormTextarea = ({ 
  label, 
  name, 
  value, 
  onChange, 
  onBlur,
  error, 
  touched,
  placeholder, 
  index, 
  inView 
}) => {
  const charCount = value.length
  const maxChars = 2000

  return (
    <motion.div
      custom={index}
      variants={formFieldVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="flex items-center gap-1.5 text-sm font-medium text-gray-300">
          {label}
          <span className="text-blue-400">*</span>
        </label>
        <span className={`text-xs transition-colors duration-300 ${charCount > maxChars ? 'text-red-400' : 'text-gray-500'}`}>
          {charCount}/{maxChars}
        </span>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          rows={5}
          className={`relative w-full px-4 py-3.5 bg-slate-800/60 backdrop-blur-sm border rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none resize-none text-sm ${
            error && touched
              ? 'border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-500/20'
              : 'border-white/[0.06] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 hover:border-white/[0.12]'
          }`}
          placeholder={placeholder}
        />
      </div>
      <AnimatePresence>
        {error && touched && (
          <motion.p
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            className="text-red-400 text-xs flex items-center gap-1 pl-1"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Main ContactSection Component ──────────────────────────────────────────────
const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  // Validate a single field
  const validateField = useCallback((name, value) => {
    if (validators[name]) {
      return validators[name](value)
    }
    return ''
  }, [])

  // Validate entire form
  const validateForm = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      newErrors[key] = error
      if (error) isValid = false
    })

    setErrors(newErrors)
    return isValid
  }, [formData, validateField])

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }, [touched, validateField])

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }, [validateField])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({ name: true, email: true, subject: true, message: true })

    // Validate
    if (!validateForm()) {
      return
    }

    setFormStatus({ loading: true, success: false, error: null })

    try {
      // ── Direct email via Web3Forms API (no Gmail/email client opens!) ──
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setFormStatus({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTouched({ name: false, email: false, subject: false, message: false })
      setErrors({ name: '', email: '', subject: '', message: '' })

      // Auto-clear success after 6 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: null })
      }, 6000)
    } catch (error) {
      console.error('Email send failed:', error)
      setFormStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again or email me directly.',
      })
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-500/[0.04] rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-3xl" />

      {/* Floating particles */}
      <FloatingParticle delay={0} size={6} x={10} y={20} duration={6} />
      <FloatingParticle delay={1} size={4} x={80} y={15} duration={7} />
      <FloatingParticle delay={2} size={8} x={50} y={70} duration={5} />
      <FloatingParticle delay={0.5} size={5} x={25} y={85} duration={8} />
      <FloatingParticle delay={1.5} size={3} x={70} y={60} duration={6} />
      <FloatingParticle delay={3} size={6} x={90} y={40} duration={7} />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* ── Section Header ── */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} />
              <span>Get in Touch</span>
            </motion.div>

            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
            >
              <span className="text-white">Let's Work </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? I'm always open to
              discussing new opportunities, creative ideas, or ways to bring your
              vision to life.
            </p>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* ── Left Column: Contact Info (2/5) ── */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              
              {/* Intro text */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MessageCircle size={20} className="text-blue-400" />
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm currently available for freelance work and full-time
                  opportunities. Whether you need technical consultation or just
                  want to connect — I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {CONTACT_INFO.map((contact, index) => (
                  <ContactCard
                    key={contact.label}
                    contact={contact}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Connect With Me
                </h4>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-white/[0.06] hover:border-white/[0.12] text-gray-400 hover:text-white transition-all duration-300 ${social.hoverBg}`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-white/[0.06] p-5"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Currently Available</p>
                    <p className="text-gray-500 text-xs">
                      Open for freelance & full-time roles
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Column: Contact Form (3/5) ── */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="relative">
                {/* Form card glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-60" />

                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/[0.06]">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                    
                    {/* Form Header */}
                    <div className="space-y-4 mb-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                          <Send size={18} className="text-blue-400" />
                          Send a Message
                        </h3>
                        <span className="text-xs text-emerald-400/80 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle size={10} />
                          Direct delivery
                        </span>
                      </div>

                      {/* Status Messages */}
                      <AnimatePresence mode="wait">
                        {formStatus.success && (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="flex items-center gap-3 p-4 bg-emerald-500/10 text-emerald-300 rounded-xl border border-emerald-500/20"
                          >
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                              <CheckCircle size={16} />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Message sent successfully!</p>
                              <p className="text-emerald-400/70 text-xs mt-0.5">
                                I'll get back to you as soon as possible.
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {formStatus.error && (
                          <motion.div
                            key="error"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="flex items-center gap-3 p-4 bg-red-500/10 text-red-300 rounded-xl border border-red-500/20"
                          >
                            <div className="p-1.5 bg-red-500/20 rounded-lg">
                              <AlertCircle size={16} />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{formStatus.error}</p>
                              <p className="text-red-400/70 text-xs mt-0.5">
                                You can also reach me at{' '}
                                <a
                                  href="https://mail.google.com/mail/?view=cm&to=sandeepdk180@gmail.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:text-red-300"
                                >
                                  sandeepdk180@gmail.com
                                </a>
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormInput
                        icon={User}
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        error={errors.name}
                        touched={touched.name}
                        placeholder="Your name"
                        index={0}
                        inView={inView}
                      />
                      <FormInput
                        icon={AtSign}
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        error={errors.email}
                        touched={touched.email}
                        placeholder="you@example.com"
                        index={1}
                        inView={inView}
                      />
                    </div>

                    {/* Subject */}
                    <FormInput
                      icon={FileText}
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      error={errors.subject}
                      touched={touched.subject}
                      placeholder="What's this about?"
                      index={2}
                      inView={inView}
                    />

                    {/* Message */}
                    <FormTextarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      error={errors.message}
                      touched={touched.message}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      index={3}
                      inView={inView}
                    />

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={formStatus.loading}
                      whileHover={{ scale: formStatus.loading ? 1 : 1.01 }}
                      whileTap={{ scale: formStatus.loading ? 1 : 0.98 }}
                      className="relative w-full group overflow-hidden"
                    >
                      {/* Button glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      <div className="relative flex items-center justify-center gap-2.5 px-6 py-4 text-white font-semibold text-sm">
                        {formStatus.loading ? (
                          <>
                            <Loader className="animate-spin" size={18} />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Send Message</span>
                          </>
                        )}
                      </div>
                    </motion.button>

                    {/* Footer note */}
                    <p className="text-gray-500 text-xs text-center leading-relaxed pt-1">
                      Your message will be sent directly to my inbox — no redirect needed.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection