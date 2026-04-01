import type { Candidate } from "./candidates";

export type RoleLevel = "Débutant" | "Initié" | "Confirmé" | "Maître";

export interface AudioRecording {
  id: string;
  title: string;
  duration: number;
  averageRating: number;
  votes: number;
  isOfficialVoice?: boolean;
  audioUrl?: string;
}

export interface CapturedMoment {
  id: string;
  essenceText: string;
  context: string;
  source: string;
  date: string;
  hasAudio?: boolean;
  audioDuration?: number;
  audioUrl?: string;
  averageRating: number;
  votes: number;
}

export interface RevealedEnigma {
  id: string;
  name: string;
  imageUrl: string;
  significance: string;
  location: string;
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
  revealedEnigmas: RevealedEnigma[];
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

export const userProfiles: UserProfile[] = [
  {
    id: "koffi-ahouansou",
    candidate: null as any,
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
          revealedEnigmas: [
            { id: "e1", name: "Récade royale de Glèlè", imageUrl: "/placeholder.svg", significance: "Symbole de l'autorité royale, la récade est un sceptre porté par les messagers du roi. Celle de Glèlè représente un lion, son totem.", location: "Musée du Quai Branly, Paris" },
            { id: "e2", name: "Trône du roi Ghezo", imageUrl: "/placeholder.svg", significance: "Trône portatif soutenu par quatre crânes humains, symbole de la puissance militaire du royaume.", location: "Musée d'Abomey, Bénin" },
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
            { id: "m1", essenceText: "Le bois parle à qui sait écouter", context: "Parole recueillie auprès d'un maître artisan d'Abomey lors d'une session de formation.", source: "Maître Dah Aligbonon", date: "2024-11-15", hasAudio: true, audioDuration: 45, averageRating: 8.5, votes: 18 },
            { id: "m2", essenceText: "Chaque objet porte une histoire", context: "Réflexion née lors de la restauration d'un artefact ancien.", source: "Observation personnelle", date: "2024-10-22", averageRating: 7.2, votes: 12 },
            { id: "m3", essenceText: "Moderniser sans trahir", context: "Discussion avec des jeunes artisans sur l'évolution des techniques.", source: "Atelier collectif", date: "2024-09-08", hasAudio: true, audioDuration: 58, averageRating: 9.1, votes: 27 },
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
            { id: "m4", essenceText: "L'image précède la réalité", context: "Constat fait en observant l'impact du branding sur les marques béninoises.", source: "Analyse personnelle", date: "2025-01-10", hasAudio: false, averageRating: 6.8, votes: 9 },
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
          revealedEnigmas: [
            { id: "e3", name: "Récade royale de Glèlè", imageUrl: "/placeholder.svg", significance: "Symbole de l'autorité royale, la récade est un sceptre porté par les messagers du roi. Celle de Glèlè représente un lion, son totem.", location: "Musée du Quai Branly, Paris" },
            { id: "e4", name: "Trône du roi Ghezo", imageUrl: "/placeholder.svg", significance: "Trône portatif soutenu par quatre crânes humains, symbole de la puissance militaire du royaume.", location: "Musée d'Abomey, Bénin" },
            { id: "e5", name: "Statue du roi Behanzin", imageUrl: "/placeholder.svg", significance: "Statue mi-homme mi-requin représentant la devise du roi : 'Le requin qui trouble l'eau'. Symbole de résistance contre la colonisation.", location: "Musée du Quai Branly, Paris" },
            { id: "e6", name: "Portes du palais royal de Djimè", imageUrl: "/placeholder.svg", significance: "Bas-reliefs sculptés racontant les hauts faits des rois. Chaque panneau est un chapitre d'histoire.", location: "Palais royaux d'Abomey, Bénin (UNESCO)" },
            { id: "e7", name: "Asen cérémoniel", imageUrl: "/placeholder.svg", significance: "Autel portatif en métal dédié aux ancêtres. Chaque Asen est unique et raconte la vie du défunt honoré.", location: "Musée Ethnographique de Porto-Novo" },
            { id: "e8", name: "Bocio protecteur", imageUrl: "/placeholder.svg", significance: "Figure vodun enchaînée et cloutée servant de gardien spirituel. Utilisé pour protéger les lieux sacrés.", location: "Musée du Quai Branly, Paris" },
            { id: "e9", name: "Tissu appliqué royal", imageUrl: "/placeholder.svg", significance: "Tapisserie narrative cousue à la main, représentant les devises et symboles des rois du Danxomè.", location: "Musée d'Abomey, Bénin" },
            { id: "e10", name: "Sabre de cérémonie d'Agadja", imageUrl: "/placeholder.svg", significance: "Arme rituelle du roi conquérant qui unifia le Danxomè en prenant le contrôle du port d'Allada.", location: "Collection privée, Bénin" },
            { id: "e11", name: "Masque Guèlèdè", imageUrl: "/placeholder.svg", significance: "Masque porté lors de cérémonies honorant les mères. Patrimoine immatériel reconnu par l'UNESCO.", location: "Musée de Kétou, Bénin" },
            { id: "e12", name: "Tambour royal Kpanlingan", imageUrl: "/placeholder.svg", significance: "Tambour sacré utilisé uniquement lors des cérémonies royales. Sa voix porte les messages des ancêtres.", location: "Palais royaux d'Abomey, Bénin" },
          ],
        },
      },
    },
  },
];
