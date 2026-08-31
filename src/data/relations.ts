import type { AwardEntry, Presentation, Publication } from './types';
import { awards } from './awards';
import { presentations } from './presentations';
import { publications } from './publications';

const publicationsById = new Map<string, Publication>();
const presentationsById = new Map<string, Presentation>();

for (const publication of publications) {
  if (!publication.id) continue;
  if (publicationsById.has(publication.id)) {
    throw new Error(`Duplicate publication relation ID: ${publication.id}`);
  }
  publicationsById.set(publication.id, publication);
}

for (const presentation of presentations) {
  if (presentationsById.has(presentation.id)) {
    throw new Error(`Duplicate presentation relation ID: ${presentation.id}`);
  }
  presentationsById.set(presentation.id, presentation);
}

for (const award of awards) {
  if (award.relatedPublicationId && !publicationsById.has(award.relatedPublicationId)) {
    throw new Error(
      `Award references an unknown publication relation ID: ${award.relatedPublicationId}`,
    );
  }
  if (award.relatedPresentationId && !presentationsById.has(award.relatedPresentationId)) {
    throw new Error(
      `Award references an unknown presentation relation ID: ${award.relatedPresentationId}`,
    );
  }
  if (award.relatedPublicationId && award.relatedPresentationId) {
    throw new Error('An award cannot reference both a publication and a presentation');
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

/** Awards that directly recognize this non-archival presentation. */
export function presentationAwardsFor(presentation: Presentation): AwardEntry[] {
  return awards.filter((award) => award.relatedPresentationId === presentation.id);
}

/** Non-archival presentation directly recognized by this award, if recorded. */
export function presentationForAward(award: AwardEntry): Presentation | undefined {
  return award.relatedPresentationId
    ? presentationsById.get(award.relatedPresentationId)
    : undefined;
}
