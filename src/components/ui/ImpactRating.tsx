import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface ImpactRatingProps {
  currentRating: number;
  totalVotes: number;
}

const ImpactRating = ({ currentRating, totalVotes }: ImpactRatingProps) => {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleRate = (value: number[]) => {
    setUserRating(value[0]);
  };

  const submitRating = () => {
    if (userRating !== null) {
      setHasVoted(true);
    }
  };

  return (
    <div className="space-y-2 pt-2 border-t border-border">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Évaluer l'impact</span>
        <span className="font-medium text-foreground">
          {currentRating.toFixed(1)} / 10 — {totalVotes} évaluation{totalVotes > 1 ? "s" : ""}
        </span>
      </div>
      {hasVoted ? (
        <p className="text-xs text-primary font-medium">
          ✓ Merci pour votre évaluation ({userRating}/10)
        </p>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground w-4">1</span>
          <Slider
            defaultValue={[5]}
            min={1}
            max={10}
            step={1}
            onValueChange={handleRate}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground w-4">10</span>
          <button
            onClick={submitRating}
            disabled={userRating === null}
            className="text-xs font-medium px-3 py-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {userRating ?? "–"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImpactRating;
