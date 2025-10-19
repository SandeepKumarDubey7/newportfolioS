# Modern Portfolio Setup Guide

Complete setup guide for your animated portfolio website.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## 📝 Current Components Structure

Your portfolio now uses these modern components:

### Core Components
- `ModernHeader.jsx` - Animated navigation with theme toggle
- `AnimatedHero.jsx` - 3D hero section with particles
- `AboutSection.jsx` - About me with animated stats
- `SkillsSection.jsx` - Skills with progress bars
- `ProjectsSection.jsx` - GitHub projects showcase
- `ContactSection.jsx` - Contact form and info
- `ModernFooter.jsx` - Footer with social links
- `CustomCursor.jsx` - Interactive cursor (desktop)
- `ScrollToTop.jsx` - Scroll to top button

## 🔧 Customization Guide

### 1. Personal Information

Update your details in these components:

#### `ModernHeader.jsx` & `AnimatedHero.jsx`
- Name: "Sandeep Kumar Dubey"
- Email: sandeepdk180@gmail.com
- Phone: +91 8595547675
- Resume file path

#### `AboutSection.jsx`
- Personal description
- Education details
- Statistics and achievements
- Interests and expertise

#### `ContactSection.jsx`
- Contact information
- Social media links
- Form configuration

### 2. GitHub Integration

Projects auto-fetch from: `https://github.com/SandeepKumarDubey7`

To customize in `ProjectsSection.jsx`:
```javascript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=12')
```

### 3. Skills Configuration

Update your skills in `SkillsSection.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      // Add your skills
    ]
  }
]
```

### 4. Contact Form Setup

#### Option A: Formspree (Recommended)
1. Sign up at [Formspree](https://formspree.io/)
2. Update `ContactSection.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

#### Option B: Netlify Forms
1. Add `netlify` attribute to form
2. Deploy to Netlify

#### Option C: EmailJS
1. Install: `npm install emailjs-com`
2. Configure in ContactSection component

### 5. Resume File

Replace `public/Sandeep__resume (2).pdf` with your resume and update references in:
- `ModernHeader.jsx`
- `AnimatedHero.jsx`

### 6. Theme Colors

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    400: '#60a5fa', // Your primary color
    500: '#3b82f6',
    600: '#2563eb',
  }
}
```

### 7. 3D Scene Customization

Modify `AnimatedHero.jsx`:
- Particle count and behavior
- Colors and materials
- Animation speeds
- Interactive elements

## 🎨 Design Customization

### Fonts
Update in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Animations
Adjust Framer Motion animations:
- Duration and delays
- Easing functions
- Stagger children timing

### Background Effects
Modify gradient backgrounds and particle systems in each section component.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder

### Environment Variables
```env
VITE_GITHUB_USERNAME=SandeepKumarDubey7
VITE_FORMSPREE_ENDPOINT=your_endpoint
VITE_SITE_URL=https://yourdomain.com
```

## 📱 Performance Tips

- Components are already lazy-loaded
- 3D scenes are optimized for performance
- Images should be WebP format
- Use `npm run build` for production

## 🔍 SEO Configuration

Update `index.html`:
- Meta tags and descriptions
- Open Graph properties
- Structured data (JSON-LD)
- Canonical URLs

## ♿ Accessibility Features

Already included:
- Keyboard navigation
- Screen reader support
- Focus indicators
- High contrast ratios
- ARIA labels

## 🐛 Troubleshooting

### Common Issues

1. **3D Not Loading**: Check WebGL support
2. **GitHub API Limit**: Fallback projects shown
3. **Form Not Working**: Check service configuration
4. **Build Errors**: Clear node_modules and reinstall

### Performance Issues
- Reduce particle count in AnimatedHero
- Optimize images and assets
- Check browser developer tools

## 📞 Support

- **Email**: sandeepdk180@gmail.com
- **GitHub**: [SandeepKumarDubey7](https://github.com/SandeepKumarDubey7)
- **LinkedIn**: [Sandeep Dubey](https://www.linkedin.com/in/sandeep-dubey-a6a9b5289)

---

**Your modern animated portfolio is ready! 🚀**