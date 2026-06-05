import { useEffect, useRef } from "react";

export default function PreviewVisual({ jsAluno }) {
  const iframeRef = useRef(null);

  const htmlBase = `
    <main class="palco">
      <section class="cartao" id="cartao">
        <h1 id="titulo">Botãozinho JS</h1>
        <p id="mensagem">O resultado visual aparecerá aqui.</p>

        <button id="botao">Clique aqui</button>

        <input id="campoTexto" type="text" placeholder="Digite algo..." />

        <ul id="lista"></ul>

        <div id="caixa">Caixa visual</div>
      </section>
    </main>
  `;

  const cssBase = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #fdf2f8, #ede9fe);
      color: #1f2937;
      display: grid;
      place-items: center;
      padding: 20px;
    }

    .palco {
      width: 100%;
      max-width: 520px;
    }

    .cartao {
      background: white;
      padding: 26px;
      border-radius: 24px;
      text-align: center;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
    }

    h1 {
      color: #7c3aed;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.5;
    }

    button {
      border: none;
      padding: 12px 18px;
      border-radius: 14px;
      background: #8b5cf6;
      color: white;
      font-weight: bold;
      cursor: pointer;
      margin: 10px 0;
    }

    input {
      width: 100%;
      padding: 12px;
      border: 2px solid #ddd6fe;
      border-radius: 14px;
      margin: 10px 0;
      font: inherit;
    }

    ul {
      text-align: left;
      display: grid;
      gap: 8px;
      margin-top: 14px;
      padding-left: 20px;
    }

    li {
      background: #f3f4f6;
      padding: 8px 10px;
      border-radius: 10px;
    }

    #caixa {
      min-height: 50px;
      margin-top: 14px;
      border-radius: 16px;
      background: #fce7f3;
      display: grid;
      place-items: center;
      color: #9d174d;
      font-weight: bold;
      padding: 12px;
    }
  `;

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    const documento = iframe.contentDocument;

    documento.open();
    documento.write(`
      <!doctype html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <style>${cssBase}</style>
        </head>

        <body>
          ${htmlBase}

          <script>
            try {
              ${jsAluno || ""}
            } catch (erro) {
              const mensagem = document.querySelector("#mensagem");

              if (mensagem) {
                mensagem.textContent = "Erro: " + erro.message;
                mensagem.style.color = "#b91c1c";
                mensagem.style.fontWeight = "bold";
              }
            }
          </script>
        </body>
      </html>
    `);
    documento.close();
  }, [jsAluno]);

  return (
    <section className="preview-visual-card">
      <header className="preview-visual-topo">
        <h3>🎨 Preview visual</h3>
        <p>Veja o JavaScript mexendo em elementos reais da tela.</p>
      </header>

      <iframe
        ref={iframeRef}
        title="Preview visual do exercício"
        className="preview-visual-frame"
      />

      <details className="preview-ajuda">
        <summary>Elementos disponíveis para usar no JS</summary>

        <ul>
          <li>
            <code>#titulo</code> — título principal
          </li>
          <li>
            <code>#mensagem</code> — parágrafo de mensagem
          </li>
          <li>
            <code>#botao</code> — botão clicável
          </li>
          <li>
            <code>#campoTexto</code> — campo de texto
          </li>
          <li>
            <code>#lista</code> — lista para criar itens
          </li>
          <li>
            <code>#caixa</code> — caixa visual para testes
          </li>
        </ul>
      </details>
    </section>
  );
}
