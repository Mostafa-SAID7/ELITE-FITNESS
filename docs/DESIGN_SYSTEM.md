# HIT Egypt - Design System

## 🎨 Design System Overview

**Framework:** Tailwind CSS + Custom SCSS  
**Grid System:** 12-column responsive  
**Spacing Scale:** 8px base unit  
**Typography:** Inter (body) + Bebas Neue (display)

---

## 🎯 Color Palette

### Primary Colors
- **Primary Red:** #DC2626 (Main brand color)
- **Dark Red:** #991B1B (Hover state)
- **Light Red:** #EF4444 (Accent)

### Neutral Colors
- **Black:** #0A0A0A (Primary dark)
- **Dark Gray:** #262626
- **Gray:** #737373
- **Light Gray:** #E5E5E5
- **White:** #FFFFFF

### Semantic Colors
- **Success:** #22C55E
- **Warning:** #F59E0B
- **Error:** #DC2626
- **Info:** #3B82F6

---

## 📐 Spacing System

```
Base Unit: 8px

Scales:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
```

### Implemented Classes
```scss
.section-padding          // py-12 md:py-16 lg:py-20
.section-padding-compact  // py-8 md:py-12 lg:py-16
.section-padding-reduced  // py-8 md:py-12 lg:py-12
```

---

## 🔤 Typography

### Font Families
- **Display:** Bebas Neue (headings, large text)
- **Body:** Inter (body text, UI)
- **Code:** Monaco, Courier New

### Font Sizes
- **H1:** 56px / 3.5rem (display)
- **H2:** 48px / 3rem (section heading)
- **H3:** 36px / 2.25rem (subsection)
- **Body:** 16px / 1rem
- **Small:** 14px / 0.875rem

### Line Heights
- **Tight:** 1.2 (headings)
- **Normal:** 1.5 (body)
- **Relaxed:** 1.75 (large text)

---

## 🎨 Component Styles

### Buttons
```scss
.btn-primary {
  @apply bg-primary-600 text-white px-8 py-4 rounded-full
         font-semibold transition-all duration-300
         hover:bg-primary-500 hover:scale-105
         hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]
         active:scale-95;
}

.btn-secondary {
  @apply border-2 border-white/20 text-white px-8 py-4 rounded-full
         font-semibold transition-all duration-300
         hover:border-primary-600 hover:text-primary-500
         hover:bg-white/5;
}
```

### Cards
```scss
.glass-card {
  @apply bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl;
}
```

### Text Utilities
```scss
.text-gradient {
  @apply bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600
         bg-clip-text text-transparent;
}
```

---

## 📱 Responsive Breakpoints

```
- xs: 0px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
```

### Mobile-first Approach
```scss
// Default (mobile)
.container {
  padding: 1rem;
}

// Tablets and up
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

// Desktops and up
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

---

## ✨ Animations

### Transitions
```scss
// Standard transitions
transition: all 0.3s ease-in-out;
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

// Bounce animation
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Scroll Animations
```scss
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 🎯 Design Principles

1. **Clarity:** Clear hierarchy and messaging
2. **Consistency:** Unified design language
3. **Accessibility:** WCAG 2.1 AA compliant
4. **Performance:** Optimized for speed
5. **Responsiveness:** Mobile-first design
6. **Usability:** Intuitive interactions

---

## ♿ Accessibility

### WCAG 2.1 Compliance
- [x] Color contrast ≥ 4.5:1
- [x] Text sizing ≥ 14px
- [x] Interactive elements ≥ 44x44px
- [x] Keyboard navigation
- [x] ARIA labels
- [x] Focus indicators

### Focus Indicators
```scss
:focus-visible {
  outline: 2px solid var(--primary-600);
  outline-offset: 2px;
}
```

---

**Version:** 1.0  
**Status:** ✅ Complete
