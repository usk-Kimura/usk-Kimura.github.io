export type Locale = 'ja' | 'en';

export type LocalizedString = Record<Locale, string>;

export type EmailEntry = {
  address: string;
  label: LocalizedString;
  /** If set, this address is rendered as the primary CTA. */
  primary?: boolean;
};

export type Profile = {
  name: LocalizedString;
  reading: LocalizedString;
  affiliation: LocalizedString;
  position: LocalizedString;
  degree: LocalizedString;
  tagline: LocalizedString;
  bio: LocalizedString;
  emails: [EmailEntry, ...EmailEntry[]];
  orcid: string;
  researchmap: string;
  links: {
    label: LocalizedString;
    href: string;
  }[];
  keywords: LocalizedString[];
  fields: LocalizedString[];
  /** Public-facing portrait (square crop, served via <picture> at 480/640/1280). */
  portrait?: {
    src: string; // fallback JPEG src
    alt: LocalizedString;
  };
  /** "Looking for next position" banner. Set to `null` once a position is
   *  secured so the badge stops rendering site-wide. */
  openToOpportunities?: {
    /** Short text for the start-time (e.g. "2027年度以降"). */
    startFrom: LocalizedString;
    /** What kind of position is being sought. */
    detail: LocalizedString;
  } | null;
};

export type CareerEntry = {
  start: string; // YYYY-MM
  end?: string; // YYYY-MM or undefined for current
  organization: LocalizedString;
  role: LocalizedString;
};

export type EducationEntry = {
  start: string;
  end?: string;
  school: LocalizedString;
  program: LocalizedString;
};

export type AwardEntry = {
  date: string; // YYYY-MM
  name: LocalizedString;
  organization: LocalizedString;
  work: LocalizedString;
  recipients: string;
};

export type PublicationType =
  | 'journal'
  | 'international-conference'
  | 'domestic-conference'
  | 'workshop'
  | 'technical-report'
  | 'other';

export type PublicationFlag = 'peer-reviewed' | 'first-author' | 'corresponding-author' | 'invited';

export type Publication = {
  /** Title rendered as published. Academic convention is to keep this as-is
   *  across languages so citations remain searchable. */
  title: string;
  /** Language of `title`. Used so a Japanese title rendered inside an English
   *  page still gets the right `lang=...` for screen readers / hyphenation. */
  titleLang?: Locale;
  authors: string;
  /** Primary venue string (as published). */
  venue: string;
  /** Optional English rendering of the venue, used on the English page when
   *  the primary `venue` is in Japanese. */
  venueEn?: string;
  year: number;
  month?: number;
  pages?: string;
  type: PublicationType;
  flags?: PublicationFlag[];
  doi?: string;
  url?: string;
  /** Author-written abstract. Scholar's inclusion policy says detail pages
   *  with bare bibliographic data may not be indexed — fill this in to
   *  improve odds of getting picked up. Partial localization is allowed:
   *  only `en` is fine for an English paper. */
  abstract?: Partial<LocalizedString>;
};

/** Distinguishes a money grant from non-monetary support (compute allocation,
 *  fellowship, etc.). Lets us label cards accurately without lumping HPC
 *  allocations under "Grants". */
export type GrantCategory = 'funding' | 'hpc' | 'fellowship';

export type GrantEntry = {
  title: LocalizedString;
  funder: LocalizedString;
  start: string;
  end: string;
  role?: LocalizedString;
  category: GrantCategory;
};

export type ServiceEntry = {
  title: LocalizedString;
  kind: LocalizedString;
  organization?: LocalizedString;
  start: string;
  end?: string;
};
