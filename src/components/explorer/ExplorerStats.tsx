import { Progress } from "@/components/ui/progress";
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
            <span className="text-muted-foreground">Énigmes complétées</span>
            <span className="font-medium text-foreground">{data.enigmasCompleted} / {data.totalEnigmas}</span>
          </div>
          <Progress value={progressPercent} className="h-2.5" />
        </div>
        <p className="text-xs text-muted-foreground">
          {progressPercent >= 75
            ? "🔥 Excellent ! Tu approches de la fin du parcours."
            : progressPercent >= 50
            ? "💪 Beau parcours ! Continue ainsi."
            : "🧭 L'aventure ne fait que commencer."}
        </p>
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
    </div>
  );
};

export default ExplorerStats;
