import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ready Player Me - Cross-game Avatars',
    short_name: 'Ready Player Me',
    description: 'Thousands of companies use Ready Player Me developer tools to give their users high-quality personalized avatars that increase retention and engagement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#6542FF',
    icons: [
      {
        src: '/favicons/4075--favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicons/1088--favicon-48x48.ico',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicons/7285--favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  }
}