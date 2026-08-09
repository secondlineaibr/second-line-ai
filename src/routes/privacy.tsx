import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy · Second Line AI' },
      { name: 'description', content: 'Read the Second Line AI privacy policy for website visitors and audit inquiries.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Privacy Policy · Second Line AI' },
      { property: 'og:description', content: 'How Second Line AI handles information from website visitors and audit inquiries.' },
      { property: 'og:url', content: 'https://secondlineai.com/privacy' },
    ],
    links: [{ rel: 'canonical', href: 'https://secondlineai.com/privacy' }],
  }),
  component: Privacy,
})
function Privacy() { return <main className="min-h-dvh bg-background text-foreground"><header className="border-b border-border bg-primary text-primary-foreground"><div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5"><Link to="/" className="font-serif text-2xl">Second Line <span className="text-accent">AI</span></Link><Link to="/" className="text-sm text-accent">Home</Link></div></header><article className="mx-auto max-w-3xl px-5 py-20 prose prose-stone"><p className="font-mono text-xs uppercase tracking-widest text-primary">Last updated August 2026</p><h1 className="mt-4 font-serif text-5xl">Privacy Policy</h1><p className="mt-6 text-muted-foreground">Second Line AI respects your privacy. This page describes the general information we may collect when you contact us, request an audit, or use this website.</p><h2 className="mt-12 font-serif text-2xl">Information we receive</h2><p className="text-muted-foreground">We may receive your name, company details, phone number, email address, scheduling information, and messages you choose to send. We use this information to respond, schedule conversations, and improve our services.</p><h2 className="mt-10 font-serif text-2xl">How we use information</h2><p className="text-muted-foreground">We use information to provide requested services, communicate with you, maintain website security, and understand which conversations are useful. We do not sell personal information.</p><h2 className="mt-10 font-serif text-2xl">Questions</h2><p className="text-muted-foreground">For privacy questions, contact bookmore@secondlineai.com. This page is a general business policy and is not a statement of legal advice.</p></article></main> }
