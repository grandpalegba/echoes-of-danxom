import { Volume2, Calendar } from "lucide-react";
import AudioPlayer from "@/components/orator/AudioPlayer";
import ImpactRating from "@/components/ui/ImpactRating";
import type { CapturedMoment } from "@/data/profiles";

interface MomentCardProps {
  moment: CapturedMoment;
}

const MomentCard = ({ moment }: MomentCardProps) => {
  const formattedDate = new Date(moment.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-card rounded-xl border border-border p-5 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-primary font-medium">— {moment.source}</span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          {formattedDate}
        </span>
      </div>

      <blockquote className="text-foreground font-display text-lg italic leading-relaxed">
        « {moment.essenceText} »
      </blockquote>

      <p className="text-sm text-muted-foreground leading-relaxed">{moment.context}</p>

      {moment.hasAudio && moment.audioDuration && (
        <div className="pt-1">
          <AudioPlayer duration={moment.audioDuration} />
        </div>
      )}

      <ImpactRating currentRating={moment.averageRating} totalVotes={moment.votes} />
    </div>
  );
};

export default MomentCard;
