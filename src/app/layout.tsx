import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/layout';
import { MiniNavbar } from '@/components/ui/mini-navbar';
import { ThemeProvider } from '@/components/providers';
import './globals.css';

/**
 * Primary UI Font - Inter
 */
const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

/**
 * Secondary Technical Font - JetBrains Mono
 */
const jetbrainsMono = JetBrains_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
});

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://azhar-hakim-portfolio.netlify.app';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Portfolio | Developer & Systems Engineer',
        template: '%s | Portfolio',
    },
    description: 'Interactive Technical Portfolio',
    keywords: [
        'IT Analyst',
        'Software Developer',
        'Systems Engineer',
        'Portfolio',
        'Endpoint Support',
        '.NET',
        'TypeScript',
    ],
    authors: [{ name: 'Azhar Hakim' }],
    creator: 'Azhar Hakim',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'Portfolio | Developer & Systems Engineer',
        description: 'Interactive Technical Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio | Developer & Systems Engineer',
        description: 'Interactive Technical Portfolio',
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
    ],
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${jetbrainsMono.variable}`}
            suppressHydrationWarning
        >
            <body className="min-h-screen bg-background text-foreground antialiased">
                <ThemeProvider>
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-surface focus:text-foreground"
                    >
                        Skip to main content
                    </a>
                    <div className="relative flex min-h-screen flex-col">
                        <MiniNavbar />
                        <main id="main-content" className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
