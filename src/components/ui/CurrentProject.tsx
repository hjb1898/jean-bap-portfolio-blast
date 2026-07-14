import { Link } from "@tanstack/react-router";

/**
 * CurrentProject — featured section above Current Focus.
 * Renders a foxglove preview inside a card sized like the Current Focus cards.
 * The whole card links to the me+nu creative debrief at /creative-debrief.
 */
const CurrentProject = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header — matches CURRENT FOCUS treatment */}
        <h2
          className="text-4xl md:text-6xl text-foreground mb-10"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          CURRENT <span className="text-secondary">PROJECT</span>
        </h2>

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
                Tell us what you're after and we'll build a list to your
                taste, or dive straight into the menu.
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
      </div>
    </section>
  );
};

export default CurrentProject;
