import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Home, User, Code, Briefcase, Mail, GraduationCap, Award } from 'lucide-react'

const ModernHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'About', href: '#about', icon: User },
        { name: 'Skills', href: '#skills', icon: Code },
        { name: 'Projects', href: '#projects', icon: Briefcase },
        { name: 'Experience', href: '#experience', icon: GraduationCap },
        { name: 'Certifications', href: '#certifications', icon: Award },
        { name: 'Contact', href: '#contact', icon: Mail },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = navItems.map(item => item.href.substring(1))
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })

            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = '/Sandeep_26372_resume_Full_stack.pdf'
        link.download = 'Sandeep_Kumar_Dubey_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 py-3.5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
                        whileHover={{ scale: 1.05 }}
                        className="relative flex items-center gap-2.5 group"
                    >
                        {/* Logo mark */}
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-violet-500/30 transition-shadow duration-500">
                                <span className="text-white font-heading font-bold text-sm">SD</span>
                            </div>
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                        </div>
                        
                        {/* Logo text */}
                        <div className="hidden sm:block">
                            <span className="text-base font-heading font-bold text-white">
                                Sandeep
                            </span>
                            <span className="text-base font-heading font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent ml-1">
                                Dubey
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center bg-slate-800/40 backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-white/[0.04]">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                                    className={`relative flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full transition-all duration-300 ${activeSection === item.href.substring(1)
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full border border-blue-500/20"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <item.icon size={13} className="relative z-10" />
                                    <span className="relative z-10">{item.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={downloadResume}
                            className="relative group flex items-center gap-2 font-medium px-5 py-2.5 rounded-xl text-sm text-white overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                            <Download size={14} className="relative z-10" />
                            <span className="relative z-10">Resume</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 border border-white/[0.06]"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="pt-4 pb-3 space-y-1.5">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                                        className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                                            ? 'text-white bg-gradient-to-r from-blue-500/15 to-violet-500/15 border border-blue-500/20'
                                            : 'text-gray-400 hover:text-white hover:bg-slate-800/60'
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <item.icon size={16} />
                                        <span>{item.name}</span>
                                    </motion.a>
                                ))}
                                
                                <div className="pt-3">
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        onClick={downloadResume}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
                                    >
                                        <Download size={14} />
                                        <span>Download Resume</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}

export default ModernHeader