import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/creative-debrief/mixtape-of-the-week")({
  head: () => ({
    meta: [
      { title: "Creative Debrief: Mixtape of the Week \u00b7 H. Jean-Baptiste" },
      {
        name: "description",
        content:
          "Mixtape of the Week, a weekly online mixtape and a space for underground music, and the process that led there.",
      },
      { property: "og:title", content: "Creative Debrief: Mixtape of the Week" },
      {
        property: "og:description",
        content:
          "A weekly online mixtape. A space for keeping the music, and the scene, alive.",
      },
      {
        property: "og:image",
        content: "https://mixtape.jbography.com/art/deadbeat-summer.jpg",
      },
      {
        property: "og:url",
        content: "https://jbography.com/creative-debrief/mixtape-of-the-week",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Creative Debrief: Mixtape of the Week" },
      {
        name: "twitter:description",
        content: "A weekly online mixtape. A space for underground music.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  component: MixtapeDebrief,
});

// Self-contained, scoped debrief. All styles live under `.mowd`, so this
// route's ticket-world look never leaks into the rest of the site.
const CSS = `.mowd{
    --paper:#f3f0e8;
    --card:#fbfaf6;
    --ink:#17151a;
    --ink-2:#56535c;
    --muted:#928e87;
    --violet:#6a5ae0;
    --violet-deep:#4a3cc0;
    --lav:#b7abea;
    --lav-soft:#d9d2f4;
    --red:#d9432e;
    --red-soft:#f4ddd6;
    --hair:#e4dfd4;
    --dot:#cfc9bc;
    --display:'Space Mono',ui-monospace,monospace;
    --body:'Inter',system-ui,sans-serif;
    --wrap:1120px;
  }
.mowd, .mowd *{box-sizing:border-box}
.mowd{
    margin:0;background:var(--paper);color:var(--ink);
    font-family:var(--body);font-size:17px;line-height:1.62;
    -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:hidden;
  }
.mowd a{color:inherit}
.mowd img{max-width:100%;display:block}
.mowd ::selection{background:var(--violet);color:#fff}
.mowd .wrap{max-width:var(--wrap);margin:0 auto;padding:0 28px}
.mowd .mono{font-family:var(--display)}
.mowd /* ---------- top bar ---------- */
  .topbar{position:sticky;top:0;z-index:40;background:rgba(243,240,232,0.86);backdrop-filter:blur(10px);border-bottom:1px solid var(--hair)}
.mowd .topbar .wrap{display:flex;align-items:center;justify-content:space-between;height:56px}
.mowd .home{font-family:var(--display);font-size:12px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;color:var(--ink);display:inline-flex;align-items:center;gap:.5em}
.mowd .home:hover{color:var(--violet)}
.mowd .home .arrow{transition:transform .2s ease}
.mowd .home:hover .arrow{transform:translateX(-3px)}
.mowd .eyebrow{font-family:var(--display);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.mowd .eyebrow b{color:var(--violet);font-weight:700}
.mowd /* ---------- ticket hero ---------- */
  .hero{padding:60px 0 38px}
.mowd .ticket{display:grid;grid-template-columns:1.55fr .95fr;background:var(--card);border:1px solid var(--hair);border-radius:8px;overflow:hidden;box-shadow:0 30px 60px -40px rgba(74,60,192,.4);position:relative;animation:rise .7s cubic-bezier(.2,.7,.2,1) both}
@keyframes rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.mowd .stub-main{padding:38px 40px 34px}
.mowd .stub-flag{font-family:var(--display);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);display:flex;gap:12px;align-items:center}
.mowd .stub-flag .dot{width:7px;height:7px;border-radius:50%;background:var(--violet);box-shadow:0 0 0 3px rgba(106,90,224,.18)}
.mowd .wordmark{font-family:var(--display);font-weight:700;font-size:clamp(40px,7vw,82px);line-height:.94;letter-spacing:-.01em;text-transform:uppercase;margin:20px 0 4px;color:var(--ink)}
.mowd .wordmark .thin{display:block;font-size:.34em;letter-spacing:.14em;color:var(--violet);margin-top:8px}
.mowd .lede{font-size:clamp(16px,2.3vw,20px);line-height:1.5;max-width:36ch;color:var(--ink-2);margin:16px 0 0;font-weight:500}
.mowd .lede b{color:var(--violet);font-weight:700}
.mowd .admit{margin-top:28px;display:inline-flex;align-items:center;gap:12px;font-family:var(--display);font-size:12px;letter-spacing:.22em;text-transform:uppercase;border:2px solid var(--ink);border-radius:4px;padding:9px 16px;transform:rotate(-1.2deg);color:var(--ink)}
.mowd .admit .no{color:var(--violet);font-weight:700}
.mowd /* counterfoil */
  .stub-side{background:#f4f1ea;padding:34px 34px 30px;border-left:2px dashed var(--dot);position:relative}
.mowd .stub-side::before, .mowd .stub-side::after{content:"";position:absolute;left:-13px;width:24px;height:24px;border-radius:50%;background:var(--paper)}
.mowd .stub-side::before{top:-13px}
.mowd .stub-side::after{bottom:-13px}
.mowd .meta-row{padding:11px 0;border-bottom:1px solid var(--hair)}
.mowd .meta-row:first-child{padding-top:0}
.mowd .meta-row:last-child{border-bottom:0;padding-bottom:0}
.mowd .meta-k{font-family:var(--display);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.mowd .meta-v{font-size:15px;font-weight:600;color:var(--ink);margin-top:3px;line-height:1.35}
.mowd .meta-v a{color:var(--violet);text-decoration:none;border-bottom:1px solid rgba(106,90,224,.35)}
.mowd .meta-v a:hover{color:var(--violet-deep)}
.mowd .barcode{display:flex;gap:2px;height:32px;margin-top:20px;align-items:flex-end}
.mowd .barcode i{display:block;width:3px;background:var(--ink);height:100%}
.mowd .barcode i:nth-child(3n){height:70%}
.mowd .barcode i:nth-child(4n){height:88%;width:2px}
.mowd .barcode i:nth-child(2n){width:2px}
.mowd .barcode i:nth-child(5n){height:60%}
.mowd /* ---------- perforation divider ---------- */
  .perf{position:relative;height:1px;margin:0;border:0;background:repeating-linear-gradient(to right,var(--dot) 0 7px,transparent 7px 15px)}
.mowd .perf::before, .mowd .perf::after{content:"";position:absolute;top:50%;transform:translateY(-50%);width:20px;height:20px;border-radius:50%;background:var(--paper);border:1px solid var(--hair)}
.mowd .perf::before{left:-10px}
.mowd .perf::after{right:-10px}
.mowd /* ---------- sections ---------- */
  section{padding:74px 0}
.mowd .sec-head{display:flex;align-items:baseline;gap:20px;margin-bottom:30px}
.mowd .sec-num{font-family:var(--display);font-weight:700;font-size:clamp(28px,4.4vw,44px);line-height:.9;color:var(--violet);letter-spacing:-.02em}
.mowd .sec-title{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:clamp(24px,4vw,44px);line-height:.98;letter-spacing:-.02em;margin:0;color:var(--ink)}
.mowd .sec-title .accent{color:var(--violet)}
.mowd .prose{max-width:66ch}
.mowd .prose p{margin:0 0 20px;color:var(--ink-2)}
.mowd .prose p:last-child{margin-bottom:0}
.mowd .prose .drop::first-letter{font-family:var(--display);font-weight:700;float:left;font-size:2.9em;line-height:.74;padding:8px 12px 0 0;color:var(--violet)}
.mowd /* side A / side B */
  .tape{margin-top:42px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.mowd .side{padding:24px 24px 26px;border-radius:7px;position:relative}
.mowd .side.a{background:var(--card);border:1px solid var(--hair)}
.mowd .side.b{background:var(--violet);color:#fff}
.mowd .side-tag{font-family:var(--display);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--violet)}
.mowd .side.b .side-tag{color:#d9d2f4}
.mowd .side h4{font-family:var(--body);font-weight:700;font-size:19px;margin:12px 0 8px;letter-spacing:-.01em}
.mowd .side.a h4{color:var(--ink)}
.mowd .side p{margin:0;font-size:15px;line-height:1.55}
.mowd .side.a p{color:var(--ink-2)}
.mowd .side.b p{color:#e9e5fb}
.mowd .side .arrow-note{position:absolute;top:22px;right:24px;font-family:var(--display);font-size:11px;letter-spacing:.14em;color:var(--muted)}
.mowd .side.b .arrow-note{color:#c4baf0}
.mowd /* ---------- quote ticket stub ---------- */
  .quote-stub{margin:52px auto 0;max-width:760px;position:relative;background:var(--card);border:2px solid var(--ink);border-radius:10px;display:grid;grid-template-columns:auto 1fr;overflow:hidden;box-shadow:8px 8px 0 0 var(--violet)}
.mowd .qs-side{background:var(--ink);color:var(--card);display:flex;align-items:center;justify-content:center;padding:0 18px;writing-mode:vertical-rl;transform:rotate(180deg);font-family:var(--display);font-weight:700;letter-spacing:.28em;text-transform:uppercase;font-size:12px}
.mowd .qs-body{padding:30px 34px;position:relative}
.mowd .qs-body::before{content:"";position:absolute;left:-1px;top:0;bottom:0;width:2px;background:repeating-linear-gradient(to bottom,var(--dot) 0 6px,transparent 6px 12px)}
.mowd .qs-tag{font-family:var(--display);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);display:flex;gap:10px;align-items:center}
.mowd .qs-quote{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:clamp(20px,3.4vw,34px);line-height:1.02;letter-spacing:-.01em;color:var(--ink);margin:14px 0 0}
.mowd .qs-quote .q{color:var(--violet)}
.mowd .qs-foot{margin-top:16px;display:flex;justify-content:space-between;align-items:center;font-family:var(--display);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.mowd .qs-barcode{display:flex;gap:2px;height:20px;align-items:flex-end}
.mowd .qs-barcode i{width:2px;background:var(--ink);height:100%}
.mowd .qs-barcode i:nth-child(3n){height:60%}
.mowd .qs-barcode i:nth-child(2n){height:82%}
.mowd /* ---------- identity ---------- */
  .brand-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:36px;align-items:start;margin-top:38px}
.mowd .brand-lead{max-width:52ch}
.mowd .brand-lead p{color:var(--ink-2)}
.mowd .character{background:var(--card);border:1px solid var(--hair);border-radius:8px;padding:26px 26px 26px;position:relative;overflow:hidden;box-shadow:0 20px 40px -34px rgba(74,60,192,.5)}
.mowd .character::after{content:"";position:absolute;right:-34px;bottom:-34px;width:150px;height:150px;border-radius:50%;background:var(--lav-soft)}
.mowd .char-tag{font-family:var(--display);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--violet)}
.mowd .char-name{font-family:var(--display);font-weight:700;font-size:clamp(28px,4.4vw,40px);line-height:.94;text-transform:uppercase;margin:12px 0 2px;color:var(--ink);position:relative;z-index:1}
.mowd .char-name .aka{display:block;font-size:.4em;color:var(--violet);letter-spacing:.06em;margin-top:6px}
.mowd .character p{font-size:15px;line-height:1.55;color:var(--ink-2);margin:14px 0 0;position:relative;z-index:1}
.mowd .theme-toggle{display:flex;gap:8px;margin:18px 0 0;position:relative;z-index:1}
.mowd .theme-toggle span{font-family:var(--display);font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:6px 13px;border-radius:20px;border:1px solid var(--hair);color:var(--muted)}
.mowd .theme-toggle span.on{background:var(--ink);color:var(--card);border-color:var(--ink)}
.mowd .spec{margin-top:42px;display:grid;grid-template-columns:1fr 1fr;gap:40px}
.mowd .spec h5{font-family:var(--display);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin:0 0 18px;font-weight:700}
.mowd .swatches{display:flex;flex-wrap:wrap;gap:14px}
.mowd .sw{width:100px}
.mowd .sw .chip{height:54px;border-radius:5px;border:1px solid var(--hair)}
.mowd .sw .nm{font-family:var(--display);font-size:10px;letter-spacing:.04em;margin-top:8px;color:var(--ink);text-transform:uppercase}
.mowd .sw .hex{font-family:var(--display);font-size:10px;color:var(--muted);margin-top:1px}
.mowd .type-row{padding:14px 0;border-bottom:1px solid var(--hair)}
.mowd .type-row:last-child{border-bottom:0}
.mowd .type-row .big{color:var(--ink)}
.mowd .type-row .lab{font-family:var(--display);font-size:11px;letter-spacing:.1em;color:var(--muted);text-transform:uppercase;margin-top:6px}
.mowd .t-mono-lg{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:24px;letter-spacing:-.01em}
.mowd .t-mono{font-family:var(--display);font-weight:700;font-size:20px;letter-spacing:.06em}
.mowd .t-inter{font-family:var(--body);font-weight:700;font-size:24px;letter-spacing:-.01em}
.mowd /* ---------- development: app recreations ---------- */
  .artifact{margin-top:30px;border:1px solid var(--hair);border-radius:10px;overflow:hidden;background:var(--card);box-shadow:0 24px 50px -40px rgba(74,60,192,.45)}
.mowd .artifact-cap{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid var(--hair);background:#efece4}
.mowd .artifact-cap .lbl{font-family:var(--display);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.mowd .artifact-cap .lbl b{color:var(--violet)}
.mowd /* app player recreation */
  .app{background:#f4f1ea;padding:18px 20px 8px}
.mowd .app-top{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}
.mowd .app-mark{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:14px;letter-spacing:-.01em;border:2px solid var(--violet);border-radius:8px;padding:8px 14px;color:var(--ink)}
.mowd .app-controls{display:flex;align-items:center;gap:14px}
.mowd .app-toggle{display:inline-flex;border:1px solid var(--hair);border-radius:20px;overflow:hidden;background:var(--card)}
.mowd .app-toggle span{font-family:var(--display);font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:6px 12px;color:var(--muted)}
.mowd .app-toggle span.on{background:var(--ink);color:var(--card)}
.mowd .app-doors{font-family:var(--display);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.mowd .setlbl{font-family:var(--display);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin:18px 0 4px}
.mowd .rows{display:flex;flex-direction:column}
.mowd .row{display:grid;grid-template-columns:30px 1fr auto;gap:12px;align-items:center;padding:9px 0;border-bottom:1px solid var(--hair)}
.mowd .row:last-child{border-bottom:0}
.mowd .row .rn{font-family:var(--display);font-size:12px;color:var(--muted)}
.mowd .row .mid{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:center;min-width:0}
.mowd .row .ti{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:14px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mowd .row .ar{font-family:var(--display);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;white-space:nowrap}
.mowd .row .leader{border-bottom:2px dotted var(--dot);height:1px;min-width:24px}
.mowd .row .du{font-family:var(--display);font-size:12px;color:var(--muted)}
.mowd .row.now .ti{color:var(--violet)}
.mowd .row.now .rn{color:var(--violet)}
.mowd .row .play{color:var(--violet);font-size:11px}
.mowd .app-bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;margin-top:6px;padding:14px 4px 16px;border-top:1px solid var(--hair)}
.mowd .nowtrk .ti2{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:12px;color:var(--ink)}
.mowd .nowtrk .ar2{font-family:var(--display);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-top:2px}
.mowd .transport{display:flex;align-items:center;gap:14px}
.mowd .tbtn{color:var(--ink)}
.mowd .tbtn.main{width:38px;height:38px;border-radius:50%;background:var(--violet);color:#fff;display:grid;place-items:center}
.mowd .scrub{display:flex;align-items:center;gap:10px;justify-self:end;width:100%;max-width:280px}
.mowd .scrub .tm{font-family:var(--display);font-size:10px;color:var(--muted)}
.mowd .scrub .bar{flex:1;height:4px;border-radius:2px;background:var(--hair);overflow:hidden}
.mowd .scrub .bar i{display:block;height:100%;width:44%;background:var(--violet)}
.mowd /* admin dashboard recreation */
  .adm{background:var(--card);padding:0}
.mowd .adm-top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px;border-bottom:1px solid var(--hair);flex-wrap:wrap}
.mowd .adm-brand{display:flex;align-items:center;gap:10px}
.mowd .adm-brand .m{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:13px;color:var(--ink)}
.mowd .adm-brand .slash{font-family:var(--display);font-size:11px;color:var(--muted);border:1px solid var(--hair);border-radius:5px;padding:2px 8px}
.mowd .adm-nav{display:flex;gap:8px}
.mowd .adm-nav a{font-family:var(--body);font-size:13px;font-weight:600;padding:6px 14px;border-radius:6px;text-decoration:none}
.mowd .adm-nav .ghost{border:1px solid var(--red);color:var(--red)}
.mowd .adm-nav .solid{background:var(--red);color:#fff}
.mowd .adm-live{display:flex;align-items:center;gap:16px;padding:16px 20px;border-bottom:1px solid var(--hair);flex-wrap:wrap}
.mowd .adm-live .lw{font-family:var(--display);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}
.mowd .adm-live .lt{font-family:var(--body);font-style:italic;font-weight:800;font-size:19px;color:var(--ink)}
.mowd .adm-live .lr{margin-left:auto;font-size:13px;color:var(--muted)}
.mowd .adm-body{padding:20px}
.mowd .adm-h{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.mowd .adm-h h3{font-family:var(--body);font-weight:800;font-size:26px;margin:0;color:var(--ink)}
.mowd .adm-h .cnt{font-size:13px;color:var(--muted)}
.mowd .adm-h .new{margin-left:auto;background:var(--red);color:#fff;font-family:var(--body);font-weight:700;font-size:13px;padding:9px 16px;border-radius:7px}
.mowd .adm-thead, .mowd .adm-tr{display:grid;grid-template-columns:64px 1.6fr .9fr .6fr 2fr;gap:14px;align-items:center}
.mowd .adm-thead{padding:0 0 10px;border-bottom:1px solid var(--hair);font-family:var(--display);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.mowd .adm-tr{padding:14px 0;border-bottom:1px solid var(--hair)}
.mowd .adm-tr:last-child{border-bottom:0}
.mowd .adm-cov{width:52px;height:52px;border-radius:5px;background:var(--lav);display:grid;place-items:center;font-family:var(--display);font-weight:700;font-size:13px;color:#3a2f73}
.mowd .adm-name b{display:block;font-weight:700;color:var(--ink);font-size:15px;line-height:1.2}
.mowd .adm-name span{font-family:var(--display);font-size:11px;color:var(--muted)}
.mowd .pill{font-family:var(--display);font-size:10px;letter-spacing:.06em;text-transform:lowercase;padding:3px 9px;border-radius:20px;display:inline-block}
.mowd .pill.sched{border:1px solid var(--red);color:var(--red)}
.mowd .pill.live{color:var(--red);font-weight:700}
.mowd .pill.pub{color:var(--muted)}
.mowd .adm-blog{display:flex;align-items:center;gap:12px;border-left:1px solid var(--hair);padding-left:14px}
.mowd .adm-blog p{margin:0;font-size:13px;color:var(--ink-2);line-height:1.3}
.mowd .adm-edit{font-family:var(--body);font-weight:700;font-size:12px;background:var(--red);color:#fff;padding:7px 14px;border-radius:6px;flex-shrink:0}
.mowd .adm-edit.ghost{background:transparent;border:1px solid var(--red);color:var(--red)}
.mowd /* feature cards */
  .cards{display:grid;gap:16px;margin-top:32px}
.mowd .g4{grid-template-columns:repeat(4,1fr)}
.mowd .g3{grid-template-columns:repeat(3,1fr)}
.mowd .card{background:var(--card);border:1px solid var(--hair);border-radius:7px;padding:22px;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.mowd .card:hover{transform:translateY(-3px);border-color:var(--lav);box-shadow:6px 6px 0 0 var(--lav-soft)}
.mowd .card .idx{font-family:var(--display);font-size:11px;letter-spacing:.16em;color:var(--violet)}
.mowd .card h4{font-family:var(--body);font-weight:700;font-size:17px;margin:14px 0 7px;letter-spacing:-.01em;color:var(--ink)}
.mowd .card p{margin:0;font-size:14.5px;line-height:1.55;color:var(--ink-2)}
.mowd /* ---------- creative direction w/ illustrations ---------- */
  .dir{display:grid;gap:20px;margin-top:38px;grid-template-columns:repeat(3,1fr)}
.mowd .dir-card{background:var(--card);border:1px solid var(--hair);border-radius:9px;overflow:hidden;transition:transform .2s ease,box-shadow .2s ease}
.mowd .dir-card:hover{transform:translateY(-4px);box-shadow:8px 8px 0 0 var(--violet)}
.mowd .dir-art{aspect-ratio:4/3;width:100%;display:block}
.mowd .dir-txt{padding:20px 22px 24px}
.mowd .dir-kick{font-family:var(--display);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--violet)}
.mowd .dir-txt h4{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:18px;letter-spacing:-.01em;margin:10px 0 8px;color:var(--ink)}
.mowd .dir-txt p{margin:0;font-size:14.5px;line-height:1.55;color:var(--ink-2)}
.mowd /* ---------- closing ---------- */
  .closing{background:var(--ink);color:var(--card);border-radius:0}
.mowd .closing .wrap{padding:80px 28px 86px;text-align:center}
.mowd .closing .kick{font-family:var(--display);font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--lav)}
.mowd .closing h2{font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:clamp(30px,6vw,68px);line-height:.98;letter-spacing:-.02em;margin:16px auto 0;color:var(--card);max-width:16ch}
.mowd .closing p{max-width:52ch;margin:22px auto 0;font-size:17px;line-height:1.6;color:#c9c6cf;font-weight:500}
.mowd .cta-row{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:32px}
.mowd .btn{font-family:var(--display);font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;text-decoration:none;padding:15px 26px;border-radius:5px;transition:transform .15s ease,background .2s ease,color .2s ease}
.mowd .btn.solid{background:var(--violet);color:#fff}
.mowd .btn.solid:hover{background:#fff;color:var(--ink);transform:translateY(-2px)}
.mowd .btn.ghost{border:2px solid rgba(255,255,255,.35);color:var(--card)}
.mowd .btn.ghost:hover{border-color:var(--card);background:var(--card);color:var(--ink);transform:translateY(-2px)}
.mowd a:focus-visible, .mowd .btn:focus-visible{outline:2px solid var(--violet);outline-offset:3px;border-radius:2px}
/* ---------- responsive ---------- */
  @media (max-width:880px){
    .ticket{grid-template-columns:1fr}
    .stub-side{border-left:0;border-top:2px dashed var(--dot)}
    .stub-side::before{left:50%;top:-13px;transform:translateX(-50%)}
    .stub-side::after{display:none}
    .brand-grid,.spec,.tape{grid-template-columns:1fr}
    .g4{grid-template-columns:repeat(2,1fr)}
    .g3,.dir{grid-template-columns:1fr}
    .adm-thead{display:none}
    .adm-tr{grid-template-columns:64px 1fr;gap:12px}
    .adm-tr .adm-status,.adm-tr .adm-tracks{display:none}
    .adm-blog{grid-column:1 / -1;border-left:0;padding-left:0;border-top:1px solid var(--hair);padding-top:10px;margin-top:6px}
  }
@media (max-width:560px){.mowd{font-size:16px}
.mowd .wrap{padding:0 18px}
.mowd section{padding:52px 0}
.mowd .stub-main{padding:30px 24px 26px}
.mowd .g4{grid-template-columns:1fr}
.mowd .eyebrow{display:none}
.mowd .quote-stub{grid-template-columns:1fr}
.mowd .qs-side{writing-mode:horizontal-tb;transform:none;padding:10px;letter-spacing:.22em}
.mowd .app-bar{grid-template-columns:1fr}
.mowd .scrub{max-width:none;justify-self:stretch}
.mowd .row .mid{grid-template-columns:1fr auto;gap:8px}
.mowd .row .leader{display:none}}
@media (prefers-reduced-motion:reduce){.mowd, .mowd *{animation:none!important;transition:none!important;scroll-behavior:auto!important}}`;

const BODY = `<div class="topbar">
  <div class="wrap">
    <a class="home" href="/"><span class="arrow">&larr;</span> Home</a>
    <div class="eyebrow">mixtape of the week · <b>creative debrief</b> · 2026</div>
  </div>
</div>

<!-- HERO -->
<header class="hero">
  <div class="wrap">
    <div class="ticket">
      <div class="stub-main">
        <div class="stub-flag"><span class="dot"></span> Doors open · Admit one · Gone at week's end</div>
        <h1 class="wordmark">Mixtape of the Week<span class="thin">M.O.W.</span></h1>
        <p class="lede">A weekly online mixtape. <b>A vibe and a space for keeping the music, and the scene, alive.</b></p>
        <div class="admit"><span class="no">№ 001</span> Admit One</div>
      </div>
      <aside class="stub-side">
        <div class="meta-row"><div class="meta-k">Role</div><div class="meta-v">Ideation, Strategy, Development, Creative Direction</div></div>
        <div class="meta-row"><div class="meta-k">Debut</div><div class="meta-v">M.O.W. #1 · Deadbeat Summer</div></div>
        <div class="meta-row"><div class="meta-k">Stack</div><div class="meta-v">Next.js · Zustand · Cloudflare R2 · Vercel</div></div>
        <div class="meta-row"><div class="meta-k">Status</div><div class="meta-v"><a href="https://mixtape-of-the-week.vercel.app/" target="_blank" rel="noopener noreferrer">Live &rarr; listen</a></div></div>
        <div class="barcode" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </aside>
    </div>
  </div>
</header>

<div class="wrap"><hr class="perf" /></div>

<!-- 01 IDEATION -->
<section id="ideation">
  <div class="wrap">
    <div class="sec-head"><div class="sec-num">01</div><h2 class="sec-title">Ideation &amp; <span class="accent">Strategy</span></h2></div>
    <div class="prose">
      <p class="drop">There's something powerful about the way music moves us. I have this odd fascination for the way a lot of songs carry lyrics which, under normal linguistic conditions, ought to be read off as nonsensical, absurd, or downright incoherent. Yet inside the messy real world of communication, those poetic turns of phrase—married to aesthetic logics of rhythm, beat, tempo and time—all articulate a truly unmatched level of clarity and understanding into the human condition.</p>
      <p>Like many millenials, I have fond memories of receiving and <em>burning</em> mixtape CDs full of songs earnestly attempting to convey some elusive string of emotions. It's a youthful thing, and I'm honestly not sure the pastime still exists for the youngins, but I've been a bit obsessed with the idea that it needs reviving.</p>
      <p>Funny thing is, the idea for Mixtape of the Week didn't start with making an online mixtape. It started with me scrolling Instagram, where I happened upon the ATL Hardcore page and noticed for the first time that they link a public Dropbox on their linktree: a digital treasure trove of old Atlanta hardcore albums and demos, which ngl is pretty sick.</p>
      <p>The first version of the idea hit like this: what if I build an online music player for sharing an album of the day, like, some old hardcore gems from bands like Fight Like a Brave, as a way to keep the music and the scene alive. Rad idea, but to make it sustainable for a one-man operation (especially one fueled by untrammeled neurodivergency), a weekly tempo became the obvious move.</p>
    </div>

    <div class="tape">
      <article class="side a">
        <div class="side-tag">Side A · the spark</div>
        <span class="arrow-note">where it began</span>
        <h4>Album of the day</h4>
        <p>An online music player surfacing one some old Atlanta hardcore records, pulled straight from the ATL Hardcore IG page's vault. A cool techy way to help the scene, on a daily clock.</p>
      </article>
      <article class="side b">
        <div class="side-tag">Side B · the pivot</div>
        <span class="arrow-note">where it landed</span>
        <h4>A weekly mixtape</h4>
        <p>A curation of jams every week, bridging to a wide set of listeners and emotions. (And a way to get normies to listen to some hardcore every once 'n a while lol.)</p>
      </article>
    </div>

    <div class="prose" style="margin-top:34px">
      <p>From there it blossomed dialectically, past sharing music, into a space for underground, independent, and local artists to be seen: band profile pages with bios and links out to Bandcamp and socials, clickable right inside the tape. That's the next iteration, a platform of intentionally made mixtapes acting as a bridge toward new music, new artists, and new people building a new scene, and musically new modes of understanding "the world."</p>
    </div>

    <!-- QUOTE AS TICKET STUB -->
    <div class="quote-stub">
      <div class="qs-side">Admit One</div>
      <div class="qs-body">
        <div class="qs-tag"><span class="dot" style="width:7px;height:7px;border-radius:50%;background:var(--violet);display:inline-block"></span> The Position · № 001</div>
        <p class="qs-quote"><span class="q">&ldquo;</span>Keep the music alive and bridge scenes of emotion.<span class="q">&rdquo;</span></p>
        <div class="qs-foot">
          <span>Doors open · gone at week's end</span>
          <span class="qs-barcode" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="wrap"><hr class="perf" /></div>

<!-- 02 IDENTITY -->
<section id="identity">
  <div class="wrap">
    <div class="sec-head"><div class="sec-num">02</div><h2 class="sec-title">Identity: <span class="accent">The Ticket</span></h2></div>
    <div class="brand-grid">
      <div class="brand-lead">
        <p>Unlike a client build, Mixtape of the Week gets a brand of its own, and the whole thing is shaped like a ticket. Doors open. Admit one. A stub, a stamp, and a rotation that flips at midnight Monday. Day, Auto, and Night themes let the room change with the hour.</p>
        <p>The look is cheap-paper and one bright ink: warm off-white, black type set like a printed setlist, and a single electric violet doing all the pointing. And because my weirdo brain can't help itself, the story got a narrator.</p>
      </div>
      <div class="character">
        <div class="char-tag">Resident DJ · Narrator</div>
        <div class="char-name">Q.D. Neuf<span class="aka">a.k.a. Nuff Said</span></div>
        <p>The voice on the blog and the hand on the aux. He introduces each week's tape, some lore, and the artists on it as characters in an unfolding meta-narrative.</p>
        <div class="theme-toggle" aria-hidden="true"><span>Day</span><span class="on">Auto</span><span>Night</span></div>
      </div>
    </div>

    <div class="spec">
      <div>
        <h5>Palette · from the app</h5>
        <div class="swatches">
          <div class="sw"><div class="chip" style="background:#f3f0e8"></div><div class="nm">Paper</div><div class="hex">#F3F0E8</div></div>
          <div class="sw"><div class="chip" style="background:#17151a"></div><div class="nm">Ink</div><div class="hex">#17151A</div></div>
          <div class="sw"><div class="chip" style="background:#6a5ae0"></div><div class="nm">Violet</div><div class="hex">#6A5AE0</div></div>
          <div class="sw"><div class="chip" style="background:#d9432e"></div><div class="nm">Red (Dashboard)</div><div class="hex">#D9432E</div></div>
          <div class="sw"><div class="chip" style="background:#b7abea"></div><div class="nm">Lavender</div><div class="hex">#B7ABEA</div></div>
        </div>
      </div>
      <div>
        <h5>Typography</h5>
        <div class="type-row"><div class="big t-mono-lg">Doors Open Tonight</div><div class="lab">Mono · marquee &amp; setlist</div></div>
        <div class="type-row"><div class="big t-mono">ADMIT ONE / 45:01</div><div class="lab">Mono · stubs &amp; data</div></div>
        <div class="type-row"><div class="big t-inter">Every track, a reason.</div><div class="lab">Sans · long-form &amp; body</div></div>
      </div>
    </div>
  </div>
</section>

<div class="wrap"><hr class="perf" /></div>

<!-- 03 DEVELOPMENT -->
<section id="development">
  <div class="wrap">
    <div class="sec-head"><div class="sec-num">03</div><h2 class="sec-title">Web Develop<span class="accent">ment</span></h2></div>
    <div class="prose">
      <p class="drop">Same as usual, I worked with Claude as architect for the site and Claude Code to build the music player: Next.js App Router on Vercel, Tailwind, Zustand for player state, and a Cloudflare R2 bucket holding the audio.</p>
      <p>Back when the idea was still album-of-the-day, the plan was to download albums and upload them into an R2 bucket by hand. With the pivot to a mixtape structure, we built a local dashboard for pushing songs up to R2 instead, which let me sidestep standing up a whole system of authorization, R2 writes, and a database. For this iteration, that was overkill.</p>
      <p>Because I wanted a direct hand on the dashboard layout, I designed it in Claude Design first, then pushed it over to Claude Code to implement, with a good bit of back and forth to get it playing nice with the frontend and the bucket.</p>
    </div>

    <!-- FRONT OF HOUSE: app player recreation -->
    <div class="artifact">
      <div class="artifact-cap"><span class="lbl"><b>Frontend</b> · the weekly player</span></div>
      <div class="app">
        <div class="app-top">
          <div class="app-mark">Mixtape of the Week</div>
          <div class="app-controls">
            <span class="app-toggle"><span>Day</span><span class="on">Auto</span><span>Night</span></span>
            <span class="app-doors">Doors Open</span>
          </div>
        </div>
        <div class="setlbl">Setlist</div>
        <div class="rows">
          <div class="row"><span class="rn">01</span><div class="mid"><span class="ti">Deadbeat Summer</span><span class="ar">Neon Indian</span><span class="leader"></span></div><span class="du">4:03</span></div>
          <div class="row"><span class="rn">02</span><div class="mid"><span class="ti">Rawnald Gregory Erickson the Second</span><span class="ar">STRFKR</span><span class="leader"></span></div><span class="du">2:54</span></div>
          <div class="row"><span class="rn">03</span><div class="mid"><span class="ti">Black &amp; Blue</span><span class="ar">Miike Snow</span><span class="leader"></span></div><span class="du">3:40</span></div>
          <div class="row"><span class="rn">04</span><div class="mid"><span class="ti">Wolf Like Me</span><span class="ar">TV On The Radio</span><span class="leader"></span></div><span class="du">4:48</span></div>
          <div class="row"><span class="rn">05</span><div class="mid"><span class="ti">Banquet</span><span class="ar">Bloc Party</span><span class="leader"></span></div><span class="du">3:19</span></div>
          <div class="row now"><span class="rn play">&#9654;</span><div class="mid"><span class="ti">All In Your Rows</span><span class="ar">The Maccabees</span><span class="leader"></span></div><span class="du">2:36</span></div>
          <div class="row"><span class="rn">07</span><div class="mid"><span class="ti">The Fix</span><span class="ar">Minus the Bear</span><span class="leader"></span></div><span class="du">3:32</span></div>
          <div class="row"><span class="rn">08</span><div class="mid"><span class="ti">Notice Me</span><span class="ar">Balance and Composure</span><span class="leader"></span></div><span class="du">3:11</span></div>
          <div class="row"><span class="rn">09</span><div class="mid"><span class="ti">January 1979</span><span class="ar">mewithoutYou</span><span class="leader"></span></div><span class="du">3:29</span></div>
        </div>
        <div class="app-bar">
          <div class="nowtrk"><div class="ti2">All In Your Rows</div><div class="ar2">The Maccabees</div></div>
          <div class="transport">
            <span class="tbtn" aria-hidden="true">&#9198;</span>
            <span class="tbtn main" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg></span>
            <span class="tbtn" aria-hidden="true">&#9197;</span>
          </div>
          <div class="scrub"><span class="tm">1:17</span><span class="bar"><i></i></span><span class="tm">2:35</span></div>
        </div>
      </div>
    </div>

    <!-- THE BOOTH: admin dashboard recreation -->
    <div class="artifact">
      <div class="artifact-cap"><span class="lbl"><b>Dashboard</b> · admin, designed in Claude Design</span></div>
      <div class="adm">
        <div class="adm-top">
          <div class="adm-brand"><span class="m">Mixtape of the Week</span><span class="slash">/admin</span></div>
          <div class="adm-nav"><a class="ghost" href="#!">Mixtapes</a><a class="solid" href="#!">Artists</a><a class="solid" href="#!">Blog</a></div>
        </div>
        <div class="adm-live">
          <span class="lw">Live this week</span>
          <span class="lt">MOW 013: Basement Season</span>
          <span class="lr">Rotation flips Monday 00:00 (Jul 27)</span>
        </div>
        <div class="adm-body">
          <div class="adm-h"><h3>Mixtapes</h3><span class="cnt">3 in catalog</span><span class="new">New mixtape</span></div>
          <div class="adm-thead"><span>Cover</span><span>Mixtape</span><span>Status</span><span>Tracks</span><span>Blog post</span></div>

          <div class="adm-tr">
            <span class="adm-cov">014</span>
            <span class="adm-name"><b>MOW 014: Heat Index</b><span>mow-014-heat-index</span></span>
            <span class="adm-status"><span class="pill sched">scheduled</span></span>
            <span class="adm-tracks" style="font-family:var(--display);color:var(--ink-2)">8</span>
            <span class="adm-blog"><p>Heat Index: eight songs for an unlivable week</p><span class="adm-edit">Edit</span></span>
          </div>
          <div class="adm-tr">
            <span class="adm-cov">013</span>
            <span class="adm-name"><b>MOW 013: Basement Season</b><span>mow-013-basement-season</span></span>
            <span class="adm-status"><span class="pill live">live</span></span>
            <span class="adm-tracks" style="font-family:var(--display);color:var(--ink-2)">6</span>
            <span class="adm-blog"><p>Basement Season: recorded below street level</p><span class="adm-edit">Edit</span></span>
          </div>
          <div class="adm-tr">
            <span class="adm-cov">012</span>
            <span class="adm-name"><b>MOW 012: No Encore</b><span>mow-012-no-encore</span></span>
            <span class="adm-status"><span class="pill pub">published</span></span>
            <span class="adm-tracks" style="font-family:var(--display);color:var(--ink-2)">4</span>
            <span class="adm-blog"><p>No Encore: live cuts only</p><span class="adm-edit">Edit</span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="cards g4">
      <div class="card"><div class="idx">A</div><h4>The player</h4><p>A persistent audio player with state held in Zustand, so the tape keeps rolling as you move around.</p></div>
      <div class="card"><div class="idx">B</div><h4>The setlist</h4><p>Every track, artist, and runtime laid out like a bill for the night. Read it, or press play.</p></div>
      <div class="card"><div class="idx">C</div><h4>Local upload dash</h4><p>A lightweight dashboard for pushing songs to the R2 bucket, no auth or database to babysit yet.</p></div>
      <div class="card"><div class="idx">D</div><h4>Blog posts</h4><p>Posts from Q.D. Neuf, wired in and ready to build buzz around each tape and its artists.</p></div>
    </div>
  </div>
</section>

<div class="wrap"><hr class="perf" /></div>

<!-- 04 DIRECTION -->
<section id="direction">
  <div class="wrap">
    <div class="sec-head"><div class="sec-num">04</div><h2 class="sec-title">Creative <span class="accent">Direction</span></h2></div>
    <div class="prose">
      <p>The main goal from here is to connect with artists, get their music onto a tape, and build clickable band profiles inside each weekly mixtape. The mixtape stops being a playlist and starts being a bridge to the people making the music.</p>
    </div>

    <div class="dir">
      <!-- Artist profiles -->
      <article class="dir-card">
        <svg class="dir-art" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A performer at a microphone">
          <rect width="400" height="300" fill="#f3f0e8"/>
          <circle cx="300" cy="86" r="150" fill="#b7abea" opacity="0.5"/>
          <circle cx="290" cy="96" r="150" fill="#6a5ae0" opacity="0.16"/>
          <g fill="none" stroke="#6a5ae0" stroke-width="3" opacity="0.5">
            <path d="M120 150 q28 -22 56 0"/><path d="M104 162 q44 -36 88 0"/><path d="M88 174 q60 -50 120 0"/>
          </g>
          <!-- figure -->
          <g>
            <rect x="196" y="120" width="8" height="120" rx="4" fill="#17151a"/>
            <circle cx="200" cy="112" r="14" fill="#17151a"/>
            <path d="M172 240 q28 -70 56 0 Z" fill="#17151a"/>
            <ellipse cx="200" cy="98" rx="9" ry="12" fill="#d9432e"/>
          </g>
          <circle cx="200" cy="98" r="20" fill="none" stroke="#d9432e" stroke-width="2.5" opacity="0.7"/>
          <g fill="#17151a">
            <rect x="150" y="256" width="100" height="4" rx="2"/>
            <rect x="168" y="266" width="64" height="4" rx="2" opacity="0.4"/>
          </g>
        </svg>
        <div class="dir-txt">
          <div class="dir-kick">Next</div>
          <h4>Artist Profiles</h4>
          <p>Band pages with bios and links out to Bandcamp and socials, clickable straight from the setlist, so a listen turns into a follow.</p>
        </div>
      </article>

      <!-- The blog -->
      <article class="dir-card">
        <svg class="dir-art" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A page of notes with a pen">
          <rect width="400" height="300" fill="#f3f0e8"/>
          <rect x="96" y="52" width="180" height="210" rx="4" fill="#6a5ae0" opacity="0.14"/>
          <rect x="84" y="44" width="180" height="210" rx="4" fill="#fbfaf6" stroke="#17151a" stroke-width="2.5"/>
          <text x="102" y="86" font-family="'Space Mono',monospace" font-size="26" font-weight="700" fill="#6a5ae0">&#8220;</text>
          <g fill="#17151a" opacity="0.82">
            <rect x="104" y="104" width="140" height="6" rx="3"/>
            <rect x="104" y="122" width="120" height="6" rx="3"/>
            <rect x="104" y="140" width="140" height="6" rx="3"/>
            <rect x="104" y="158" width="96" height="6" rx="3"/>
          </g>
          <g fill="#d9432e" opacity="0.75">
            <rect x="104" y="184" width="70" height="6" rx="3"/>
          </g>
          <g fill="#17151a" opacity="0.5">
            <rect x="104" y="204" width="130" height="5" rx="2.5"/>
            <rect x="104" y="219" width="112" height="5" rx="2.5"/>
          </g>
          <!-- pen -->
          <g transform="rotate(38 300 210)">
            <rect x="286" y="120" width="16" height="150" rx="6" fill="#17151a"/>
            <rect x="286" y="120" width="16" height="40" rx="6" fill="#6a5ae0"/>
            <path d="M286 270 l8 22 l8 -22 Z" fill="#f3f0e8" stroke="#17151a" stroke-width="2"/>
          </g>
        </svg>
        <div class="dir-txt">
          <div class="dir-kick">Grow</div>
          <h4>The Blog, Expanded</h4>
          <p>Q.D. Neuf's posts grow into real buzz for artists and their projects, written in-character as the resident DJ.</p>
        </div>
      </article>

      <!-- Tangible forms -->
      <article class="dir-card">
        <svg class="dir-art" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cassette tape, a CD, and a zine">
          <rect width="400" height="300" fill="#f3f0e8"/>
          <!-- CD behind -->
          <circle cx="286" cy="104" r="66" fill="#b7abea"/>
          <circle cx="286" cy="104" r="66" fill="#6a5ae0" opacity="0.25"/>
          <circle cx="286" cy="104" r="18" fill="#f3f0e8"/>
          <circle cx="286" cy="104" r="6" fill="#17151a"/>
          <!-- zine -->
          <g transform="rotate(-9 120 210)">
            <rect x="72" y="150" width="110" height="130" rx="3" fill="#fbfaf6" stroke="#17151a" stroke-width="2.5"/>
            <rect x="72" y="150" width="110" height="26" fill="#d9432e"/>
            <rect x="84" y="192" width="72" height="5" rx="2.5" fill="#17151a" opacity="0.6"/>
            <rect x="84" y="206" width="86" height="5" rx="2.5" fill="#17151a" opacity="0.4"/>
            <rect x="84" y="220" width="60" height="5" rx="2.5" fill="#17151a" opacity="0.4"/>
          </g>
          <!-- cassette front -->
          <g transform="rotate(6 214 208)">
            <rect x="150" y="164" width="180" height="112" rx="10" fill="#17151a"/>
            <rect x="164" y="178" width="152" height="52" rx="5" fill="#fbfaf6"/>
            <rect x="164" y="178" width="152" height="16" fill="#6a5ae0"/>
            <circle cx="204" cy="248" r="16" fill="#f3f0e8"/>
            <circle cx="204" cy="248" r="6" fill="#17151a"/>
            <circle cx="276" cy="248" r="16" fill="#f3f0e8"/>
            <circle cx="276" cy="248" r="6" fill="#17151a"/>
            <rect x="226" y="242" width="28" height="12" rx="3" fill="#d9432e"/>
          </g>
        </svg>
        <div class="dir-txt">
          <div class="dir-kick">Maybe</div>
          <h4>Tangible Forms</h4>
          <p>Just spitballing, but the whole thing could stretch off-screen into actual CDs or tapes, or even a zine. Who knows.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- CLOSING -->
<section class="closing">
  <div class="wrap">
    <div class="kick">Got a tape in you?</div>
    <h2>Make something worth pressing.</h2>
    <p>Mixtape of the Week is me thinking out loud about how to keep a scene alive online, start to finish. If you're building something that needs that kind of care, the start is my favorite place to meet.</p>
    <div class="cta-row">
      <a class="btn solid" href="mailto:howdy@jbography.com">Let's talk</a>
      <a class="btn ghost" href="https://calendly.com/jbography">Schedule a call</a>
      <a class="btn ghost" href="https://mixtape-of-the-week.vercel.app/" target="_blank" rel="noopener noreferrer">Listen to #1</a>
    </div>
  </div>
</section>`;

function MixtapeDebrief() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="mowd" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  );
}
