import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  User,
  BookOpen,
  PenLine,
  Package,
  ArrowUpRight,
  X,
  MessageSquare,
  CalendarDays,
  Target,
  Fingerprint,
  Code,
  Compass,
} from "lucide-react";

import bookDeath from "@/assets/book-death.jpg";
import bookStupid from "@/assets/book-stupid.jpg";
import bookPoems from "@/assets/book-poems.jpg";
import bookOgre from "@/assets/book-ogre.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "H. Jean-Baptiste — Creative Partner & Strategist in Atlanta, GA" },
      {
        name: "description",
        content:
          "Atlanta-based creative partner helping founders shape ideas into brand adventures. Ideation, branding, and web/app development from H. Jean-Baptiste.",
      },
      { property: "og:title", content: "H. Jean-Baptiste — Creative Partner & Strategist" },
      {
        property: "og:description",
        content: "Helping founders shape ideas into brand adventures.",
      },
      { property: "og:image", content: "https://jbography.com/og-image.png" },
      { property: "og:url", content: "https://jbography.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "H. Jean-Baptiste — Creative Partner & Strategist" },
      { name: "twitter:description", content: "Helping founders shape ideas into brand adventures." },
      { name: "twitter:image", content: "https://jbography.com/og-image.png" },
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
    blurb: "Creativity, technology, and mental health.",
    href: "https://bdt.beehiiv.com",
  },
];

const wares = [
  {
    title: "9L",
    description: "An apparel concept that champions the ambitious.",
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
const CALENDLY_URL = "https://calendly.com/jbography";

const marqueeItems = ["Ideation", "Storytelling", "Prototyping", "Content Marketing"];

const focusAreas = [
  {
    title: "IDEATION\n& STRATEGY",
    Icon: Target,
    body: "We start with a bit of Socratic dialogue. Maybe we meet initially and you've got a fully-formed idea and we pressure-test it; or maybe it's still just a hunch that you've been pondering a while so we articulate it and walk through the logic of it together. Either way, we map out the terrain, root out any potential problems, find the objective no one else is shooting for, and discover opportunities for growth.",
  },
  {
    title: "BRAND DEVELOPMENT",
    Icon: Fingerprint,
    body: "With a clear direction, we can shape how your product or business shows up in the real world. Through logos, typography, and language, we'll create a coherent world of intentionality and meaning that people can immediately see, feel, and recognize as being authentically yours.",
  },
  {
    title: "APP & WEBSITE DEVELOPMENT",
    Icon: Code,
    body: "Here we make your digital touch points come alive. Through rapid prototypes, we can turn the abstract into something clickable. Researching, designing, testing, and iterating. When the details need nailing down, we can bring in trusted designers and developers so every pixel and line of code is soundly put together. You stay in the loop every step of the way, providing feedback.",
  },
  {
    title: "CREATIVE DIRECTION",
    Icon: Compass,
    body: "With a solid brand identity in place, we translate it into visual content that builds up emotional resonance. This means storytelling that encapsulates your professional adventure, published across specific marketing channels that reach your ideal clients and customers in the compelling ways your story needs to be told.",
  },
];

function RedSquare() {
  return (
    <span className="inline-block size-5 shrink-0 bg-primary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
};

function Modal({ title, onClose, children, maxWidth = "max-w-3xl" }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-electric-deep/80 px-5 py-10 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`relative max-h-[85vh] w-full ${maxWidth} overflow-y-auto rounded-sm border-4 border-secondary bg-background p-6 shadow-[10px_10px_0_0_var(--red-pop)] animate-scale-in sm:p-8`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-sm border-2 border-primary bg-background p-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <X className="size-5" />
        </button>
        <div className="mb-6 flex items-center gap-3">
          <RedSquare />
          <h2 className="text-2xl tracking-tight text-foreground sm:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

type WorkSection = "books" | "newsletters" | "projects";

const workTiles: { id: WorkSection; label: string; icon: React.ReactNode }[] = [
  { id: "books", label: "Books", icon: <BookOpen className="size-8 sm:size-10" /> },
  { id: "newsletters", label: "Newsletters", icon: <PenLine className="size-8 sm:size-10" /> },
  { id: "projects", label: "Projects", icon: <Package className="size-8 sm:size-10" /> },
];

function Index() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [openWork, setOpenWork] = useState<WorkSection | null>(null);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  // Drive marquee horizontally from vertical scroll position.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = marqueeRef.current;
      const group = groupRef.current;
      if (!el || !group) return;
      const repWidth = group.offsetWidth || 1;
      const offset = (window.scrollY * 0.45) % repWidth;
      el.style.transform = `translate3d(${-offset}px,0,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
          <p className="mt-6 inline-block whitespace-nowrap bg-secondary px-3 py-1 font-display text-[0.7rem] tracking-[0.2em] text-secondary-foreground sm:text-xl">
            &nbsp; CREATIVE PARTNER & STRATEGIST&nbsp;
          </p>
        </header>

        {/* Positioning line */}
        <section className="mb-12 sm:mb-16">
         <h2 className="max-w-4xl text-[clamp(1.75rem,5.5vw,3.5rem)] font-black leading-[0.95] tracking-tight text-foreground">
            Helping founders shape ideas into{" "}
            <span className="text-secondary">brand adventures.</span>
          </h2>
        </section>

        {/* Scroll-driven marquee */}
        <section className="mb-16 overflow-hidden border-y-4 border-primary bg-electric-deep py-4 sm:mb-24">
          <div ref={marqueeRef} className="flex w-max will-change-transform">
            {[0, 1, 2].map((dup) => (
              <div
                key={dup}
                ref={dup === 0 ? groupRef : undefined}
                className="flex shrink-0 items-center"
                aria-hidden={dup !== 0}
              >
                {marqueeItems.map((item) => (
                  <span key={item} className="flex items-center">
                    <span className="px-6 font-display text-xl tracking-tight text-foreground sm:text-3xl">
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
        <section className="mb-12 sm:mb-16">
          <div className="mb-8 flex items-center gap-4">
            <RedSquare />
            <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
              Current Focus
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {focusAreas.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="group flex flex-col gap-5 rounded-sm border-4 border-primary bg-electric-deep p-5 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[8px_8px_0_0_var(--yellow-pop)] sm:flex-row sm:items-start sm:gap-7 sm:p-7"
              >
                <div className="flex items-center gap-4 sm:w-64 sm:shrink-0 sm:flex-col sm:items-start">
                  <span className="grid size-16 shrink-0 place-items-center rounded-sm border-4 border-secondary bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground sm:size-20">
                    <Icon className="size-8 sm:size-10" />
                  </span>
                  <h3 className="whitespace-pre-line font-display text-xl leading-tight text-secondary sm:text-2xl">
                    {title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA below focus */}
        <section className="mb-16 sm:mb-24">
          <CtaButtons />
        </section>

        {/* Personal Work */}
        <div className="mb-8 flex items-center gap-4">
          <span className="inline-block size-5 shrink-0 bg-secondary shadow-[3px_3px_0_0_var(--electric-deep)] sm:size-6" />
          <h2 className="text-3xl tracking-tight text-foreground sm:text-5xl">
            Personal Work
          </h2>
        </div>

        {/* Work tiles */}
        <section className="grid gap-5 sm:grid-cols-3">
          {workTiles.map((tile) => (
            <button
              key={tile.id}
              type="button"
              onClick={() => setOpenWork(tile.id)}
              className="group flex flex-col items-start gap-4 rounded-sm border-4 border-primary bg-electric-deep p-6 text-left transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[8px_8px_0_0_var(--red-pop)] sm:p-8"
            >
              <span className="text-secondary transition-transform group-hover:-rotate-6">
                {tile.icon}
              </span>
              <span className="flex w-full items-center justify-between">
                <span className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                  {tile.label}
                </span>
                <ArrowUpRight className="size-6 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary" />
              </span>
            </button>
          ))}
        </section>

        <footer className="mt-16 text-center font-display text-xs tracking-[0.3em] text-muted-foreground">
          <div>© {new Date().getFullYear()} H. JEAN-BAPTISTE</div>
          <div className="mt-2">ATLANTA, GA</div>
        </footer>
      </div>

      {/* About Modal */}
      {aboutOpen && (
        <Modal title="ABOUT ME" onClose={() => setAboutOpen(false)} maxWidth="max-w-lg">
          <p className="text-lg leading-relaxed text-foreground">
            I got a top secret clearance when I was 19 yrs old, learned Arabic
            at the Defense Language Institute in Monterey, CA, and spent a few
            years as a SIGINT nerd for 5th Special Forces Group (A) in Iraq,
            but primarily in Ken-Tennessee. After getting out I spent over a
            decade drifting around: photographing things, canvassing for public
            causes, studying philosophy at GSU, creating cocktails and sometimes
            menus, even wholesaling real estate. All the while writing about what
            a mad world we live in and collaborating with passionate individuals
            interested in building creative ways to exist within their own worlds.

            What do you want to create?
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </Modal>
      )}

      {/* Books Modal */}
      {openWork === "books" && (
        <Modal title="BOOKS" onClose={() => setOpenWork(null)}>
          <div className="grid gap-6 sm:grid-cols-2">
            {books.map((book) => (
              <article
                key={book.title}
                className="group flex gap-4 rounded-sm border-2 border-primary bg-electric-deep p-4 transition-all hover:border-secondary hover:shadow-[6px_6px_0_0_var(--red-pop)]"
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
        </Modal>
      )}

      {/* Newsletters Modal */}
      {openWork === "newsletters" && (
        <Modal title="NEWSLETTERS" onClose={() => setOpenWork(null)}>
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
        </Modal>
      )}

      {/* Projects Modal */}
      {openWork === "projects" && (
        <Modal title="PROJECTS" onClose={() => setOpenWork(null)}>
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
        </Modal>
      )}
    </main>
  );
}
