import { publications } from './publications';
import { grants } from './grants';
import { awards } from './awards';

// Use the same scope for the total and first-author headline counts.
// Domestic presentations are tracked in the bibliography, not in these metrics.
const peerReviewedPapers = publications.filter(
  (p) => p.type !== 'domestic-conference' && p.flags?.includes('peer-reviewed'),
);

/** Headline counts derived from the data, used for the Hero highlights strip.
 *  Computed (not hard-coded) so they stay correct as data changes. */
export const stats = {
  publications: publications.length,
  peerReviewedFirstAuthor: peerReviewedPapers.filter((p) => p.flags?.includes('first-author')).length,
  peerReviewed: peerReviewedPapers.length,
  peerReviewedJournals: peerReviewedPapers.filter((p) => p.type === 'journal').length,
  peerReviewedInternational: peerReviewedPapers.filter((p) => p.type === 'international-conference').length,
  international: publications.filter((p) => p.type === 'international-conference').length,
  hpcAllocations: grants.filter((g) => g.category === 'hpc').length,
  kakenhiPrincipalInvestigator: grants.filter(
    (g) => g.category === 'funding' && g.roleCode === 'principal-investigator',
  ).length,
  awards: awards.length,
};
