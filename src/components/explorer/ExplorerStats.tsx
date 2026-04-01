import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react";
import type { ExplorateurData } from "@/data/profiles";

interface ExplorerStatsProps {
  data: ExplorateurData;
}

const ExplorerStats = ({ data }: ExplorerStatsProps) => {
  const progressPercent = (data.enigmasCompleted / data.totalEnigmas) * 100;

  return (
    <div className="space-y-6">
      {/* Progression */}
      <div className="bg-card rounded-xl border border-border p-5 space-y-4">
        <h4 className="font-medium text-foreground">Progression</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Énigmes résolues</span>
            <span className="font-medium text-foreground">{data.enigmasCompleted} / {data.totalEnigmas}</span>
          </div>
          <Progress value={progressPercent} className="h-2.5" />
        </div>
      </div>

      {/* Badges */}
      {data.badges.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-5 space-y-4">
          <h4 className="font-medium text-foreground">Badges obtenus</h4>
          <div className="flex flex-wrap gap-2">
            {data.badges.map((badge) => (
              <div
                key={badge.id}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm"
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Revealed Enigmas - Treasure Gallery */}
      {data.revealedEnigmas && data.revealedEnigmas.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Trésors révélés</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.revealedEnigmas.map((enigma) => (
              <div
                key={enigma.id}
                className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-secondary overflow-hidden">
                  <img
                    src={enigma.imageUrl}
                    alt={enigma.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h5 className="font-display font-semibold text-foreground text-sm">{enigma.name}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{enigma.significance}</p>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-medium pt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {enigma.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorerStats;
