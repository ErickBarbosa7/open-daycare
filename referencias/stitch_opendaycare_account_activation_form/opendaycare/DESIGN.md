---
name: OpenDayCare
colors:
  surface: '#fff8f6'
  surface-dim: '#e8d6d1'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#fdeae5'
  surface-container-high: '#f7e4df'
  surface-container-highest: '#f1dfd9'
  on-surface: '#231917'
  on-surface-variant: '#57423d'
  inverse-surface: '#392e2b'
  inverse-on-surface: '#ffede8'
  outline: '#8a716c'
  outline-variant: '#dec0ba'
  surface-tint: '#a43b28'
  primary: '#a43b28'
  on-primary: '#ffffff'
  primary-container: '#fa7b62'
  on-primary-container: '#6e1405'
  inverse-primary: '#ffb4a5'
  secondary: '#8d4d34'
  on-secondary: '#ffffff'
  secondary-container: '#fdaa8b'
  on-secondary-container: '#783c24'
  tertiary: '#715a42'
  on-tertiary: '#ffffff'
  tertiary-container: '#b79c80'
  on-tertiary-container: '#47341e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3e0400'
  on-primary-fixed-variant: '#842413'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#70361f'
  tertiary-fixed: '#fcddbe'
  tertiary-fixed-dim: '#dfc1a3'
  on-tertiary-fixed: '#281806'
  on-tertiary-fixed-variant: '#57432c'
  background: '#fff8f6'
  on-background: '#231917'
  surface-variant: '#f1dfd9'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a gentle, reassuring, and orderly digital sanctuary designed for early childhood educators, childcare administrators, and busy parents. It balances the warmth and softness of childcare with the absolute precision, safety, and reliability expected of an administrative and parental monitoring platform.

### Aesthetic Persona & Direction
- **Emotional Resonance:** Comforting, transparent, attentive, and safe. The UI reduces cognitive fatigue for parents on the go and minimizes friction for staff recording daily logs and attendance.
- **Style Archetype:** Soft Contemporary Humanism with Subtle Tactility. It avoids juvenile clutter (primary-colored blocks, cartoonish motifs) in favor of serene editorial layouts, rounded surfaces, balanced negative space, and gentle salmon-toned visual anchors that feel nurturing yet deeply professional.

## Colors

The palette is rooted in soft, skin-tone warmths and nourishing earth tones, rejecting sterile hospital grays and chaotic infant primaries.

### Functional Palette Structure
- **Canvas & Backgrounds:** The base canvas lives on `#FDF8F5` with elevated cards and panels shifting to pure `#FFFFFF` or an airy tinted cream `#FFFBF9`. Never use pure `#000000` or raw cool grays.
- **Primary Brand Expression (`#FA7B62`):** Primary interactive calls-to-action, key notifications, active states, and focus rings. High-energy actions utilize an active state deepened to `#F06A50`.
- **Secondary & Accent (`#F5A384` & `#F7D8B9`):** Soft peach and whipped cream tones dedicated to metric progress fills, event badges, soft tags, and daily activity category markers (naptime, feeding, milestones).
- **Deep Neutral Charcoal (`#2B211E`):** A warm espresso charcoal for high-contrast, WCAG AAA-compliant body copy and strong headlines, maintaining visual comfort without the harshness of pure black.
- **Supportive Neutrals:** `#EFE5DF` for low-contrast borders and dividers; `#7A6C67` for secondary body copy and metadata.
- **Feedback Accents:** Sage Green (`#4D8A68`) for completed check-ins and health confirmations; Warm Ochre (`#D98829`) for medication or pending schedules.

## Typography

The type system is built solely on **Plus Jakarta Sans**, utilizing its geometric yet friendly curvature to deliver both emotional approachability and supreme tabular legibility for dashboards and health forms.

### Type Rules
- **Display & Headlines:** Use tight negative letter spacing (`-0.01em` to `-0.03em`) on sizes 24px and up to ground the headlines with editorial cohesion.
- **Body Text:** Standard body text prioritizes generous vertical line-heights (minimum 1.5x) to ensure instant readability when parents or staff review quick check-in notifications on mobile displays outdoors or in low-light nurseries.
- **Labels & Microcopy:** High-weight, slightly tracked labels provide structure to metadata such as arrival timestamps, allergen tags, and dietary restrictions.

## Layout & Spacing

A structured 12-column grid system governs wide displays, condensing gracefully to an 8-column layout on tablets and a 4-column layout on mobile devices.

### Structural Flow
- **Canvas Margins:** Responsive desktop padding scales out to `2.5rem` (`margin`), securing comfortable perimeter room, while mobile reduces down to `1rem` (`margin-mobile`) to protect limited screen estate.
- **Content Density:** Daily activity streams, meal trackers, and child profile sheets leverage `space-md` (`1rem`) internally to guarantee distinct touch targets (minimum 44x44px hit bounds) suited for single-handed smartphone use.
- **Rhythm:** Layout blocks follow strict multiples of 4px and 8px to maintain uninterrupted vertical pacing across all dashboard modules.

## Elevation & Depth

Elevation conveys soft layering rather than hard industrial stacking. Surfaces float gently above the warm canvas using warm-tinted ambient diffuse shadows instead of cold gray box shadows.

### Elevation Levels
- **Level 0 (Flat / Canvas):** Background tone `#FDF8F5`. No shadows.
- **Level 1 (Resting Cards & Feed Items):** `#FFFFFF` fill with an ultra-soft ambient shadow: `0 4px 16px -2px rgba(89, 44, 32, 0.04)` paired with an inner stroke or soft border of `1px solid #F2E7E2`.
- **Level 2 (Interactive Hover & Modals):** Lifted components float with an expanded warm plume: `0 10px 28px -4px rgba(89, 44, 32, 0.08)`.
- **Level 3 (Toasts & Overlays):** Dynamic alerts and urgent parental notifications: `0 16px 40px -6px rgba(89, 44, 32, 0.12)`.

## Shapes

The shape vocabulary employs welcoming, organic curves that feel friendly and tactile.

- **Base Radius (0.5rem / 8px):** Applied to form inputs, small tooltips, checkboxes, and inline status badges.
- **Intermediate Radius (1rem / 16px - `rounded-lg`):** Applied to standard content cards, modal windows, quick-action child cards, and daily summary banners.
- **Enclosed Radius (1.5rem / 24px - `rounded-xl`):** Applied to large hero containers, prominent announcement wrappers, and elevated floating sheets.
- **Full Pill (`9999px`):** Used unconditionally on primary buttons, filter tags, and quick-status tags (e.g., "Checked In", "Naptime Active").

## Components

### Buttons
- **Primary Action:** Pill-shaped, rich salmon background (`#FA7B62`), pure white text, bold label typography (`label-lg`). Resting shadow `0 2px 8px rgba(250, 123, 98, 0.25)`. Transitions to `#F06A50` on hover with subtle upward translation (`-1px`).
- **Secondary Action:** Pill-shaped, `#FFFBF9` fill, `1.5px` border in `#F5A384`, text in `#2B211E`.
- **Ghost/Tertiary:** Soft tint `#FDF8F5` hover background with salmon text (`#FA7B62`).

### Input Fields & Controls
- **Text Inputs:** Height 48px, rounded corners (`0.5rem`), background `#FFFFFF`, border `1.5px solid #EFE5DF`. Placeholder text in warm gray `#9E8E88`. Active focus triggers a sharp `0 0 0 3px rgba(250, 123, 98, 0.2)` ring and `#FA7B62` border stroke.
- **Checkboxes & Radios:** Curved containers (`6px` for checkboxes, circular for radios), size 20x20px. In checked state, fill with `#FA7B62` and render an interior crisp white glyph.
- **Chips & Filter Pills:** Height 32px, pill-shaped, base fill `#FFFBF9` with border `#EFE5DF`. Selected state utilizes warm peach background (`#F7D8B9`) with `#2B211E` text.

### Cards & Activity Tiles
- **Child Profile & Feed Cards:** Pure white containers (`#FFFFFF`), `16px` border-radius (`rounded-lg`), subtle warm shadow (Level 1), 16px internal padding. Left-hand or top-accent strip optionally rendered using category-specific pastel washes (e.g., soft peach for meals, lavender for naps).

### Specialty Childcare Components
- **Daily Timeline Log:** Vertical dashed line in `#EFE5DF` flanked by rounded circular timeline icons (36px) washed with secondary accents, leading into bite-sized activity snippets.
- **Parent Quick-Check Status Badge:** Pill-shaped micro-component with pulsating indicator dot (Sage Green for "Present", Warm Ochre for "Expected", Salmon for "Checked Out").