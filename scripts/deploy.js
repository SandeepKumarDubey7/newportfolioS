#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Starting deployment process...\n')

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project root.')
  process.exit(1)
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...')
  execSync('npm install', { stdio: 'inherit' })
}

// Run build
console.log('🔨 Building project...')
try {
  execSync('npm run build', { stdio: 'inherit' })
  console.log('✅ Build completed successfully!\n')
} catch (error) {
  console.error('❌ Build failed!')
  process.exit(1)
}

// Check if dist directory exists
if (!fs.existsSync('dist')) {
  console.error('❌ Error: dist directory not found after build.')
  process.exit(1)
}

console.log('📊 Build statistics:')
const distStats = fs.readdirSync('dist')
console.log(`   Files generated: ${distStats.length}`)

// Calculate total size
let totalSize = 0
const calculateSize = (dir) => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      calculateSize(filePath)
    } else {
      totalSize += stats.size
    }
  })
}

calculateSize('dist')
console.log(`   Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB\n`)

console.log('🎉 Deployment ready!')
console.log('📁 Upload the "dist" folder to your hosting provider')
console.log('🌐 Or use: npm run preview to test locally\n')

console.log('🚀 Quick deploy options:')
console.log('   Vercel: vercel --prod')
console.log('   Netlify: netlify deploy --prod --dir=dist')
console.log('   GitHub Pages: gh-pages -d dist')

console.log('\n✨ Happy deploying!')