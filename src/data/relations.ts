import type { AwardEntry, Publication } from './types';
import { awards } from './awards';
import { publications } from './publications';

const publicationsById = new Map<string, Publication>();

for (const publication of publications) {
  if (!publication.id) continue;
  if (publicationsById.has(publication.id)) {
    throw new Error(`Duplicate publication relation ID: ${publication.id}`);
  }
  publicationsById.set(publication.id, publication);
}

for (const award of awards) {
  if (award.relatedPublicationId && !publicationsById.has(award.relatedPublicationId)) {
    throw new Error(
      `Award references an unknown publication relation ID: ${award.relatedPublicationId}`,
    );
  }
}

/** Awards that directly recognize this publication (and all named recipients). */
export function publicationAwardsFor(publication: Publication): AwardEntry[] {
  if (!publication.id) return [];
  return awards.filter((award) => award.relatedPublicationId === publication.id);
}

/** Publication directly recognized by this award, when one is recorded. */
export function publicationForAward(award: AwardEntry): Publication | undefined {
  return award.relatedPublicationId
    ? publicationsById.get(award.relatedPublicationId)
    : undefined;
}
