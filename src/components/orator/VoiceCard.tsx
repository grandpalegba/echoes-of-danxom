import { Star, Award } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import ImpactRating from "@/components/ui/ImpactRating";
import type { AudioRecording } from "@/data/profiles";

interface VoiceCardProps {
  recording: AudioRecording;
}

const VoiceCard = ({ recording }: VoiceCardProps) => (
  <div className="bg-card rounded-xl border border-border p-4 space-y-3">
    <div className="flex items-start justify-between gap-2">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-foreground truncate">{recording.title}</h4>
          {recording.isOfficialVoice && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-medium flex-shrink-0">
              <Award className="w-3 h-3" />
              Voix officielle
            </span>
          )}
        </div>
      </div>
    </div>
    <AudioPlayer duration={recording.duration} />
    <ImpactRating currentRating={recording.averageRating} totalVotes={recording.votes} />
  </div>
);

export default VoiceCard;
