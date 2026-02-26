

# CloudZen EdTech Website — Implementation Plan

## Overview
A modern, futuristic EdTech website for CloudZen with **all pages scaffolded at once**, using a **light default theme with dark accents** and a dark mode toggle. Frontend-only with mock/placeholder data throughout — backend can be added later.

---

## Phase 1: Foundation & Layout

- **Design system**: Light theme default with techy blue/purple/cyan gradient accents, subtle glow effects, strong typography, generous whitespace
- **Dark mode toggle**: Full dark theme support via next-themes
- **Global layout**: Sticky header with full navigation (all 12+ nav items with dropdowns), mobile hamburger menu, breadcrumbs on inner pages
- **Footer**: About, Contact, legal links, social icons, newsletter signup form
- **AI Chatbot button**: Floating bottom-right button that opens a chat panel with greeting + suggested prompts (UI placeholder)
- **Site-wide search**: Search modal/overlay for courses, projects, and blog (searches mock data)

## Phase 2: Home Page

- **Hero section**: Bold headline, subtext about courses/badges/projects, gradient background with subtle animation, dual CTAs (Explore Courses + Start Learning Free)
- **Featured categories**: Card grid — Cloud, DevOps, Software Engineering, Git/GitHub, CI/CD, Kubernetes, Terraform
- **How CloudZen Works**: 3-step visual — Learn → Build → Get Certified (Open Badge 3.0)
- **Featured Courses**: Filterable grid (Free / Premium / Live) with course cards
- **Hands-on Projects spotlight**: Project cards with difficulty badges and time estimates
- **Learning Paths preview**: Path cards linking to full paths page
- **Roadmaps preview**: Role-based roadmap cards
- **Student feedback carousel**: Ratings, quotes, names, university
- **Upcoming & Past Events**: Event preview cards
- **Blog highlights**: Latest 3–6 post cards
- **CTA banner**: "Get a personalized learning plan" + consultation link
- **AI Chatbot teaser**: Promotional section about CloudZen AI

## Phase 3: Courses

- **Course listing page**: Tabs (Recorded Free / Recorded Premium / Live), filters (category, difficulty, duration, language, tags), course cards with title, badge, level, duration, price, "Enroll" CTA
- **Course detail page**: Overview, outcomes, syllabus accordion, prerequisites, instructor section, Open Badge 3.0 info panel, reviews, FAQ accordion, enrollment CTA

## Phase 4: Projects Hub

- **Projects listing**: Category filters (DevOps, Cloud, Kubernetes, Terraform, etc.), difficulty/tools/time filters, project cards
- **Project detail page**: Sticky sidebar navigation (Overview, Steps, Code, Diagrams, Troubleshooting, Resources), code snippets with copy button, image/diagram placeholders, progress checklist, "Common errors" accordion, "What you learned" summary, CTAs

## Phase 5: Learning Paths & Roadmaps

- **Learning Paths listing**: Path cards (Cloud Fundamentals, DevOps Starter, etc.)
- **Path detail page**: Step-by-step sequence of courses + projects, estimated timeline, completion badge, "Start this path" CTA
- **Roadmaps listing**: Role-based roadmap cards
- **Roadmap detail page**: Visual timeline with milestones, recommended resources, downloadable PDF placeholder

## Phase 6: Interview Prep & University Modules

- **Interview Prep**: Role-based sections (Software/DevOps/Cloud Engineer), question bank with difficulty tags, "Reveal Answer" accordions, quick practice mode (random 10), mock interview checklist, common mistakes section, CTA to book 1:1 session
- **University Modules**: Semester → Module → Mini course structure, module pages with outcomes, lesson lists, resources, quiz placeholders

## Phase 7: Events, Blog, Instructors & Consultations

- **Events page**: Upcoming + past events with tags (meetup/workshop/webinar), event detail pages with agenda, speakers, registration CTA
- **Blog**: Listing with categories + search, post template with hero image, table of contents, share buttons, author box, related posts
- **Instructors**: Listing with profile cards, instructor detail pages (bio, expertise, courses, socials, reviews), "Become an Instructor" CTA
- **Consultations**: Service offerings grid, "Request a Call" form, calendar scheduling placeholder

## Phase 8: Challenges & Legal Pages

- **Challenges (Coming Soon)**: Concept explanation, leaderboard UI placeholder with ranks/points/badges/filters, "Coming Soon" badge
- **About page**: Mission, vision, why CloudZen, badges emphasis
- **Contact page**: Contact form, email, social links, FAQ
- **Legal pages**: Terms & Conditions, Privacy Policy, Refund & Returns — clean readable layouts

## Phase 9: Polish & Animations

- Micro-interactions and hover effects throughout
- Scroll-triggered fade-in animations on sections
- Animated counters for stats
- Smooth page transitions
- Card hover effects with subtle scale/glow
- Mobile responsiveness verification across all pages

---

## Tech Approach
- React + TypeScript + Tailwind CSS + shadcn/ui components
- React Router for all pages
- Mock data arrays for courses, projects, instructors, etc.
- next-themes for dark/light mode
- Recharts for any data visualizations
- All content is placeholder — ready for backend integration later

