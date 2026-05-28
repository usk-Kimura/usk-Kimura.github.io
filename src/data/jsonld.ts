import type { Locale } from './types';
import { profile } from './profile';
import { awards } from './awards';

const WORKS_FOR = 'Nagoya University';
const ALUMNI_OF = 'Doshisha University';

/** Rich Person + WebSite graph for the homepage / CV pages. */
export function siteGraph(locale: Locale, site: URL | string) {
  const person = {
    '@type': 'Person',
    '@id': `${new URL('/', site).toString()}#person`,
    name: profile.name.en,
    alternateName: profile.name.ja,
    jobTitle: profile.position[locale],
    description: profile.bio[locale],
    worksFor: { '@type': 'Organization', name: WORKS_FOR },
    alumniOf: { '@type': 'CollegeOrUniversity', name: ALUMNI_OF },
    knowsAbout: profile.keywords.map((k) => k.en),
    award: awards.map((a) => a.name.en),
    sameAs: profile.links.map((l) => l.href),
    email: profile.emails.map((e) => `mailto:${e.address}`),
    image: new URL('/portrait-1280.jpg', site).toString(),
    identifier: `https://orcid.org/${profile.orcid}`,
    url: new URL('/', site).toString(),
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${new URL('/', site).toString()}#website`,
    url: new URL('/', site).toString(),
    name: `${profile.name.en} — ${profile.tagline.en}`,
    inLanguage: locale === 'ja' ? 'ja' : 'en',
    author: { '@id': `${new URL('/', site).toString()}#person` },
  };

  return { '@context': 'https://schema.org', '@graph': [person, website] };
}

/** BreadcrumbList for a publication detail page. */
export function breadcrumbJsonLd(
  locale: Locale,
  pubTitle: string,
  pubUrl: string,
  site: URL | string,
) {
  const home = new URL(locale === 'ja' ? '/' : '/en/', site).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: profile.name[locale], item: home },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'ja' ? '論文' : 'Publications',
        item: `${home}#publications`,
      },
      { '@type': 'ListItem', position: 3, name: pubTitle, item: pubUrl },
    ],
  };
}
