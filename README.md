# Sandeep Kumar Dubey - Modern Animated Portfolio

A professional, modern, and visually appealing animated portfolio website built with React, Three.js, and Framer Motion.

## 🚀 Features

- **3D Animated Hero Section** - Interactive particle system with Three.js
- **Smooth Animations** - Framer Motion for seamless transitions and micro-interactions
- **Modern Design** - Clean, professional, and creative layout
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Theme Toggle** - Smooth theme switching
- **Real GitHub Integration** - Auto-fetches projects from GitHub API
- **Working Contact Form** - Ready for integration with form services
- **Custom Cursor** - Interactive cursor effects (desktop only)
- **Performance Optimized** - Lazy loading and code splitting
- **SEO Ready** - Meta tags, structured data, and sitemap

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Math Utils**: Maath
- **Deployment**: Vercel/Netlify ready

## 📦 Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/SandeepKumarDubey7/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:5173`

## 📁 Clean Project Structure

```
src/
├── components/              # Modern React components
│   ├── ModernHeader.jsx    # Animated navigation header
│   ├── AnimatedHero.jsx    # 3D hero section with particles
│   ├── AboutSection.jsx    # About me with stats
│   ├── SkillsSection.jsx   # Skills with animated progress bars
│   ├── ProjectsSection.jsx # GitHub projects showcase
│   ├── ContactSection.jsx  # Contact form and info
│   ├── ModernFooter.jsx    # Footer with social links
│   ├── CustomCursor.jsx    # Interactive cursor
│   └── ScrollToTop.jsx     # Scroll to top button
├── context/
│   └── ThemeContext.jsx    # Theme management
├── App.jsx                 # Main app with lazy loading
├── main.jsx               # Entry point
└── index.css              # Global styles and animations
```

## 🎨 Sections Included

### 🏠 **Hero Section**
- Animated 3D particle background
- Real profile photo with rotating gradient border
- Floating technology tags
- Contact and resume download buttons

### 👨‍💻 **About Section**
- Personal introduction and education
- Animated statistics (projects, certifications, etc.)
- Skills and interests tags
- Achievement highlights

### 🛠️ **Skills Section**
- Resume-based skills (Java, C, C++, R, Python, HTML/CSS)
- Real proficiency levels with animated progress bars
- Categorized by Languages, Frameworks, Databases, Data Science
- Core competencies showcase

### 🚀 **Projects Section**
- Auto-fetches ALL projects from GitHub API (https://github.com/SandeepKumarDubey7)
- Real project data (stars, forks, languages, topics)
- Live demo links when available
- Shows up to 12 projects

### 💼 **Experience Section**
- Professional timeline with Hindalco Industries internship
- Education details (B.Tech CSE with AI/ML specialization)
- Key achievements and milestones
- Current focus areas

### 🏆 **Certifications Section**
- 12+ real certifications from your CERTIFICATE folder
- Interactive certificate viewer with modal
- Download functionality for each certificate
- Categorized by Programming, Frontend, Data Science, etc.
- Skills acquired for each certification

### 📞 **Contact Section**
- Working contact form with validation
- Real contact information
- Social media links
- Quick response stats

## 🔧 Customization

### Personal Information
Update your details in the respective components:
- **Contact**: `sandeepdk180@gmail.com`, `+91 8595547675`
- **Social**: GitHub, LinkedIn links
- **Resume**: Replace `public/Sandeep__resume (2).pdf`

### GitHub Integration
The portfolio automatically fetches your repositories. To customize:
1. Update username in `ProjectsSection.jsx`
2. Modify filtering logic if needed
3. Add fallback projects

### Contact Form Integration
Choose one of these services:
- **Formspree**: Sign up and update endpoint
- **Netlify Forms**: Add netlify attribute
- **EmailJS**: Install and configure

### Theme Colors
Modify colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder
3. Configure redirects

### Build for Production
```bash
npm run build
```

## 📱 Performance Features

- **Lazy Loading**: Components load as needed
- **Code Splitting**: Optimized bundle sizes
- **3D Optimization**: Efficient particle systems
- **Image Optimization**: Compressed assets
- **Caching**: Service worker ready

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Alt text for images

## 📞 Contact Information

- **Email**: sandeepdk180@gmail.com
- **Phone**: +91 8595547675
- **LinkedIn**: [Sandeep Dubey](https://www.linkedin.com/in/sandeep-dubey-a6a9b5289)
- **GitHub**: [SandeepKumarDubey7](https://github.com/SandeepKumarDubey7)

---

**Built with React, Three.js,and Tailwind CSS**
