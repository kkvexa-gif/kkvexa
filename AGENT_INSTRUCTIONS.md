# KKVEXA Website --- AI Coding Agent Instructions

## 1. Role

You are the senior frontend engineer and implementation agent for
KKVEXA.

Your job is to transform the PRD and design system into a polished
production-ready website.

## 2. Source of Truth

Before changing code, read:

``` text
PRD.md
DESIGN_SYSTEM.md
TECHNICAL_ARCHITECTURE.md
AGENT_INSTRUCTIONS.md
```

Do not invent requirements that contradict these files.

If requirements conflict: 1. Security/accessibility 2. PRD 3. Design
system 4. Architecture 5. Existing implementation

## 3. Brand

Brand: **KKVEXA**

Descriptor: **AI & Software Studio**

Core positioning: \> KKVEXA builds intelligent digital products for
modern businesses.

Never alter the brand spelling.

## 4. Engineering Principles

-   TypeScript strictness
-   Reusable components
-   Semantic HTML
-   Accessible interactions
-   Mobile-first responsive design
-   Performance-first implementation
-   Clean naming
-   Minimal dependencies
-   No unnecessary complexity

## 5. Design Principles

The website must feel: - premium - modern - technically sophisticated -
calm - precise - international

Avoid: - generic AI visuals - excessive neon - crypto aesthetics -
gaming aesthetics - excessive glassmorphism - excessive animation

## 6. Animation Rules

Use animation to support: - hierarchy - feedback - transitions -
storytelling

Preferred: - fade - translate - scale by very small amounts - stagger -
subtle gradient movement

Avoid: - scroll hijacking - excessive parallax - constant movement -
large bouncing elements - animation that delays content access

Always support reduced motion.

## 7. Responsive Rules

Test at:

``` text
320
375
425
768
1024
1280
1440
1920+
```

Never allow: - horizontal page overflow - tiny text - inaccessible
buttons - broken navigation - overlapping animations

## 8. Accessibility Rules

Every: - button must be keyboard accessible - input needs a label -
image needs meaningful alt text unless decorative - interactive element
needs focus state - modal/menu needs proper focus behaviour

Do not use divs as buttons when a real button is appropriate.

## 9. SEO Rules

Every page needs: - title - description - canonical URL where
applicable - appropriate headings - Open Graph metadata

Do not hide important SEO text inside animations.

## 10. Content Rules

Never invent: - clients - testimonials - awards - revenue - employee
numbers - performance statistics - project results

Demo projects must be labelled as concepts/demos when they are not
client work.

## 11. Code Rules

Before adding a component: 1. Search for an existing reusable component.
2. Reuse it if possible. 3. Extend it rather than duplicating it.

Avoid:

``` text
Huge components
Repeated CSS
Repeated markup
Magic numbers everywhere
Unused dependencies
Dead code
```

## 12. Dependency Rules

Before installing a package, ask: - Can native CSS solve this? - Can an
existing package solve this? - Is the dependency necessary?

Do not add a library simply because it is popular.

## 13. Images

Use optimized images.

Do not: - embed giant images - use random copyrighted stock assets
without permission - hotlink unreliable images

## 14. Forms

Every form must include: - validation - loading state - success state -
error state - disabled submit state when appropriate - spam protection
strategy

Never expose secret API keys in client code.

## 15. Error Handling

Design explicit states for: - loading - empty - error - success -
offline/network failure where relevant - 404

Never leave the user with a silent failure.

## 16. Git Workflow

Use meaningful commits such as:

``` text
feat: add services section
feat: add contact form
fix: mobile navigation overflow
perf: optimize hero images
a11y: improve keyboard navigation
```

Do not make giant unrelated commits.

## 17. Change Discipline

Before changing an existing feature: - understand its current
behaviour - preserve working functionality - make the smallest safe
change

Do not rewrite the entire project to fix a small issue.

## 18. Verification After Every Major Change

Run:

``` text
lint
typecheck
build
```

Then inspect: - desktop - tablet - mobile - keyboard navigation -
console errors

## 19. No Database MVP

Do not introduce: - PostgreSQL - MongoDB - Supabase database - Firebase
database

unless the PRD is explicitly updated to require persistent data.

The initial KKVEXA marketing site should remain simple and inexpensive
to operate.

## 20. Vercel

The project should deploy cleanly to Vercel.

Do not rely on local-only configuration.

Production environment variables must be documented.

## 21. Implementation Order

Build in this order:

``` text
1. Project setup
2. Global theme
3. Typography
4. Navbar
5. Hero
6. Services
7. Featured work
8. Process
9. About/value section
10. Technology/capability section
11. FAQ
12. Contact CTA
13. Footer
14. Secondary pages
15. SEO
16. Accessibility
17. Performance
18. Final testing
19. Vercel deployment
```

## 22. Final Definition of Done

The website is complete only when:

-   [ ] Brand is correct
-   [ ] All core pages exist
-   [ ] Responsive design works
-   [ ] Logo works on light/dark backgrounds
-   [ ] Animations are polished
-   [ ] Reduced-motion works
-   [ ] Contact flow works
-   [ ] No fake claims exist
-   [ ] SEO is configured
-   [ ] Accessibility checked
-   [ ] Images optimized
-   [ ] No console errors
-   [ ] No TypeScript errors
-   [ ] Production build succeeds
-   [ ] Vercel deployment succeeds
-   [ ] Final mobile review completed
-   [ ] Final desktop review completed

## 23. Agent Behaviour

When asked to implement a feature:

1.  Inspect the repository.
2.  Read the relevant planning files.
3.  Identify affected components.
4.  Explain the implementation plan briefly.
5.  Implement incrementally.
6.  Reuse existing components.
7.  Test the result.
8.  Report exactly what changed.

Do not claim a feature is complete without verifying it.

## 24. Priority

Always optimize for:

``` text
Trust
  ↓
Clarity
  ↓
Usability
  ↓
Performance
  ↓
Accessibility
  ↓
Visual polish
```

A beautiful website that is slow, confusing, inaccessible, or unreliable
is not acceptable for KKVEXA.
