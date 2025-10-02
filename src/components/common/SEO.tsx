import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  JsonLd,
  normalizeStructuredData,
} from "../../utils/structuredData";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  structuredData?: JsonLd | JsonLd[];
}

export default function SEO({
  title = "IngrediCheck - Smart Food Scanner for Dietary Restrictions",
  description = "Scan food labels instantly to check if they fit your dietary needs. IngrediCheck makes grocery shopping pain-free for everyone with dietary restrictions, allergies, and food preferences.",
  keywords = "food scanner, dietary restrictions, food allergies, grocery shopping, ingredient checker, food safety, dietary preferences, barcode scanner, food app",
  image = "/bgs/og-image.jpg",
  url = "https://ingredicheck.app",
  type = "website",
  author = "FUNGEE LLC",
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes("IngrediCheck") ? title : `${title} | IngrediCheck`;
  
  // Inject JSON-LD scripts directly into the DOM
  useEffect(() => {
    const structuredDataArray = normalizeStructuredData(structuredData);
    const scripts: HTMLScriptElement[] = [];
    
    structuredDataArray.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `jsonld-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });
    
    // Cleanup: remove scripts when component unmounts or data changes
    return () => {
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [structuredData]);
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="IngrediCheck" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@realsanketp" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
