export default function PreviewReal({
  aula,
}) {

  return (

    <section className="preview-real">

      <h2>
        📱 Aplicação real
      </h2>

      {aula.id === "bebe-js" && (

        <div className="preview-card">

          <p>
            👤 Usuário:
            Andrea
          </p>

        </div>

      )}

      {aula.id === "domador-arrays" && (

        <div className="preview-card">

          <p>🍎 Maçã</p>

          <p>🍌 Banana</p>

          <p>🍇 Uva</p>

        </div>

      )}

    </section>

  );
}