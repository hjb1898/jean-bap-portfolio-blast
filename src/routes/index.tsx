import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  User,
  BookOpen,
  PenLine,
  Package,
  ArrowUpRight,
  X,
} from "lucide-react";

import bookDeath from "@/assets/book-death.jpg";
import bookStupid from "@/assets/book-stupid.jpg";
import bookPoems from "@/assets/book-poems.jpg";
import bookOgre from "@/assets/book-ogre.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "H. Jean-Baptiste — Writer · Strategist · Builder" },
      {
        name: "description",
        content:
          "Books, newsletters, and product concepts from H. Jean-Baptiste. Unfiltered, unapologetic energy.",
      },
      { property: "og:title", content: "H. Jean-Baptiste — Writer · Strategist · Builder" },
      {
        property: "og:description",
        content:
          "Books, newsletters, and product concepts from H. Jean-Baptiste.",
      },
    ],
  }),
  component: Index,
});

const books = [
  {
    cover: bookDeath,
    title: "In Love With the Feel of Death",
    description:
      "A collection of ten fragmented poetic movements that traces the many arcs of love. Through raw sensuality and cosmic doom, each poem builds up like a rising wave.",
  },
  {
    cover: bookStupid,
    title: "Bent Over Stupid Till We All Die Anyways",
    description:
      "A collection of stories that examines the human condition of Stupidity—the anxious, eager, uncertainly passionate disposition of everyday being.",
  },
  {
    cover: bookPoems,
    title: "Stupid Poems",
    description:
      "Poetry written from the perspective of an English professor who's fascinated with what it means to stupidly be lost in \"the world.\"",
  },
  {
    cover: bookOgre,
    title: "How to Moan Like an Ogre",
    description:
      "A collection of poems written over five years in classrooms, barrooms, trains, Parisian hotels. About watching the world and being silently crazy in it.",
  },
];

const writings = [
  {
    platform: "Medium",
    name: "H. Jean-Baptiste",
    blurb: "Literary playhouse of poetry, short stories, and creative nonfiction.",
    href: "https://medium.com/@jbography",
  },
  {
    platform: "Substack",
    name: "PONSAYS",
    blurb: "Thoughts about the being of things",
    href: "https://substack.com/@ponsays",
  },
  {
    platform: "Beehiiv",
    name: "Building · Dwelling · Thinking",
    blurb: "Creativity, technology, and mental Health.",
    href: "https://bdt.beehiiv.com",
  },
];

const wares = [
  {
    title: "9L",
    description: "An apparel concept that champions ambition.",
  },
  {
    title: "Neurodivergent Productivity App (prototype)",
    description:
      "A tool that gradually entices users to get addicted to their goals and projects.",
  },
  {
    title: "Restaurant Menu Analyzer (prototype)",
    description:
      "A web application for restaurant marketing centered around menu education.",
  },
];

// Easy to swap: update this URL with the real Calendly link.
const CALENDLY_URL = "https://calendly.com/hjeanbaptiste";

const marqueeItems = ["Strategy", "Storytelling", "Prototyping", "Creative Direction"];

const focusAreas = [
  {
    title: "FOUNDER STRATEGY",
    accent: "bg-[radial-gradient(circle_at_20%_20%,var(--red-pop),transparent_55%),radial-gradient(circle_at_80%_70%,var(--yellow-pop),transparent_50%),var(--electric-deep)]",
    body: "Most founders aren't missing an idea. They've got something real, just buried under what they think they're supposed to say. I help dig it out. I spent my Army years as a cryptologic linguist doing signals intelligence, listening through noise for the thing that matters. Strategy works the same way: find the objective, test what holds, debrief honestly. Part tactics, part story.",
  },
  {
    title: "BRAND DEVELOPMENT",
    accent: "bg-[radial-gradient(circle_at_75%_25%,var(--yellow-pop),transparent_55%),radial-gradient(circle_at_25%_80%,var(--red-pop),transparent_50%),var(--electric-deep)]",
    body: "The story's usually already there, sitting in what you've built and how you treat people. I just notice it and give it shape. I care about intentionality, about how people actually exist inside their own worlds. A brand done right is that world made legible. I picked up a version of this in bars and restaurants, watching how a menu's design or a room's feel quietly shaped what people chose.",
  },
  {
    title: "APP & WEBSITE DEVELOPMENT",
    accent: "bg-[linear-gradient(115deg,var(--red-pop)_0%,transparent_45%),linear-gradient(285deg,var(--yellow-pop)_0%,transparent_45%),var(--electric-deep)]",
    body: "I prototype fast, so we're reacting to something real in days instead of talking in the abstract for weeks. I run it like a sprint: build, test, adjust. The Army organization in me, planning and debriefing each round. When the details need nailing down, I bring in partner designers and developers. Cuts cost, cuts time, smooths the stretch between idea and finished thing.",
  },
  {
    title: "CREATIVE DIRECTION",
    accent: "bg-[radial-gradient(circle_at_50%_15%,var(--yellow-pop),transparent_45%),radial-gradient(circle_at_15%_85%,var(--red-pop),transparent_45%),radial-gradient(circle_at_85%_85%,var(--red-bright),transparent_45%),var(--electric-deep)]",
    body: "Making sure everything you put out actually says what you mean. Typography is an argument. Color takes a position. Ten years of writing taught me form and feeling can't be separated. The hospitality instinct does the rest: reading a room, knowing how aesthetics pull people in and hold them there.",
  },
];


function RedSquare() {
  return (
    <span className="inline-block size-5 shrink-0 bg-primary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
  );
}

type AccordionSectionProps = {
  id: string;
  title: string;
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function AccordionSection({ title, icon, open, onToggle, children }: AccordionSectionProps) {
  return (
    <div className="border-y-4 border-primary">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-4 py-6 text-left transition-colors hover:bg-electric-deep"
      >
        <RedSquare />
        <span className="text-muted-foreground transition-colors group-hover:text-secondary">
          {icon}
        </span>
        <h2 className="flex-1 text-3xl tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
        <ChevronDown
          className={`size-8 shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-180 text-secondary" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [openSection, setOpenSection] = useState<string | null>("works");
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggle = (id: string) => setOpenSection((cur) => (cur === id ? null : id));

  return (
    <main className="min-h-screen bg-background">
      {/* decorative chaos blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-16 top-40 size-48 rotate-12 bg-secondary/10" />
        <div className="absolute right-8 top-10 size-24 rotate-45 bg-primary/15" />
        <div className="absolute bottom-24 left-1/3 size-32 -rotate-6 bg-secondary/10" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Hero */}
        <header className="mb-14 sm:mb-20">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-[clamp(2.75rem,11vw,7rem)] font-black leading-[0.85] tracking-tighter">
              <span className="block text-primary">H.</span>
              <span className="block text-foreground">JEAN-BAPTISTE</span>
            </h1>
            <button
              type="button"
              onClick={() => setAboutOpen(true)}
              aria-label="About H. Jean-Baptiste"
              className="group mt-2 flex shrink-0 flex-col items-center gap-1 rounded-sm border-4 border-secondary bg-electric-deep p-3 text-secondary transition-all hover:-rotate-3 hover:bg-secondary hover:text-secondary-foreground sm:p-4"
            >
              <User className="size-7 sm:size-9" />
              <span className="font-display text-[0.6rem] tracking-widest sm:text-xs">
                ABOUT
              </span>
            </button>
          </div>
          <p className="mt-6 inline-block bg-secondary px-3 py-1 font-display text-sm tracking-[0.2em] text-secondary-foreground sm:text-xl">
            &nbsp; CREATIVE PARTNER & STRATEGIST&nbsp;
          </p>
        </header>

        {/* Positioning line */}
        <section className="mb-12 sm:mb-16">
          <h2 className="max-w-4xl text-[clamp(1.75rem,5.5vw,3.5rem)] font-black leading-[0.95] tracking-tight text-foreground">
            Helping founders shape ideas into{" "}
            <span className="text-primary">brands</span>,{" "}
            <span className="text-secondary">products</span>, and{" "}
            <span className="text-primary">ventures</span>.
          </h2>
        </section>

        {/* Auto-scrolling marquee */}
        <section className="mb-16 overflow-hidden border-y-4 border-primary bg-electric-deep py-4 sm:mb-24">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {marqueeItems.map((item) => (
                  <span key={item} className="flex items-center">
                    <span className="px-6 font-display text-xl tracking-tight text-secondary sm:text-3xl">
                      {item}
                    </span>
                    <span className="size-3 shrink-0 rotate-45 bg-primary sm:size-4" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8 flex items-center gap-4">
            <RedSquare />
            <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
              Current Focus
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="group flex flex-col overflow-hidden rounded-sm border-4 border-primary bg-electric-deep transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[8px_8px_0_0_var(--yellow-pop)]"
              >
                <div className={`h-28 w-full ${area.accent}`} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl leading-tight text-secondary sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {area.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Personal Work */}
        <div className="mb-8 flex items-center gap-4">
          <span className="inline-block size-5 shrink-0 bg-secondary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
          <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
            Personal Work
          </h2>
        </div>

        {/* Accordions */}
        <section>
          <AccordionSection
            id="works"

            title="WORKS"
            icon={<BookOpen className="size-6 sm:size-7" />}
            open={openSection === "works"}
            onToggle={() => toggle("works")}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {books.map((book) => (
                <article
                  key={book.title}
                  className="group flex gap-4 rounded-sm border-2 border-primary bg-electric-deep p-4 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[6px_6px_0_0_var(--red-pop)]"
                >
                  <img
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-28 shrink-0 rounded-sm border-2 border-primary object-cover transition-colors group-hover:border-secondary sm:size-32"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-base leading-tight text-secondary sm:text-lg">
                      {book.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-muted-foreground">
                      {book.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            id="writings"
            title="WRITINGS"
            icon={<PenLine className="size-6 sm:size-7" />}
            open={openSection === "writings"}
            onToggle={() => toggle("writings")}
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {writings.map((w) => (
                <a
                  key={w.platform}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-sm border-2 border-primary bg-electric-deep p-5 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[6px_6px_0_0_var(--yellow-pop)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs tracking-widest text-primary transition-colors group-hover:text-secondary">
                      {w.platform}
                    </span>
                    <ArrowUpRight className="size-5 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-3 font-display text-lg leading-tight text-foreground">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.blurb}</p>
                </a>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            id="wares"
            title="WARES"
            icon={<Package className="size-6 sm:size-7" />}
            open={openSection === "wares"}
            onToggle={() => toggle("wares")}
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {wares.map((ware) => (
                <article
                  key={ware.title}
                  className="group rounded-sm border-2 border-primary bg-electric-deep p-5 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[6px_6px_0_0_var(--red-pop)]"
                >
                  <h3 className="font-display text-xl leading-tight text-secondary">
                    {ware.title}
                  </h3>
                  <p className="mt-3 text-sm leading-snug text-muted-foreground">
                    {ware.description}
                  </p>
                </article>
              ))}
            </div>
          </AccordionSection>
        </section>

        <footer className="mt-16 text-center font-display text-xs tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} H. JEAN-BAPTISTE
        </footer>
      </div>

      {/* About Modal */}
      {aboutOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-electric-deep/80 px-5 animate-fade-in"
          onClick={() => setAboutOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="About H. Jean-Baptiste"
        >
          <div
            className="relative w-full max-w-lg rounded-sm border-4 border-secondary bg-background p-8 shadow-[10px_10px_0_0_var(--red-pop)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAboutOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-sm border-2 border-primary p-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <X className="size-5" />
            </button>
            <div className="mb-4 flex items-center gap-3">
              <RedSquare />
              <h2 className="text-3xl tracking-tight text-foreground">ABOUT ME</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              Former cryptologic linguist turned writer and creative
              strategist.&nbsp;I work with individuals and brands to brainstorm,
              create, and test out fresh ideas for their worlds. Let’s collab
              and turn your concept into reality.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
