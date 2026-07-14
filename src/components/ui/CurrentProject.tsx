import { Link } from "@tanstack/react-router";

/**
 * CurrentProject — featured section rendered directly above Current Focus.
 * Card layout mirrors the Focus cards: horizontal, full-width, same border
 * and hover treatment. Foxglove preview occupies the left "icon" slot,
 * project name and description occupy the right "body" slot.
 * Links to the me+nu creative debrief at /creative-debrief.
 */

function RedSquare() {
  return (
    <span className="inline-block size-5 shrink-0 bg-primary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
  );
}

const CurrentProject = () => {
  return (
    <section className="mb-12 sm:mb-16">
      {/* Header — matches Current Focus */}
      <div className="mb-8 flex items-center gap-4">
        <RedSquare />
        <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
          Current Project
        </h2>
      </div>

      <Link
        to="/creative-debrief"
        aria-label="me+nu — read the creative debrief"
        className="group flex flex-col gap-5 rounded-sm border-4 border-primary bg-electric-deep p-5 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[8px_8px_0_0_var(--yellow-pop)] sm:flex-row sm:items-start sm:gap-7 sm:p-7"
      >
        {/* Left column: foxglove preview (occupies the "icon" slot) */}
        <div className="sm:w-64 sm:shrink-0">
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
              style={{
                color: "#BF8A54",
                fontSize: "0.55rem",
                letterSpacing: "0.4em",
              }}
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
        </div>

        {/* Right column: project title + body + link cue */}
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="font-display text-xl leading-tight text-secondary sm:text-2xl">
            me<span className="text-primary">+</span>nu
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            A way of thinking up digital experiences for restaurants and bars.
            Every dish and drink, described in full: photos, sourcing, the
            maker, the why. Foxglove is the demo venue built to prove it.
          </p>
          <span className="mt-2 font-display text-sm text-secondary transition-colors group-hover:text-foreground">
            Read the creative debrief &rarr;
          </span>
        </div>
      </Link>
    </section>
  );
};

export default CurrentProject;
