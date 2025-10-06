import { JsonLd } from './structuredData';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeMap: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/terms-conditions': 'Terms & Conditions',
  '/privacy-policy': 'Privacy Policy',
  '/delete-account': 'Delete Account',
};

export const generateBreadcrumbSchema = (pathname: string): JsonLd => {
  const items: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];

  // Add current page if it's not home
  if (pathname !== '/' && routeMap[pathname]) {
    items.push({ name: routeMap[pathname], path: pathname });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://ingredicheck.app${item.path}`,
    })),
  };
};
