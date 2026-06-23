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
    platform: "PONSAYS",
    name: "Thoughts about the being of things",
    blurb: "Thoughts about being of things",
    href: "https://substack.com/@ponsays",
  },
  {
    platform: "Beehiiv",
    name: "Building · Dwelling · Thinking",
    blurb: "Notes on making, living, and the authentic space in between.",
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
            BUILDING · DWELLING · THINKING
          </p>
        </header>

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
              <h2 className="text-3xl tracking-tight text-foreground">ABOUT</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              Ex-cryptologic linguist specialized in Arabic and GSM/CDMA
              technologies. Now writing and collaborating with individuals
              interested in building creative ways to exist within their worlds.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
