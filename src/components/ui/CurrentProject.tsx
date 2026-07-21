import { Link } from "@tanstack/react-router";

/**
 * CurrentProject — featured section rendered directly above Current Focus.
 * Shows the active projects as full-width cards that mirror the Focus cards
 * (same border and hover treatment). Each card carries its own project's
 * brand in the left "icon" slot; name + description sit in the right slot.
 * Add or remove a <Link> block to change how many projects are featured.
 */

function RedSquare() {
  return (
    <span className="inline-block size-5 shrink-0 bg-primary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
  );
}

// Left-slot preview for Mixtape of the Week — the app's paper + violet ticket.
function MixtapePreview() {
  return (
    <div
      className="pointer-events-none select-none flex flex-col items-center text-center rounded-sm px-4 py-8 border-4 border-secondary"
      style={{ background: "#f3f0e8" }}
    >
      <div
        className="uppercase"
        style={{
          color: "#6a5ae0",
          fontFamily: "ui-monospace, 'Space Mono', monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.32em",
        }}
      >
        Doors Open &middot; Admit One
      </div>
      <div
        className="mt-3 font-bold uppercase leading-none"
        style={{
          color: "#17151a",
          fontFamily: "ui-monospace, 'Space Mono', monospace",
          fontSize: "clamp(1.9rem, 6vw, 2.5rem)",
          letterSpacing: "-0.01em",
        }}
      >
        M.O.W.
      </div>
      <div
        className="mt-2 uppercase"
        style={{
          color: "#56535c",
          fontFamily: "ui-monospace, 'Space Mono', monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.28em",
        }}
      >
        Mixtape of the Week
      </div>
      <div
        className="mt-5 rounded-lg px-4 py-2 uppercase"
        style={{
          background: "#6a5ae0",
          color: "#f3f0e8",
          fontFamily: "ui-monospace, 'Space Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.14em",
        }}
      >
        &#8470; 001 &middot; Admit One
      </div>
    </div>
  );
}

// Left-slot preview for me+nu — Foxglove's aubergine + amber.
function FoxglovePreview() {
  return (
    <div
      className="pointer-events-none select-none flex flex-col items-center text-center rounded-sm px-4 py-8 border-4 border-secondary"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #33222e 0%, #241821 55%, #1c121a 100%)",
      }}
    >
      <div
        className="italic font-bold leading-none"
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
          color: "#F4EDE3",
        }}
      >
        foxglove
      </div>
      <div
        className="mt-2 uppercase"
        style={{ color: "#BF8A54", fontSize: "0.55rem", letterSpacing: "0.4em" }}
      >
        Botanical Cocktail Bar
      </div>
      <div
        className="mt-5 px-4 py-2 rounded-lg font-semibold"
        style={{
          background: "#3a2b22",
          border: "1px solid #8a6a3f",
          color: "#F4EDE3",
          fontSize: "0.75rem",
        }}
      >
        Find My Taste &rarr;
      </div>
    </div>
  );
}

const cardClasses =
  "group flex flex-col gap-5 rounded-sm border-4 border-primary bg-electric-deep p-5 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[8px_8px_0_0_var(--yellow-pop)] sm:flex-row sm:items-start sm:gap-7 sm:p-7";

const CurrentProject = () => {
  return (
    <section className="mb-12 sm:mb-16">
      {/* Header — matches Current Focus */}
      <div className="mb-8 flex items-center gap-4">
        <RedSquare />
        <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
          Current Projects
        </h2>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Mixtape of the Week */}
        <Link
          to="/creative-debrief/mixtape-of-the-week"
          aria-label="Mixtape of the Week — read the creative debrief"
          className={cardClasses}
        >
          <div className="sm:w-64 sm:shrink-0">
            <MixtapePreview />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="font-display text-xl leading-tight text-secondary sm:text-2xl">
              Mixtape of the Week
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A weekly online mixtape and a space for underground music. One
              curated tape a week, with the artists on it clickable right from
              the setlist.
            </p>
            <span className="mt-2 font-display text-sm text-secondary transition-colors group-hover:text-foreground">
              Read the creative debrief &rarr;
            </span>
          </div>
        </Link>

        {/* me+nu */}
        <Link
          to="/creative-debrief/me-nu"
          aria-label="me+nu — read the creative debrief"
          className={cardClasses}
        >
          <div className="sm:w-64 sm:shrink-0">
            <FoxglovePreview />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="font-display text-xl leading-tight text-secondary sm:text-2xl">
              me<span className="text-primary">+</span>nu
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Digital experiences for restaurants and bars: a menu that opens
              into photos, sourcing, and the makers behind each dish. Foxglove
              is the demo venue built to prove it.
            </p>
            <span className="mt-2 font-display text-sm text-secondary transition-colors group-hover:text-foreground">
              Read the creative debrief &rarr;
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CurrentProject;
