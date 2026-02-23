
# Homepage Simplification + 3D Immersive Experience (Desktop-Only Focus)

## Overview
Strip the homepage down to a clean, simple, full-screen 3D immersive website experience optimized for desktop users. Each section fills the entire viewport with smooth scroll-snap transitions, large typography, and spacious layouts. Remove mobile-responsive clutter and design purely for 1024px+ screens.

## Design Philosophy
- Full-viewport sections with scroll-snap
- Large, bold typography with generous whitespace
- Fewer elements per screen = lower cognitive load
- 3D perspective transforms and parallax depth on every section
- Smooth Framer Motion page transitions
- Desktop-only: no hamburger menus, no stacked mobile layouts

## What Changes

### 1. Index Page - Full-Screen Scroll-Snap Container
- Wrap all sections in a scroll-snap container (`snap-y snap-mandatory`)
- Each section becomes `min-h-screen snap-start` with centered content
- Smooth scroll behavior between sections

### 2. Hero Section - Immersive 3D Landing
- Full viewport hero with large centered text (7xl+)
- 3D floating elements using perspective transforms and Framer Motion
- Animated gradient orbs in background with parallax movement
- Two large CTA buttons with hover glow effects
- Animated student counter with large numbers
- Remove social proof avatars (simplify)

### 3. Benefits Strip - 3D Card Grid
- Full-screen section with 6 benefit cards in a 3x2 grid
- Each card has a 3D tilt effect on hover (rotateX/Y based on mouse position)
- Cards float with subtle depth using `translateZ` and perspective
- Clean icons, bold labels, minimal text

### 4. Learning Roadmap - Enhanced 3D Timeline (Already exists, refine)
- Keep the existing 3D roadmap but make it full-viewport
- Increase node sizes and spacing for desktop
- Add connecting particle effects between nodes
- Make the scroll-driven animation smoother with larger viewport offset

### 5. Course Spotlight - 3D Carousel/Grid
- Full-screen section with 3 large course cards
- Cards have depth/shadow layers creating a "floating" 3D effect
- Hover reveals card details with smooth scale animation
- Large "Start Now" buttons

### 6. Testimonials - Cinematic Layout
- Full-screen with a large featured quote in the center
- 3D perspective text with depth
- Rotating through testimonials with crossfade animation
- Large stat counters floating around

### 7. Pricing - Side-by-Side 3D Cards
- Full viewport with two large pricing cards
- Pro card elevated with stronger 3D shadow and glow
- Hover lifts cards with spring animation
- Clean comparison layout

### 8. Final CTA - Dramatic Full-Screen
- Full gradient background covering entire viewport
- Very large text (6xl-7xl)
- Single prominent CTA button with pulse glow
- Floating particles/orbs in background

---

## Technical Details

### Files Modified

1. **`src/pages/Index.tsx`** - Add scroll-snap container wrapper, pass full-screen props
2. **`src/components/home/HeroSection.tsx`** - Full viewport, larger text, 3D floating elements
3. **`src/components/home/BenefitsStrip.tsx`** - Full viewport, 3x2 grid, 3D tilt hover effect
4. **`src/components/home/LearningRoadmap.tsx`** - Full viewport sizing, larger nodes
5. **`src/components/home/CourseSpotlight.tsx`** - Full viewport, floating 3D cards
6. **`src/components/home/TestimonialsSection.tsx`** - Cinematic single-quote layout
7. **`src/components/home/PricingTeaser.tsx`** - Full viewport, elevated 3D cards
8. **`src/components/home/FinalCTA.tsx`** - Full viewport dramatic CTA
9. **`src/index.css`** - Add scroll-snap utilities, 3D tilt classes, new glow effects

### Key Technical Approach

**Scroll Snap Container (Index.tsx):**
```text
div.h-screen.overflow-y-auto.snap-y.snap-mandatory
  section.min-h-screen.snap-start  (Hero)
  section.min-h-screen.snap-start  (Benefits)
  section.min-h-screen.snap-start  (Roadmap)
  ...
```

**3D Tilt Effect (Benefits cards):**
- Track mouse position relative to card center
- Apply `rotateX` and `rotateY` transforms via Framer Motion
- Add `translateZ(20px)` for depth on hover
- Container uses `perspective: 1000px`

**All animations:**
- Framer Motion only (no new dependencies)
- `whileInView` with `viewport={{ once: true }}`
- Spring physics for hover interactions
- CSS transforms for GPU acceleration

### No New Dependencies
Everything uses existing Framer Motion + Tailwind. No React Three Fiber needed -- CSS 3D transforms with Framer Motion create a convincing 3D feel that's much lighter weight.
