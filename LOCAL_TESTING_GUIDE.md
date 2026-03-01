# Local Testing Guide

This guide will help you test the architecture website on your local machine before deploying to GitHub Pages.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

To check if you have them installed:
```bash
node --version
npm --version
```

---

## Quick Start

### 1. Install Dependencies

If you haven't already, install all project dependencies:

```bash
cd "/Users/nazar/websites/aquib/new website/architecture-website"
npm install
```

This will install React, React Router, TypeScript, Vite, and all other dependencies.

---

## Development Testing

### 2. Start Development Server

Run the development server with hot-reload:

```bash
npm run dev
```

**Expected Output:**
```
VITE v4.5.14  ready in 114 ms

➜  Local:   `http://localhost:5173/architecture-website/`
➜  Network: use --host to expose
➜  press h to show help
```

### 3. Open in Browser

Open your browser and navigate to:
```
http://localhost:5173/architecture-website/
```

> **Note:** The `/architecture-website/` path is important - this matches the GitHub Pages URL structure.

### 4. Test All Pages

Click through each navigation link to verify:

- ✅ **Home** (`/`) - Hero section, features, CTA
- ✅ **Projects** (`/projects`) - Project gallery with 6 projects
- ✅ **About** (`/about`) - Company story and values
- ✅ **Services** (`/services`) - Services grid and process
- ✅ **Contact** (`/contact`) - Contact form and details

### 5. Test Responsive Design

Resize your browser window or use browser DevTools to test different screen sizes:

1. Open DevTools (F12 or Cmd+Option+I on Mac)
2. Click the device toolbar icon (or press Cmd+Shift+M)
3. Test these breakpoints:
   - **Mobile**: 375px width
   - **Tablet**: 768px width
   - **Desktop**: 1200px width

### 6. Test Interactive Features

**Navigation:**
- ✅ Click all navigation links
- ✅ Test mobile hamburger menu (resize to mobile view)
- ✅ Verify active link highlighting

**Contact Form:**
- ✅ Fill out the form with test data
- ✅ Click "Send Message"
- ✅ Verify success message appears

**Hover Effects:**
- ✅ Hover over navigation links
- ✅ Hover over project cards
- ✅ Hover over service cards
- ✅ Hover over buttons

### 7. Stop Development Server

When done testing, press `Ctrl+C` in the terminal to stop the server.

---

## Production Build Testing

### 8. Build for Production

Create an optimized production build:

```bash
npm run build
```

**Expected Output:**
```
> architecture-website@1.0.0 build
> tsc && vite build

vite v4.5.14 building for production...
✓ 54 modules transformed.
dist/index.html                   1.54 kB │ gzip:  0.64 kB
dist/assets/index-*.css          17.62 kB │ gzip:  3.66 kB
dist/assets/index-*.js          178.54 kB │ gzip: 56.70 kB
✓ built in 373ms
```

This creates a `dist` folder with optimized files ready for deployment.

### 9. Preview Production Build

Test the production build locally:

```bash
npm run preview
```

**Expected Output:**
```
➜  Local:   http://localhost:4173/architecture-website/
➜  Network: use --host to expose
```

Open `http://localhost:4173/architecture-website/` in your browser.

> **Important:** The preview server simulates the production environment, including the `/architecture-website/` base path.

### 10. Verify Production Build

Test the same features as in development:
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Styles are applied
- ✅ Images/gradients display
- ✅ Forms function properly

---

## Testing Checklist

Use this checklist to ensure everything works:

### Visual Design
- [ ] Dark theme displays correctly
- [ ] Gradient backgrounds visible
- [ ] Glassmorphism effects (blur) working
- [ ] Typography (Inter & Playfair Display) loaded
- [ ] Smooth animations on page load
- [ ] Hover effects on interactive elements

### Navigation
- [ ] Header fixed at top of page
- [ ] All navigation links work
- [ ] Active page highlighted in nav
- [ ] Mobile menu opens/closes
- [ ] Logo links to home page

### Pages
- [ ] **Home**: Hero, features, CTA display
- [ ] **Projects**: 6 project cards visible
- [ ] **About**: Story and values sections
- [ ] **Services**: 6 services + process steps
- [ ] **Contact**: Form and contact details

### Forms
- [ ] Contact form accepts input
- [ ] Required field validation works
- [ ] Success message displays after submit
- [ ] Form clears after successful submit

### Responsive Design
- [ ] Mobile view (< 768px) works
- [ ] Tablet view (768px - 1024px) works
- [ ] Desktop view (> 1024px) works
- [ ] Mobile menu appears on small screens
- [ ] Grid layouts adjust properly

### Performance
- [ ] Pages load quickly
- [ ] No console errors (check DevTools)
- [ ] Smooth scrolling
- [ ] Animations don't lag

---

## Troubleshooting

### Issue: Port Already in Use

If you see "Port 5173 is already in use":

```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Issue: Build Fails

If the build fails:

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Issue: Styles Not Loading

If styles don't appear:

1. Check browser console for errors (F12)
2. Clear browser cache (Cmd+Shift+R on Mac)
3. Verify `src/styles/main.css` is imported in `main.tsx`

### Issue: Routes Not Working

If navigation doesn't work:

1. Verify you're using the correct URL with `/architecture-website/` base path
2. Check that React Router is properly configured in `App.tsx`
3. Ensure `vite.config.ts` has `base: '/architecture-website/'`

---

## Browser Compatibility

The website works best in modern browsers:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

**Minimum Requirements:**
- ES2020 support
- CSS Grid support
- CSS Custom Properties support
- Backdrop-filter support (for glassmorphism)

---

## Performance Tips

### Development Mode
- Hot Module Replacement (HMR) for instant updates
- Source maps for debugging
- Unminified code for readability

### Production Mode
- Minified and optimized code
- Tree-shaking to remove unused code
- Code splitting for faster loads
- Gzip compression

---

## Next Steps

Once local testing is complete:

1. ✅ Verify all features work in development
2. ✅ Test production build locally
3. ✅ Check responsive design
4. ✅ Test in multiple browsers
5. 🚀 Ready to deploy to GitHub Pages!

See [README.md](./README.md) for deployment instructions.

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean build artifacts
rm -rf dist

# Deploy to GitHub Pages (after setup)
npm run deploy
```

---

## Need Help?

If you encounter any issues:

1. Check the browser console for errors (F12)
2. Verify all dependencies are installed (`npm install`)
3. Make sure you're using Node.js 18 or higher
4. Try clearing the cache and rebuilding

Happy testing! 🎉
