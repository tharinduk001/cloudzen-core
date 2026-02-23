

# Homepage Redesign: Student-Focused, Motivational UI

## Overview
Redesign the homepage (`src/pages/Index.tsx`) to create a modern, minimal, student-appealing experience with an animated learning roadmap, stronger CTAs, key benefit highlights, and trust-building elements. All changes stay within the existing tech stack (React, Framer Motion, Tailwind, shadcn/ui).

---

## What Changes

### 1. Revamped Hero Section
- Shorter, punchier headline aimed at students (e.g., "Master Cloud Skills. Land Your Dream Job.")
- Animated counter stats inline (students, courses, pass rate)
- Two clear CTAs: "Start Free" (primary gradient) and "Explore Courses" (outline)
- Floating animated badge elements (e.g., "Live Exams", "Instant Results") orbiting subtly

### 2. Key Benefits Strip
- Horizontal scrolling row of benefit cards with icons and short labels
- Benefits: Live Exams, Instant Marking, Ranking System, Digital Badges, Hands-on Projects, Career Roadmaps
- Each card has a subtle hover scale animation
- Uses `CheckCircle2` or custom icons from Lucide

### 3. Animated Learning Roadmap Section (New - Star Feature)
- Vertical timeline with 5 steps: Enroll -> Learn -> Practice -> Get Certified -> Get Hired
- Each step animates in on scroll using Framer Motion `whileInView`
- Active/completed steps show a glowing gradient dot; upcoming steps are muted
- Connecting line animates progressively (using a gradient stroke that fills on scroll)
- Each step has a short description and an icon
- Mobile: single-column vertical timeline; Desktop: alternating left/right layout

### 4. "Why Students Love Us" Section (replaces plain testimonials)
- Testimonial cards with star ratings, student photo placeholder, and university name
- Add a large animated counter banner above: "5,000+ students | 18 courses | 4.8 avg rating"
- Cards use staggered fade-up animation

### 5. Course Spotlight (Simplified)
- Show top 3 courses in larger cards with clear pricing badges
- "Free" courses highlighted with a green accent badge
- "Start Now" CTA button on each card instead of just linking

### 6. Pricing/Subscription Teaser (New Section)
- Simple 2-column layout: "Free Plan" vs "Pro Plan"
- Free: access to free courses, community
- Pro: all courses, live exams, ranking, badges, projects
- Prominent "Unlock Full Access" CTA button with glow effect
- Trust badge: "Cancel anytime" / "7-day money back"

### 7. Final CTA Banner (Enhanced)
- Motivational text: "Your future starts today"
- Single large "Join Now - It's Free" button
- Subtle particle/confetti animation on hover (lightweight CSS-only)

---

## Technical Details

### Files Modified
1. **`src/pages/Index.tsx`** - Complete redesign of all homepage sections
2. **`src/data/mock-data.ts`** - Add roadmap steps data and pricing plan data
3. **`src/index.css`** - Add timeline connector animation styles and glow keyframes

### Animation Approach
- All scroll animations use Framer Motion `whileInView` with `viewport={{ once: true }}`
- Staggered children use `custom={i}` delay pattern (already established in codebase)
- Roadmap timeline uses a CSS gradient line with Framer Motion `scaleY` animation
- Counter animations use Framer Motion `useMotionValue` + `useTransform` for number counting
- All animations are lightweight -- no heavy libraries added

### New Data Structures (in mock-data.ts)

```typescript
// Roadmap steps for homepage
export const roadmapSteps = [
  { step: 1, title: "Enroll", description: "Pick a free or premium course", icon: "BookOpen" },
  { step: 2, title: "Learn", description: "Watch lessons & attend live sessions", icon: "Play" },
  { step: 3, title: "Practice", description: "Build real projects & take exams", icon: "Code" },
  { step: 4, title: "Get Certified", description: "Earn Open Badge 3.0 credentials", icon: "Award" },
  { step: 5, title: "Get Hired", description: "Stand out with verified skills", icon: "Briefcase" },
];

// Pricing plans
export const pricingPlans = [
  { name: "Free", price: "0", features: [...] },
  { name: "Pro", price: "19/mo", features: [...], highlighted: true },
];
```

### Key Benefits Data (inline in Index.tsx)
```typescript
const benefits = [
  { icon: Radio, label: "Live Exams", desc: "Real-time competitive exams" },
  { icon: BarChart3, label: "Ranking System", desc: "See where you stand" },
  { icon: Zap, label: "Instant Marking", desc: "Get results immediately" },
  { icon: Award, label: "Digital Badges", desc: "Open Badge 3.0 certified" },
  { icon: Code, label: "Hands-on Projects", desc: "Build real things" },
  { icon: TrendingUp, label: "Career Roadmaps", desc: "Clear path forward" },
];
```

### Responsive Design
- Mobile-first grid layouts: 1 column on mobile, expanding to 2-3 on tablet/desktop
- Roadmap: vertical single-column on all sizes, alternating card alignment on desktop
- Pricing: stacked on mobile, side-by-side on desktop
- All touch-friendly tap targets (min 44px)

### Performance
- No new dependencies required
- All animations use CSS transforms (GPU-accelerated)
- `viewport={{ once: true }}` prevents re-triggering animations
- Images remain lazy-loaded placeholders

