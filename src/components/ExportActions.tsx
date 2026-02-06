import { Download, FileText } from "lucide-react";
import type { FilmBlueprint } from "@/types";

interface ExportActionsProps {
  blueprint: FilmBlueprint;
}

export function ExportActions({ blueprint }: ExportActionsProps) {
  const hasContent = Object.values(blueprint).some((v) => v);
  
  if (!hasContent) return null;

  const exportAsTxt = () => {
    const content = `SCRIPTORIA FILM BLUEPRINT
========================

📖 STORY
${blueprint.story}

🫂 CHARACTERS
${blueprint.characters}

🎞 SCREENPLAY
${blueprint.screenplay}

🎧 SOUND DESIGN
${blueprint.sound}

📸 SHOT LIST
${blueprint.shots}

🗂 PRODUCTION PLAN
${blueprint.production}
`;
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "film-blueprint.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-4 mt-2 animate-fade-in">
      <button onClick={exportAsTxt} className="action-button flex items-center justify-center gap-2">
        <Download className="w-4 h-4" />
        Export TXT
      </button>
      <button className="action-button flex items-center justify-center gap-2 opacity-60 cursor-not-allowed">
        <FileText className="w-4 h-4" />
        Export PDF
      </button>
    </div>
  );
}
