import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Check } from 'lucide-react'

const bookingUrl = 'https://cal.com/secondline.ai/17-minute-revenue-audit'
const steps = [
  ['01', 'Assess', 'We review busy periods, after-hours, weekends, emergencies, overflow, and the handoffs where demand may be delayed or lost.'],
  ['02', 'Design', 'We configure the desk around your company, service area, services, scheduling rules, brand voice, and escalation procedures.'],
  ['03', 'Protect', 'The system answers according to approved instructions and captures the next best step when your team cannot take the call.'],
  ['04', 'Improve', 'We review performance with you and refine the system as your operation, season, and customer experience change.'],
]

export const Route = createFileRoute('/how-it-works')({
  head: () => ({
    meta: [
      { title: 'How HVAC Revenue Recovery Works · Second Line AI' },
      { name: 'description', content: 'See how Second Line AI assesses, designs, protects, and improves HVAC call handling.' },
      { property: 'og:title', content: 'How HVAC Revenue Recovery Works · Second Line AI' },
      { property: 'og:description', content: 'A four-stage operating model for capturing more value from HVAC demand.' },
      { property: 'og:url', content: 'https://secondlineai.com/how-it-works' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/how-it-works' }],
  }),
  component: HowItWorks,
})

function HowItWorks() {
  return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-primary-foreground/15 bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-10"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><Link to="/" className="text-sm text-accent underline underline-offset-4">Back home</Link></div></header><section className="bg-primary px-5 py-24 text-primary-foreground lg:px-10 lg:py-32"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-accent">Revenue Recovery Framework™</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">A better way to protect the handoff between demand and revenue.</h1><p className="mt-7 max-w-2xl text-xl leading-9 text-primary-foreground/70">Second Line AI does not drop a generic bot into your phone system. We build and manage an operating layer around the rules your HVAC company already depends on.</p></div></section><section className="mx-auto max-w-6xl px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">{steps.map(([number, title, copy]) => <article key={number} className="bg-background p-7 sm:p-10"><span className="font-mono text-xs text-primary">{number}</span><h2 className="mt-14 font-serif text-4xl">{title}</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div></section><section className="bg-secondary/50 px-5 py-20 lg:px-10"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2"><div><p className="font-serif text-4xl text-primary">What we need from you</p><p className="mt-5 text-lg leading-8 text-muted-foreground">Clear information about your services, policies, service area, scheduling rules, and escalation procedures. Specificity is what makes the experience useful.</p></div><ul className="space-y-4 text-sm leading-6">{['Accurate company and service information', 'Approved scheduling and escalation rules', 'A point of contact for implementation', 'A willingness to review what is actually happening'].map(item => <li key={item} className="flex gap-3 border-b border-border pb-4"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div></section><section className="bg-accent px-5 py-20 text-center text-accent-foreground lg:px-10"><h2 className="font-serif text-4xl sm:text-5xl">Start with a focused audit.</h2><a href={bookingUrl} className="mt-7 inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground">Book the 17-minute audit <ArrowUpRight className="h-4 w-4" /></a></section></main>
}
