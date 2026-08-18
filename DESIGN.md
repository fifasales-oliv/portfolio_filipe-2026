<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Filipe Sales Portfolio
description: Brand design & brand strategy portfolio — simple yet powerful, expressive motion as voice.
---

# Design System: Filipe Sales Portfolio

## 1. Overview

**Creative North Star: "The Kiln Ember"**

A brand strategist's portfolio should be the strongest case study he has — so the surface stays simple, and the brand color does the talking, the way a single fired-clay ember glows against a dark stage. The reference point is mindfvkness.com: a quiet, confident surface that lets choreographed motion carry the personality. Playful and expressive, but never noisy — restraint in layout, commitment in color, precision in motion.

This system explicitly rejects the generic Webflow/Squarespace agency template: no identical card grids, no tiny uppercase tracked eyebrows, no numbered section scaffolding (01/02/03), no stock gradients, no side-stripe borders.

**Key Characteristics:**
- One committed brand color carrying real surface area, not a timid accent
- Serif display for editorial confidence, clean sans for body clarity
- Choreographed, scroll-driven motion — animation as brand statement, not decoration
- A simple stage so the expressive moments land harder

## 2. Colors

A committed strategy: one saturated warm-red/terracotta anchor carries 30–60% of the surface, with a dark, near-black stage giving it room to glow. [exact hex/oklch values to be resolved during implementation — anchor hue ~24° (warm red / crimson) was generated as a starting point].

### Primary
- **Kiln Ember** [oklch(~0.59 0.17 24), to be resolved]: the committed brand color — used across hero, key CTAs, and section transitions where the brand voice needs to dominate.

### Neutral
- **Stage Black** [near-black, chroma ~0, to be resolved]: primary background — the dark stage the ember glows against.
- **Ash** [muted light neutral, to be resolved]: body text / secondary surfaces where contrast against Stage Black is needed.

### Named Rules
**The Ember Rule.** The primary color is committed, not timid — it should read across 30–60% of any given screen. Don't dilute it into a 5% accent.

## 3. Typography

**Display Font:** Serif [to be chosen at implementation — editorial weight, confident at large sizes]
**Body Font:** Sans [to be chosen at implementation — clean, highly legible]

**Character:** Editorial confidence up top, quiet clarity underneath — the pairing should feel like a strategist's own credibility statement, not a generic "modern" sans-on-sans stack.

### Hierarchy
- **Display** (serif, clamp ≤6rem, tight but not cramped — letter-spacing ≥ -0.04em): hero statements, section openers.
- **Headline** (serif, mid-weight): section titles.
- **Body** (sans, regular weight, max 65–75ch): case study copy, bios.
- **Label** (sans, small, used sparingly — not as a default eyebrow pattern): metadata, captions.

## 4. Elevation

Flat by default with choreographed motion as the primary depth signal — chosen because choreographed scroll-driven sequences (per the mindfvkness.com reference) carry visual weight better than shadow layering. Depth comes from motion staging and z-index ordering, not box-shadows.

### Named Rules
**The Flat Stage Rule.** Surfaces are flat at rest. Depth is conveyed through motion sequencing and layering order, not shadows.

## 5. Components

No components exist yet — this is a pre-implementation seed. Re-run `/impeccable document` once buttons, nav, and case-study cards exist in code.

## 6. Do's and Don'ts

### Do:
- **Do** let the primary Kiln Ember color carry real surface area (30–60%), per the Committed color strategy.
- **Do** treat motion as part of the brand statement — orchestrated entrances and scroll-driven sequences, matching the mindfvkness.com reference.
- **Do** keep the stage simple (flat, dark neutral) so expressive moments land harder.
- **Do** provide a full reduced-motion fallback (crossfade or instant transition) for every choreographed sequence.

### Don't:
- **Don't** build a generic Webflow/Squarespace agency template look — no identical card grids, no stock "creative agency" gradients.
- **Don't** use tiny uppercase tracked eyebrows above sections.
- **Don't** use numbered section markers (01/02/03) as default scaffolding.
- **Don't** use gradient text (background-clip: text + gradient).
- **Don't** use side-stripe borders (border-left/right as a colored accent) on cards or callouts.
- **Don't** dilute the primary color into a token 5–10% accent — this system is Committed, not Restrained.
