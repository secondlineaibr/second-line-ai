/**
 * Single source of truth for brand strings, product names, and contact
 * details. Project Magnolia section 6 requires exact, consistent product
 * terminology sitewide — importing from here instead of hardcoding strings
 * is what enforces that.
 */

export const SITE_NAME = 'Second Line AI';
export const SITE_URL = 'https://secondlineai.com';

export const BRAND_PROMISE =
  'Recover More of the Revenue You’re Already Paying to Generate.';
export const INTERNAL_MOTTO = 'Protect Every Opportunity.';

/**
 * Trademark restraint (per the 2026-08-05 refinement pass): ™ is reserved
 * for concepts genuinely proprietary to the service — the Desk, the
 * Framework, the Score. Everything else is a plain descriptive name, no
 * symbol, even where earlier copy trademarked it.
 */
export const PRODUCT = {
  philosophy: 'The Second Line Standard',
  methodology: 'The Revenue Recovery Framework™',
  evaluation: '17-Minute Revenue Recovery Audit',
  measurement: 'Revenue Recovery Score™',
  flagship: 'The HVAC Revenue Recovery Desk™',
  relationship: 'Revenue Recovery Partnership',
  implementation: 'Partner Launch',
  reporting: 'Weekly Revenue Recovery Reports',
} as const;

/**
 * Cal.com booking link is a preserved external asset — the URL slug
 * ("17-minute-revenue-audit") now matches the on-page CTA language too:
 * "Book My 17-Minute Revenue Recovery Audit."
 */
export const BOOKING_URL =
  'https://cal.com/secondline.ai/17-minute-revenue-audit';

export const CTA = {
  bookFull: 'Book My 17-Minute Revenue Recovery Audit',
  bookShort: 'Book 17-Minute Audit',
  callMarie: 'Call Marie',
} as const;

export const CONTACT = {
  phoneDisplay: '225-325-2700',
  phoneHref: 'tel:2253252700',
  email: 'bookmore@secondlineai.com',
  emailHref: 'mailto:bookmore@secondlineai.com',
  location: 'Baton Rouge, Louisiana',
} as const;

/**
 * Approved nav IA. "How It Works" and "About" point at their legacy
 * (public/*.html) pages, unchanged, until those pages are rebuilt in a
 * later phase — pointing a new Magnolia-branded label at an unrebuilt,
 * old-styled page would be misleading, but these two labels match their
 * legacy destinations closely enough to be honest as-is. "Revenue Recovery
 * Desk" and "Founding Partners" have no legacy page at all — they anchor
 * to the matching Homepage section (`/#id`) until each gets its own
 * dedicated page.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works.html' },
  { label: 'Revenue Recovery Desk', href: '/#revenue-recovery-desk' },
  { label: 'Founding Partners', href: '/#founding-partners' },
  { label: 'About', href: '/about.html' },
] as const;

export const NAV_CTA_LABEL = CTA.bookShort;

/**
 * The footer carries a fuller link set than the trimmed top nav — Contact
 * and the legacy FAQ page still exist and need at least one working link
 * pointing at them somewhere on the site.
 */
export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'FAQ', href: '/faq.html' },
  { label: 'Contact', href: '/contact.html' },
] as const;

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy.html' },
  { label: 'Terms and Conditions', href: '/terms.html' },
] as const;
