import { useEffect, useRef, useState } from "react";

import Login from "./components/Login/Login";
import PainelProfessor from "./components/PainelProfessor/PainelProfessor";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CapivaraScript from "./components/CapivaraScript/CapivaraScript";
import CardAula from "./components/CardAula/CardAula";
import Quiz from "./components/Quiz/Quiz";
import Exercicios from "./components/Exercicios/Exercicios";
import Progresso from "./components/Progresso/Progresso";
import Conquistas from "./components/Conquistas/Conquistas";
import Button from "./components/common/Button";
import { useDarkMode } from "./hooks/useDarkMode";

import { aulas } from "./data/aulas";

function lerJsonLocalStorage(chave, valorInicial) {
  try {
    const valorSalvo = localStorage.getItem(chave);
    return valorSalvo ? JSON.parse(valorSalvo) : valorInicial;
  } catch {
    localStorage.removeItem(chave);
    return valorInicial;
  }
}

export default function App() {
  const { isDark, toggleTheme } = useDarkMode();

  const [usuario, setUsuario] = useState(() =>
    lerJsonLocalStorage("botaozinho-usuario", null)
  );

  const [trilhaAtual, setTrilhaAtual] = useState("bebe-js");
  const [indiceAulaAtual, setIndiceAulaAtual] = useState(0);
  const [aulasConcluidas, setAulasConcluidas] = useState(() =>
    lerJsonLocalStorage("botaozinho-aulas-concluidas", [])
  );
  const [mostrarPainelProfessor, setMostrarPainelProfessor] = useState(false);

  const painelProfessorRef = useRef(null);

  const [exerciciosExtras, setExerciciosExtras] = useState(() =>
    lerJsonLocalStorage("botaozinho-exercicios", [])
  );

  const aulasDaTrilha = aulas[trilhaAtual] || [];
  const aulaAtual = aulasDaTrilha[indiceAulaAtual] || aulasDaTrilha[0];

  const totalAulas = Object.values(aulas).reduce(
    (total, listaDeAulas) => total + listaDeAulas.length,
    0
  );

  useEffect(() => {
    localStorage.setItem(
      "botaozinho-aulas-concluidas",
      JSON.stringify(aulasConcluidas)
    );
  }, [aulasConcluidas]);

  useEffect(() => {
    if (mostrarPainelProfessor && painelProfessorRef.current) {
      painelProfessorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [mostrarPainelProfessor]);

  function fazerLogin(dadosUsuario) {
    setUsuario(dadosUsuario);
  }

  function sair() {
    localStorage.removeItem("botaozinho-usuario");
    setUsuario(null);
    setMostrarPainelProfessor(false);
  }

  function mudarTrilha(idTrilha) {
    setTrilhaAtual(idTrilha);
    setIndiceAulaAtual(0);
    setMostrarPainelProfessor(false);
  }

  function concluirAula(idAula) {
    setAulasConcluidas((aulasAtuais) => {
      if (aulasAtuais.includes(idAula)) {
        return aulasAtuais;
      }

      return [...aulasAtuais, idAula];
    });
  }

  function irParaProximaAula() {
    setIndiceAulaAtual((indiceAtual) =>
      Math.min(indiceAtual + 1, aulasDaTrilha.length - 1)
    );
  }

  function voltarAula() {
    setIndiceAulaAtual((indiceAtual) => Math.max(indiceAtual - 1, 0));
  }

  function adicionarExercicio(novoExercicio) {
    const listaAtualizada = [...exerciciosExtras, novoExercicio];

    setExerciciosExtras(listaAtualizada);
    localStorage.setItem(
      "botaozinho-exercicios",
      JSON.stringify(listaAtualizada)
    );
  }

  function excluirExercicio(idExercicio) {
    const listaAtualizada = exerciciosExtras.filter(
      (exercicio) => exercicio.id !== idExercicio
    );

    setExerciciosExtras(listaAtualizada);
    localStorage.setItem(
      "botaozinho-exercicios",
      JSON.stringify(listaAtualizada)
    );
  }

  if (!usuario) {
    return <Login onLogin={fazerLogin} />;
  }

  if (!aulaAtual) {
    return (
      <main className="layout-geral">
        <Header usuario={usuario} isDark={isDark} onToggleTheme={toggleTheme} />
        <section className="card empty-state">
          <h2>Nenhuma aula encontrada.</h2>
          <p>Verifique os dados das trilhas em src/data/aulas.js.</p>
        </section>
      </main>
    );
  }

  const exerciciosDaAulaAtual = exerciciosExtras.filter(
    (exercicio) => exercicio.aulaId === aulaAtual.id
  );

  return (
    <main className="layout-geral">
      <Header usuario={usuario} isDark={isDark} onToggleTheme={toggleTheme} />

      <div className="layout">
        <Sidebar setTrilhaAtual={mudarTrilha} trilhaAtual={trilhaAtual} />

        <section className="conteudo">
          <CapivaraScript />

          <CardAula aula={aulaAtual} />

          {exerciciosDaAulaAtual.map((exercicio) => (
            <section className="card exercicio-extra" key={exercicio.id}>
              <span className="tag">{exercicio.dificuldade}</span>

              <h2>{exercicio.titulo}</h2>

              <p>{exercicio.pergunta || exercicio.descricao}</p>

              {exercicio.alternativas && (
                <div className="exercicio-extra-opcoes">
                  {exercicio.alternativas.map((alternativa, index) => (
                    <div
                      key={`${exercicio.id}-${index}`}
                      className={
                        index === exercicio.correta
                          ? "exercicio-extra-opcao correta"
                          : "exercicio-extra-opcao"
                      }
                    >
                      <strong>{String.fromCharCode(65 + index)})</strong>{" "}
                      {alternativa}
                    </div>
                  ))}
                </div>
              )}

              {exercicio.alternativas && (
                <p className="resposta-extra">
                  ✅ Resposta correta: alternativa{" "}
                  {String.fromCharCode(65 + exercicio.correta)}
                </p>
              )}
            </section>
          ))}

          <Quiz aula={aulaAtual} onConcluirAula={concluirAula} />

          <div className="navegacao-aulas">
            <Button onClick={voltarAula} disabled={indiceAulaAtual === 0}>
              ← Aula anterior
            </Button>

            <span>
              Aula {indiceAulaAtual + 1} de {aulasDaTrilha.length}
            </span>

            <Button
              onClick={irParaProximaAula}
              disabled={indiceAulaAtual === aulasDaTrilha.length - 1}
            >
              Próxima aula →
            </Button>
          </div>

          <Exercicios />

          {usuario.tipo === "professor" && mostrarPainelProfessor && (
            <section
              className="painel-professor-central"
              ref={painelProfessorRef}
            >
              <div className="painel-professor-topo">
                <div>
                  <p className="eyebrow">Professor</p>
                  <h2>➕ Inserir exercícios</h2>
                  <p>Cadastre novos desafios para a aula escolhida.</p>
                </div>

                <Button
                  type="button"
                  onClick={() => setMostrarPainelProfessor(false)}
                  variant="ghost"
                >
                  Fechar painel
                </Button>
              </div>

              <PainelProfessor
                exerciciosExtras={exerciciosExtras}
                onAdicionarExercicio={adicionarExercicio}
                onExcluirExercicio={excluirExercicio}
              />
            </section>
          )}
        </section>

        <aside className="painel-lateral">
          <section className="card usuario-card">
            <h2>👤 Usuário</h2>
            <p>{usuario.nome}</p>
            <strong>{usuario.tipo}</strong>
            <Button onClick={sair} variant="secondary">
              Sair
            </Button>
          </section>

          {usuario.tipo === "professor" && (
            <section className="card inserir-exercicios-card">
              <h2>➕ Exercícios</h2>

              <p>Abra o painel para cadastrar novos cards.</p>

              <Button
                type="button"
                onClick={() =>
                  setMostrarPainelProfessor((estadoAtual) => !estadoAtual)
                }
              >
                {mostrarPainelProfessor
                  ? "Ocultar painel"
                  : "Inserir exercícios"}
              </Button>
            </section>
          )}

          <Progresso
            aulaAtual={aulaAtual}
            totalAulas={totalAulas}
            aulasConcluidas={aulasConcluidas}
          />

          <Conquistas aulasConcluidas={aulasConcluidas} />
        </aside>
      </div>
    </main>
  );
}
