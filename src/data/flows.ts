import type { Flow } from "./types";

export const FLOWS: Flow[] = [
  // Exemples financiers : tu pourras en ajouter avec Copilot
  {
    id: "royalties_songwriter_publisher",
    fromActorId: "music_publisher",
    toActorId: "songwriters",
    type: "financial",
    label: "Royalties éditeur → auteur-compositeur",
    category: "secondary_rights",
  },
  {
    id: "equitable_remuneration_live_to_performers",
    fromActorId: "live_producer",
    toActorId: "performers",
    type: "financial",
    label: "Rémunération équitable",
    category: "secondary_rights",
  },
];