export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Samrudhi",
    "url": "https://thesamrudhi.com",
    "logo": "https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png",
    "description": "Samrudhi is a leading real estate developer in Bangalore offering premium residential projects, affordable homes, and smart property investment opportunities in Karnataka.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/samrudhi",
      "https://www.linkedin.com/company/samrudhi",
      "https://twitter.com/samrudhi"
    ]
  };
};

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Samrudhi",
    "image": "https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png",
    "@id": "https://thesamrudhi.com",
    "url": "https://thesamrudhi.com",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
};

export const getWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Samrudhi",
    "url": "https://thesamrudhi.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thesamrudhi.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const getRealEstateAgentSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Samrudhi",
    "url": "https://thesamrudhi.com",
    "description": "Leading real estate developer in Bangalore offering residential projects and property investment opportunities.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };
};

