import type { FormData } from "@/types";

interface QuickSuggestionsProps {
  setFormData: (updater: (prev: FormData) => FormData) => void;
}

const suggestions = [
  { emoji: "🚀", label: "Sci-Fi", field: "genre" as const, value: "Sci-Fi" },
  { emoji: "❤️", label: "Romance", field: "genre" as const, value: "Romance" },
  { emoji: "🔪", label: "Thriller", field: "genre" as const, value: "Thriller" },
  { emoji: "🌑", label: "Dark & Gritty", field: "tone" as const, value: "Dark & Gritty" },
  { emoji: "✨", label: "Whimsical", field: "tone" as const, value: "Whimsical" },
  { emoji: "🎭", label: "Melancholic", field: "tone" as const, value: "Melancholic" },
];

const loglineSuggestions = [
  { emoji: "🌍", label: "Lone Wanderer", value: "A lone wanderer discovers a hidden truth that could change everything." },
  { emoji: "💫", label: "Strangers Collide", value: "Two strangers meet under impossible circumstances." },
  { emoji: "🔮", label: "Hidden Power", value: "An ordinary person discovers they have an extraordinary gift." },
];

export function QuickSuggestions({ setFormData }: QuickSuggestionsProps) {
  const applyFieldSuggestion = (field: 'genre' | 'tone', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const applyLogline = (value: string) => {
    setFormData((prev) => ({ ...prev, logline: value }));
  };

  return (
    <div className="mb-6">
      <h3 className="text-accent font-display text-lg mb-4">⚡ Quick Fill</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((s) => (
          <button
            key={s.label}
            onClick={() => applyFieldSuggestion(s.field, s.value)}
            className="suggestion-chip text-sm"
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-2">
        {loglineSuggestions.map((s) => (
          <button
            key={s.label}
            onClick={() => applyLogline(s.value)}
            className="suggestion-chip w-full text-left text-sm"
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
