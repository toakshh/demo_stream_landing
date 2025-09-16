export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ultron Stream",
    "description": "AI-powered streaming companion platform for content creators",
    "url": "https://ultronstream.com",
    "logo": "https://ultronstream.com/logo.svg",
    "sameAs": [
      "https://twitter.com/ultronstream",
      "https://linkedin.com/company/ultronstream",
      "https://github.com/ultronstream"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "foundingDate": "2019",
    "industry": "Streaming Technology",
    "numberOfEmployees": "25-50",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States",
      "addressLocality": "San Francisco"
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ultron Stream",
    "url": "https://ultronstream.com",
    "description": "Transform your streams with AI-powered companion characters. Get real-time commentary, audience interaction, and entertainment features that boost engagement.",
    "publisher": {
      "@type": "Organization",
      "name": "Ultron Stream"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ultronstream.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ultron Stream AI Companions",
    "description": "AI-powered streaming companion platform for content creators and streamers",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web, Windows, macOS, OBS Studio",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50000"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
    </>
  )
}