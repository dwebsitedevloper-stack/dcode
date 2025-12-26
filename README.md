# Portfolio Website - Black & Gold Theme

A modern, single-page portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth in-page navigation, responsive design, accessibility best practices, and a sleek black & gold aesthetic.

## Features

- ✨ **Single-Page Application** - Smooth in-page navigation without full-page reloads
- 🎨 **Black & Gold Theme** - Premium dark theme with gold accents and glass morphism effects
- 📱 **Fully Responsive** - Mobile-first design that works on all screen sizes
- ♿ **Accessible** - WCAG 2.1 AA compliance with semantic HTML and ARIA labels
- ⚡ **Performance Optimized** - Lazy-loaded images, optimized assets, smooth animations
- 🔍 **SEO Ready** - Semantic markup, structured data, and meta information
- 🎯 **Scroll Spy** - Active link highlighting based on scroll position
- 🔗 **Deep Linking** - Support for bookmarking and sharing section URLs

## Sections

1. **Hero / About You** - Introduction with call-to-action buttons
2. **Your Expertise** - Grid of 8 key skills and competencies
3. **Featured Work** - Portfolio grid with project cards and filtering
4. **Client Testimonials** - Client reviews and ratings
5. **Achievements & Recognition** - Key metrics and accomplishments
6. **Services Offered** - Service offerings with pricing information
7. **Ready to Collaborate?** - Call-to-action section with contact methods
8. **Footer** - Navigation links and social media connections

## Tech Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS 3+
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Hooks + Context
- **Data Fetching**: Fetch API with React Query
- **Animations**: CSS + Tailwind Animations

## Project Structure

```
client/
├── components/
│   ├── portfolio/
│   │   ├── Navigation.tsx       # Fixed navbar with scroll spy
│   │   ├── Hero.tsx             # Hero section
│   │   ├── ExpertiseGrid.tsx    # Skills grid
│   │   ├── FeaturedWork.tsx     # Portfolio grid
│   │   ├── Testimonials.tsx     # Client reviews
│   │   ├── Achievements.tsx     # Stats and metrics
│   │   ├── Services.tsx         # Service cards
│   │   ├── CTA.tsx              # Call-to-action section
│   │   └── Footer.tsx           # Footer with links
│   └── ui/                      # shadcn/ui components
├── hooks/
│   └── useScrollSpy.ts          # Hook for active section tracking
├── lib/
│   └── scrollHelpers.ts         # Smooth scroll utilities
├── pages/
│   └── Index.tsx                # Main portfolio page
├── App.tsx                      # App wrapper with providers
└── global.css                   # Global styles and theme
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or pnpm package manager

### Installation

1. Clone the repository (or navigate to the project directory)
2. Install dependencies:

```bash
npm install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

### Building for Production

Build the application:

```bash
npm run build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
pnpm start
```

### Testing

Run the test suite:

```bash
npm test
# or
pnpm test
```

## Customization

### Theme Colors

Edit `client/global.css` to customize the black & gold theme:

```css
:root {
  --primary: 45 87% 55%;          /* Gold color */
  --background: 0 0% 5%;          /* Dark background */
  --card: 0 0% 10%;               /* Card background */
  --foreground: 0 0% 95%;         /* Text color */
}
```

### Adding Projects to Featured Work

Edit `client/components/portfolio/FeaturedWork.tsx` and modify the `MOCK_WORK_DATA` array:

```typescript
const MOCK_WORK_DATA: WorkItem[] = [
  {
    id: "1",
    title: "Your Project",
    brand: "Client Name",
    industry: "Industry",
    description: "Project description",
    thumbnail: "image-url",
    tags: ["Tag1", "Tag2"],
    link: "project-link"
  },
  // ... more projects
];
```

### Modifying Navigation Links

Edit the `SECTIONS` array in `client/components/portfolio/Navigation.tsx`:

```typescript
const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  // ... customize as needed
];
```

### Customizing Social Links

Edit the `SOCIAL_LINKS` array in `client/components/portfolio/Footer.tsx` to add your social media profiles.

## Accessibility Checklist

### ✅ Semantic HTML
- [x] Proper use of heading hierarchy (h1, h2, h3, etc.)
- [x] Semantic elements (`<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`)
- [x] Proper link and button elements for interactive controls
- [x] Descriptive alt text for all images

### ✅ Keyboard Navigation
- [x] All interactive elements are keyboard accessible
- [x] Focus visible on all interactive elements
- [x] Tab order is logical and intuitive
- [x] Skip-to-content link at the top of the page
- [x] No keyboard traps (focus can always escape)
- [x] Mobile hamburger menu closes after selection

### ✅ Color Contrast
- [x] Text contrast meets WCAG AA standards (4.5:1 for body text, 3:1 for large text)
- [x] Color is not the only way to convey information
- [x] Focus indicators are clearly visible
- [x] Gold (#D4AF37) on dark background (#0b0b0b) provides sufficient contrast

### ✅ ARIA & Screen Readers
- [x] `aria-label` for icon-only buttons
- [x] `aria-current="page"` on active navigation link
- [x] `aria-expanded` on collapsible menu button
- [x] Proper heading roles and structure
- [x] Form labels associated with inputs
- [x] Loading states announced to screen readers

### ✅ Mobile & Touch
- [x] Touch targets are at least 44x44 pixels
- [x] Responsive design works on all screen sizes
- [x] Mobile menu is easily accessible
- [x] No horizontal scrolling on mobile
- [x] Proper viewport meta tag

### ✅ Performance & UX
- [x] Lazy-loaded images with `loading="lazy"`
- [x] No layout shifts (proper aspect ratios set)
- [x] Smooth scroll behavior for navigation
- [x] Loading states for asynchronous operations
- [x] Error handling and fallback UI
- [x] Consistent spacing and alignment

### ✅ Animations & Motion
- [x] Animations respect `prefers-reduced-motion`
- [x] Animations don't flash or strobe (no seizure risk)
- [x] Animations can be disabled without affecting functionality

### ✅ Forms & Validation
- [x] Clear error messages
- [x] Proper labeling of form fields
- [x] Confirmation for destructive actions
- [x] Autocomplete attributes on relevant inputs

### ✅ SEO & Metadata
- [x] Descriptive page titles
- [x] Meta descriptions
- [x] Structured data (JSON-LD) for portfolio items
- [x] Sitemap provided
- [x] Open Graph meta tags for social sharing

## Testing Checklist

### Manual Testing

- [ ] Keyboard Navigation
  - Test Tab through all interactive elements
  - Verify focus is always visible
  - Check that Enter/Space work on buttons and links
  - Test mobile menu keyboard navigation

- [ ] Screen Reader Testing
  - Test with NVDA (Windows) or VoiceOver (Mac)
  - Verify all interactive elements are announced
  - Check heading structure and navigation
  - Verify form labels are associated

- [ ] Color Contrast
  - Use WebAIM Contrast Checker
  - Verify all text meets WCAG AA standards
  - Test with different color blind filters

- [ ] Responsive Design
  - Test on mobile (375px), tablet (768px), and desktop (1920px)
  - Verify mobile menu works on small screens
  - Check layout shifts during resize
  - Test touch interactions on mobile devices

- [ ] Cross-Browser Testing
  - Chrome/Edge (latest)
  - Firefox (latest)
  - Safari (latest)
  - Mobile browsers (Chrome, Safari)

- [ ] Deep Linking
  - Test direct URLs with hash anchors (#portfolio, #services, etc.)
  - Verify browser back/forward works
  - Check that bookmarked links work correctly

- [ ] Performance
  - Run Google Lighthouse audit
  - Check image optimization
  - Verify smooth scroll performance
  - Test with slow network (DevTools throttling)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- iOS Safari: Latest 2 versions
- Chrome Mobile: Latest 2 versions

## Performance Metrics

Target Web Vitals:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## Environment Variables

No environment variables required for basic functionality. To customize:

- Update email in CTA and Footer components
- Update social media links in Footer and CTA components
- Customize brand name in Navigation and Footer

## License

MIT License - feel free to use this portfolio template for your own projects.

## Support

For issues or questions, please refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org
- Vite: https://vitejs.dev

## Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide React](https://lucide.dev)
- Bundled with [Vite](https://vitejs.dev)
- UI Components from [shadcn/ui](https://ui.shadcn.com)
# digitalcreator
# digitalcreator
# dcode
