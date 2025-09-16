import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'AI-Powered Streaming Companions - Ultron Stream',
    description: 'Transform your streams with AI-powered companion characters. Get real-time commentary, audience interaction, and entertainment features that boost engagement.',
    keywords: ['AI streaming', 'streaming companions', 'Ultron Stream', 'AI characters', 'streaming tools', 'content creation'],
    authors: [{ name: 'Ultron Stream' }],
    creator: 'Ultron Stream',
    publisher: 'Ultron Stream',
    openGraph: {
        title: 'AI-Powered Streaming Companions - Ultron Stream',
        description: 'Transform your streams with AI-powered companion characters. Get real-time commentary, audience interaction, and entertainment features that boost engagement.',
        url: 'https://ultronstream.com',
        siteName: 'Ultron Stream',
        images: [
            {
                url: 'https://ultronstream.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Ultron Stream - AI-Powered Streaming Companions',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI-Powered Streaming Companions - Ultron Stream',
        description: 'Transform your streams with AI-powered companion characters. Get real-time commentary, audience interaction, and entertainment features that boost engagement.',
        images: ['https://ultronstream.com/og-image.png'],
    },
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
    verification: {
        google: 'your-google-verification-code',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/fonts-Raging-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/fonts-Raging-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/fonts-Raging-Black.woff" as="font" type="font/woff" crossOrigin="anonymous" />
                <link rel="icon" href="/favicons/2177--favicon.ico" />
                <link rel="icon" href="/favicons/4075--favicon-16x16.png" sizes="16x16" type="image/png" />
                <link rel="icon" href="/favicons/1088--favicon-48x48.ico" sizes="48x48" type="image/png" />
                <link rel="icon" href="/favicons/7285--favicon-96x96.png" sizes="96x96" type="image/png" />
                <link rel="apple-touch-icon" href="/favicons/4075--favicon-16x16.png" />
            </head>
            <body className={cn(
                "min-h-screen bg-black text-white flex flex-col font-montreal antialiased",
                "bg-[url('https://media.readyplayer.me/webpage/images/webpage-background-colorful-dots.svg')] bg-repeat"
            )}>
                <StructuredData />
                {children}
            </body>
        </html>
    )
}