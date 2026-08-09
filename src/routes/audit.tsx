import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Check, Clock3 } from 'lucide-react'

const bookingUrl = 'https://cal.com/secondline.ai/17-minute-revenue-audit'
export const Route = createFileRoute('/audit')({
  head: () => ({
    meta: [
      { title: 'Free 17-Minute Revenue Recovery Audit' },
      { name: 'description', content: 'Book a focused 17-minute conversation about where HVAC call opportunities may be delayed or lost.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Free 17-Minute Revenue Recovery Audit' },
      { property: 'og:description', content: 'A focused first conversation about how your HVAC company handles incoming demand.' },
      { property: 'og:url', content: 'https://secondlineai.com/audit' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/audit' }],
  }),
  component: Audit,
})
function Audit() { return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-border bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-10"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><Link to="/" className="text-sm text-accent underline underline-offset-4">Back home</Link></div></header><section className="bg-secondary/50 px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-5xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">A clear first step</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Book your free<br /><em className="font-normal text-primary">17-minute audit.</em></h1><p className="mt-7 max-w-2xl text-xl leading-9 text-muted-foreground">A focused conversation about how your HVAC company handles incoming calls during busy periods, after hours, weekends, emergencies, and overflow.</p><a href={bookingUrl} className="mt-9 inline-flex min-h-14 items-center gap-3 bg-primary px-7 text-base font-bold text-primary-foreground">Book my audit <ArrowUpRight className="h-4 w-4" /></a><p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="h-4 w-4 text-primary" /> Not an hour-long consultation or high-pressure sales call.</p></div></section><section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-3 lg:px-10"><div><p className="font-serif text-3xl text-primary">Who it is for</p><p className="mt-4 text-sm leading-7 text-muted-foreground">Residential HVAC owners and operators in Louisiana who want to understand what happens when the office is stretched or closed.</p></div><div><p className="font-serif text-3xl text-primary">What we review</p><ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">{['Call coverage and overflow', 'After-hours and weekend handling', 'Scheduling and escalation rules', 'The next practical improvement'].map(item => <li key={item} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div><div><p className="font-serif text-3xl text-primary">What it is not</p><p className="mt-4 text-sm leading-7 text-muted-foreground">No guaranteed revenue claim, generic AI demo, or diagnosis of your operation without context. Just a useful first conversation.</p></div></section><section className="bg-primary px-5 py-20 text-center text-primary-foreground lg:px-10"><h2 className="font-serif text-4xl sm:text-5xl">Bring the real questions.</h2><a href={bookingUrl} className="mt-7 inline-flex items-center gap-3 bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground">Choose a time <ArrowUpRight className="h-4 w-4" /></a></section></main> }
