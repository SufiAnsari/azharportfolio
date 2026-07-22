import type { Metadata, Viewport } from 'next';
import './globals.css';
import { JsonLd } from '@/components/seo/json-ld';

const siteUrl = 'https://azhar-hakim-portfolio.netlify.app';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Azhar Hakim | IT Analyst & Software Developer in Pune',
        template: '%s | Azhar Hakim Portfolio',
    },
    description:
        'Azhar Hakim — IT Analyst at Capita with 4+ years of experience in enterprise endpoint support, Windows infrastructure, PowerShell scripting, and C# / .NET development in Pune.',
    keywords: [
        'Azhar Hakim',
        'Azhar Hakim portfolio',
        'IT Analyst Pune',
        'Endpoint Support Engineer Pune',
        'Software Developer Pune',
        'C# Developer Pune',
        '.NET Developer Pune',
        'PowerShell Automation Engineer',
        'Windows Server Infrastructure Support',
        'Capita IT Analyst',
        'Allscripts Technology Developer',
        'SQL Database Support',
    ],
    authors: [{ name: 'Azhar Hakim', url: siteUrl }],
    creator: 'Azhar Hakim',
    publisher: 'Azhar Hakim',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: 'profile',
        url: siteUrl,
        title: 'Azhar Hakim | IT Analyst & Software Developer in Pune',
        description:
            'Enterprise IT support, endpoint reliability, and .NET application development by Azhar Hakim in Pune, India.',
        siteName: 'Azhar Hakim Portfolio',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Azhar Hakim | IT Analyst & Software Developer in Pune',
        description:
            'Enterprise IT support, endpoint reliability, and .NET application development by Azhar Hakim in Pune, India.',
    },
    other: {
        'geo.region': 'IN-MH',
        'geo.placename': 'Pune',
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#08080a' },
        { media: '(prefers-color-scheme: dark)', color: '#08080a' },
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
                {/* Outfit & Instrument Serif Typography */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Outfit:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                {/* Structured Data (Schema.org JSON-LD) */}
                <JsonLd />
            </head>
            <body
                className="min-h-screen bg-[#08080a] text-primary antialiased selection:bg-primary/20 selection:text-white"
                suppressHydrationWarning
            >
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#08080a] focus:text-primary focus:border focus:border-white/20"
                >
                    Skip to main content
                </a>
                <main id="main-content">{children}</main>
            </body>
        </html>
    );
}
