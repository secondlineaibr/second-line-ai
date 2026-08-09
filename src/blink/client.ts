import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'second-line-ai-0l82v4mb',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_EYUfIlRiLomhju8cpcnbaZVC_EljgbvS',
  authRequired: false,
  auth: { mode: 'managed' },
})
