// ✏️ EDITE AQUI: nomes, fotos e carta.
export const config = {
  paiNome: "Pai",
  seuNome: "Gustavo",
  idade: null as number | null, // ex: 60, ou null para não mostrar
  titulo: "Feliz Aniversário",
  musica: true, // toca /public/musica.mp3 automaticamente (ligada por padrão)
  volume: 0.25, // 0 a 1; mais baixo = mais suave
  subtitulo: "Preparei uma pequena viagem pelas nossas memórias.",
};

// pos = ponto de foco do recorte (ex: "center 25%" mantém o rosto no enquadramento)
export const fotos = [
  { src: "/fotos/01-jaqueta.jpg", legenda: "Pose de astro, desde sempre", pos: "center 30%" },
  { src: "/fotos/02-casal.jpg", legenda: "Onde nossa história começou", pos: "center 35%" },
  { src: "/fotos/03-mar.jpg", legenda: "Sempre pronto pra aventura", pos: "center 40%" },
  { src: "/fotos/04-familia.jpg", legenda: "Nossa família", pos: "center 40%" },
  { src: "/fotos/05-golfe.jpg", legenda: "Dias de campo e de companheirismo", pos: "center 40%" },
  { src: "/fotos/06-arvore.jpg", legenda: "À sombra de uma árvore, ao seu lado", pos: "center 60%" },
  { src: "/fotos/07-filho.jpg", legenda: "Abraço de quem entende", pos: "center 30%" },
  { src: "/fotos/08-terraco.jpg", legenda: "Seus dois orgulhos", pos: "center 30%" },
  { src: "/fotos/09-piscina.jpg", legenda: "Dias de sol e de risadas", pos: "center 75%" },
  { src: "/fotos/10-relogio.jpg", legenda: "Um presente pra quem merece o tempo todo", pos: "center 30%" },
  { src: "/fotos/11-cachorrinho.jpg", legenda: "E até o cachorrinho te faz companhia", pos: "center 50%" },
];

// Cada item é um parágrafo.
export const carta = [
  "Pai,",
  "Hoje é o seu dia, e eu queria encontrar um jeito diferente de dizer o quanto você é importante pra mim.",
  "Hoje queria te agradecer por tudo o que você fez!",
  "Você me ensinou, mais com exemplos do que com palavras, o que é ter caráter, trabalhar duro e cuidar de quem a gente ama. Muito do que eu sou hoje carrega um pedacinho seu.",
  "Obrigado por cada conselho, por cada dia de passeio, por cada abraço e por todas as vezes que acreditou em mim, mesmo quando eu duvidava. Obrigado por tudo o que você proporcionou pra nossa família durante todos esses anos.",
  "Nós sempre tivemos muito orgulho de quem você é, esforçado, dedicado, amoroso e um Pai incrível. E ver que você se encontrou em um novo hobby (os relógios) nos deixa extremamente felizes, porque se você está feliz, nós estamos felizes.",
  "Que este novo ano de vida venha com muita saúde, paz e alegria, e com muitos momentos como esses, que a gente vai continuar colecionando juntos. Você é o meu herói e pra sempre será.",
  "Eu te amo muito, Pai. Parabéns!!!!",
];
export const assinatura = "Com todo o meu amor,";
