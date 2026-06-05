import { useState } from "react";

export default function Login({ onLogin }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("aluno");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function entrar(event) {
    event.preventDefault();

    if (!nome.trim()) {
      setErro("Digite seu nome para entrar.");
      return;
    }

    if (tipo === "professor" && senha !== "professor123") {
      setErro("Senha de professor incorreta.");
      return;
    }

    const usuario = {
      nome: nome.trim(),
      tipo,
      entrouEm: new Date().toISOString(),
    };

    localStorage.setItem("botaozinho-usuario", JSON.stringify(usuario));

    onLogin(usuario);
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>🟣 Botãozinho JS</h1>

        <p>Entre para continuar sua jornada dev sem trauma.</p>

        <form onSubmit={entrar}>
          <label>
            Nome
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Digite seu nome"
            />
          </label>

          <label>
            Perfil
            <select
              value={tipo}
              onChange={(event) => {
                setTipo(event.target.value);
                setErro("");
              }}
            >
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
            </select>
          </label>

          {tipo === "professor" && (
            <label>
              Senha do professor
              <input
                type="password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                placeholder="Digite a senha do professor"
              />
            </label>
          )}

          {erro && <p className="login-erro">{erro}</p>}

          <button type="submit">Entrar</button>
        </form>

        <p className="login-dica">
          Dica dev: senha do professor neste MVP é <strong>professor123</strong>
          .
        </p>
      </section>
    </main>
  );
}
