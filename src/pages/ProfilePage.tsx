import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { candidates } from "@/data/candidates";
import { userProfiles } from "@/data/profiles";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";
import RoleBadge from "@/components/profile/RoleBadge";
import RoleTabs from "@/components/profile/RoleTabs";
import VoiceCard from "@/components/orator/VoiceCard";
import MomentCard from "@/components/curator/MomentCard";
import ExplorerStats from "@/components/explorer/ExplorerStats";

const ROLE_META = {
  talent: { label: "Talent", icon: "🌟" },
  orateur: { label: "Orateur", icon: "🎧" },
  curateur: { label: "Curateur", icon: "🌿" },
  explorateur: { label: "Explorateur", icon: "🧭" },
} as const;

type RoleKey = keyof typeof ROLE_META;

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = candidates.find((c) => c.id === id);
  const profile = userProfiles.find((p) => p.id === id);

  // Resolve active roles
  const roles = profile?.roles ?? { talent: { level: "Débutant" as const } };
  const activeRoleKeys = (Object.keys(ROLE_META) as RoleKey[]).filter(
    (k) => roles[k]
  );

  const [activeRole, setActiveRole] = useState<string>(activeRoleKeys[0] || "talent");

  if (!candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Profil introuvable.</p>
      </div>
    );
  }

  const tabs = activeRoleKeys.map((k) => ({
    key: k,
    label: ROLE_META[k].label,
    icon: ROLE_META[k].icon,
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto py-6 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          {/* Header */}
          <ProfileHeader candidate={candidate} />

          {/* Role badges */}
          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {activeRoleKeys.map((k) => (
              <RoleBadge
                key={k}
                icon={ROLE_META[k].icon}
                label={ROLE_META[k].label}
                level={roles[k]!.level}
              />
            ))}
          </div>

          {/* Role navigation tabs */}
          {activeRoleKeys.length > 1 && (
            <RoleTabs tabs={tabs} activeTab={activeRole} onTabChange={setActiveRole} />
          )}

          {/* Role content */}
          <div className="p-0">
            {activeRole === "talent" && roles.talent && (
              <ProfileTabs candidate={candidate} showVote={true} />
            )}

            {activeRole === "orateur" && roles.orateur && (
              <div className="p-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Enregistrements audio
                </h3>
                {roles.orateur.data.recordings.map((rec) => (
                  <VoiceCard key={rec.id} recording={rec} />
                ))}
              </div>
            )}

            {activeRole === "curateur" && roles.curateur && (
              <div className="p-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Moments capturés
                </h3>
                {roles.curateur.data.moments.map((m) => (
                  <MomentCard key={m.id} moment={m} />
                ))}
              </div>
            )}

            {activeRole === "explorateur" && roles.explorateur && (
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Parcours Explorateur
                </h3>
                <ExplorerStats data={roles.explorateur.data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
