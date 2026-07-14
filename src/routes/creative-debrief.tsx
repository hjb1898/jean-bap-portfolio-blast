import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  QrCode,
  BookOpen,
  UserCircle2,
  TrendingUp,
  MessageSquare,
  CalendarDays,
} from "lucide-react";

export const Route = createFileRoute("/creative-debrief")({
  head: () => ({
    meta: [
      { title: "Creative Debrief: me+nu · H. Jean-Baptiste" },
      {
        name: "description",
        content:
          "me+nu, digital experiences for restaurants and bars, and the process that led there.",
      },
      { property: "og:title", content: "Creative Debrief: me+nu" },
      {
        property: "og:description",
        content:
          "me+nu, digital experiences for restaurants and bars, and the process that led there.",
      },
      { property: "og:image", content: "https://jbography.com/og-image.png" },
      { property: "og:url", content: "https://jbography.com/creative-debrief" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Creative Debrief: me+nu" },
      {
        name: "twitter:description",
        content: "me+nu, digital experiences for restaurants and bars.",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  component: CreativeDebrief,
});

const CALENDLY_URL = "https://calendly.com/jbography";

function RedSquare() {
  return (
    <span className="inline-block size-5 shrink-0 bg-primary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
      <a
        href="mailto:howdy@jbography.com"
        className="inline-flex items-center justify-center gap-2 rounded-sm border-4 border-primary bg-primary px-5 py-3 font-display text-sm tracking-widest text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--yellow-pop)]"
      >
        <MessageSquare className="size-5" />
        LET&apos;S TALK
      </a>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-sm border-4 border-secondary bg-secondary px-5 py-3 font-display text-sm tracking-widest text-secondary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--red-pop)]"
      >
        <CalendarDays className="size-5" />
        SCHEDULE A CALL
      </a>
    </div>
  );
}

type SectionHeadProps = { num: string; title: string };

function SectionHead({ num, title }: SectionHeadProps) {
  return (
    <div className="mb-8 flex items-center gap-4 sm:mb-10">
      <RedSquare />
      <span className="font-display text-sm tracking-widest text-secondary sm:text-base">
        {num}
      </span>
      <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}

const loopSteps = [
  {
    Icon: QrCode,
    title: "Scan the code",
    body: "A table, a phone, the way in.",
    chips: [] as string[],
  },
  {
    Icon: BookOpen,
    title: "The menu comes alive",
    body: "Every dish and drink, described in full.",
    chips: ["Photos", "Sourcing", "The maker", "The why"],
  },
  {
    Icon: UserCircle2,
    title: "Concrete feedback",
    body: "The server or bartender meets an informed guest.",
    chips: [] as string[],
  },
  {
    Icon: TrendingUp,
    title: "Frictionless upselling increases",
    body: "The operator moves what needs moving.",
    chips: ["New items", "New specials", "Old overhead, out"],
    accent: true,
  },
];

const horizons = [
  {
    title: "Content journeys",
    body: "Full of the enjoyable content typically found in popular social media platforms. Staff who are already savvy with content creation can be given the chance to become a part of the marketing ventures and be given genuine equity in the creative strategy.",
  },
  {
    title: "User-generated vibes",
    body: "Where patrons and guests are encouraged to upload their very own content highlighting their special moments inside your establishment, showcasing how your concept lives and breathes within their very own lives.",
  },
  {
    title: "An additional line-up platform",
    body: "Message board, pop quizzes, team playlist to get the people going (lol).",
  },
];

function CreativeDebrief() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* decorative chaos blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-16 top-40 size-48 rotate-12 bg-secondary/10" />
        <div className="absolute right-8 top-10 size-24 rotate-45 bg-primary/15" />
        <div className="absolute bottom-24 left-1/3 size-32 -rotate-6 bg-secondary/10" />
      </div>
      {/* Back to home */}
        <Link
          to="/"
          className="group mb-10 inline-flex items-center gap-3 font-display text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground sm:mb-12 sm:text-sm"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-sm border-2 border-primary bg-background text-primary transition-all group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0_0_var(--yellow-pop)] sm:size-9">
            <ArrowLeft className="size-4 sm:size-5" />
          </span>
          HOME
        </Link>
      <div className="relative mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Hero */}
        <header className="mb-14 sm:mb-20">
          <p className="mb-5 inline-block whitespace-nowrap bg-secondary px-3 py-1 font-display text-[0.65rem] tracking-[0.2em] text-secondary-foreground sm:text-sm">
            &nbsp; me+nu &middot; CREATIVE DEBRIEF &middot; 2026&nbsp;
          </p>
          <h1 className="text-[clamp(2.75rem,11vw,7rem)] font-black leading-[0.85] tracking-tighter">
            <span className="text-primary">[</span>
            <span className="text-foreground">me</span>
            <span className="text-primary">+</span>
            <span className="text-foreground">nu</span>
            <span className="text-primary">]</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Digital experiences for restaurants and bars. <span className="text-secondary">me+nu is the custom-build platform.</span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-display text-[0.6rem] tracking-widest text-muted-foreground">
                ROLE
              </span>
              <span className="text-sm text-foreground">
                Ideation, Strategy, Prototyping, Creative Direction
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[0.6rem] tracking-widest text-muted-foreground">
                DEMO VENUE
              </span>
              <span className="text-sm text-foreground">Foxglove</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[0.6rem] tracking-widest text-muted-foreground">
                STACK
              </span>
              <span className="text-sm text-foreground">TanStack &middot; Supabase &middot; Cloudflare</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[0.6rem] tracking-widest text-muted-foreground">
                STATUS
              </span>
              <a
                href="https://me-nu.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-secondary hover:text-primary"
              >
                Live prototype <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </header>

        {/* 01 Ideation & Strategy */}
        <section className="mb-16 sm:mb-24">
          <SectionHead num="01" title="Ideation & Strategy" />

          <div className="flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              For some reason I kept doodling this idea in my notebook. And while I drew it up, I
              thought of conversations I&apos;d had in the past with owners of restaurants and
              bars who lamented the fact that they didn&apos;t feel in control of their narrative.
              Chefs and restaurateurs who created bonafide concepts, who enjoyed the profitable
              bliss of their halcyon days, when they were the disruptors on the scene. But now
              time has passed, and you can only flip the same set of tricks for so long, before
              no one cares to care.
            </p>
            <p>
              I&apos;ve had this belief for a while now that websites should come back to being
              the foreground and playground of online activity, as opposed to social media
              platforms. I&apos;ve imagined websites where one happily peruses not merely to
              retrieve information, but is educated while being entertained. The brochure nature
              of so many business websites is so trite and boring af.
            </p>
            <p>
              But what if you were to merge the two: the branded informational aspect of a
              business site with the form or playful fluency of a social media platform. Think of
              the way people play with and through information, finding stories, unearthing lore,
              clicking on pictures, learning names, hopping around with their thumbs. Like a
              platform video game, people naturally bounce around social media, finding meaning of
              phenomena sprawled across links and pages.
            </p>
            <p>
              And that was the impetus for me+nu, to create a custom-built space wherein
              something as ordinary as a menu can light up as an entry way into an adventure of
              pictures and stories and clickable leads that lead right into another funnel.
              Without fighting the algorithms and distractions found elsewhere, the world of an
              f&amp;b concept opens up, authentically, playfully.
            </p>
          </div>

          {/* The loop: mind map */}
          <div className="mt-12 max-w-xl">
            <span className="mb-5 block font-display text-[0.65rem] tracking-widest text-secondary">
              [ THE LOOP ]
            </span>
            <div className="flex flex-col">
              {loopSteps.map((step, i) => (
                <div key={step.title}>
                  <div
                    className={`rounded-sm border-4 p-5 transition-all sm:p-6 ${
                      step.accent
                        ? "border-secondary bg-secondary"
                        : "border-primary bg-electric-deep"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid size-12 shrink-0 place-items-center rounded-sm border-4 sm:size-14 ${
                          step.accent
                            ? "border-electric-deep bg-electric-deep text-secondary"
                            : "border-secondary bg-primary text-primary-foreground"
                        }`}
                      >
                        <step.Icon className="size-6 sm:size-7" />
                      </span>
                      <div>
                        <h3
                          className={`font-display text-base leading-tight sm:text-xl ${
                            step.accent ? "text-secondary-foreground" : "text-foreground"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`mt-1 text-xs sm:text-sm ${
                            step.accent ? "text-secondary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                    {step.chips.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 sm:ml-16">
                        {step.chips.map((chip) => (
                          <span
                            key={chip}
                            className={`font-display text-[0.55rem] tracking-widest px-2.5 py-1 rounded-sm border-2 ${
                              step.accent
                                ? "border-electric-deep/30 bg-electric-deep/10 text-secondary-foreground"
                                : "border-secondary/40 bg-background/5 text-muted-foreground"
                            }`}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {i < loopSteps.length - 1 && (
                    <div className="mx-auto h-6 w-1 bg-primary sm:h-8" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-10 border-l-4 border-secondary pl-5 font-display text-lg italic leading-snug text-secondary sm:text-2xl">
            A space of their own, off in a quiet corner away from algorithms and distractions.
          </blockquote>
        </section>

        {/* 02 Brand Identity */}
        <section className="mb-16 sm:mb-24">
          <SectionHead num="02" title="Brand Identity: Foxglove" />

          <div className="flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              me+nu does not really have a brand of its own, and that is the point: the brand is
              always the venue&apos;s. me+nu is the frame, the bracket in the wordmark left open
              for whoever fills it. To show what the frame could hold, I built one.
            </p>
            <p>
              To show what me+nu could do, I needed a room to do it in, so I built one out of thin
              air. Foxglove: a botanical cocktail bar and kitchen that exists nowhere and feels
              like somewhere, low light and poured herbs and a little wild around the edges.
            </p>
            <p>
              Foxglove got the full brand adventure a paying client would get. A script wordmark
              that leans forward like it is already mid-sentence. Candle cream and deep aubergine,
              amber like light through a bottle, a rose lifted from the flower it is named for.
              Fraunces in italic for the voice, quiet mono for the small print. A whole world of
              intentionality you could see, feel, and believe in.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-sm border-4 border-primary bg-electric-deep p-4">
              <img
                src="/foxglove-splash.png"
                alt="Foxglove brand lockup with tagline"
                className="w-full rounded-sm"
              />
            </figure>
            <div>
              <h3 className="mb-4 font-display text-sm tracking-widest text-secondary">
                PALETTE
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { label: "Aubergine", hex: "#4a3a42" },
                  { label: "Cream", hex: "#f4ede3" },
                  { label: "Amber", hex: "#bf8a54" },
                  { label: "Botanical green", hex: "#5a6b4f" },
                  { label: "Foxglove rose", hex: "#c89080" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1">
                    <div
                      className="aspect-square w-full rounded-sm border-2 border-primary"
                      style={{ background: s.hex }}
                    />
                    <span className="text-center font-display text-[0.5rem] leading-tight tracking-wide text-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <h3 className="mb-3 mt-8 font-display text-sm tracking-widest text-secondary">
                TYPOGRAPHY
              </h3>
              <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Fraunces</strong> &middot; italic, display
                  &amp; headings
                </p>
                <p>
                  <strong className="text-foreground">Inter</strong> &middot; body &amp; UI
                </p>
                <p>
                  <strong className="text-foreground">Space Mono</strong> &middot; labels &amp;
                  interface
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 App & Website Development */}
        <section className="mb-16 sm:mb-24">
          <SectionHead num="03" title="App & Website Development" />

          <div className="flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Then the building, and the long nights. Every screen was designed and planned
              first, worked out with Claude before anything got built. From there the full-stack
              assembly ran agentically through Claude Code, with me on every decision, reading the
              diffs and calling the changes. TanStack, Supabase, and Cloudflare underneath, with a
              quiet bot-check at the door so no guest meets a login wall.
            </p>
            <p>
              It comes to a handful of screens that do real work: a taste quiz that returns
              drinks with the reason each one fits, a Platter to save them, maker profiles that
              carry the why behind the glass, and an operator dashboard.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="rounded-sm border-4 border-primary bg-electric-deep p-6">
              <h3 className="font-display text-lg text-secondary">Find My Taste</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A quick quiz that returns drinks with the reason each one fits.
              </p>
            </article>
            <article className="rounded-sm border-4 border-primary bg-electric-deep p-6">
              <h3 className="font-display text-lg text-secondary">Matched picks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Each drink shows why it fits. Saves go to a Platter the guest can keep or pass to
                a friend.
              </p>
            </article>
            <article className="rounded-sm border-4 border-primary bg-electric-deep p-6">
              <h3 className="font-display text-lg text-secondary">Maker profiles</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The people and sources behind the menu, each given a page of their own.
              </p>
            </article>
            <article className="rounded-sm border-4 border-primary bg-electric-deep p-6">
              <h3 className="font-display text-lg text-secondary">Operator dashboard</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Analytics an operator can read: what guests looked at, saved, and shared.
              </p>
            </article>
          </div>

          {/* Dashboard mock, styled to the site */}
          <div className="mt-8 overflow-hidden rounded-sm border-4 border-secondary">
            <div className="flex items-center justify-between border-b-4 border-secondary bg-electric-deep px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-foreground">
                  me<span className="text-primary">+</span>nu
                </span>
                <span className="hidden font-display text-[0.6rem] tracking-widest text-muted-foreground sm:inline">
                  FOXGLOVE
                </span>
              </div>
              <div className="flex gap-2">
                <span className="rounded-sm border-2 border-muted-foreground/30 px-3 py-1 font-display text-[0.55rem] tracking-widest text-muted-foreground">
                  MENU
                </span>
                <span className="rounded-sm border-2 border-secondary bg-secondary px-3 py-1 font-display text-[0.55rem] tracking-widest text-secondary-foreground">
                  ANALYTICS
                </span>
              </div>
            </div>
            <div className="bg-background p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Sessions", num: "1,284", delta: "\u2191 96" },
                  { label: "Scans", num: "1,507", delta: "\u2191 112" },
                  { label: "Quiz done", num: "612", delta: "\u2191 40" },
                  { label: "Item saves", num: "438", delta: "\u2191 27" },
                ].map((k) => (
                  <div
                    key={k.label}
                    className="rounded-sm border-2 border-primary/30 bg-electric-deep/50 p-3"
                  >
                    <span className="font-display text-[0.55rem] tracking-widest text-muted-foreground">
                      {k.label.toUpperCase()}
                    </span>
                    <div className="mt-1 font-display text-xl text-foreground sm:text-2xl">
                      {k.num}
                    </div>
                    <span className="text-xs text-secondary">{k.delta}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <span className="mb-3 block font-display text-[0.6rem] tracking-widest text-muted-foreground">
                  MENU JOURNEY
                </span>
                {[
                  { label: "Viewed an item", pct: 94, val: "1.18k" },
                  { label: "Took the quiz", pct: 40, val: "612" },
                  { label: "Saved an item", pct: 36, val: "438" },
                  { label: "Shared it", pct: 0, val: "n/a" },
                ].map((row) => (
                  <div key={row.label} className="mb-2 flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs text-foreground sm:w-36 sm:text-sm">
                      {row.label}
                    </span>
                    <div className="h-3 flex-1 overflow-hidden rounded-sm bg-electric-deep/40">
                      {row.pct > 0 ? (
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${row.pct}%` }}
                        />
                      ) : (
                        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.08)_4px,rgba(255,255,255,0.08)_8px)]" />
                      )}
                    </div>
                    <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 Creative Direction */}
        <section className="mb-16 sm:mb-24">
          <SectionHead num="04" title="Creative Direction" />

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            As a prototype, this is but a stepping stone toward validating the idea that
            restaurants and bars ought to have their very own platform to concentrate their
            marketing and digital efforts.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {horizons.map((h) => (
              <article
                key={h.title}
                className="rounded-sm border-4 border-primary bg-electric-deep p-5 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[6px_6px_0_0_var(--yellow-pop)]"
              >
                <h3 className="font-display text-lg leading-tight text-secondary">{h.title}</h3>
                <p className="mt-3 text-sm leading-snug text-muted-foreground">{h.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-sm border-4 border-secondary bg-electric-deep p-6 sm:p-10">
          <h2 className="text-2xl tracking-tight text-foreground sm:text-4xl">
            Your idea deserves the same room.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            me+nu is one way of thinking through a digital experience for food and drink, start to
            finish. If you&apos;re a founder at the start of that, the start is my favorite place
            to meet.
          </p>
          <div className="mt-6">
            <CtaButtons />
          </div>
        </section>
      </div>
    </main>
  );
}
