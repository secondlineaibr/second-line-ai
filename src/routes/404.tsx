import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
export const Route = createFileRoute('/404')({
  head: () => ({
    meta: [
      { title: 'Page Not Found · Second Line AI' },
      { name: 'description', content: 'The Second Line AI page you requested could not be found.' },
    ],
  }),
  component: NotFound,
})
function NotFound() { return <main className="grid min-h-dvh place-items-center bg-primary px-5 text-center text-primary-foreground"><div><p className="font-mono text-xs uppercase tracking-[.25em] text-accent">Second Line AI</p><h1 className="mt-5 font-serif text-7xl">Quiet line.</h1><p className="mt-5 text-primary-foreground/65">That page is not answering.</p><Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent underline underline-offset-8"><ArrowLeft className="h-4 w-4" /> Return home</Link></div></main> }
