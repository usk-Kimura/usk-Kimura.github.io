/**
 * Site-wide third-party integration switches.
 * Each field is optional — if empty, the corresponding tag/script is not
 * rendered. Tokens are not secrets (they identify the site, not the owner),
 * so committing them is safe.
 */
export const siteConfig = {
  /** Cloudflare Web Analytics beacon token. Get one from
   *  https://dash.cloudflare.com → Analytics → Web Analytics → Add a site. */
  cloudflareAnalyticsToken: '' as string,

  /** Google Search Console site-verification token (the value of `content` in
   *  the `<meta name="google-site-verification">` tag). Empty = no tag. */
  googleSiteVerification: '0j6UhSvW5XHy3CjYtVbRWZUrFDLO-AyM7oA-TLk6ny4' as string,
} as const;
