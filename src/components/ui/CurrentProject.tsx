import { Link } from "@tanstack/react-router";

/**
 * CurrentProject — featured section rendered directly above Current Focus
 * on the homepage. Header treatment matches Current Focus (RedSquare + h2)
 * so the two section headers align visually.
 * The card links to the me+nu creative debrief at /creative-debrief.
 */

// Local copy of RedSquare so this component is self-contained.
// Matches the RedSquare used in index.tsx and creative-debrief.tsx.
function RedSquare() {
  return (
    <span className="inline-block size-5 shrink-0 bg-primary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
  );
}

const CurrentProject = () => {
  return (
    <section className="mb-12 sm:mb-16">
      {/* Header — same treatment as Current Focus */}
      <div className="mb-8 flex items-center gap-4">
        <RedSquare />
        <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
          Current Project
        </h2>
      </div>

      <Link
        to="/creative-debrief"
        className="group block w-full md:max-w-md transition-transform duration-300 hover:-translate-y-2"
        aria-label="me+nu — read the creative debrief"
      >
        <div className="rounded-sm overflow-hidden border-4 border-primary transition-colors duration-300 group-hover:border-secondary">
          {/* ---- Static foxglove preview (non-interactive) ---- */}
          <div
            className="pointer-events-none select-none px-6 py-12 flex flex-col items-center text-center"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, #33222e 0%, #241821 55%, #1c121a 100%)",
            }}
          >
            <div
              className="italic font-bold leading-none"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(2.75rem, 8vw, 3.5rem)",
                color: "#F4EDE3",
              }}
            >
              foxglove
            </div>

            <div
              className="mt-3 uppercase"
              style={{
                color: "#BF8A54",
                fontSize: "0.65rem",
                letterSpacing: "0.45em",
              }}
            >
              Botanical Cocktail Bar &amp; Kitchen
            </div>

            <p
              className="mt-8 max-w-xs leading-relaxed"
              style={{ color: "#D9CCD3", fontSize: "0.95rem" }}
            >
              Tell us what you're after and we'll build a list to your taste,
              or dive straight into the menu.
            </p>

            <div
              className="mt-8 px-7 py-3 rounded-xl font-semibold"
              style={{
                background: "#3a2b22",
                border: "1px solid #8a6a3f",
                color: "#F4EDE3",
                fontSize: "0.95rem",
              }}
            >
              Find My Taste &rarr;
            </div>
          </div>

          {/* ---- Card footer: project name + link cue ---- */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ background: "#1c121a", borderTop: "1px solid #33222e" }}
          >
            <span
              className="text-foreground text-lg"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              me<span className="text-primary">+</span>nu
            </span>
            <span className="text-sm font-semibold text-secondary transition-colors duration-300 group-hover:text-foreground">
              Read the creative debrief &rarr;
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default CurrentProject;
