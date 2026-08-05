# Second Line AI — Design System (Project Magnolia v2)

Phase 1 deliverable. This document translates the named-but-unspecified visual
language in `PROJECT_MAGNOLIA.md` (Sections 3, 4, 5, 8) into concrete,
implementable tokens. It carries forward values from the legacy site's palette
and type pairing where the spec doesn't contradict them, and introduces new
tokens where the spec names something the old system didn't have (Soft
Charcoal, Antique Gold as a named accent, an explicit type/spacing/motion
scale). These are implementation defaults, not locked-in brand law — they are
easy to tune before Homepage sign-off.

---

## Color

Named in the spec: Deep Emerald, Warm Ivory, Antique Gold, Soft Charcoal, plus
photography-only neutrals (Stone, Slate, natural wood/brass).

| Token | Hex | Role |
|---|---|---|
| `--color-obsidian` | `#14150F` | Primary dark neutral — body text on light backgrounds, deepest shadows |
| `--color-charcoal` | `#262922` | Soft Charcoal — the alternating dark section background named in Visual Rhythm. Warmer and less stark than obsidian, so the light/dark rhythm doesn't feel like flipping to pure black |
| `--color-charcoal-deep` | `#1B1D17` | Charcoal section gradient depth |
| `--color-emerald` | `#0F3D2C` | Deep Emerald — primary buttons, emerald sections |
| `--color-emerald-deep` | `#082720` | Emerald section gradient depth |
| `--color-emerald-bright` | `#1F6E4C` | Emerald hover/accent state |
| `--color-ivory` | `#F6F1E3` | Warm Ivory — primary light background |
| `--color-ivory-soft` | `#FBF8F0` | Card/surface background on ivory sections |
| `--color-ivory-dim` | `#E6DFC8` | Muted ivory text on dark sections |
| `--color-gold` | `#B48A4C` | Antique Gold — accent, dividers, eyebrows, quote marks |
| `--color-gold-light` | `#D8B679` | Gold on dark backgrounds (needs the lift for contrast) |
| `--color-gold-deep` | `#7E5E32` | Gold pressed/deep state |
| `--color-stone` | `#C9C2AC` | Warm Stone — light neutral for dividers, borders on light surfaces |
| `--color-slate` | `#5B6058` | Slate — muted secondary text, photography-adjacent neutral |
| `--color-line-on-dark` | `rgba(246,241,227,0.14)` | Hairline borders on dark sections |
| `--color-line-on-light` | `rgba(20,21,15,0.12)` | Hairline borders on light sections |

**Rationale:** Emerald/Ivory/Gold values are carried forward unchanged from
the legacy CSS (`#0F3D2C`, `#F6F1E3`, `#B48A4C`) — they already satisfy the
spec's description and were flagged in the audit as a genuine asset worth
preserving. Obsidian is kept as a true near-black for text and rare
full-black moments (footer, perhaps the hero), but is no longer the default
"dark section" color. Charcoal is new: a warmer, softer dark tone so
alternating Ivory → Emerald → Ivory → Charcoal → Ivory (per the spec's exact
Visual Rhythm example) reads as three distinct dark values, not two coats of
black.

**Contrast check:** Ivory (`#F6F1E3`) on Emerald (`#0F3D2C`) ≈ 9.8:1. Ivory on
Charcoal (`#262922`) ≈ 11.4:1. Obsidian (`#14150F`) on Ivory ≈ 16.9:1. Gold
(`#B48A4C`) on Ivory ≈ 2.9:1 — **fails AA for text**, so Gold is treated as an
accent/decorative color only (dividers, icons, eyebrow labels paired with
sufficient size/weight or the lighter `--color-gold-light` on dark surfaces),
never as body copy color on a light background. This constraint carries
into the Accessibility section below.

---

## Typography

**Display:** Playfair Display (serif) — carried forward from the legacy site.
Nothing in the new spec contradicts it, and it directly serves the "editorial
magazine," "timeless," "luxury hospitality" direction (Section 3) better than
introducing a new typeface would.

**Body:** Inter (sans) — carried forward for the same reason: clean,
highly legible, no aesthetic conflict with the new spec.

Both will be **self-hosted** in Phase 2 (via `@fontsource` or local files) to
satisfy Section 8's "avoid render-blocking font loading" requirement — the
legacy `@import` from Google Fonts is not carried forward.

### Type Scale

Maps to the five-level hierarchy the spec names (Hero / Section / Subsection
/ Body / Caption) plus a lede size for intro paragraphs, carried from the
legacy system.

| Token | Size (fluid where noted) | Usage |
|---|---|---|
| `--text-hero` | `clamp(2.5rem, 4.5vw + 1rem, 4rem)` (40–64px) | H1, hero headline |
| `--text-section` | `clamp(1.75rem, 2vw + 1.25rem, 2.75rem)` (28–44px) | H2, section headline |
| `--text-subsection` | `1.375rem` (22px) | H3, card/phase headings |
| `--text-lede` | `1.1875rem` (19px) | Intro paragraph under a headline |
| `--text-body` | `1.0625rem` (17px) | Body copy |
| `--text-caption` | `0.8125rem` (13px) | Eyebrows, labels, footer legal |

Line height: 1.15 for display/headings, 1.6 for body — carried from legacy,
consistent with the "readable, generous" direction.

---

## Spacing

Base unit: 8px, per standard practice and compatible with every spacing
value the spec gives explicitly.

| Token | Value |
|---|---|
| `--space-1` | 8px |
| `--space-2` | 16px |
| `--space-3` | 24px |
| `--space-4` | 32px |
| `--space-5` | 48px |
| `--space-6` | 64px |
| `--space-7` | 96px |

### Section Spacing (given explicitly in Section 3 — used verbatim)

| Breakpoint | Value |
|---|---|
| Desktop | 160px |
| Tablet | 120px |
| Mobile | 80px |

### Container

| Token | Value |
|---|---|
| `--container-max` | 1280px (spec: "approximately 1280px") |
| `--container-padding-mobile` | 24px |
| `--container-padding-tablet` | 40px |
| `--container-padding-desktop` | 56px |

---

## Radius & Elevation

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Inputs, small controls |
| `--radius-md` | 8px | Buttons |
| `--radius-card` | 24px | Cards (spec: "24px radius" — used verbatim) |
| `--shadow-sm` | `0 2px 8px rgba(20,21,15,0.08)` | Resting card elevation |
| `--shadow-md` | `0 8px 24px rgba(20,21,15,0.12)` | Hover elevation |
| `--shadow-lg` | `0 20px 60px rgba(20,21,15,0.18)` | Hero/deep elevation |
| `--shadow-gold` | `0 8px 24px rgba(180,138,76,0.28)` | Primary button resting shadow |

---

## Motion

Per Section 5 (buttons: 200ms) and Section 3/8 (fade, opacity, subtle slide,
scale, restrained parallax only — never bounce/spin/flash).

| Token | Value |
|---|---|
| `--duration-fast` | 150ms |
| `--duration-base` | 200ms |
| `--duration-slow` | 400ms |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |

All motion is wrapped in a `prefers-reduced-motion: reduce` override that
collapses durations to near-zero, carried forward from the legacy site and
required explicitly by Section 8.

Scroll-triggered reveals (Framework timeline, section entrances) use
`--duration-slow` with `--ease-out`, translate no more than 16px, and never
animate opacity from fully 0 with no fallback — content must be present and
readable with JavaScript disabled or before hydration.

---

## Breakpoints

| Token | Range |
|---|---|
| `--bp-mobile` | up to 639px |
| `--bp-tablet` | 640px – 1023px |
| `--bp-desktop` | 1024px – 1279px |
| `--bp-wide` | 1280px+ |

---

## Open Items Carried Into Later Phases

- Icon set (Section 5: "custom, thin line weight, rounded geometry, Deep
  Emerald") will be built as a small internal SVG icon component in Phase 3,
  not sourced from a generic icon pack.
- Photography slots are built to spec (aspect ratios, crop points, captions)
  but populated with clearly-marked placeholders per your Phase decision —
  no stock imagery is used.
