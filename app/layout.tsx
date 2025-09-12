import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'Integrate an avatar creator into your game in days - Ready Player Me',
    description: 'Thousands of companies use Ready Player Me developer tools to give their users high-quality personalized avatars that increase retention and engagement.',
    keywords: ['avatars', 'gaming', 'Ready Player Me', 'cross-game avatars', 'avatar creator', 'game development'],
    authors: [{ name: 'Ready Player Me' }],
    creator: 'Ready Player Me',
    publisher: 'Ready Player Me',
    openGraph: {
        title: 'Integrate an avatar creator into your game in days - Ready Player Me',
        description: 'Thousands of companies use Ready Player Me developer tools to give their users high-quality personalized avatars that increase retention and engagement.',
        url: 'https://readyplayer.me',
        siteName: 'Ready Player Me',
        images: [
            {
                url: 'https://cdn.prod.website-files.com/647798cf71ec2048ea89ab07/64906dc72429f7d76d3e08ff_RPM_OG_IMG_1200x630.png',
                width: 1200,
                height: 630,
                alt: 'Ready Player Me - Cross-game avatars made easy',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Integrate an avatar creator into your game in days - Ready Player Me',
        description: 'Thousands of companies use Ready Player Me developer tools to give their users high-quality personalized avatars that increase retention and engagement.',
        images: ['https://cdn.prod.website-files.com/647798cf71ec2048ea89ab07/64906dc72429f7d76d3e08ff_RPM_OG_IMG_1200x630.png'],
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