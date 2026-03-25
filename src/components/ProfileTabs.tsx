import { useState } from "react";
import { Heart, Share2, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Candidate } from "@/data/candidates";

const TAB_KEYS = ["quiJeSuis", "monHistoire", "monService", "pourquoiMoi"] as const;
const TAB_LABELS: Record<typeof TAB_KEYS[number], string> = {
  quiJeSuis: "Qui je suis",
  monHistoire: "Mon histoire",
  monService: "Mon service",
  pourquoiMoi: "Pourquoi moi",
};

interface ProfileTabsProps {
  candidate: Candidate;
  showVote?: boolean;
}

const ProfileTabs = ({ candidate, showVote = true }: ProfileTabsProps) => {
  const [activeTab, setActiveTab] = useState<typeof TAB_KEYS[number]>("quiJeSuis");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex border-b border-border">
        {TAB_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 py-3 px-2 text-sm font-medium text-center transition-colors relative ${
              activeTab === key
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {TAB_LABELS[key]}
            {activeTab === key && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Aperçu des vidéos
        </p>
        <div className="flex gap-2">
          {TAB_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                activeTab === key ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src={candidate.portrait}
                alt={TAB_LABELS[key]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-end p-2">
                <span className="text-card text-xs font-medium">{TAB_LABELS[key]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video preview */}
      <div className="px-4">
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <img
            src={candidate.portrait}
            alt={TAB_LABELS[activeTab]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20 flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 rounded-full bg-card/80 flex items-center justify-center">
              <Play className="w-6 h-6 text-foreground fill-foreground" />
            </div>
            <p className="text-card font-semibold">{TAB_LABELS[activeTab]}</p>
            <p className="text-card/80 text-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Durée max : 2 minutes
            </p>
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed">
          {candidate.tabs[activeTab]}
        </p>
      </div>

      {/* Action buttons */}
      <div className="px-6 pb-6 flex gap-3">
        {showVote && (
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <Heart className="w-4 h-4" />
            Voter pour moi
          </Button>
        )}
        <Button
          variant="outline"
          className="flex-1 gap-2"
          onClick={() => {
            const url = window.location.href;
            const text = `Découvrez le profil de ${candidate.name} sur BENINEASE !`;
            window.open(
              `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
              "_blank"
            );
          }}
        >
          <Share2 className="w-4 h-4" />
          Partager sur WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProfileTabs;
