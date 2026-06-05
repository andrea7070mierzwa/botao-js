import { trilhas } from "../../data/trilhas";

export default function Sidebar({ setTrilhaAtual, trilhaAtual }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span>🧭</span>
        <div>
          <p className="eyebrow">Navegação</p>
          <h2>Trilhas</h2>
        </div>
      </div>

      <nav className="trail-list" aria-label="Trilhas de aprendizado">
        {trilhas.map((trilha) => (
          <button
            key={trilha.id}
            className={trilhaAtual === trilha.id ? "ativo" : ""}
            onClick={() => setTrilhaAtual(trilha.id)}
            type="button"
          >
            <span>{trilha.titulo}</span>
            {trilhaAtual === trilha.id && <strong>Atual</strong>}
          </button>
        ))}
      </nav>
    </aside>
  );
}
