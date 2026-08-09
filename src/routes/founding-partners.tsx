import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Check } from 'lucide-react'

export const Route = createFileRoute('/founding-partners')({
  head: () => ({
    meta: [
      { title: 'Founding Partner Program · Second Line AI' },
      { name: 'description', content: 'Explore a high-touch early partner opportunity for Louisiana HVAC contractors.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Founding Partner Program · Second Line AI' },
      { property: 'og:description', content: 'Help shape what revenue recovery looks like for Louisiana HVAC companies.' },
      { property: 'og:url', content: 'https://secondlineai.com/founding-partners' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/founding-partners' }],
  }),
  component: FoundingPartners,
})
function FoundingPartners() { return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-border bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-10"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><Link to="/" className="text-sm text-accent underline underline-offset-4">Back home</Link></div></header><section className="bg-accent px-5 py-24 text-accent-foreground lg:px-10 lg:py-32"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[.2em]">An early, high-touch opportunity</p><h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Help shape what revenue recovery looks like for HVAC.</h1><p className="mt-7 max-w-2xl text-xl leading-9 opacity-80">Second Line AI is early. We are being transparent about that because the right first partners should have a voice in how the system evolves.</p></div></section><section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">The program</p><h2 className="mt-5 font-serif text-4xl sm:text-5xl">Closer implementation. Clearer feedback.</h2></div><div><p className="text-lg leading-8 text-muted-foreground">Founding Partners receive direct access to the Second Line AI team, a highly customized implementation, early influence over workflows, and priority attention during the build. Recognition is a byproduct of doing thoughtful work together—not the main economic reason to participate.</p><ul className="mt-8 space-y-4 text-sm">{['Direct access to the team', 'Customized Revenue Recovery Desk setup', 'Early influence over workflows', 'Priority attention during implementation', 'Founding Partner recognition'].map(item => <li key={item} className="flex gap-3 border-b border-border pb-4"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><Link to="/audit" className="mt-9 inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground">Start with the audit <ArrowUpRight className="h-4 w-4" /></Link></div></section></main> }
