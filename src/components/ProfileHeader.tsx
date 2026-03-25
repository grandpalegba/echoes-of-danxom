import { MapPin, Globe } from "lucide-react";
import type { Candidate } from "@/data/candidates";

interface ProfileHeaderProps {
  candidate: Candidate;
}

const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  return (
    <div className="flex items-start gap-5 p-6">
      <img
        src={candidate.portrait}
        alt={candidate.name}
        className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
      />
      <div className="min-w-0">
        <h1 className="font-display text-2xl font-bold text-foreground">
          {candidate.name}
        </h1>
        <p className="text-primary font-medium">{candidate.tagline}</p>
        <p className="text-muted-foreground text-sm mt-0.5">{candidate.category}</p>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {candidate.city}, Bénin
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" />
            {candidate.languages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
