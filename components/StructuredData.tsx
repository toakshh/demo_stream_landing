export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ready Player Me",
    "description": "Cross-game avatar platform for developers",
    "url": "https://readyplayer.me",
    "logo": "https://readyplayer.me/images/images-rpm-logo.svg",
    "sameAs": [
      "https://twitter.com/readyplayerme",
      "https://linkedin.com/company/readyplayerme",
      "https://github.com/readyplayerme"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "founder": {
      "@type": "Person",
      "name": "Timmu Tõke"
    },
    "foundingDate": "2020",
    "industry": "Gaming Technology",
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Estonia",
      "addressLocality": "Tallinn"
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ready Player Me",
    "url": "https://readyplayer.me",
    "description": "Thousands of companies use Ready Player Me developer tools to give their users high-quality personalized avatars that increase retention and engagement.",
    "publisher": {
      "@type": "Organization",
      "name": "Ready Player Me"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://readyplayer.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ready Player Me Avatar Creator",
    "description": "Cross-game avatar creation platform and SDK for game developers",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web, Unity, Unreal Engine, React Native",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "25000"
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