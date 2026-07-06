import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://azhar-hakim-portfolio.netlify.app';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Azhar Hakim Portfolio | IT Analyst in Pune | Endpoint Support Engineer',
        template: '%s | Azhar Hakim Portfolio',
    },
    description:
        'Azhar Hakim portfolio showcasing IT Analyst experience in Pune, endpoint support engineering, and .NET software development.',
    keywords: [
        'Azhar Hakim portfolio',
        'IT Analyst Pune',
        'Endpoint Support Engineer',
        'Software Developer',
        'C#',
        '.NET',
        'PowerShell',
        'Windows Server',
        'SQL',
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
        title: 'Azhar Hakim Portfolio | IT Analyst in Pune | Endpoint Support Engineer',
        description:
            'Azhar Hakim portfolio highlighting IT analyst support, endpoint troubleshooting, and .NET development experience.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Azhar Hakim Portfolio | IT Analyst in Pune | Endpoint Support Engineer',
        description:
            'Azhar Hakim portfolio with IT analyst experience, endpoint support, and .NET development.',
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#000000' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
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
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Almarai — global UI font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Instrument+Serif:ital@1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="min-h-screen bg-black text-primary antialiased">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-primary"
                >
                    Skip to main content
                </a>
                <main id="main-content">
                    {children}
                </main>
            </body>
        </html>
    );
}
