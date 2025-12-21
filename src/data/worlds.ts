import type { World } from "./types";

export const WORLDS: World[] = [
  {
    id: "artists",
    name: "Artistes",
    color: "#f97373", // rouge clair
    order: 0,
    level: 1,
  },
  {
    id: "recorded_music",
    name: "Musique enregistrée",
    color: "#22c55e", // vert clair
    order: 1,
    level: 1,
  },
  {
    id: "live",
    name: "Live",
    color: "#fb923c", // orange clair
    order: -1,
    level: 1,
  },
  {
    id: "publishing",
    name: "Édition musicale",
    color: "#3b82f6", // bleu clair
    order: 2,
    level: 1,
  },
  {
    id: "audiovisual",
    name: "Audiovisuel",
    color: "#facc15", // jaune
    order: -2,
    level: 2,
  },
  {
    id: "other_broadcasters",
    name: "Autres diffuseurs",
    color: "#9ca3af", // gris
    order: 3,
    level: 2,
  },
  {
    id: "state",
    name: "État",
    color: "#a855f7", // violet
    order: -3,
    level: 2,
  },
];