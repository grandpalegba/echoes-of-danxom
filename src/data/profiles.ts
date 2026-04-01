import type { Candidate } from "./candidates";

export type RoleLevel = "Débutant" | "Initié" | "Confirmé" | "Maître";

export interface AudioRecording {
  id: string;
  title: string;
  duration: number; // seconds
  averageRating: number; // 1-10
  votes: number;
  isOfficialVoice?: boolean;
  audioUrl?: string;
}

export interface CapturedMoment {
  id: string;
  essenceText: string;
  context: string;
  source: string;
  hasAudio?: boolean;
  audioUrl?: string;
}

export interface ExplorerBadge {
  id: string;
  name: string;
  icon: string;
  earnedAt?: string;
}

export interface OrateurData {
  recordings: AudioRecording[];
}

export interface CurateurData {
  moments: CapturedMoment[];
}

export interface ExplorateurData {
  enigmasCompleted: number;
  totalEnigmas: number;
  badges: ExplorerBadge[];
}

export interface UserRole {
  talent?: { level: RoleLevel };
  orateur?: { level: RoleLevel; data: OrateurData };
  curateur?: { level: RoleLevel; data: CurateurData };
  explorateur?: { level: RoleLevel; data: ExplorateurData };
}

export interface UserProfile {
  id: string;
  candidate: Candidate;
  roles: UserRole;
}

// Demo profiles extending existing candidates
export const userProfiles: UserProfile[] = [
  {
    id: "koffi-ahouansou",
    candidate: null as any, // will be resolved at runtime
    roles: {
      talent: { level: "Confirmé" },
      orateur: {
        level: "Initié",
        data: {
          recordings: [
            { id: "r1", title: "Le transport, pilier du développement", duration: 55, averageRating: 7.8, votes: 24 },
            { id: "r2", title: "Ma vision pour Cotonou", duration: 42, averageRating: 8.2, votes: 31, isOfficialVoice: true },
            { id: "r3", title: "L'innovation dans la mobilité", duration: 58, averageRating: 6.9, votes: 15 },
          ],
        },
      },
      explorateur: {
        level: "Débutant",
        data: {
          enigmasCompleted: 5,
          totalEnigmas: 16,
          badges: [
            { id: "b1", name: "Premier pas", icon: "🏁" },
            { id: "b2", name: "Curieux", icon: "🔍" },
          ],
        },
      },
    },
  },
  {
    id: "senami-dossou",
    candidate: null as any,
    roles: {
      talent: { level: "Maître" },
      curateur: {
        level: "Confirmé",
        data: {
          moments: [
            { id: "m1", essenceText: "Le bois parle à qui sait écouter", context: "Parole recueillie auprès d'un maître artisan d'Abomey lors d'une session de formation.", source: "Maître Dah Aligbonon", hasAudio: true },
            { id: "m2", essenceText: "Chaque objet porte une histoire", context: "Réflexion née lors de la restauration d'un artefact ancien.", source: "Observation personnelle" },
            { id: "m3", essenceText: "Moderniser sans trahir", context: "Discussion avec des jeunes artisans sur l'évolution des techniques.", source: "Atelier collectif" },
          ],
        },
      },
    },
  },
  {
    id: "arnaud-zinsou",
    candidate: null as any,
    roles: {
      talent: { level: "Confirmé" },
      orateur: {
        level: "Confirmé",
        data: {
          recordings: [
            { id: "r4", title: "Le digital au service de l'Afrique", duration: 60, averageRating: 8.5, votes: 45, isOfficialVoice: true },
            { id: "r5", title: "Créer du contenu authentique", duration: 48, averageRating: 7.4, votes: 28 },
          ],
        },
      },
      curateur: {
        level: "Initié",
        data: {
          moments: [
            { id: "m4", essenceText: "L'image précède la réalité", context: "Constat fait en observant l'impact du branding sur les marques béninoises.", source: "Analyse personnelle" },
          ],
        },
      },
      explorateur: {
        level: "Confirmé",
        data: {
          enigmasCompleted: 12,
          totalEnigmas: 16,
          badges: [
            { id: "b3", name: "Premier pas", icon: "🏁" },
            { id: "b4", name: "Curieux", icon: "🔍" },
            { id: "b5", name: "Historien", icon: "📜" },
            { id: "b6", name: "Stratège", icon: "♟️" },
            { id: "b7", name: "Éclaireur", icon: "🔦" },
          ],
        },
      },
    },
  },
];
