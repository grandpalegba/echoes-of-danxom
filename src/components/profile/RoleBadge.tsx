import type { RoleLevel } from "@/data/profiles";

interface RoleBadgeProps {
  icon: string;
  label: string;
  level: RoleLevel;
}

const levelColors: Record<RoleLevel, string> = {
  "Débutant": "bg-secondary text-secondary-foreground",
  "Initié": "bg-primary/15 text-primary",
  "Confirmé": "bg-primary/25 text-primary",
  "Maître": "bg-primary text-primary-foreground",
};

const RoleBadge = ({ icon, label, level }: RoleBadgeProps) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${levelColors[level]}`}>
    <span>{icon}</span>
    <span>{label}</span>
    <span className="opacity-70">—</span>
    <span className="opacity-80 text-xs">{level}</span>
  </div>
);

export default RoleBadge;
