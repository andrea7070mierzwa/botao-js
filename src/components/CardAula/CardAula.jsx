import PreviewReal from "../PreviewReal/PreviewReal";
import CantinhoVergonha from "../CantinhoVergonha/CantinhoVergonha";

export default function CardAula({ aula }) {
  return (
    <article className="card-aula">
      <h1>{aula.titulo}</h1>

      <p>{aula.descricao}</p>

      <section className="explicacao">
        <h2>🧠 Explicação bebê</h2>

        <p>{aula.explicacao}</p>

        <PreviewReal aula={aula} />

        <CantinhoVergonha aula={aula} />
      </section>
    </article>
  );
}
