import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { candidates } from "@/data/candidates";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";

const CandidateProfile = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = candidates.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Candidat introuvable.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto py-6 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux candidats
        </Link>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <ProfileHeader candidate={candidate} />
          <ProfileTabs candidate={candidate} showVote={true} />
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
