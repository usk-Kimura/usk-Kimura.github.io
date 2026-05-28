import { publications } from './publications';
import { grants } from './grants';

/** Headline counts derived from the data, used for the Hero highlights strip.
 *  Computed (not hard-coded) so they stay correct as data changes. */
export const stats = {
  publications: publications.length,
  firstAuthor: publications.filter((p) => p.flags?.includes('first-author')).length,
  peerReviewed: publications.filter((p) => p.flags?.includes('peer-reviewed')).length,
  international: publications.filter((p) => p.type === 'international-conference').length,
  hpcAllocations: grants.length,
};
