export type WorldId =
  | "artists"
  | "recorded_music"
  | "live"
  | "publishing"
  | "audiovisual"
  | "other_broadcasters"
  | "state";

export interface World {
  id: WorldId;
  name: string;
  color: string; // couleur de base du monde (clair)
  order: number; // pour l'organisation spatiale / niveau
  level: 1 | 2 | 3; // niveau de "zoom" principal auquel ce monde apparaît

  // 🆕 Ajouts nécessaires pour la spatialisation
  x: number; // position horizontale en %
  y: number; // position verticale en %
  subtitle?: string; // sous-titre optionnel
}

export interface Actor {
  id: string;
  name: string;
  worldId: WorldId;
  valueChainPosition: number; // 0 = amont, 1 = aval
  level: 3; // pour rappel : les acteurs apparaissent au niveau 3
}

export type FlowType = "financial" | "contract" | "data";

export interface Flow {
  id: string;
  fromActorId: string;
  toActorId: string;
  type: FlowType;
  label: string;
  category?:
    | "primary_ip"
    | "secondary_rights"
    | "primary_labour"
    | "business_revenue"
    | "taxation";
}