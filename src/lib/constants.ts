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

export const PRODUCT = {
  philosophy: 'The Second Line Standard™',
  methodology: 'The Revenue Recovery Framework™',
  evaluation: 'Complimentary Revenue Recovery Assessment™',
  measurement: 'Revenue Recovery Score™',
  flagship: 'The HVAC Revenue Recovery Desk™',
  relationship: 'Revenue Recovery Partnership™',
  implementation: 'Partner Launch™',
  reporting: 'Weekly Revenue Recovery Reports™',
} as const;

/**
 * Cal.com booking link is a preserved external asset — the URL slug is
 * legacy ("17-minute-revenue-audit") but on-page copy always calls this the
 * Complimentary Revenue Recovery Assessment™. Changing the slug would
 * require reconfiguring Cal.com and is out of scope for the rebuild.
 */
export const BOOKING_URL =
  'https://cal.com/secondline.ai/17-minute-revenue-audit';

export const CONTACT = {
  phoneDisplay: '225-325-2700',
  phoneHref: 'tel:2253252700',
  email: 'bookmore@secondlineai.com',
  emailHref: 'mailto:bookmore@secondlineai.com',
  location: 'Baton Rouge, Louisiana',
} as const;
