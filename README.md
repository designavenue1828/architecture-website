# Architecture Website

A modern, professional architecture firm website built with React, TypeScript, and Vite. Features a stunning dark theme with glassmorphism effects, smooth animations, and responsive design.

## 🌟 Features

- **Modern Design**: Dark theme with vibrant gradients and glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Vite for lightning-fast development and optimized production builds
- **Type-Safe**: Written in TypeScript for better code quality and developer experience
- **Accessible**: Semantic HTML and ARIA labels for better accessibility
- **SEO Optimized**: Proper meta tags and semantic structure

## 📁 Project Structure

```
architecture-website/
├── src/
│   ├── components/
│   │   ├── Header/          # Navigation header with mobile menu
│   │   ├── Footer/          # Footer with links and contact info
│   │   ├── ProjectGallery/  # Project showcase grid
│   │   ├── ContactForm/     # Contact form with validation
│   │   └── Services/        # Services grid component
│   ├── pages/
│   │   ├── Home/            # Landing page with hero section
│   │   ├── Projects/        # Projects portfolio page
│   │   ├── About/           # About us page
│   │   ├── Services/        # Services page
│   │   └── Contact/         # Contact page
│   ├── styles/
│   │   └── main.css         # Global styles and design system
│   ├── App.tsx              # Main app component with routing
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── .github/workflows/       # GitHub Actions for deployment
└── index.html              # HTML entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/architecture-website.git
   cd architecture-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Create a GitHub repository** named `architecture-website`

2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/architecture-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source

4. **Automatic deployment**: Every push to the `main` branch will automatically trigger a deployment

5. **Access your site**: Your website will be available at:
   ```
   https://yourusername.github.io/architecture-website/
   ```

### Manual Deployment

Alternatively, you can deploy manually using gh-pages:

```bash
npm run deploy
```

## 🎨 Customization

### Changing the Base Path

If your repository name is different from `architecture-website`, update the base path in:

1. `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/'
   ```

2. `src/App.tsx`:
   ```typescript
   <Router basename="/your-repo-name">
   ```

### Design Tokens

All design tokens (colors, spacing, typography) are defined as CSS custom properties in `src/styles/main.css`. Modify these to customize the look and feel.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.