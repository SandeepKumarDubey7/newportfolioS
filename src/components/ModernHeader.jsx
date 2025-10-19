import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Download, Home, User, Code, Briefcase, Mail, GraduationCap, Award } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ModernHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const { isDark, toggleTheme } = useTheme()

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

            // Update active section
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
        link.href = '/Sandeep__resume (2).pdf'
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
                ? 'bg-slate-900/95 backdrop-blur-lg border-b border-blue-500/20 shadow-lg shadow-blue-500/10'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(59, 130, 246, 0.3)',
                                    '0 0 30px rgba(59, 130, 246, 0.5)',
                                    '0 0 20px rgba(59, 130, 246, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                        >
                           
                        </motion.div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                                className={`relative flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                                    ? 'text-blue-400'
                                    : 'text-gray-300 hover:text-blue-400'
                                    }`}
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <item.icon size={16} />
                                <span>{item.name}</span>
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={downloadResume}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25"
                        >
                            <Download size={16} />
                            <span>Resume</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-400" />}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-2 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                                className={`flex items-center space-x-3 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                                    ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                                    : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800/50'
                                    }`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <item.icon size={18} />
                                <span>{item.name}</span>
                            </motion.a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={downloadResume}
                            className="w-full mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
                        >
                            <Download size={16} />
                            <span>Download Resume</span>
                        </motion.button>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    )
}

export default ModernHeader