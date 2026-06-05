import { useEffect, useState } from "react";

function embaralharAlternativas(alternativas) {
  const copia = [...alternativas];

  for (let i = copia.length - 1; i > 0; i--) {
    const indiceAleatorio = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[indiceAleatorio]] = [copia[indiceAleatorio], copia[i]];
  }

  return copia;
}

export default function Quiz({ aula, onConcluirAula }) {
  const [respostaEscolhida, setRespostaEscolhida] = useState(null);
  const [alternativasEmbaralhadas, setAlternativasEmbaralhadas] = useState([]);

  useEffect(() => {
    setRespostaEscolhida(null);

    if (aula?.quiz?.alternativas) {
      const alternativasComIndiceOriginal = aula.quiz.alternativas.map(
        (texto, indexOriginal) => ({
          texto,
          indexOriginal,
        })
      );

      setAlternativasEmbaralhadas(
        embaralharAlternativas(alternativasComIndiceOriginal)
      );
    }
  }, [aula?.id]);

  if (!aula?.quiz) {
    return null;
  }

  const acertou = respostaEscolhida === aula.quiz.correta;

  function responder(indexOriginal) {
    setRespostaEscolhida(indexOriginal);

    if (indexOriginal === aula.quiz.correta) {
      onConcluirAula(aula.id);
    }
  }

  return (
    <section className="card quiz-card">
      <h2>🎯 Quiz</h2>

      <p>{aula.quiz.pergunta}</p>

      <div className="quiz-opcoes">
        {alternativasEmbaralhadas.map((alternativa, index) => (
          <button
            key={`${aula.id}-${alternativa.texto}-${index}`}
            onClick={() => responder(alternativa.indexOriginal)}
            className={
              respostaEscolhida === alternativa.indexOriginal ? "ativo" : ""
            }
          >
            {alternativa.texto}
          </button>
        ))}
      </div>

      {respostaEscolhida !== null && (
        <p className={acertou ? "feedback-certo" : "feedback-erro"}>
          {acertou
            ? "Acertou, dev de rodinhas! 🚲✨"
            : "Quase! Respira, lê de novo e tenta mais uma vez. 🐾"}
        </p>
      )}
    </section>
  );
}
