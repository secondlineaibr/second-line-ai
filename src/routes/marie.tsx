import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Check, Phone, ShieldCheck } from 'lucide-react'

const bookingUrl = 'https://cal.com/secondline.ai/17-minute-revenue-audit'

export const Route = createFileRoute('/marie')({
  head: () => ({
    meta: [
      { title: 'Meet Marie · Second Line AI' },
      { name: 'description', content: 'Call Marie, the live HVAC intake specialist inside Second Line AI’s Revenue Recovery Desk.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Meet Marie · Second Line AI' },
      { property: 'og:description', content: 'Experience the live intake specialist inside Second Line AI’s HVAC Revenue Recovery Desk.' },
      { property: 'og:url', content: 'https://secondlineai.com/marie' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/marie' }],
  }),
  component: Marie,
})

function Marie() {
  return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-primary-foreground/15 bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-10"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><a href="tel:+12253252700" className="flex items-center gap-2 text-sm font-bold text-accent"><Phone className="h-4 w-4" />225-325-2700</a></div></header><section className="bg-primary px-5 py-24 text-primary-foreground lg:px-10 lg:py-32"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-accent">Live proof, not theatre</p><h1 className="mt-5 font-serif text-6xl leading-none sm:text-8xl">Meet<br /><em className="font-normal text-accent">Marie.</em></h1><p className="mt-7 max-w-xl text-xl leading-8 text-primary-foreground/70">She is a warm, calm HVAC intake specialist operating inside the Revenue Recovery Desk. Call her as you would call a well-prepared office coordinator.</p><a href="tel:+12253252700" className="mt-9 inline-flex min-h-14 items-center gap-3 bg-accent px-7 text-base font-bold text-accent-foreground"><Phone className="h-5 w-5" /> Call Marie now <ArrowUpRight className="h-4 w-4" /></a></div><div className="border border-primary-foreground/20 bg-primary-foreground/10 p-7"><div className="flex items-center gap-3 border-b border-primary-foreground/15 pb-5"><span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground"><Phone /></span><div><p className="font-bold">Marie is answering</p><p className="text-xs text-primary-foreground/55">225-325-2700 · live demo line</p></div></div><ul className="mt-6 space-y-4 text-sm text-primary-foreground/75">{['Gathers caller information', 'Understands service or replacement intent', 'Follows company-approved next steps', 'Escalates without improvising'].map(item => <li key={item} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-accent" />{item}</li>)}</ul><p className="mt-7 flex gap-2 border-t border-primary-foreground/15 pt-5 text-xs leading-5 text-primary-foreground/55"><ShieldCheck className="h-4 w-4 shrink-0 text-accent" /> Marie never diagnoses HVAC equipment or invents pricing.</p></div></div></section><section className="mx-auto max-w-6xl px-5 py-24 lg:px-10"><h2 className="font-serif text-4xl sm:text-5xl">Marie is one part of a bigger system.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">The call is the proof point. The Revenue Recovery Desk is the product: configuration, operating rules, escalation paths, monitoring, and continuous improvement around your front office.</p><a href={bookingUrl} className="mt-8 inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground">Book your 17-minute audit <ArrowUpRight className="h-4 w-4" /></a></section></main>
}
