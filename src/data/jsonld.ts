import type { Locale } from './types';
import { profile } from './profile';
import { awards } from './awards';
import { L, localeMeta, localizePath } from '~/i18n/locale';
import { t } from '~/i18n/ui';

const WORKS_FOR = 'Nagoya University';
const ALUMNI_OF = 'Doshisha University';

/** Rich Person + WebSite graph for the homepage / CV pages. */
export function siteGraph(locale: Locale, site: URL | string) {
  const person = {
    '@type': 'Person',
    '@id': `${new URL('/', site).toString()}#person`,
    name: profile.name.en,
    alternateName: profile.name.ja,
    jobTitle: L(profile.position, locale),
    description: L(profile.bio, locale),
    worksFor: { '@type': 'Organization', name: WORKS_FOR },
    alumniOf: { '@type': 'CollegeOrUniversity', name: ALUMNI_OF },
    knowsAbout: profile.keywords.map((k) => k.en),
    award: awards.map((a) => a.name.en),
    sameAs: profile.links.map((l) => l.href),
    email: profile.emails.map((e) => `mailto:${e.address}`),
    image: new URL('/portrait-1280.jpg', site).toString(),
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'ORCID', value: profile.orcid },
      {
        '@type': 'PropertyValue',
        propertyID: 'e-Rad Researcher Number',
        value: profile.identifiers.researcherNumber,
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'J-GLOBAL ID',
        value: profile.identifiers.jGlobalId,
      },
    ],
    url: new URL('/', site).toString(),
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${new URL('/', site).toString()}#website`,
    url: new URL('/', site).toString(),
    name: `${profile.name.en} — ${profile.tagline.en}`,
    inLanguage: localeMeta[locale].lang,
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
  const home = new URL(localizePath('/', locale), site).toString();
  const publicationIndex = new URL(localizePath('/publications/', locale), site).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L(profile.name, locale), item: home },
      {
        '@type': 'ListItem',
        position: 2,
        name: t(locale).sections.publications,
        item: publicationIndex,
      },
      { '@type': 'ListItem', position: 3, name: pubTitle, item: pubUrl },
    ],
  };
}
