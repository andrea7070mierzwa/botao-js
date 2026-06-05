import { aulas } from "../../data/aulas";

const todasAsAulas = Object.values(aulas).flat();

export default function Conquistas({ aulasConcluidas }) {
  const conquistasLiberadas = todasAsAulas.filter((aula) =>
    aulasConcluidas.includes(aula.id)
  );

  return (
    <section className="card conquistas-card">
      <h2>🏆 Conquistas</h2>

      {conquistasLiberadas.length === 0 ? (
        <p>Responda um quiz corretamente para desbloquear conquistas.</p>
      ) : (
        <ul>
          {conquistasLiberadas.map((aula) => (
            <li key={aula.id}>✅ {aula.titulo}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
