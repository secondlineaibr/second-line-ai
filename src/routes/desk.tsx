import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Check, Phone, ShieldCheck } from 'lucide-react'

const bookingUrl = 'https://cal.com/secondline.ai/17-minute-revenue-audit'
const marieUrl = 'tel:+12253252700'
const capabilities = [
  ['After-hours calls', 'Capture the reason for the call and guide the homeowner to the approved next step while the physical office is closed.'],
  ['Call overflow', 'Support your dispatchers and office staff when multiple callers arrive at once.'],
  ['New service requests', 'Gather the information your team needs to understand the request and follow your process.'],
  ['Replacement opportunities', 'Capture context from homeowners asking about aging systems, estimates, financing conversations, or replacement.'],
  ['Existing customers', 'Identify the caller and route the request according to your customer policies.'],
  ['Customer concerns', 'Document the concern clearly and escalate it according to the procedures you approve.'],
]

export const Route = createFileRoute('/desk')({
  head: () => ({
    meta: [
      { title: 'HVAC Revenue Recovery Desk™ · Second Line AI' },
      { name: 'description', content: 'Explore the managed HVAC Revenue Recovery Desk for after-hours, overflow, service, replacement, and customer calls.' },
      { property: 'og:title', content: 'HVAC Revenue Recovery Desk™ · Second Line AI' },
      { property: 'og:description', content: 'A managed extension of your HVAC front office, configured around your rules.' },
      { property: 'og:url', content: 'https://secondlineai.com/desk' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/desk' }],
  }),
  component: Desk,
})

function Desk() {
  return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-primary-foreground/15 bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-10"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><a href={marieUrl} className="flex items-center gap-2 text-sm font-bold text-accent"><Phone className="h-4 w-4" /> Call Marie</a></div></header><section className="bg-secondary/50 px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">The managed product</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Your front office, with a second line when you need it.</h1><p className="mt-7 max-w-2xl text-xl leading-9 text-muted-foreground">The HVAC Revenue Recovery Desk™ is configured around your company—not a generic answering script. It helps your team capture the next best step when the office is busy, closed, or stretched thin.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={bookingUrl} className="inline-flex min-h-14 items-center justify-center gap-3 bg-primary px-7 text-base font-bold text-primary-foreground">Book the 17-minute audit <ArrowUpRight className="h-4 w-4" /></a><a href={marieUrl} className="inline-flex min-h-14 items-center justify-center gap-3 border border-primary px-7 text-base font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"><Phone className="h-5 w-5" /> Call Marie</a></div></div></section><section className="mx-auto max-w-6xl px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-serif text-4xl text-primary">What it can support</p><p className="mt-5 text-lg leading-8 text-muted-foreground">Every capability is shaped by your approved rules, procedures, and customer experience.</p></div><div className="grid gap-4 sm:grid-cols-2">{capabilities.map(([title, copy]) => <article key={title} className="border-t border-border pt-5"><h2 className="font-serif text-2xl text-primary">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section><section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"><div><p className="font-serif text-4xl">What it will not do</p><p className="mt-5 text-lg leading-8 text-primary-foreground/70">Marie is an intake specialist, not a technician. She operates within the guardrails your company approves.</p></div><ul className="space-y-4 text-sm text-primary-foreground/80">{['Diagnose HVAC equipment', 'Invent pricing or make unauthorized promises', 'Provide technical advice outside approved procedures', 'Replace the judgment of your licensed team'].map(item => <li key={item} className="flex gap-3 border-b border-primary-foreground/20 pb-4"><ShieldCheck className="h-4 w-4 shrink-0 text-accent" />{item}</li>)}</ul></div></section></main>
}
