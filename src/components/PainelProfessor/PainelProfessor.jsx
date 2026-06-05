import { useState } from "react";
import { aulas } from "../../data/aulas";
import { trilhas } from "../../data/trilhas";

function criarId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `exercicio-${Date.now()}`;
}

export default function PainelProfessor({
  exerciciosExtras = [],
  onAdicionarExercicio,
  onExcluirExercicio,
}) {
  const [trilhaSelecionada, setTrilhaSelecionada] = useState("bebe-js");
  const [aulaSelecionada, setAulaSelecionada] = useState(
    aulas["bebe-js"][0].id
  );

  const [titulo, setTitulo] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [alternativas, setAlternativas] = useState(["", "", "", ""]);
  const [correta, setCorreta] = useState(0);
  const [dificuldade, setDificuldade] = useState("iniciante");

  const aulasDaTrilha = aulas[trilhaSelecionada];

  function trocarTrilha(idTrilha) {
    setTrilhaSelecionada(idTrilha);
    setAulaSelecionada(aulas[idTrilha][0].id);
  }

  function alterarAlternativa(index, valor) {
    const novasAlternativas = [...alternativas];
    novasAlternativas[index] = valor;
    setAlternativas(novasAlternativas);
  }

  function limparFormulario() {
    setTitulo("");
    setPergunta("");
    setAlternativas(["", "", "", ""]);
    setCorreta(0);
    setDificuldade("iniciante");
  }

  function salvarExercicio(event) {
    event.preventDefault();

    const alternativasPreenchidas = alternativas.map((item) => item.trim());

    if (
      !titulo.trim() ||
      !pergunta.trim() ||
      alternativasPreenchidas.some((item) => item === "")
    ) {
      alert("Preencha título, pergunta e todas as alternativas.");
      return;
    }

    const novoExercicio = {
      id: criarId(),
      trilhaId: trilhaSelecionada,
      aulaId: aulaSelecionada,
      titulo: titulo.trim(),
      pergunta: pergunta.trim(),
      alternativas: alternativasPreenchidas,
      correta: Number(correta),
      dificuldade,
      criadoEm: new Date().toISOString(),
    };

    onAdicionarExercicio(novoExercicio);
    limparFormulario();
  }

  return (
    <section className="card painel-professor">
      <h2>🧑‍🏫 Painel do Professor</h2>

      <p>Cadastre exercícios completos sem mexer no código.</p>

      <form onSubmit={salvarExercicio}>
        <label>
          Trilha
          <select
            value={trilhaSelecionada}
            onChange={(event) => trocarTrilha(event.target.value)}
          >
            {trilhas.map((trilha) => (
              <option key={trilha.id} value={trilha.id}>
                {trilha.titulo}
              </option>
            ))}
          </select>
        </label>

        <label>
          Aula
          <select
            value={aulaSelecionada}
            onChange={(event) => setAulaSelecionada(event.target.value)}
          >
            {aulasDaTrilha.map((aula) => (
              <option key={aula.id} value={aula.id}>
                {aula.titulo}
              </option>
            ))}
          </select>
        </label>

        <label>
          Dificuldade
          <select
            value={dificuldade}
            onChange={(event) => setDificuldade(event.target.value)}
          >
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="desafio">Desafio</option>
          </select>
        </label>

        <label>
          Título do exercício
          <textarea
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Ex: Praticando variáveis"
          />
        </label>

        <label>
          Pergunta / enunciado
          <textarea
            value={pergunta}
            onChange={(event) => setPergunta(event.target.value)}
            placeholder="Escreva aqui a pergunta ou o desafio completo..."
          />
        </label>

        {alternativas.map((alternativa, index) => (
          <label key={index}>
            Alternativa {index + 1}
            <textarea
              value={alternativa}
              onChange={(event) =>
                alterarAlternativa(index, event.target.value)
              }
              placeholder={`Digite a alternativa ${index + 1}`}
            />
          </label>
        ))}

        <label>
          Resposta correta
          <select
            value={correta}
            onChange={(event) => setCorreta(Number(event.target.value))}
          >
            <option value={0}>Alternativa 1</option>
            <option value={1}>Alternativa 2</option>
            <option value={2}>Alternativa 3</option>
            <option value={3}>Alternativa 4</option>
          </select>
        </label>

        <button type="submit">Adicionar exercício</button>
      </form>

      <section className="lista-exercicios-professor">
        <h3>📚 Exercícios cadastrados</h3>

        {exerciciosExtras.length === 0 ? (
          <p>Nenhum exercício extra cadastrado ainda.</p>
        ) : (
          exerciciosExtras.map((exercicio) => (
            <article key={exercicio.id} className="item-exercicio-professor">
              <strong>{exercicio.titulo}</strong>

              <small>
                {exercicio.dificuldade} • {exercicio.aulaId}
              </small>

              <button
                type="button"
                onClick={() => onExcluirExercicio(exercicio.id)}
              >
                Excluir
              </button>
            </article>
          ))
        )}
      </section>
    </section>
  );
}
