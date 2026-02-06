import { useState } from "react";
import { BookOpen, Users, Film, Music, Camera, ClipboardList } from "lucide-react";
import { Hero } from "@/components/Hero";
import { BlueprintForm } from "@/components/BlueprintForm";
import { OutputSection } from "@/components/OutputSection";
import { QuickSuggestions } from "@/components/QuickSuggestions";
import { TeamSuggestions } from "@/components/TeamSuggestions";
import { ExportActions } from "@/components/ExportActions";
import type { FormData, FilmBlueprint } from "@/types";

const budgetLabels = {
  low: "💸 Low Budget",
  medium: "🎥 Medium Budget",
  high: "💎 High Budget",
};

const Index = () => {
  const [formData, setFormData] = useState<FormData>({
    genre: "",
    tone: "",
    logline: "",
    budget: "medium",
  });

  const [blueprint, setBlueprint] = useState<FilmBlueprint>({
    story: "",
    characters: "",
    screenplay: "",
    sound: "",
    shots: "",
    production: "",
  });

  const generateBlueprint = (data: FormData) => {
    const genre = data.genre || "mystery";
    const tone = data.tone || "melancholic";
    const logline = data.logline || "A story waiting to exist.";
    const budget = budgetLabels[data.budget];

    setBlueprint({
      story: `A ${tone.toLowerCase()} ${genre.toLowerCase()} narrative that explores human emotion through silence and tension.

${logline}

The story unfolds across three acts, each revealing deeper layers of truth and consequence. Visual metaphors interweave with dialogue to create a tapestry of meaning that rewards attentive viewers.`,

      characters: `• Protagonist: layered, conflicted, quietly brave
  - Internal struggle that mirrors the external conflict
  - A defining flaw that becomes their strength

• Antagonist: subtle, psychological threat
  - Motivations rooted in understandable pain
  - Mirror to the protagonist's darkest possibilities

• Supporting Cast: emotionally grounding
  - Each serves a distinct thematic purpose
  - Relationships that challenge and change the lead`,

      screenplay: `INT. DIMLY LIT ROOM – NIGHT

The air is still. Dust particles float in a single beam of moonlight.

A character breathes—shallow, uncertain.

                    CHARACTER
          (barely a whisper)
          Everything is about to change.

BEAT.

They reach for something just out of frame.
Everything changes.`,

      sound: `Minimal piano motifs – sparse, haunting melodies
Low-frequency ambience – creating visceral tension
Silence used as impact – the most powerful tool

Diegetic sounds amplified for emotional effect:
  • Footsteps echoing
  • Breath catching
  • Paper rustling

Score swells reserved for key emotional beats only.`,

      shots: `1. WIDE ATMOSPHERIC OPENER
   - Establishes mood before character
   - Slow dolly or locked-off static frame

2. SLOW PUSH-IN CLOSE-UP
   - Eyes tell the story
   - 24fps for dreamlike quality

3. STATIC FRAME WITH EMOTIONAL WEIGHT
   - Let the actor fill the silence
   - Duration creates tension

4. HANDHELD INTIMACY
   - For moments of vulnerability
   - Slightly unstable = human

5. SYMBOLIC INSERT SHOTS
   - Objects that carry meaning
   - Visual motifs that recur`,

      production: `Budget Tier: ${budget}
Timeline: 3–4 weeks pre-production, 2 weeks principal photography
Crew Size: Small, precise, creative (12-15 key positions)

Key Milestones:
  Week 1-2: Casting, location scouting
  Week 3: Rehearsals, shot list refinement
  Week 4: Final prep, equipment tests
  Week 5-6: Principal photography
  Week 7+: Post-production begins

Notes: Prioritize natural lighting where possible. Scout for locations with character. Build time for actor improvisation.`,
    });
  };

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlueprintForm
              onGenerate={generateBlueprint}
              formData={formData}
              setFormData={setFormData}
            />

            <OutputSection
              icon={<BookOpen className="w-5 h-5" />}
              title="Story"
              content={blueprint.story}
              delay={0.2}
            />
            <OutputSection
              icon={<Users className="w-5 h-5" />}
              title="Characters"
              content={blueprint.characters}
              delay={0.3}
            />
            <OutputSection
              icon={<Film className="w-5 h-5" />}
              title="Screenplay"
              content={blueprint.screenplay}
              delay={0.4}
            />
            <OutputSection
              icon={<Music className="w-5 h-5" />}
              title="Sound Design"
              content={blueprint.sound}
              delay={0.5}
            />
            <OutputSection
              icon={<Camera className="w-5 h-5" />}
              title="Shot List"
              content={blueprint.shots}
              delay={0.6}
            />
            <OutputSection
              icon={<ClipboardList className="w-5 h-5" />}
              title="Production Plan"
              content={blueprint.production}
              delay={0.7}
            />

            <ExportActions blueprint={blueprint} />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* Quick suggestions */}
              <div className="glass-card p-5">
                <QuickSuggestions setFormData={(updater) => setFormData(updater(formData))} />
              </div>

              {/* Team suggestions */}
              <div className="glass-card p-5 min-h-[500px]">
                <TeamSuggestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
