import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

const bookingUrl = 'https://cal.com/secondline.ai/17-minute-revenue-audit'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Second Line AI' },
      { name: 'description', content: 'Learn why Second Line AI focuses on calm, specific HVAC revenue recovery for Louisiana contractors.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'About Second Line AI' },
      { property: 'og:description', content: 'A Louisiana-focused revenue recovery partner for residential HVAC contractors.' },
      { property: 'og:url', content: 'https://secondlineai.com/about' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/about' }],
  }),
  component: About,
})

function About() {
  return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-border bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-10"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><Link to="/" className="text-sm text-accent underline underline-offset-4">Back home</Link></div></header><section className="mx-auto max-w-6xl px-5 py-24 lg:px-10 lg:py-32"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Baton Rouge · Louisiana</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Technology should feel like a better operator—not a colder one.</h1><div className="mt-10 grid gap-12 lg:grid-cols-2"><p className="text-xl leading-9 text-muted-foreground">Second Line AI helps residential HVAC contractors capture more of the demand they already work hard to generate. We believe AI is most valuable when it quietly improves the handoffs that matter to a homeowner and an owner-operator.</p><div className="border-l-2 border-accent pl-6 text-lg leading-8">Our focus is narrow by design: Louisiana HVAC operations, clear rules, calm conversations, and revenue recovery you can inspect.</div></div></section><section className="bg-secondary/50 px-5 py-20 lg:px-10"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3"><div><p className="font-serif text-3xl text-primary">Specificity</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Your service area, policies, hours, and voice—not a generic script.</p></div><div><p className="font-serif text-3xl text-primary">Honesty</p><p className="mt-3 text-sm leading-6 text-muted-foreground">No invented case studies, guarantees, integrations, or technical promises.</p></div><div><p className="font-serif text-3xl text-primary">Partnership</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Implementation, monitoring, and improvement—not another dashboard to babysit.</p></div></div></section><section className="bg-primary px-5 py-20 text-center text-primary-foreground lg:px-10"><h2 className="font-serif text-4xl sm:text-5xl">Start with a closer look.</h2><a href={bookingUrl} className="mt-7 inline-flex items-center gap-3 bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground">Book the 17-minute audit <ArrowUpRight className="h-4 w-4" /></a></section></main>
}
