import { useState } from "react";
import { 
  BookOpen, Users, Film, Music, Camera, ClipboardList, 
  Palette, MapPin, Layout, Shirt, Package, Lightbulb, UserCheck,
  ChevronDown, ChevronUp
} from "lucide-react";
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
    setting: "",
    era: "",
    visualStyle: "",
    budget: "medium",
  });

  const [blueprint, setBlueprint] = useState<FilmBlueprint>({
    story: "",
    characters: "",
    characterDesign: "",
    locations: "",
    screenplay: "",
    storyboard: "",
    visualStyle: "",
    costumes: "",
    props: "",
    sound: "",
    shots: "",
    lighting: "",
    production: "",
    casting: "",
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    story: true,
    characters: true,
    characterDesign: true,
    locations: true,
    screenplay: true,
    storyboard: true,
    visualStyle: true,
    costumes: true,
    props: true,
    sound: true,
    shots: true,
    lighting: true,
    production: true,
    casting: true,
  });

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const generateBlueprint = (data: FormData) => {
    const genre = data.genre || "mystery";
    const tone = data.tone || "melancholic";
    const logline = data.logline || "A story waiting to exist.";
    const setting = data.setting || "an unnamed city";
    const era = data.era || "contemporary";
    const visualStyle = data.visualStyle || "naturalistic";
    const budget = budgetLabels[data.budget];

    setBlueprint({
      story: `A ${tone.toLowerCase()} ${genre.toLowerCase()} set in ${setting} during the ${era}.

${logline}

ACT ONE — Setup
The world is established through environmental storytelling. Our protagonist exists in a state of fragile equilibrium, unaware of the forces about to shatter their reality.

ACT TWO — Confrontation  
The inciting incident propels us into escalating conflict. Alliances form and fracture. The protagonist must evolve or be consumed by circumstance.

ACT THREE — Resolution
All threads converge. The final confrontation forces a choice that will echo beyond the credits. The world is forever changed.`,

      characters: `PROTAGONIST — "THE SEEKER"
• Core Wound: A loss they've never processed
• Want: External goal that drives the plot
• Need: Internal truth they must accept
• Arc: From denial → awareness → transformation

ANTAGONIST — "THE MIRROR"  
• Not evil, but operating from their own wounded logic
• Represents what the protagonist could become
• Their goals conflict with protagonist's at a fundamental level

CONFIDANT — "THE ANCHOR"
• Grounds the protagonist in humanity
• Challenges them with hard truths
• May have their own subplot that intersects the main arc

THE CATALYST — "THE SPARK"
• Enters protagonist's life and disrupts equilibrium
• May not survive the story
• Their presence triggers the transformation`,

      characterDesign: `PROTAGONIST VISUAL IDENTITY
• Silhouette: Distinctive, recognizable from distance
• Color Palette: Muted tones that evolve with arc (blues → warm amber)
• Wardrobe Evolution: 
  - Act 1: Constricted, formal, protective layers
  - Act 2: Disheveled, authentic, barriers breaking
  - Act 3: Stripped down, essential, true self
• Signature Element: A recurring accessory with emotional significance
• Physical Tells: Nervous habits, posture shifts, micro-expressions

ANTAGONIST VISUAL IDENTITY
• Silhouette: Sharp, imposing, geometrically precise
• Color Palette: High contrast, clinical (black/white/red accent)
• Wardrobe: Immaculate, controlled, intimidating perfection
• Signature Element: Something that hints at hidden vulnerability
• Movement Style: Deliberate, economical, predatory stillness

SUPPORTING CAST
• Each has a distinct color temperature
• Wardrobe reflects their role in protagonist's journey
• Visual motifs that echo thematic elements`,

      locations: `PRIMARY LOCATIONS

1. THE SANCTUARY — Protagonist's World
   • ${setting.charAt(0).toUpperCase() + setting.slice(1)}, ${era}
   • Claustrophobic yet familiar
   • Production Notes: Practical location, controlled lighting
   
2. THE THRESHOLD — Point of No Return
   • Transitional space (bridge, doorway, crossroads)
   • Liminal quality, neither here nor there
   • Symbolic of transformation
   
3. THE ARENA — Central Conflict Zone
   • Where protagonist confronts their truth
   • Visually distinct from all other locations
   • Environmental storytelling opportunities
   
4. THE UNDERWORLD — Lowest Point
   • Protagonist's descent into darkness
   • Oppressive, stripped of comfort
   • Minimal production design, maximum impact
   
5. THE RETURN — Transformed World
   • Same as Sanctuary but changed
   • Subtle differences signal protagonist's growth
   • Payoff for careful viewers`,

      screenplay: `INT. ${setting.toUpperCase()} — ${era.toUpperCase()} — NIGHT

FADE IN:

Silence. Then—

A single light flickers in an otherwise dark frame.

PROTAGONIST (V.O.)
Some stories begin with a choice.
Mine began with a lie I told myself.

We push slowly through the darkness toward—

                    CUT TO:

INT. PROTAGONIST'S SPACE — CONTINUOUS

Details before character. A coffee cup, cold. A photo, face-down. 
A window showing a world they've been avoiding.

PROTAGONIST emerges from shadow. Not a reveal—an admission.

PROTAGONIST
(to no one)
Another day of pretending.

The phone RINGS. Everything changes.`,

      storyboard: `OPENING SEQUENCE — 12 FRAMES

FRAME 1: BLACK
• Duration: 3 seconds
• Audio: Ambient room tone, distant city
• Purpose: Let audience settle, build anticipation

FRAME 2: EXTREME CLOSE-UP — EYES
• Slow fade in over 2 seconds
• Eyes open mid-frame
• Reflection of something unseen in pupils

FRAME 3: PULL BACK — FACE
• Gradual reveal of protagonist
• Emotion before context
• Handheld, intimate movement

FRAME 4: WIDE — ENVIRONMENT
• First establishing shot, delayed
• Character small in frame
• World feels oppressive, indifferent

FRAME 5-8: MONTAGE — RITUAL
• Daily routine in fragments
• Jump cuts, repetition
• Building sense of stasis/entrapment

FRAME 9: INCITING INCIDENT
• Static frame, sudden movement
• Break in visual rhythm
• Audience feels disruption

FRAMES 10-12: REACTION/RESPONSE
• Close-up on decision
• First step toward change
• Musical shift begins`,

      visualStyle: `OVERALL AESTHETIC: ${visualStyle.charAt(0).toUpperCase() + visualStyle.slice(1)}

COLOR THEORY
• Primary Palette: Desaturated base with strategic accent colors
• Emotional Color Map:
  - Safety/Denial: Cool blues, muted greens
  - Conflict/Awakening: Warm amber intrusions
  - Resolution: Balanced, natural spectrum
• Color Isolation: Reserve pure red for pivotal moments

COMPOSITION PRINCIPLES
• Rule of Thirds: Break it intentionally for unease
• Negative Space: Character isolation = internal state
• Leading Lines: Guide eye toward thematic elements
• Frames within Frames: Entrapment, perception layers

CAMERA PHILOSOPHY
• Objective (Wide, Static): World observing character
• Subjective (Close, Moving): Audience inside experience
• Transition between as character evolves

TEXTURE & GRAIN
• Subtle film grain for warmth
• Increase grain during emotional peaks
• Clean, sharp for moments of clarity

ASPECT RATIO
• Consider 2.39:1 for epic scope
• Or 1.33:1 for intimate claustrophobia
• Ratio shifts can mark act breaks`,

      costumes: `COSTUME DESIGN BREAKDOWN

PROTAGONIST — "THE SEEKER"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Act 1 — The Mask
• Structured jacket (armor against world)
• Neutral palette: grays, navy, cream
• Everything fits "correctly" — nothing authentic
• Subtle wear patterns show fatigue beneath surface

Act 2 — The Unraveling  
• Layers shed, jacket abandoned
• Sleeves rolled, collar undone
• Colors warm slightly as defenses drop
• Visible vulnerability in exposed arms/neck

Act 3 — The Truth
• Simple, essential garments
• One piece that survived the journey (emotional anchor)
• Color reflects internal transformation
• Imperfect fit — they've outgrown who they were

ANTAGONIST — "THE MIRROR"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Unchanging wardrobe (they don't grow)
• Pristine, tailored, intimidating precision
• Monochromatic with one unsettling accent
• Mirror protagonist's palette in corrupted form

KEY COSTUME PROPS
• Watch/ring with backstory significance
• Scarf/jacket from lost loved one
• Shoes that show journey literally`,

      props: `HERO PROPS — Story-Critical Objects

THE ARTIFACT
• What: Photograph / Letter / Heirloom object
• Significance: Physical connection to inciting incident
• Screen Time: Appears 3+ times with escalating meaning
• Notes: Aged appropriately, tactile quality essential

THE TALISMAN  
• What: Small carried object (coin, key, charm)
• Significance: Protagonist's unconscious coping mechanism
• Screen Time: Subtle appearances, major reveal in Act 3
• Notes: Actor should incorporate into natural movements

THE WEAPON
• What: Tool of confrontation (literal or metaphorical)
• Significance: Power the protagonist must learn to wield
• Screen Time: Introduced Act 2, pivotal Act 3
• Notes: May be words, not physical object

SET DRESSING PRIORITIES

Protagonist's Space:
□ Books/media that reveal inner life
□ Neglected plant (hope dying/surviving)
□ Photos strategically placed/hidden
□ Evidence of abandoned hobbies
□ Single beautiful object among chaos

Antagonist's Space:
□ Aggressive order and symmetry
□ Trophies of past victories
□ Empty picture frames (no connection)
□ Temperature: cold materials (glass, metal, stone)`,

      sound: `SOUND DESIGN PHILOSOPHY

SONIC PALETTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Base Frequency: Low hum establishing ${setting} (40-80Hz)
• Emotional Frequency: Piano/strings for character moments
• Tension Frequency: High, thin tones for dread (12-16kHz)
• Silence: Most powerful tool—earn it

DIEGETIC SOUND
• Amplify significant sounds (clock ticking, heartbeat, breath)
• Muffle ambient noise during internal moments
• Let room tone tell story of location

SCORE APPROACH
• Minimal — One memorable theme, varied
• Theme appears fragmented until resolution
• Instrumentation:
  - Act 1: Solo piano, hesitant
  - Act 2: Strings added, building
  - Act 3: Full arrangement OR stripped back

KEY MOMENTS — SILENCE
□ First appearance of antagonist
□ Moment before major decision
□ The revelation
□ Final image before credits

FOLEY PRIORITIES
• Footsteps (character, pace, surface)
• Breathing (emotional state indicator)
• Hands touching objects (connection/disconnection)
• Doors opening/closing (transitions)`,

      shots: `SHOT LIST — KEY SEQUENCES

OPENING SEQUENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1A. WIDE — Establishing (4 sec, locked off)
1B. CLOSE — Eyes opening (3 sec, slow push)
1C. MEDIUM — Protagonist in environment (6 sec, subtle pan)
1D. INSERT — Significant detail (2 sec, rack focus)

INCITING INCIDENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2A. MEDIUM TWO-SHOT — Characters meet (dialogue coverage)
2B. CLOSE — Protagonist reaction (handheld, breathing)
2C. CLOSE — Other's reveal (static, confrontational)
2D. WIDE — New dynamic established (pull back)

MIDPOINT SHIFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3A. TRACKING — Protagonist in motion (Steadicam, 15 sec)
3B. WHIP PAN — To new information
3C. STATIC — Absorbing revelation (10 sec, no cut)
3D. EXTREME CLOSE — Decision in eyes

CLIMAX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4A. WIDE — Arena established
4B. ALTERNATING CLOSE-UPS — Confrontation
4C. SINGLE TAKE — If possible, 60+ seconds
4D. FINAL FRAME — Protagonist alone, transformed

CAMERA NOTES
• Dolly for controlled emotional moments
• Handheld for chaos/intimacy
• Locked off for contemplation/dread
• Crane/drone for scope shifts only`,

      lighting: `LIGHTING DESIGN

PHILOSOPHY
Natural motivation with emotional enhancement.
Every shadow is a choice. Every highlight tells a story.

LOCATION: PROTAGONIST'S SANCTUARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Key: Practical lamps, window light
• Color Temp: Warm (3200K) for false comfort
• Shadows: Deep, hiding the truth
• Evolution: Lighting opens up as character does

LOCATION: THE ARENA (CONFRONTATION)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Key: Single hard source, theatrical
• Color Temp: Neutral/cool (5600K)
• Shadows: Dramatic, high contrast
• Characters lit separately, then together

EMOTIONAL BEATS

Denial/Safety:
→ Soft, diffused, even lighting
→ Minimal shadows, controlled

Awakening/Conflict:
→ Harder light, deeper shadows
→ Color contrast introduced

Revelation/Truth:
→ Stripping away artificial light
→ Natural light, accepting reality

SIGNATURE SHOTS
□ Protagonist half-lit (duality)
□ Antagonist backlit (obscured truth)
□ Window light at turning points
□ Practical light as emotional anchor`,

      production: `PRODUCTION OVERVIEW

BUDGET TIER: ${budget}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIMELINE
• Pre-Production: 4-6 weeks
• Principal Photography: 12-18 shooting days
• Post-Production: 8-12 weeks
• Target Delivery: 16-20 weeks total

CREW ESSENTIALS
□ Director
□ DP / Cinematographer  
□ 1st AD
□ Production Designer
□ Costume Designer
□ Sound Mixer
□ Gaffer + 2 Electrics
□ Key Grip + 2 Grips
□ Script Supervisor
□ Editor (start in production)

LOCATION STRATEGY
• 80% practical locations (cost-effective authenticity)
• 1 controlled environment for complex sequences
• Scout 3x locations for each final choice

EQUIPMENT PRIORITIES
• Camera: Shoot test with options
• Lenses: Character lenses for close work
• Sound: Prioritize clean production audio
• Lighting: LED flexibility, 1 tungsten for warmth

DAILY SCHEDULE TEMPLATE
• 6:00 — Crew call
• 6:30 — Blocking/rehearsal
• 7:00 — Light/shoot
• 13:00 — Lunch (30 min)
• 13:30 — Continue
• 18:00 — Wrap

CONTINGENCY
• Weather days: 2 built into schedule
• Scene prioritization: Critical scenes early
• Cover sets: 1 interior always ready`,

      casting: `CASTING BREAKDOWN

PROTAGONIST — "THE SEEKER"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Age: 28-42 (flexible)
Gender: Open
Key Qualities:
• Expressive eyes (close-up heavy role)
• Stillness — comfortable in silence
• Physicality that evolves (hunched → open)
• Voice: Low register, controlled, breaks at key moments

Audition Scenes:
1. Monologue — Denial speech (tests restraint)
2. Reaction — Receiving devastating news (tests vulnerability)
3. Physicality — Moving through space (tests body awareness)

ANTAGONIST — "THE MIRROR"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Age: 35-55 (presence over youth)
Gender: Open
Key Qualities:
• Charisma that unsettles
• Stillness as power
• Capable of humanity glimpses
• Voice: Precise, measured, hypnotic

SUPPORTING ROLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The Confidant (3 scenes)
• Warmth, authenticity
• Counterbalance to tension

The Catalyst (2 scenes)
• Immediate impact
• Memorable in limited time

CASTING NOTES
• Chemistry read: Protagonist + Antagonist essential
• Look for actors who listen
• Prefer theater training for dialogue scenes
• Diverse casting: Story is universal`,
    });
  };

  const hasContent = Object.values(blueprint).some(v => v);

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

            {hasContent && (
              <div className="mb-6 flex flex-wrap gap-2">
                <button 
                  onClick={() => setExpandedSections(prev => {
                    const allExpanded = Object.values(prev).every(v => v);
                    const newState: Record<string, boolean> = {};
                    Object.keys(prev).forEach(k => newState[k] = !allExpanded);
                    return newState;
                  })}
                  className="action-button !flex-none text-sm flex items-center gap-2"
                >
                  {Object.values(expandedSections).every(v => v) ? (
                    <><ChevronUp className="w-4 h-4" /> Collapse All</>
                  ) : (
                    <><ChevronDown className="w-4 h-4" /> Expand All</>
                  )}
                </button>
              </div>
            )}

            <OutputSection
              icon={<BookOpen className="w-5 h-5" />}
              title="Story & Structure"
              content={blueprint.story}
              delay={0.1}
              isExpanded={expandedSections.story}
              onToggle={() => toggleSection('story')}
            />
            <OutputSection
              icon={<Users className="w-5 h-5" />}
              title="Character Arcs"
              content={blueprint.characters}
              delay={0.15}
              isExpanded={expandedSections.characters}
              onToggle={() => toggleSection('characters')}
            />
            <OutputSection
              icon={<Palette className="w-5 h-5" />}
              title="Character Design"
              content={blueprint.characterDesign}
              delay={0.2}
              isExpanded={expandedSections.characterDesign}
              onToggle={() => toggleSection('characterDesign')}
            />
            <OutputSection
              icon={<MapPin className="w-5 h-5" />}
              title="Locations"
              content={blueprint.locations}
              delay={0.25}
              isExpanded={expandedSections.locations}
              onToggle={() => toggleSection('locations')}
            />
            <OutputSection
              icon={<Film className="w-5 h-5" />}
              title="Screenplay"
              content={blueprint.screenplay}
              delay={0.3}
              isExpanded={expandedSections.screenplay}
              onToggle={() => toggleSection('screenplay')}
            />
            <OutputSection
              icon={<Layout className="w-5 h-5" />}
              title="Storyboard Notes"
              content={blueprint.storyboard}
              delay={0.35}
              isExpanded={expandedSections.storyboard}
              onToggle={() => toggleSection('storyboard')}
            />
            <OutputSection
              icon={<Palette className="w-5 h-5" />}
              title="Visual Style Guide"
              content={blueprint.visualStyle}
              delay={0.4}
              isExpanded={expandedSections.visualStyle}
              onToggle={() => toggleSection('visualStyle')}
            />
            <OutputSection
              icon={<Shirt className="w-5 h-5" />}
              title="Costume Design"
              content={blueprint.costumes}
              delay={0.45}
              isExpanded={expandedSections.costumes}
              onToggle={() => toggleSection('costumes')}
            />
            <OutputSection
              icon={<Package className="w-5 h-5" />}
              title="Props & Set Design"
              content={blueprint.props}
              delay={0.5}
              isExpanded={expandedSections.props}
              onToggle={() => toggleSection('props')}
            />
            <OutputSection
              icon={<Music className="w-5 h-5" />}
              title="Sound Design"
              content={blueprint.sound}
              delay={0.55}
              isExpanded={expandedSections.sound}
              onToggle={() => toggleSection('sound')}
            />
            <OutputSection
              icon={<Camera className="w-5 h-5" />}
              title="Shot List"
              content={blueprint.shots}
              delay={0.6}
              isExpanded={expandedSections.shots}
              onToggle={() => toggleSection('shots')}
            />
            <OutputSection
              icon={<Lightbulb className="w-5 h-5" />}
              title="Lighting Design"
              content={blueprint.lighting}
              delay={0.65}
              isExpanded={expandedSections.lighting}
              onToggle={() => toggleSection('lighting')}
            />
            <OutputSection
              icon={<UserCheck className="w-5 h-5" />}
              title="Casting Breakdown"
              content={blueprint.casting}
              delay={0.7}
              isExpanded={expandedSections.casting}
              onToggle={() => toggleSection('casting')}
            />
            <OutputSection
              icon={<ClipboardList className="w-5 h-5" />}
              title="Production Plan"
              content={blueprint.production}
              delay={0.75}
              isExpanded={expandedSections.production}
              onToggle={() => toggleSection('production')}
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
