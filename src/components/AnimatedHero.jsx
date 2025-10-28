import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, MapPin, PhoneCallIcon } from 'lucide-react'
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
                    color="#3b82f6"
                    size={0.005}
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
                color="#3b82f6"
                transparent
                opacity={0.6}
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

const AnimatedHero = () => {
    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = '/Sandeep__resume (2).pdf'
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />

            {/* 3D Background */}
            <div className="absolute inset-0 opacity-30">
                <Scene3D />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex justify-center lg:justify-start mb-8"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1"
                                />
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700">
                                    <img 
                                        src="/SANDEEP.jpg" 
                                        alt="Sandeep Kumar Dubey"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-2"
                        >
                            <motion.p
                                className="text-blue-400 font-medium text-lg flex items-center space-x-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span>👋</span>
                                <span>Hello, I'm</span>
                            </motion.p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="block text-white"
                                >
                                 
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent"
                                >
                                 Sandeep Kumar Dubey
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Role & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="space-y-4"
                        >
                            <motion.h2
                                className="text-xl md:text-2xl text-gray-300 font-medium"
                                animate={{
                                    backgroundPosition: ['0%', '100%', '0%']
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                B.Tech in Computer Science & Engineering With Specialization in AI & ML 
                            </motion.h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                                Passionate about creating innovative web solutions and exploring the endless possibilities
                                of technology. I specialize in building responsive, user-friendly applications that make a difference.
                            </p>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex flex-wrap gap-6 text-sm text-gray-400"
                        >
                            <motion.a
                                href="mailto:sandeepdk180@gmail.com"
                                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Mail size={16} />
                                <span>sandeepdk180@gmail.com</span>
                            </motion.a>
                            <motion.a
                                href="tel:+918595547675"
                                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <PhoneCallIcon size={16} />
                                <span>+91 8595547675</span>
                            </motion.a>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={downloadResume}
                                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
                            >
                                <Download size={18} />
                                <span>Download Resume</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToContact}
                                className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 border border-blue-500/20 backdrop-blur-sm"
                            >
                                <Mail size={18} />
                                <span>Contact Me</span>
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex space-x-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://github.com/SandeepKumarDubey7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 border border-blue-500/20 backdrop-blur-sm"
                                aria-label="GitHub Profile"
                            >
                                <Github size={20} />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://www.linkedin.com/in/sandeep-dubey-a6a9b5289"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 border border-blue-500/20 backdrop-blur-sm"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* 3D Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative h-96 lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Code Animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    rotateY: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="text-6xl md:text-8xl font-mono text-blue-400/30 select-none"
                            >
                                {'{ }'}
                            </motion.div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute inset-0">
                            {['React', 'Java', 'Python', 'Node.js'].map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 3 + index,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                    }}
                                    className="absolute bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg px-3 py-1 text-sm text-blue-300"
                                    style={{
                                        left: `${20 + index * 15}%`,
                                        top: `${30 + index * 10}%`,
                                    }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToAbout}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Scroll to about section"
                >
                    <span className="text-sm">Scroll Down</span>
                    <ChevronDown size={20} />
                </motion.button>
            </motion.div>
        </section>
    )
}

export default AnimatedHero