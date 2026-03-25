import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Candidate } from "@/data/candidates";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  return (
    <Link
      to={`/candidat/${candidate.id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={candidate.portrait}
          alt={candidate.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground">
          {candidate.name}
        </h3>
        <p className="text-primary font-medium text-sm">{candidate.category}</p>
        <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>{candidate.city}</span>
        </div>
      </div>
    </Link>
  );
};

export default CandidateCard;
