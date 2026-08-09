import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms & Conditions · Second Line AI' },
      { name: 'description', content: 'Read the Second Line AI terms for website use and service demonstrations.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Terms & Conditions · Second Line AI' },
      { property: 'og:description', content: 'Terms for using the Second Line AI website and service demonstrations.' },
      { property: 'og:url', content: 'https://secondlineai.com/terms' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/terms' }],
  }),
  component: Terms,
})
function Terms() { return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-border bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><Link to="/" className="text-sm text-accent">Home</Link></div></header><article className="mx-auto max-w-3xl px-5 py-20"><p className="font-mono text-xs uppercase tracking-widest text-primary">Last updated August 2026</p><h1 className="mt-4 font-serif text-5xl">Terms &amp; Conditions</h1><p className="mt-6 leading-8 text-muted-foreground">By using this website or contacting Second Line AI, you agree to use the site lawfully and to provide accurate information. Website content is informational and does not guarantee any specific business, scheduling, revenue, or operational outcome.</p><h2 className="mt-12 font-serif text-2xl">Services and demonstrations</h2><p className="mt-4 leading-8 text-muted-foreground">Marie is a demonstration intake specialist. Her behavior, capabilities, and responses are not a substitute for a licensed HVAC technician, emergency services, or contractor-approved operating procedures.</p><h2 className="mt-10 font-serif text-2xl">Contact</h2><p className="mt-4 leading-8 text-muted-foreground">Questions about these terms may be directed to bookmore@secondlineai.com. This page is a general business summary and is not a statement of legal review.</p></article></main> }
