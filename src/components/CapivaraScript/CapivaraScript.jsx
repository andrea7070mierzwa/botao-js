const frases = [
  "Calma, Devzinho. Era só uma chave.",
  "O undefined faz parte da jornada.",
  "Respira. O console não morde.",
  "Uma linha por vez.",
];

export default function CapivaraScript() {
  const fraseAleatoria =
    frases[Math.floor(Math.random() * frases.length)];

  return (
    <section className="capivara-card">
      <div className="capivara-avatar">
        🦫
      </div>

      <div>
        <h2>
          CapivaraScript
        </h2>

        <p>
          {fraseAleatoria}
        </p>
      </div>
    </section>
  );
}