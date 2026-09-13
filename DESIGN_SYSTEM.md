# KKVEXA Website --- Design System

## 1. Brand Direction

**Brand:** KKVEXA\
**Descriptor:** AI & Software Studio

The visual identity should feel: - Premium - Intelligent - Precise -
Modern - International - Engineering-led - Minimal rather than flashy

Do not make KKVEXA look like a gaming, crypto, hacker, or generic "AI
robot" company.

## 2. Logo

Use the approved KKVEXA geometric emblem + wordmark.

Required variants: - Horizontal - Stacked - Symbol-only - Light/white -
Dark/black - Transparent-background assets

The symbol should remain recognizable without the wordmark.

## 3. Color System

### Core

``` text
Background Dark: #080D16
Surface Dark:    #0F1724
Text Primary:    #F8FAFC
Text Secondary:  #A8B3C2
Border:          rgba(255,255,255,0.10)

Brand Blue:      #2563EB
Brand Cyan:      #06B6D4
```

### Brand Gradient

Use sparingly:

``` text
linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)
```

Do not turn every element into a gradient.

### Light mode

``` text
Background: #FFFFFF
Surface:    #F7F9FC
Text:       #0B1220
Muted:      #526070
Border:     #E5EAF0
```

## 4. Typography

Preferred: - Inter - Geist - Manrope

Use one primary family consistently.

### Scale

``` text
Hero:       clamp(3rem, 7vw, 7rem)
H1:         clamp(2.5rem, 5vw, 5rem)
H2:         clamp(2rem, 3.5vw, 3.5rem)
H3:         1.25–1.75rem
Body:       1rem–1.125rem
Small:      0.875rem
```

Large typography should have tight but readable line-height.

## 5. Layout

Use a strong grid: - Max content width: \~1200--1320px - Comfortable
horizontal padding - Large section spacing - Consistent 8px spacing
rhythm

Avoid overcrowded pages.

## 6. Hero

Preferred composition: - Small eyebrow - Large headline - Short
supporting statement - Primary CTA - Secondary CTA - Abstract technical
visual / subtle brand mark - Small trust/capability indicators

Example headline:

> **We build intelligent software for ambitious businesses.**

Supporting copy:

> AI integrations, web applications, mobile products, and automation
> engineered for real-world use.

## 7. Navigation

Desktop: - Logo left - Home / Services / Work / About - Contact CTA
right

Mobile: - Compact logo - Menu button - Animated mobile navigation panel

Navbar can become slightly smaller on scroll, but must remain
accessible.

## 8. Cards

Cards should feel: - clean - slightly layered - technical - premium

Use: - subtle borders - restrained shadows - hover elevation - optional
gradient glow only on focused elements

Do not use excessive glassmorphism.

## 9. Buttons

Primary: - Brand gradient or solid brand blue - High contrast -
Medium/large click target - Subtle hover movement

Secondary: - Transparent/outline - Clear border - Strong hover state

Never rely on color alone for state.

## 10. Animation Philosophy

Animation should communicate hierarchy, not show off.

### Hero entrance

-   Fade + slight upward movement
-   Stagger text elements
-   500--800ms overall sequence

### Scroll reveal

-   16--32px movement
-   opacity transition
-   500--700ms
-   stagger 60--120ms

### Cards

-   Small translateY / scale effect
-   200--350ms
-   no exaggerated bouncing

### Buttons

-   1--3px movement
-   subtle glow or gradient transition

### Navigation

-   smooth height/opacity transition
-   mobile panel slides/fades

### Background

Use extremely subtle: - animated gradient mesh - grid - particles only
if performance remains excellent - slow geometric movement

Never make the background compete with content.

## 11. Reduced Motion

If:

``` css
prefers-reduced-motion: reduce
```

then: - disable large movement - minimize transitions - remove
auto-moving backgrounds - preserve usability

## 12. Micro-interactions

Recommended: - Magnetic-ish CTA effect only if subtle - Cursor-follow
glow only on desktop and only where useful - Project image hover - Text
underline animation - Icon movement - Number/count animation only when
numbers are real

Avoid: - spinning logos - constant floating objects - excessive
particles - scroll hijacking

## 13. Visual Language

Use: - geometric lines - subtle grids - abstract data-flow shapes -
code-inspired details - clean product screenshots - generous negative
space

Avoid: - stock AI robots - brains - generic circuit boards - random 3D
blobs everywhere - cliché neon cyberpunk

## 14. Dark Theme

Primary experience should be dark/premium, with light sections used
strategically.

Dark surfaces should have enough contrast to preserve readability.

## 15. Component States

Every interactive component must define: - default - hover - focus -
active - disabled - loading - error - success

## 16. Mobile Design

On mobile: - reduce decorative animation - stack complex grids -
preserve generous touch targets - avoid horizontal overflow - keep hero
readable - make CTAs easy to reach

## 17. Design Quality Rule

If an animation or visual effect does not improve: **understanding,
hierarchy, feedback, or brand identity, remove it.**
