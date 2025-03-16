import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    { title: 'Services', href: '#features' },
    { title: 'Process', href: '#process' },
    { title: 'Demos', href: '/demos' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Contact', href: 'https://calendly.com/neosk-carbosoftware', external: true },
]

export default function FooterSection() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 md:py-12">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <Link href="/" aria-label="go home" className="block size-fit">
                            <Logo className="h-8 w-auto" />
                        </Link>
                        <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 max-w-md">
                            Carbo Software specializes in AI-powered automation solutions that help businesses streamline operations, reduce costs, and improve efficiency.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium mb-3">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            {links.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary block duration-150"
                                >
                                    <span>{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 block">
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                        </svg>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 block">
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 block">
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                        </svg>
                    </Link>
                </div>
                
                <div className="mt-4 border-t border-zinc-200 dark:border-zinc-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">© {new Date().getFullYear()} Carbo Software. All rights reserved.</span>
                    <div className="flex gap-3 text-xs">
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Privacy</Link>
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
