import Button from "../common/Button";

export default function Header({ usuario, isDark, onToggleTheme }) {
  return (
    <header className="app-header">
      <div className="brand">
        <span className="brand-icon" aria-hidden="true">
          🟣
        </span>

        <div>
          <p className="eyebrow">Botãozinho JS</p>
          <h1>Aprenda JavaScript sem desespero.</h1>
          <p className="header-subtitle">
            Trilhas, desafios práticos, quiz e preview visual em uma experiência
            mais limpa e moderna.
          </p>
        </div>
      </div>

      <div className="header-actions">
        {usuario && (
          <span className="user-pill">
            {usuario.tipo === "professor" ? "🧑‍🏫" : "🧑‍💻"} {usuario.nome}
          </span>
        )}

        <Button
          aria-label="Alternar tema claro e escuro"
          onClick={onToggleTheme}
          variant="ghost"
        >
          {isDark ? "☀️ Claro" : "🌙 Escuro"}
        </Button>
      </div>
    </header>
  );
}
