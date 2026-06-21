import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, MapPin, PhoneCallIcon, ArrowRight, Sparkles } from 'lucide-react'
import * as random from 'maath/random/dist/maath-random.esm'

// 3D Particle System
const ParticleField = () => {
    const ref = useRef()
    const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

// Floating 3D Sphere
const FloatingSphere = () => {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.2
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.2
        }
    })

    return (
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={0.8}>
            <meshStandardMaterial
                color="#6366f1"
                transparent
                opacity={0.5}
                wireframe
            />
        </Sphere>
    )
}

// 3D Scene Component
const Scene3D = () => (
    <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
    >
        <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleField />
            <FloatingSphere />
        </Suspense>
    </Canvas>
)

// Status badge component
const StatusBadge = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/60 backdrop-blur-sm border border-white/[0.06]"
    >
        <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" />
        </div>
        <span className="text-xs font-medium text-gray-300">Available for opportunities</span>
    </motion.div>
)

const AnimatedHero = () => {
    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = '/Sandeep_26372_resume_Full_stack.pdf'
        link.download = 'Sandeep_Kumar_Dubey_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[#040912]" />
            
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/[0.07] rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/[0.04] rounded-full blur-[150px]" />

            {/* 3D Background */}
            <div className="absolute inset-0 opacity-40">
                <Scene3D />
            </div>

            {/* Grid pattern */}
            <div 
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Animated particles */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
                        animate={{
                            y: [0, Math.random() * 60 - 30],
                            x: [0, Math.random() * 60 - 30],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-7"
                    >
                        {/* Status Badge */}
                        <StatusBadge />

                        {/* Profile Image - Mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex justify-center lg:hidden mb-4"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-70 blur-sm"
                                />
                                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-slate-700/50">
                                    <img 
                                        src="/SANDEEP.jpg" 
                                        alt="Sandeep Kumar Dubey"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Name & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <motion.span
                                    className="text-lg"
                                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    👋
                                </motion.span>
                                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Hello, I'm</span>
                            </div>
                            
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold tracking-tight leading-[0.9]">
                                <span className="text-white">Sandeep</span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                    Kumar Dubey
                                </span>
                            </h1>
                        </motion.div>

                        {/* Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-px w-10 bg-gradient-to-r from-blue-500 to-transparent" />
                                <h2 className="text-lg sm:text-xl text-gray-300 font-medium font-heading">
                                    B.Tech CSE · AI & ML Specialist
                                </h2>
                            </div>
                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg">
                                Crafting innovative web solutions and intelligent applications. 
                                I specialize in building responsive, user-centric products that 
                                merge cutting-edge tech with elegant design.
                            </p>
                        </motion.div>

                        {/* Contact chips */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-wrap gap-3"
                        >
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=sandeepdk180@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/40 border border-white/[0.04] text-xs text-gray-400 hover:text-white hover:border-white/[0.1] transition-all duration-300"
                            >
                                <Mail size={13} />
                                <span>sandeepdk180@gmail.com</span>
                            </a>
                            <a
                                href="tel:+918595547675"
                                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/40 border border-white/[0.04] text-xs text-gray-400 hover:text-white hover:border-white/[0.1] transition-all duration-300"
                            >
                                <PhoneCallIcon size={13} />
                                <span>+91 8595547675</span>
                            </a>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex flex-wrap gap-3 pt-2"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={downloadResume}
                                className="relative group flex items-center gap-2.5 text-white font-medium px-7 py-3.5 rounded-xl overflow-hidden text-sm"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 rounded-xl" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                <Download size={16} className="relative z-10" />
                                <span className="relative z-10">Download Resume</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={scrollToContact}
                                className="flex items-center gap-2.5 bg-slate-800/40 hover:bg-slate-700/50 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-sm text-sm group"
                            >
                                <Mail size={16} />
                                <span>Contact Me</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex items-center gap-3 pt-1"
                        >
                            <span className="text-xs text-gray-600 uppercase tracking-wider">Find me</span>
                            <div className="h-px w-6 bg-gray-700" />
                            {[
                                { icon: Github, href: 'https://github.com/SandeepKumarDubey7', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/sandeep-dubey-a6a9b5289', label: 'LinkedIn' },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-slate-800/40 hover:bg-slate-700/50 rounded-xl transition-all duration-300 border border-white/[0.04] hover:border-white/[0.1] text-gray-400 hover:text-white"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* 3D Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative h-80 lg:h-[550px] hidden lg:flex items-center justify-center"
                    >
                        {/* Profile image - Desktop */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute z-20"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-50 blur-md"
                                />
                                <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-violet-500/20">
                                    <img 
                                        src="/SANDEEP.jpg" 
                                        alt="Sandeep Kumar Dubey"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Code brackets */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    rotateY: 360,
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="text-7xl md:text-9xl font-mono text-violet-400/10 select-none"
                            >
                                {'{ }'}
                            </motion.div>
                        </div>

                        {/* Floating tech tags */}
                        <div className="absolute inset-0">
                            {[
                                { name: 'React', x: 15, y: 20, delay: 0 },
                                { name: 'Java', x: 70, y: 15, delay: 0.5 },
                                { name: 'Python', x: 20, y: 72, delay: 1 },
                                { name: 'Node.js', x: 65, y: 75, delay: 1.5 },
                                { name: 'AI / ML', x: 75, y: 45, delay: 2 },
                            ].map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 3, -3, 0],
                                    }}
                                    transition={{
                                        duration: 4 + index * 0.5,
                                        repeat: Infinity,
                                        delay: tech.delay,
                                    }}
                                    className="absolute bg-slate-800/60 backdrop-blur-sm border border-white/[0.06] rounded-lg px-3 py-1.5 text-xs text-gray-300 font-mono shadow-lg shadow-black/20"
                                    style={{
                                        left: `${tech.x}%`,
                                        top: `${tech.y}%`,
                                    }}
                                >
                                    <span className="text-violet-400 mr-1">{'<'}</span>
                                    {tech.name}
                                    <span className="text-violet-400 ml-1">{'/>'}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Orbital rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] border border-white/[0.03] rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[420px] h-[420px] border border-dashed border-white/[0.02] rounded-full"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToAbout}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors duration-300 group"
                    aria-label="Scroll to about section"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explore</span>
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </motion.button>
            </motion.div>
        </section>
    )
}

export default AnimatedHero