import { useState } from "react";
import { Sparkles } from "lucide-react";
import type { FormData } from "@/types";

interface BlueprintFormProps {
  onGenerate: (data: FormData) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export function BlueprintForm({ onGenerate, formData, setFormData }: BlueprintFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      onGenerate(formData);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="glass-card p-7 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="🎭 Genre"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          className="glass-input px-4 py-3.5 w-full"
        />
        <input
          type="text"
          placeholder="🌙 Tone / Mood"
          value={formData.tone}
          onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
          className="glass-input px-4 py-3.5 w-full"
        />
        <input
          type="text"
          placeholder="📝 Logline"
          value={formData.logline}
          onChange={(e) => setFormData({ ...formData, logline: e.target.value })}
          className="glass-input px-4 py-3.5 w-full"
        />
        <select
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value as FormData['budget'] })}
          className="glass-input px-4 py-3.5 w-full cursor-pointer"
        >
          <option value="low">💸 Low Budget</option>
          <option value="medium">🎥 Medium Budget</option>
          <option value="high">💎 High Budget</option>
        </select>
      </div>

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="gradient-button w-full mt-6 py-4 rounded-2xl text-base font-medium flex items-center justify-center gap-2 disabled:opacity-70"
      >
        <Sparkles className={`w-5 h-5 ${isGenerating ? "animate-spin" : ""}`} />
        {isGenerating ? "Generating..." : "Generate Film Blueprint"}
      </button>
    </div>
  );
}
