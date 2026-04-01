import { Volume2 } from "lucide-react";
import type { CapturedMoment } from "@/data/profiles";

interface MomentCardProps {
  moment: CapturedMoment;
}

const MomentCard = ({ moment }: MomentCardProps) => (
  <div className="bg-card rounded-xl border border-border p-5 space-y-3">
    <blockquote className="text-foreground font-display text-lg italic leading-relaxed">
      « {moment.essenceText} »
    </blockquote>
    <p className="text-sm text-muted-foreground leading-relaxed">{moment.context}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs text-primary font-medium">— {moment.source}</span>
      {moment.hasAudio && (
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Volume2 className="w-3.5 h-3.5" />
          Audio disponible
        </span>
      )}
    </div>
  </div>
);

export default MomentCard;
