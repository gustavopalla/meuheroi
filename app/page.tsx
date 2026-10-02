"use client";
import { useEffect, useRef, useState } from "react";
import { config, fotos, carta, assinatura } from "../data";
import Fundo from "./Fundo";

type Etapa = "intro" | "fotos" | "carta";

export default function Page() {
  const [etapa, setEtapa] = useState<Etapa>("intro");
  const [i, setI] = useState(0);
  const [aberta, setAberta] = useState(false);
  const [musica, setMusica] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  const total = fotos.length;
  const proxima = () => (i < total - 1 ? setI(i + 1) : setEtapa("carta"));
  const anterior = () => i > 0 && setI(i - 1);

  // Volta um passo: carta aberta -> envelope -> última foto -> fotos anteriores -> início.
  const voltar = () => {
    if (etapa === "carta") {
      if (aberta) setAberta(false);
      else { setEtapa("fotos"); setI(total - 1); }
    } else if (etapa === "fotos") {
      if (i > 0) setI(i - 1);
      else setEtapa("intro");
    }
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (etapa === "fotos" && e.key === "ArrowRight") proxima();
      if (e.key === "ArrowLeft" || e.key === "Escape") voltar();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  // Música desligada por padrão: só toca quando a pessoa toca no botão.
  useEffect(() => {
    if (audio.current) audio.current.volume = config.volume;
  }, []);

  const tocar = () => {
    // Para música: coloque /public/musica.mp3 (opcional)
    const a = audio.current;
    if (!a) return;
    if (musica) { a.pause(); setMusica(false); }
    else a.play().then(() => setMusica(true)).catch(() => {});
  };

  return (
    <main className="stage">
      <div className="glow" />
      <Estrelas />
      <Fundo />
      <audio ref={audio} src="/musica.mp3" loop preload="auto" />
      {etapa !== "intro" && (
        <button className="voltar" onClick={voltar} aria-label="Voltar">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          <span>Voltar</span>
        </button>
      )}
      {config.musica && (
        <button className={"musica" + (musica ? " on" : "")} onClick={tocar} aria-label={musica ? "Desligar música" : "Ligar música"}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M3 9v6h4l5 4V5L7 9H3z" />
            {musica ? <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /> : <path d="M16 9l5 6m0-6l-5 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />}
          </svg>
          <span>{musica ? "Música on" : "Música off"}</span>
        </button>
      )}

      {etapa === "intro" && (
        <section className="center fade" key="intro">
          <p className="eyebrow">Para {config.paiNome}</p>
          <h1>{config.titulo}{config.idade ? <><br /><span className="idade">{config.idade} anos</span></> : null}</h1>
          <p className="sub">{config.subtitulo}</p>
          <button className="btn" onClick={() => { setEtapa("fotos"); }}>Começar</button>
        </section>
      )}

      {etapa === "fotos" && (
        <section className="center fade" key={"f" + i}>
          <figure className="polaroid" style={{ ["--rot" as string]: `${i % 2 ? 2.5 : -2.5}deg` }}>
            <img src={fotos[i].src} alt={fotos[i].legenda} style={{ objectPosition: fotos[i].pos }} />
          </figure>
          <div className="nav">
            <button className="ghost" onClick={anterior} disabled={i === 0}>←</button>
            <span className="dots">{fotos.map((_, k) => <i key={k} className={k === i ? "on" : ""} />)}</span>
            <button className="btn small" onClick={proxima}>{i === total - 1 ? "Continuar" : "→"}</button>
          </div>
        </section>
      )}

      {etapa === "carta" && (
        <section className="center fade" key="carta">
          {!aberta ? (
            <>
              <p className="eyebrow">Ainda tem mais uma coisa…</p>
              <button className="envelope" onClick={() => setAberta(true)} aria-label="Abrir carta">
                <span className="flap" /><span className="body" /><span className="seal">♥</span>
              </button>
              <p className="sub">Toque no envelope para abrir</p>
            </>
          ) : (
            <div className="cartaBox">
              <button className="fechar" onClick={() => setAberta(false)} aria-label="Fechar carta">✕</button>
              <article className="carta">
                {carta.map((p, k) => <p key={k} style={{ animationDelay: `${0.4 + k * 0.7}s` }}>{p}</p>)}
                <p className="assin" style={{ animationDelay: `${0.4 + carta.length * 0.7}s` }}>
                  {assinatura}<br /><strong>{config.seuNome}</strong>
                </p>
                <div className="fim" style={{ animationDelay: `${0.8 + carta.length * 0.7}s` }}>
                  <button className="btn small" onClick={() => setAberta(false)}>Fechar carta</button>
                  <button className="btn small outline" onClick={() => { setAberta(false); setI(0); setEtapa("fotos"); }}>Rever as fotos</button>
                </div>
              </article>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

function Estrelas() {
  const [pts, setPts] = useState<{ l: number; t: number; d: number; s: number }[]>([]);
  useEffect(() => {
    setPts(Array.from({ length: 40 }, () => ({ l: Math.random() * 100, t: Math.random() * 100, d: Math.random() * 5, s: 2 + Math.random() * 3 })));
  }, []);
  return <div className="stars">{pts.map((p, k) => <b key={k} style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.s, height: p.s, animationDelay: `${p.d}s` }} />)}</div>;
}
