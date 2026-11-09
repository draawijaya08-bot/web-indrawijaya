"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/icon";
import { Wave } from "@/components/wave";
import { ProjectArtwork } from "@/components/project-artwork";
import { categories, faqs, processSteps, projects, services, type Category } from "@/lib/portfolio";

type Modal = { type: "brief" } | { type: "service" | "process"; index: number } | { type: "project"; id: string };

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home" aria-label="INDRA WIJAYA — Beranda"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M9 9v23M17 9l4 23 6-16 6 16 4-23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 4h10M4 37h10" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.2"/></svg><span>INDRA WIJAYA<span className="brand-period">.</span></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Beranda");
  const [stepIndex, setStepIndex] = useState(1);
  const [category, setCategory] = useState<Category>("Semua");
  const [modal, setModal] = useState<Modal | null>(null);
  const [motionPlaying, setMotionPlaying] = useState(true);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const activeStep = processSteps[stepIndex];
  const visibleProjects = projects.filter(p => category === "Semua" || (p.categories as readonly string[]).includes(category));
  const project = modal?.type === "project" ? projects.find(p => p.id === modal.id) : undefined;
  const detail = modal?.type === "service" ? services[modal.index] : modal?.type === "process" ? processSteps[modal.index] : null;

  useEffect(() => {
    if (modal && !dialog.current?.open) dialog.current?.showModal();
    if (!modal && dialog.current?.open) dialog.current.close();
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  useEffect(() => {
    if (!menuOpen) return;
    function escape(e: KeyboardEvent) { if (e.key === "Escape") setMenuOpen(false); }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menuOpen]);

  function openBrief() {
    setBrief(""); setCopied(false); setMenuOpen(false); setModal({ type: "brief" });
  }
  function openProject(id: string) {
    setDevice("desktop"); setModal({ type: "project", id });
  }
  function createBrief(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setBrief([
      "BRIEF PROYEK — INDRA WIJAYA",
      "Motion Graphic & Web Development",
      "",
      `Nama: ${String(data.get("name") ?? "").trim()}`,
      `Email: ${String(data.get("email") ?? "").trim() || "Belum dicantumkan"}`,
      `Kebutuhan: ${data.get("service")}`,
      "",
      "CERITA & KEBUTUHAN PROYEK",
      String(data.get("message") ?? "").trim(),
      "",
      "Brief ini disiapkan melalui website portofolio INDRA WIJAYA.",
      "Dokumen ini belum dikirim. Bagikan saat menghubungi Indra.",
    ].join("\n"));
  }
  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "Brief_Proyek_INDRA_WIJAYA.txt";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function copyBrief() {
    try { await navigator.clipboard.writeText(brief); setCopied(true); }
    catch { setCopied(false); }
  }
  const nav = [["Beranda", "home"], ["Tentang", "tentang"], ["Layanan", "layanan"], ["Proses", "proses"], ["Karya", "karya"], ["Kontak", "kontak"]];

  return <div className={`site-frame portfolio-site ${motionPlaying ? "" : "motion-paused"}`} id="home">
    <a className="skip-link" href="#main">Lewati ke konten</a>
    <header className="site-header"><Brand/><nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigasi utama" id="main-navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className={activeNav === label ? "active" : ""} onClick={() => { setActiveNav(label); setMenuOpen(false); }}>{label}</a>)}</nav><button className="button button-outline header-cta" onClick={openBrief}>Mulai Proyek <Icon name="arrow-up"/></button><button className="menu-toggle" aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"}/></button></header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-heading"><div className="hero-glow"/><div className="hero-layout content-width"><div className="hero-copy"><div className="community-pill identity-pill"><span className="identity-mark">IW</span><span>MOTION GRAPHIC <span className="identity-divider">/</span> WEB DEVELOPMENT</span></div><h1 id="hero-heading">Ideas In Motion.<br/>Experiences In Code.<br/><span className="gradient-text hero-name">INDRA WIJAYA.</span></h1><div className="hero-discipline"><span>DESIGN.</span><span>ANIMATE.</span><span>DEVELOP.</span><span>✦</span></div></div><aside className="hero-aside"><button className="motion-mini" onClick={() => openProject("pulse")} aria-label="Lihat eksplorasi motion dan web"><span className="motion-mini-label">MOTION × CODE <span>01 / LOOP</span></span><span className="mini-motion-orbit"/><span className="mini-motion-shape">✦</span><span className="motion-mini-footer">IDEAS, MADE ALIVE. <Icon name="arrow-up"/></span></button><p>Saya Indra Wijaya. Saya mengolah ide menjadi motion graphic yang bercerita dan website yang berkesan — lewat visual, gerak, dan kode.</p><div className="hero-actions"><a className="button button-primary" href="#karya">Lihat Karya <Icon name="arrow-up"/></a><a className="button button-outline" href="#tentang">Tentang Saya</a></div></aside></div><Wave/><div className="hero-caption"><span>DESIGNED TO MOVE. BUILT TO CONNECT.</span><a href="#tentang" aria-label="Jelajahi portofolio"><span>SCROLL TO EXPLORE</span><span>↓</span></a></div></section>

      <section className="features-section content-width" id="tentang" aria-labelledby="about-heading"><div className="section-intro"><div><span className="eyebrow">TENTANG INDRA WIJAYA</span><h2 id="about-heading">Visual With <span className="gradient-text">Purpose.</span><br/>Digital With <span className="gradient-text">Personality.</span></h2></div><p>Motion graphic dan web development adalah dua cara saya bercerita. Saya menyatukan desain, animasi, dan pengembangan web untuk membentuk pengalaman digital yang punya karakter.</p></div><div className="feature-cards" id="layanan">{services.map((service, i) => <button key={service.title} className={`feature-card ${i === 1 ? "feature-card-highlight" : ""}`} onClick={() => setModal({ type: "service", index: i })}><span className="feature-icon"><Icon name={service.icon}/></span><h3>{service.title}</h3><p>{service.text}</p><span className="text-link">Jelajahi Layanan <Icon name="arrow-up"/></span>{i === 1 && <span className="card-corner" aria-hidden="true">✦</span>}</button>)}</div><div className="features-footnote"><span className="status-dot"/> Satu ide. Gerak, visual, dan pengalaman digital.</div></section>

      <section className="platform-section" id="proses" aria-labelledby="process-heading"><div className="platform-layout content-width"><div className="platform-copy"><span className="eyebrow">DARI IDE SAMPAI JADI</span><h2 id="process-heading"><span className="gradient-text">Good Ideas.</span><br/>Thoughtful Process.<br/>Meaningful Results.</h2><p>Setiap karya dimulai dari memahami apa yang ingin diceritakan. Setelah itu, visual, gerak, dan interaksi disusun menjadi satu pengalaman.</p><p>Baik animasi maupun website, prosesnya berangkat dari konsep yang jelas, eksplorasi yang terarah, dan perhatian pada detail.</p><button className="button button-outline" onClick={openBrief}>Ceritakan Idemu <Icon name="arrow-up"/></button><div className="orbit-pagination" role="group" aria-label="Tahapan proses">{processSteps.map((s, i) => <button key={s.title} aria-label={`Lihat tahap ${s.title}`} aria-pressed={i === stepIndex} className={i === stepIndex ? "selected" : ""} onClick={() => setStepIndex(i)}/>)}<span>0{stepIndex + 1} <i>/ 03</i></span></div></div><div className="orbit-visual" aria-label="Alur kerja interaktif"><div className="orbit-glow"/><div className="orbit-ring"/><div className="orbit-ring orbit-ring-secondary"/><button className="orbit-node orbit-node-top" onClick={() => setStepIndex((stepIndex + 2) % 3)}><span className="orbit-dot"/>{processSteps[(stepIndex + 2) % 3].short[0]}<br/>{processSteps[(stepIndex + 2) % 3].short[1]}</button><button className="orbit-active" onClick={() => setModal({ type: "process", index: stepIndex })}><span className="orbit-dot active-orbit-dot"/><div key={activeStep.title} className="orbit-active-copy"><span className="orbit-active-label">0{stepIndex + 1} / THE CREATIVE PROCESS</span><h3>{activeStep.title}</h3><p>{activeStep.text}</p></div><span className="orbit-arrow"><Icon name="arrow"/></span></button><button className="orbit-node orbit-node-bottom" onClick={() => setStepIndex((stepIndex + 1) % 3)}><span className="orbit-dot"/>{processSteps[(stepIndex + 1) % 3].short[0]}<br/>{processSteps[(stepIndex + 1) % 3].short[1]}</button><span className="orbit-center-mark" aria-hidden="true"><Icon name="spark"/></span></div></div></section>

      <section className="market-section work-section content-width" id="karya" aria-labelledby="work-heading"><span className="eyebrow">MOTION GRAPHIC & WEB DEVELOPMENT</span><h2 id="work-heading">A Few Ideas, <span className="gradient-text">Brought To Life.</span></h2><div className="market-intro"><p>Eksplorasi konsep visual: dari tipografi bergerak sampai pengalaman web interaktif.</p><span className="demo-label"><span className="status-dot"/> STUDI KONSEP</span></div><div className="work-toolbar"><div className="project-filters" role="group" aria-label="Filter karya">{categories.map(c => <button key={c} aria-pressed={category === c} className={category === c ? "selected" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div><button className="motion-control" aria-pressed={!motionPlaying} onClick={() => setMotionPlaying(!motionPlaying)}><Icon name={motionPlaying ? "pause" : "play"}/><span>{motionPlaying ? "Jeda animasi" : "Putar animasi"}</span></button></div><div className="project-grid" data-count={visibleProjects.length}>{visibleProjects.map(p => <button className="project-card" key={p.id} onClick={() => openProject(p.id)} aria-label={`Lihat ${p.title}`}><ProjectArtwork kind={p.id} playing={motionPlaying}/><span className="project-card-copy"><span className="project-type">{p.label}<Icon name="arrow-up"/></span><strong>{p.title}</strong><span className="project-summary">{p.summary}</span></span></button>)}</div><p className="work-note" aria-live="polite">{visibleProjects.length} eksplorasi konsep · Preview visual, bukan dokumentasi proyek klien.</p></section>

      <section className="faq-section content-width" id="faq" aria-labelledby="faq-heading"><div className="faq-intro"><span className="eyebrow">SEBELUM KITA MULAI</span><h2 id="faq-heading">A Little Curiosity.<br/><span className="gradient-text">A Clearer Picture.</span></h2><p>Kenali lebih dekat pendekatan dan proses kreatif saya.</p><a href="#kontak" className="text-link">Mulai percakapan <Icon name="arrow-up"/></a></div><div className="faq-list">{faqs.map(([q, a], i) => <details key={q} className="faq-item"><summary><span><span className="faq-number">0{i + 1}</span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="contact-section content-width" id="kontak" aria-labelledby="contact-heading"><div className="contact-glow"/><div><span className="eyebrow">LET’S CREATE SOMETHING MEANINGFUL</span><h2 id="contact-heading">Your Next Idea.<br/><span className="gradient-text">Let’s Make It Move.</span></h2></div><div className="contact-copy"><p>Butuh motion graphic atau website?<br/>Mulai dari cerita dan kebutuhan proyekmu.</p><button className="button button-primary" onClick={openBrief}>Siapkan Brief Proyek <Icon name="arrow-up"/></button></div><span className="contact-spark" aria-hidden="true">✦</span></section>
    </main>

    <footer className="site-footer content-width"><div className="footer-main"><Brand footer/><p>Motion Graphic & Web Development.</p><a href="#home" className="back-to-top">Kembali ke atas <Icon name="arrow-up"/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} INDRA WIJAYA.</span><a href="#faq">Tentang proses kreatif</a><span className="footer-location"><Icon name="globe"/> Ideas in motion. Experiences in code.</span></div></footer>

    <dialog ref={dialog} className={`preview-dialog ${project ? "project-dialog" : ""}`} aria-label={project?.title ?? detail?.title ?? "Siapkan brief proyek"} onCancel={() => setModal(null)} onClose={() => setModal(null)} onClick={e => { if (e.target === e.currentTarget) setModal(null); }}>
      {modal && <div className="dialog-inner"><button className="dialog-close" onClick={() => setModal(null)} aria-label="Tutup dialog"><Icon name="close"/></button>
        {project ? <><span className="eyebrow">{project.label} / STUDI KONSEP</span><h2>{project.title}</h2><div className="project-preview"><ProjectArtwork kind={project.id} playing={motionPlaying} device={device}/></div><div className="project-preview-controls">{project.id === "forma" ? <div className="device-switch" role="group" aria-label="Ukuran preview website"><button aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>Desktop</button><button aria-pressed={device === "mobile"} onClick={() => setDevice("mobile")}>Mobile</button></div> : <button className="motion-control" aria-pressed={!motionPlaying} onClick={() => setMotionPlaying(!motionPlaying)}><Icon name={motionPlaying ? "pause" : "play"}/><span>{motionPlaying ? "Jeda Animasi" : "Putar Animasi"}</span></button>}<span>Eksplorasi visual</span></div><p className="dialog-description">{project.description}</p><div className="project-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div><button className="button button-primary" onClick={openBrief}>Punya Ide Serupa? <Icon name="arrow-up"/></button></> : detail ? <><span className="dialog-emblem"><Icon name="spark"/></span><span className="eyebrow">{modal.type === "service" ? "MOTION, DESIGN & DEVELOPMENT" : "THE CREATIVE PROCESS"}</span><h2>{detail.title}</h2><p className="dialog-description">{detail.body}</p>{"bullets" in detail && <ul className="dialog-bullets">{detail.bullets.map(b => <li key={b}><Icon name="check"/>{b}</li>)}</ul>}<button className="button button-primary" onClick={openBrief}>Bahas Kebutuhan Proyek <Icon name="arrow-up"/></button></> : brief ? <div className="brief-result"><span className="dialog-emblem"><Icon name="check"/></span><span className="eyebrow">DARI IDE MENJADI RENCANA</span><h2>Brief kamu siap.</h2><p className="dialog-description">Simpan ringkasan ini untuk dibagikan saat menghubungi Indra. Brief belum dikirim secara otomatis.</p><pre className="brief-preview">{brief}</pre><div className="brief-actions"><button className="button button-primary" onClick={downloadBrief}>Unduh Brief <Icon name="arrow"/></button><button className="button button-outline" onClick={copyBrief}>{copied ? "Tersalin ✓" : "Salin Brief"}</button></div><button className="brief-edit" onClick={() => { setBrief(""); setCopied(false); }}>Buat brief lain</button></div> : <><span className="dialog-emblem"><Icon name="spark"/></span><span className="eyebrow">MOTION GRAPHIC / WEB DEVELOPMENT</span><h2>Great Things Start<br/><span className="gradient-text">With An Idea.</span></h2><p className="dialog-description">Ceritakan sedikit kebutuhanmu. Kita mulai dari brief yang jelas.</p><form className="preview-form" onSubmit={createBrief}><label>Nama kamu<input name="name" autoComplete="name" placeholder="Nama lengkap" required maxLength={80}/></label><label><span>Email <small className="optional-label">(opsional)</small></span><input name="email" type="email" autoComplete="email" placeholder="nama@email.com" maxLength={200}/></label><label>Jenis proyek<select name="service" defaultValue="Motion Graphic"><option>Motion Graphic</option><option>Web Development</option><option>Motion Graphic & Web Development</option></select></label><label>Ceritakan idemu<textarea name="message" placeholder="Tujuan proyek, referensi, dan kebutuhan yang ingin diwujudkan…" required minLength={10} maxLength={4000} rows={4}/></label><button className="button button-primary" type="submit">Buat Brief Proyek <Icon name="arrow-up"/></button><p className="form-note">Brief dapat disalin atau diunduh setelah selesai.<br/>Formulir ini belum mengirim pesan ke Indra.</p></form></>}
      </div>}
    </dialog>
  </div>;
}
