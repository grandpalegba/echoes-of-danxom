import { useState } from "react";
import { Search } from "lucide-react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";

const categories = [
  "Tous",
  ...Array.from(new Set(candidates.map((c) => c.category))),
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = candidates.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      activeCategory === "Tous" || c.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-10 text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          BENINEASE
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Concours des Talents du Bénin
        </p>
      </header>

      {/* Search */}
      <div className="max-w-md mx-auto px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un candidat, une catégorie…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="max-w-5xl mx-auto px-4 mb-8 flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Aucun candidat trouvé.
          </p>
        )}
      </main>
    </div>
  );
};

export default Index;
