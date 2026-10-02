"use client";
import { useEffect, useState } from "react";

// Aero Boero 180 visto de lado, nariz à esquerda (voa para a esquerda).
function AeroBoero() {
  return (
    <svg viewBox="0 0 400 190" className="aviao-svg" aria-hidden="true">
      {/* roda de cauda */}
      <path d="M342 124 L358 134" stroke="#5a4a3a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="360" cy="136" r="6" fill="#1d1612" stroke="#8a7a62" strokeWidth="2" />
      {/* trem principal */}
      <path d="M128 144 L150 150 L138 162 L126 160 Z" fill="#8c1c1c" />
      <circle cx="137" cy="173" r="11" fill="#1d1612" />
      <circle cx="129" cy="166" r="12" fill="#2b211a" />
      <circle cx="129" cy="166" r="5" fill="#cfc8bb" />
      {/* estabilizador */}
      <path d="M304 104 L352 106 L346 119 L316 115 Z" fill="#7d1a1a" />
      {/* deriva */}
      <path d="M316 104 L358 57 L382 55 L366 121 L340 118 Z" fill="#f6ecd9" />
      <path d="M358 57 L376 56 L364 114 L349 109 Z" fill="#1f5a3a" />
      <path d="M376 56 L382 55 L368 121 L362 117 Z" fill="#f2b705" />
      {/* fuselagem */}
      <path d="M66 113 L100 107 L125 90 L200 92 L316 104 L366 119 L366 123 L340 127 L170 146 L100 145 L72 132 Z" fill="#f6ecd9" />
      <path d="M66 113 L100 107 L112 109 L132 117 L200 118 L316 113 L366 119 L366 123 L340 127 L170 146 L100 145 L72 132 Z" fill="#b3201f" />
      <path d="M70 118 L130 120 L310 117 M72 123 L130 124 L310 121" stroke="#f6ecd9" strokeWidth="1.6" fill="none" />
      <path d="M232 124 L246 124 M258 124 L274 124" stroke="#f6ecd9" strokeWidth="5" opacity=".9" />
      {/* cabine */}
      <path d="M110 107 L128 91 L200 94 L207 111 L150 113 Z" fill="#9cc6e0" opacity=".85" />
      <path d="M146 92 L150 112 M184 94 L186 112" stroke="#f6ecd9" strokeWidth="2.5" />
      {/* escoras em V */}
      <path d="M156 146 L138 80 M156 146 L176 72" stroke="#e6d6b4" strokeWidth="5" strokeLinecap="round" />
      {/* asa alta */}
      <path d="M118 67 L130 58 L184 62 L190 70 L122 74 Z" fill="#b3201f" />
      <path d="M122 74 L190 70 L207 96 L192 97 Z" fill="#efe3c8" />
      {/* capô e spinner */}
      <path d="M52 121 L68 111 L68 131 Z" fill="#c8281f" />
      {/* hélice */}
      <g className="helice">
        <ellipse cx="66" cy="121" rx="3" ry="41" fill="#e8c987" opacity=".25" />
        <path d="M66 80 L68.5 121 L66 162 L63.5 121 Z" fill="#1d1612" />
      </g>
    </svg>
  );
}

function Nuvem() {
  return (
    <svg viewBox="0 0 120 40" className="nuvem-svg" aria-hidden="true">
      <path d="M20 34 C6 34 4 20 16 18 C16 8 30 4 38 12 C44 2 62 4 64 16 C76 10 92 16 90 28 C104 26 112 36 98 36 L20 36Z" fill="#f6ecd9" />
    </svg>
  );
}

type Hora = { h: number; m: number; s: number } | null;

// Ponteiros com a hora real; centro do mostrador em (100,130).
function Maos({ a, h, m, s }: { a: Hora; h: string; m: string; s: string }) {
  if (!a) return null;
  return (
    <>
      <line className="mao h" style={{ ["--a0" as string]: `${a.h}deg` }} x1="100" y1="138" x2="100" y2="98" stroke={h} strokeWidth="5" strokeLinecap="round" />
      <line className="mao m" style={{ ["--a0" as string]: `${a.m}deg` }} x1="100" y1="138" x2="100" y2="76" stroke={m} strokeWidth="3.6" strokeLinecap="round" />
      <line className="mao s" style={{ ["--a0" as string]: `${a.s}deg` }} x1="100" y1="148" x2="100" y2="72" stroke={s} strokeWidth="1.2" strokeLinecap="round" />
    </>
  );
}

function Pulseira({ id }: { id: string }) {
  return (
    <>
      <rect x="62" y="0" width="76" height="62" rx="4" fill={`url(#${id})`} />
      <rect x="62" y="198" width="76" height="62" rx="4" fill={`url(#${id})`} />
      <path d="M62 14 H138 M62 28 H138 M62 42 H138 M62 218 H138 M62 232 H138 M62 246 H138 M100 0 V62 M100 198 V260" stroke="#7d8892" strokeWidth="1.2" opacity=".7" />
    </>
  );
}

function Defs({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stopColor="#aeb7bf" /><stop offset=".35" stopColor="#f6f9fb" /><stop offset=".7" stopColor="#c3cbd2" /><stop offset="1" stopColor="#8f99a2" />
    </linearGradient>
  );
}

// Orient automático, mostrador verde com índices dourados.
function RelogioVerde({ a }: { a: Hora }) {
  return (
    <svg viewBox="0 0 200 260" className="rl-svg" aria-hidden="true">
      <defs>
        <Defs id="pv" />
        <radialGradient id="dv" cx=".4" cy=".35" r=".8"><stop offset="0" stopColor="#2ed3a2" /><stop offset="1" stopColor="#0b6450" /></radialGradient>
      </defs>
      <Pulseira id="pv" />
      <rect x="176" y="123" width="12" height="14" rx="2" fill="url(#pv)" stroke="#7d8892" />
      <circle cx="100" cy="130" r="78" fill="url(#pv)" />
      <circle cx="100" cy="130" r="70" fill="#dfe5ea" stroke="#7d8892" strokeWidth="1.5" />
      <circle cx="100" cy="130" r="63" fill="url(#dv)" stroke="#0a4a3b" strokeWidth="1" />
      {Array.from({ length: 12 }, (_, k) => k !== 3 && (
        <rect key={k} x="97.8" y="76" width="4.4" height="12" fill="#e8c050" stroke="#a07c1e" strokeWidth=".6" transform={`rotate(${k * 30} 100 130)`} />
      ))}
      {Array.from({ length: 12 }, (_, k) => <circle key={k} cx={100 + 50 * Math.sin(((k * 30 + 15) * Math.PI) / 180)} cy={130 - 50 * Math.cos(((k * 30 + 15) * Math.PI) / 180)} r="1.2" fill="#f6ecd9" />)}
      <rect x="120" y="123" width="34" height="14" fill="#f4f1e6" stroke="#e8c050" strokeWidth="1.2" />
      <path d="M137 123 V137" stroke="#bbb" strokeWidth=".8" />
      <text x="128.5" y="133" fontSize="7" textAnchor="middle" fill="#222" fontFamily="Arial,sans-serif" fontWeight="700">FRI</text>
      <text x="145.5" y="133" fontSize="7" textAnchor="middle" fill="#222" fontFamily="Arial,sans-serif" fontWeight="700">26</text>
      <rect x="96" y="86" width="8" height="6" fill="#c0392b" />
      <text x="100" y="103" fontSize="8.5" textAnchor="middle" fill="#e8c050" fontFamily="Georgia,serif" fontWeight="700" letterSpacing=".6">ORIENT</text>
      <text x="100" y="168" fontSize="8" textAnchor="middle" fill="#e8c050">★★★</text>
      <text x="100" y="178" fontSize="6" textAnchor="middle" fill="#e8c050" fontStyle="italic" fontFamily="Georgia,serif">Crystal</text>
      <Maos a={a} h="#e8c050" m="#e8c050" s="#e8c050" />
      <circle cx="100" cy="130" r="4" fill="#e8c050" stroke="#a07c1e" />
      <path d="M44 100 A62 62 0 0 1 100 66" stroke="#fff" strokeWidth="5" opacity=".14" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Orient Automatic, caixa almofadada e mostrador azul.
function RelogioAzul({ a }: { a: Hora }) {
  return (
    <svg viewBox="0 0 200 260" className="rl-svg" aria-hidden="true">
      <defs>
        <Defs id="pa" />
        <radialGradient id="da" cx=".5" cy=".5" r=".6"><stop offset="0" stopColor="#2f66d8" /><stop offset="1" stopColor="#081a5a" /></radialGradient>
      </defs>
      <Pulseira id="pa" />
      <rect x="176" y="122" width="12" height="16" rx="2" fill="url(#pa)" stroke="#7d8892" />
      <rect x="22" y="52" width="156" height="156" rx="40" fill="url(#pa)" />
      <rect x="32" y="62" width="136" height="136" rx="31" fill="#d8dfe5" stroke="#7d8892" strokeWidth="1.5" />
      <circle cx="100" cy="130" r="66" fill="#aeb7bf" />
      <circle cx="100" cy="130" r="61" fill="url(#da)" />
      <circle cx="100" cy="130" r="57.5" fill="none" stroke="#eef3f7" strokeWidth="3" strokeDasharray=".8 5.22" />
      <circle cx="100" cy="130" r="42" fill="none" stroke="#1d3fa0" strokeWidth="1.5" />
      {Array.from({ length: 12 }, (_, k) => k !== 3 && (
        <rect key={k} x="97.5" y="72" width="5" height="14" fill="#eef3f7" stroke="#8f99a2" strokeWidth=".5" transform={`rotate(${k * 30} 100 130)`} />
      ))}
      <rect x="118" y="123" width="22" height="14" fill="#d12a2a" />
      <rect x="140" y="123" width="14" height="14" fill="#f6f6f6" />
      <text x="129" y="133" fontSize="6.5" textAnchor="middle" fill="#fff" fontFamily="Arial,sans-serif" fontWeight="700">SUN</text>
      <text x="147" y="134" fontSize="9" textAnchor="middle" fill="#222" fontFamily="Arial,sans-serif" fontWeight="700">8</text>
      <rect x="94" y="88" width="12" height="8" rx="1" fill="#d12a2a" />
      <text x="100" y="106" fontSize="9" textAnchor="middle" fill="#eef3f7" fontFamily="Georgia,serif" fontWeight="700" letterSpacing=".5">ORIENT</text>
      <text x="100" y="114" fontSize="5" textAnchor="middle" fill="#eef3f7" fontStyle="italic" fontFamily="Georgia,serif">Automatic</text>
      <text x="100" y="168" fontSize="8" textAnchor="middle" fill="#cfd8e0">★★★</text>
      <text x="100" y="177" fontSize="5" textAnchor="middle" fill="#cfd8e0" fontStyle="italic" fontFamily="Georgia,serif">Water Resist</text>
      <Maos a={a} h="#eef3f7" m="#eef3f7" s="#dfe8f2" />
      <circle cx="100" cy="130" r="4" fill="#eef3f7" stroke="#8f99a2" />
      <path d="M52 96 A60 60 0 0 1 100 70" stroke="#fff" strokeWidth="5" opacity=".14" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Fundo transparente do relógio: mecanismo automático com rotor, rubi e roda de balanço.
function Mecanismo() {
  return (
    <svg viewBox="0 0 200 260" className="rl-svg" aria-hidden="true">
      <defs>
        <Defs id="pm" />
        <radialGradient id="pl" cx=".4" cy=".35" r=".8"><stop offset="0" stopColor="#f0f3f5" /><stop offset="1" stopColor="#8a949d" /></radialGradient>
        <linearGradient id="ouro" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6d77a" /><stop offset="1" stopColor="#b8861b" /></linearGradient>
      </defs>
      <Pulseira id="pm" />
      <circle cx="100" cy="130" r="78" fill="url(#pm)" />
      <circle cx="100" cy="130" r="70" fill="#1d2227" />
      <circle cx="100" cy="130" r="64" fill="url(#pl)" />
      <circle cx="100" cy="130" r="57" fill="none" stroke="#9aa4ad" strokeWidth="1.2" strokeDasharray="9 4" />
      <path d="M52 112 A52 52 0 0 1 148 112 M60 150 A44 44 0 0 0 140 150" stroke="#aab3bb" strokeWidth="1" fill="none" />
      {/* engrenagens */}
      <g className="spin" style={{ animationDuration: "9s" }}>
        <circle cx="72" cy="132" r="14" fill="#c2306a" stroke="#7d1744" strokeWidth="1.5" />
        <circle cx="72" cy="132" r="17" fill="none" stroke="#c2306a" strokeWidth="4" strokeDasharray="3.4 3.4" />
        <circle cx="72" cy="132" r="4" fill="#f6c8da" />
      </g>
      <g className="spin" style={{ animationDuration: "7s", animationDirection: "reverse" }}>
        <circle cx="138" cy="168" r="11" fill="#cfd5da" stroke="#7d8892" strokeWidth="1.5" />
        <circle cx="138" cy="168" r="14" fill="none" stroke="#9aa4ad" strokeWidth="3.5" strokeDasharray="3 3" />
        <circle cx="138" cy="168" r="3" fill="#7d8892" />
      </g>
      <g className="spin" style={{ animationDuration: "12s", animationDirection: "reverse" }}>
        <circle cx="86" cy="96" r="9" fill="#cfd5da" stroke="#7d8892" strokeWidth="1.5" />
        <circle cx="86" cy="96" r="11.5" fill="none" stroke="#9aa4ad" strokeWidth="3" strokeDasharray="2.6 2.6" />
      </g>
      {/* roda de balanço */}
      <g className="balanc">
        <circle cx="100" cy="176" r="15" fill="none" stroke="url(#ouro)" strokeWidth="3.5" />
        <path d="M85 176 H115 M100 161 V191" stroke="url(#ouro)" strokeWidth="2.5" />
        <circle cx="100" cy="176" r="5" fill="none" stroke="#7d8892" strokeWidth="1.2" />
        <circle cx="100" cy="176" r="2" fill="#c2306a" />
      </g>
      {/* rubis */}
      {[[118, 100], [60, 160], [120, 196], [84, 196], [150, 138]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.8" fill="#d6204f" stroke="#e8c050" strokeWidth="1" />)}
      {/* rotor */}
      <g className="rotor">
        <path d="M100 130 L100 72 A58 58 0 0 1 155 111 Z" fill="url(#ouro)" stroke="#8a6410" strokeWidth="1.2" opacity=".93" />
        <circle cx="122" cy="98" r="7" fill="#e9edf0" opacity=".85" />
        <circle cx="140" cy="116" r="5" fill="#e9edf0" opacity=".85" />
        <path d="M100 82 A48 48 0 0 1 144 112" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".5" />
        <circle cx="100" cy="130" r="6" fill="#cfd5da" stroke="#7d8892" strokeWidth="1.5" />
      </g>
      <path d="M44 104 A62 62 0 0 1 100 68" stroke="#fff" strokeWidth="5" opacity=".18" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Engrenagem() {
  return (
    <svg viewBox="0 0 100 100" className="engr-svg" aria-hidden="true">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="9" strokeDasharray="7.2 7.2" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      {[0, 60, 120].map((r) => <line key={r} x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="3" transform={`rotate(${r} 50 50)`} />)}
    </svg>
  );
}

export default function Fundo() {
  const [hora, setHora] = useState<Hora>(null);
  useEffect(() => {
    const d = new Date();
    const s = d.getSeconds() + d.getMilliseconds() / 1000;
    const m = d.getMinutes() + s / 60;
    const h = (d.getHours() % 12) + m / 60;
    setHora({ h: h * 30, m: m * 6, s: s * 6 });
  }, []);

  return (
    <div className="fundo" aria-hidden="true">
      <div className="nuvem n1"><Nuvem /></div>
      <div className="nuvem n2"><Nuvem /></div>
      <div className="nuvem n3"><Nuvem /></div>

      <div className="aviao a1"><div className="bob"><AeroBoero /></div></div>
      <div className="aviao a2"><div className="bob"><AeroBoero /></div></div>
      <div className="aviao a3"><div className="bob"><AeroBoero /></div></div>

      <div className="rl rl1"><div className="bob"><RelogioVerde a={hora} /></div></div>
      <div className="rl rl2"><div className="bob"><RelogioAzul a={hora} /></div></div>
      <div className="rl rl3"><div className="bob"><Mecanismo /></div></div>
      <div className="engr g1"><Engrenagem /></div>
      <div className="engr g2"><Engrenagem /></div>
      <div className="engr g3"><Engrenagem /></div>
    </div>
  );
}
