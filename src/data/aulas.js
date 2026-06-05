export const aulas = {
  "bebe-js": [
    {
      id: "bebe-variaveis",
      titulo: "🍼 Variáveis",
      descricao: "Aqui começam os primeiros passinhos no JavaScript.",
      explicacao:
        "Variáveis são caixinhas que guardam informações. Você dá um nome para a caixinha e coloca um valor dentro dela.",
      codigo: `const nome = "Andrea";

console.log(nome);`,
      vergonha: {
        comando: "console.log(nome)",
        saida: "Andrea",
        dica: "Se a variável existe e foi escrita do mesmo jeitinho, o console mostra o valor guardado nela.",
      },
      quiz: {
        pergunta: "O que uma variável faz?",
        alternativas: [
          "Guarda uma informação",
          "Apaga o computador",
          "Muda a cor do teclado",
        ],
        correta: 0,
      },
    },

    {
      id: "bebe-tipos",
      titulo: "🔤 Tipos de dados",
      descricao: "JavaScript guarda informações de jeitos diferentes.",
      explicacao:
        "Texto, número, verdadeiro/falso e listas são tipos de dados. Cada tipo ajuda o JavaScript a entender o que pode fazer com aquele valor.",
      codigo: `const nome = "Andrea";
const idade = 54;
const estudando = true;

console.log(nome);
console.log(idade);
console.log(estudando);`,
      vergonha: {
        comando: 'console.log("54" + 1)',
        saida: "541 😵",
        dica: "Quando um número está entre aspas, ele vira texto. Texto + número pode virar bagunça.",
      },
      quiz: {
        pergunta: "Qual destes é um texto em JavaScript?",
        alternativas: ["54", '"Andrea"', "true"],
        correta: 1,
      },
    },

    {
      id: "bebe-operadores",
      titulo: "➕ Operadores",
      descricao: "Continhas e comparações sem sofrimento.",
      explicacao:
        "Operadores são sinais que o JavaScript usa para calcular, comparar ou juntar valores.",
      codigo: `const total = 10 + 5;
const dobro = total * 2;

console.log(dobro);`,
      vergonha: {
        comando: 'console.log("10" + 5)',
        saida: "105 🫠",
        dica: "O sinal + também junta textos. Se um dos valores for texto, o resultado pode virar texto também.",
      },
      quiz: {
        pergunta: "Qual operador usamos para multiplicar?",
        alternativas: ["+", "*", "="],
        correta: 1,
      },
    },

    {
      id: "bebe-strings",
      titulo: "💬 Strings",
      descricao: "Textos também são dados.",
      explicacao:
        "String é texto. Em JavaScript, textos ficam entre aspas simples, duplas ou crases.",
      codigo: `const saudacao = "Bom dia";
const nome = "Andrea";

console.log(saudacao + ", " + nome);`,
      vergonha: {
        comando: "const nome = Andrea",
        saida: "ReferenceError 😬",
        dica: "Texto precisa de aspas. Sem aspas, o JavaScript acha que Andrea é uma variável.",
      },
      quiz: {
        pergunta: "Como escrevemos um texto corretamente?",
        alternativas: ["Andrea", '"Andrea"', "console.Andrea"],
        correta: 1,
      },
    },

    {
      id: "bebe-condicoes",
      titulo: "🚦 Condições",
      descricao: "O famoso: se acontecer isso, faça aquilo.",
      explicacao:
        "Condições permitem que o código tome decisões usando if e else.",
      codigo: `const idade = 18;

if (idade >= 18) {
  console.log("Pode entrar");
} else {
  console.log("Ainda não pode");
}`,
      vergonha: {
        comando: "if idade >= 18",
        saida: "SyntaxError 😵",
        dica: "No if, a condição precisa ficar entre parênteses: if (idade >= 18).",
      },
      quiz: {
        pergunta: "Qual palavra usamos para criar uma condição?",
        alternativas: ["if", "loop", "array"],
        correta: 0,
      },
    },

    {
      id: "bebe-funcoes",
      titulo: "🧩 Funções simples",
      descricao: "Guardar uma ação para usar depois.",
      explicacao:
        "Função é um bloquinho de código com nome. Você cria uma vez e chama quando quiser executar aquela ação.",
      codigo: `function dizerOi() {
  console.log("Oi, dev!");
}

dizerOi();`,
      vergonha: {
        comando: "dizerOi",
        saida: "Nada aconteceu 😅",
        dica: "Para chamar uma função, use parênteses: dizerOi().",
      },
      quiz: {
        pergunta: "Como chamamos uma função chamada dizerOi?",
        alternativas: ["dizerOi", "dizerOi()", "function dizerOi"],
        correta: 1,
      },
    },
  ],

  "dev-rodinhas": [
    {
      id: "rodinhas-parametros",
      titulo: "🚲 Funções com parâmetros",
      descricao: "Funções que recebem informações.",
      explicacao:
        "Parâmetros são valores que uma função recebe para trabalhar. Eles deixam a função mais flexível.",
      codigo: `function cumprimentar(nome) {
  console.log("Olá, " + nome);
}

cumprimentar("Andrea");`,
      vergonha: {
        comando: "cumprimentar()",
        saida: "Olá, undefined 😬",
        dica: "Se a função espera um parâmetro, você precisa enviar um valor dentro dos parênteses.",
      },
      quiz: {
        pergunta: "O que é um parâmetro?",
        alternativas: [
          "Um valor enviado para a função",
          "Um erro do console",
          "Uma cor do CSS",
        ],
        correta: 0,
      },
    },

    {
      id: "rodinhas-return",
      titulo: "↩️ Return",
      descricao: "Fazer a função devolver uma resposta.",
      explicacao:
        "O return devolve um valor para quem chamou a função. Sem return, a função pode executar algo, mas não entrega resultado.",
      codigo: `function somar(a, b) {
  return a + b;
}

const resultado = somar(2, 3);

console.log(resultado);`,
      vergonha: {
        comando: "console.log(somar)",
        saida: "Mostra a função, não o resultado",
        dica: "Para executar e receber o resultado, chame com parênteses: somar(2, 3).",
      },
      quiz: {
        pergunta: "Para que serve o return?",
        alternativas: [
          "Para devolver um valor",
          "Para apagar uma variável",
          "Para criar uma imagem",
        ],
        correta: 0,
      },
    },

    {
      id: "rodinhas-escopo",
      titulo: "📦 Escopo",
      descricao: "Cada variável tem sua área de existência.",
      explicacao:
        "Escopo é onde uma variável existe. Uma variável criada dentro de uma função normalmente só existe dentro dela.",
      codigo: `function teste() {
  const mensagem = "Oi";
  console.log(mensagem);
}

teste();`,
      vergonha: {
        comando: "console.log(mensagem)",
        saida: "ReferenceError 😵",
        dica: "A variável mensagem nasceu dentro da função. Fora dela, o JavaScript não encontra.",
      },
      quiz: {
        pergunta: "Uma variável criada dentro de uma função existe onde?",
        alternativas: [
          "Dentro da função",
          "Em todos os sites do mundo",
          "Só no CSS",
        ],
        correta: 0,
      },
    },

    {
      id: "rodinhas-loops",
      titulo: "🔁 Loops",
      descricao: "Repetir tarefas sem escrever tudo de novo.",
      explicacao:
        "Loops servem para repetir ações. O for é muito usado quando sabemos quantas vezes queremos repetir.",
      codigo: `for (let i = 1; i <= 3; i++) {
  console.log("Volta número " + i);
}`,
      vergonha: {
        comando: "for (let i = 1; i <= 3)",
        saida: "Loop incompleto 😬",
        dica: "O for precisa de começo, condição e atualização: for (início; condição; atualização).",
      },
      quiz: {
        pergunta: "Para que serve um loop?",
        alternativas: [
          "Para repetir ações",
          "Para trocar a fonte",
          "Para salvar senha",
        ],
        correta: 0,
      },
    },

    {
      id: "rodinhas-eventos",
      titulo: "🖱️ Eventos",
      descricao: "Quando o usuário faz algo, o JS responde.",
      explicacao:
        "Eventos são ações como clicar, digitar ou passar o mouse. O JavaScript pode reagir a essas ações.",
      codigo: `const botao = document.querySelector("button");

botao.addEventListener("click", function() {
  console.log("Cliquei!");
});`,
      vergonha: {
        comando: "addEventListener('click')",
        saida: "Faltou dizer quem escuta o evento",
        dica: "Você precisa escolher um elemento antes: botao.addEventListener(...).",
      },
      quiz: {
        pergunta: "Qual evento acontece quando clicamos?",
        alternativas: ["click", "type", "paint"],
        correta: 0,
      },
    },

    {
      id: "rodinhas-botao",
      titulo: "🟣 Mini botão interativo",
      descricao: "Juntando função, evento e mudança de texto.",
      explicacao:
        "Agora começamos a juntar as peças: pegar um botão, escutar o clique e mudar algo na tela.",
      codigo: `const botao = document.querySelector("button");
const texto = document.querySelector("p");

botao.addEventListener("click", function() {
  texto.textContent = "Botãozinho acordou!";
});`,
      vergonha: {
        comando: "texto.innerText = Botãozinho acordou",
        saida: "ReferenceError 😅",
        dica: "Textos precisam de aspas: texto.innerText = 'Botãozinho acordou'.",
      },
      quiz: {
        pergunta: "O que textContent faz?",
        alternativas: [
          "Altera o texto de um elemento",
          "Desliga o navegador",
          "Cria uma pasta",
        ],
        correta: 0,
      },
    },
  ],

  "domador-arrays": [
    {
      id: "arrays-intro",
      titulo: "🧃 O que são arrays",
      descricao: "Uma lista dentro de uma variável.",
      explicacao:
        "Array é uma lista. Ele guarda vários valores dentro de uma única variável.",
      codigo: `const frutas = ["maçã", "banana", "uva"];

console.log(frutas);`,
      vergonha: {
        comando: 'const frutas = "maçã", "banana"',
        saida: "Lista mal montada 😬",
        dica: "Para criar array, use colchetes: [ ].",
      },
      quiz: {
        pergunta: "Qual símbolo usamos para criar arrays?",
        alternativas: ["[]", "{}", "()"],
        correta: 0,
      },
    },

    {
      id: "arrays-indices",
      titulo: "🔢 Índices",
      descricao: "Arrays começam do zero.",
      explicacao:
        "Cada item do array tem uma posição chamada índice. Em JavaScript, o primeiro índice é 0.",
      codigo: `const frutas = ["maçã", "banana", "uva"];

console.log(frutas[0]);`,
      vergonha: {
        comando: "console.log(frutas[3])",
        saida: "undefined 🫠",
        dica: "Se o array tem 3 itens, os índices são 0, 1 e 2.",
      },
      quiz: {
        pergunta: "Qual é o índice do primeiro item?",
        alternativas: ["0", "1", "Primeiro"],
        correta: 0,
      },
    },

    {
      id: "arrays-push-pop",
      titulo: "➕ push e pop",
      descricao: "Adicionar e remover itens da lista.",
      explicacao:
        "push adiciona um item no final do array. pop remove o último item.",
      codigo: `const frutas = ["maçã", "banana"];

frutas.push("uva");
frutas.pop();

console.log(frutas);`,
      vergonha: {
        comando: "frutas.push",
        saida: "Nada foi adicionado",
        dica: "Métodos precisam ser chamados com parênteses: frutas.push('uva').",
      },
      quiz: {
        pergunta: "Qual método adiciona item ao final do array?",
        alternativas: ["push", "pop", "console"],
        correta: 0,
      },
    },

    {
      id: "arrays-map",
      titulo: "🗺️ map",
      descricao: "Transformar cada item de uma lista.",
      explicacao:
        "O map passa por todos os itens do array e cria um novo array transformado.",
      codigo: `const numeros = [1, 2, 3];

const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);`,
      vergonha: {
        comando: "numeros.map(numero * 2)",
        saida: "Erro de sintaxe 😵",
        dica: "O map precisa receber uma função: numeros.map((numero) => numero * 2).",
      },
      quiz: {
        pergunta: "O map geralmente cria:",
        alternativas: [
          "Um novo array transformado",
          "Um arquivo PDF",
          "Uma senha",
        ],
        correta: 0,
      },
    },

    {
      id: "arrays-filter-find",
      titulo: "🔎 filter e find",
      descricao: "Encontrar itens numa lista.",
      explicacao:
        "filter cria uma lista com todos os itens que passam no teste. find encontra o primeiro item que passa no teste.",
      codigo: `const idades = [12, 18, 25];

const maiores = idades.filter((idade) => idade >= 18);
const primeiroMaior = idades.find((idade) => idade >= 18);

console.log(maiores);
console.log(primeiroMaior);`,
      vergonha: {
        comando: "idades.filter(idade >= 18)",
        saida: "Faltou função",
        dica: "Use uma função dentro do filter: idades.filter((idade) => idade >= 18).",
      },
      quiz: {
        pergunta: "Qual método retorna vários itens que passam no teste?",
        alternativas: ["filter", "find", "pop"],
        correta: 0,
      },
    },

    {
      id: "arrays-reduce",
      titulo: "🧮 reduce",
      descricao: "Reduzir uma lista a um único resultado.",
      explicacao:
        "O reduce percorre o array acumulando um resultado final, como uma soma.",
      codigo: `const valores = [10, 20, 30];

const total = valores.reduce((soma, valor) => soma + valor, 0);

console.log(total);`,
      vergonha: {
        comando: "valores.reduce(valor + soma)",
        saida: "O reduce ficou confuso 😅",
        dica: "O reduce precisa de uma função com acumulador e valor atual.",
      },
      quiz: {
        pergunta: "O reduce é muito usado para:",
        alternativas: [
          "Gerar um resultado acumulado",
          "Abrir uma imagem",
          "Trocar o HTML inteiro",
        ],
        correta: 0,
      },
    },
  ],

  "console-log": [
    {
      id: "console-intro",
      titulo: "☕ console.log sem trauma",
      descricao: "Olhar o que o código está fazendo.",
      explicacao:
        "O console.log mostra informações no console e ajuda a investigar o comportamento do código.",
      codigo: `const humor = "sobrevivendo";

console.log(humor);`,
      vergonha: {
        comando: "console.log(humorErrado)",
        saida: "ReferenceError 😵",
        dica: "O JavaScript não adivinha nomes. Se a variável chama humor, use humor.",
      },
      quiz: {
        pergunta: "Para que usamos console.log?",
        alternativas: [
          "Para visualizar informações no console",
          "Para publicar o site",
          "Para formatar CSS",
        ],
        correta: 0,
      },
    },

    {
      id: "console-erros",
      titulo: "🚨 Erros comuns",
      descricao: "O erro não é inimigo; é pista.",
      explicacao:
        "Mensagens de erro ajudam a descobrir o que deu errado. Ler o erro é parte do trabalho dev.",
      codigo: `const nome = "Andrea";

console.log(nome);`,
      vergonha: {
        comando: "console.log(nomne)",
        saida: "ReferenceError: nomne is not defined",
        dica: "Muitos erros nascem de letra trocada. O console é dedo-duro, mas ajuda.",
      },
      quiz: {
        pergunta: "O que um ReferenceError geralmente indica?",
        alternativas: [
          "Algo não foi encontrado/definido",
          "O CSS está bonito",
          "A internet caiu",
        ],
        correta: 0,
      },
    },

    {
      id: "dom-intro",
      titulo: "🌐 DOM",
      descricao: "O HTML visto pelo JavaScript.",
      explicacao:
        "DOM é a representação da página que o JavaScript consegue acessar e modificar.",
      codigo: `const titulo = document.querySelector("h1");

console.log(titulo);`,
      vergonha: {
        comando: "document.querySelector(h1)",
        saida: "ReferenceError 😬",
        dica: "Seletores CSS precisam ser texto: document.querySelector('h1').",
      },
      quiz: {
        pergunta: "O DOM permite que o JavaScript:",
        alternativas: [
          "Acesse e modifique a página",
          "Troque a placa de vídeo",
          "Apague o sistema",
        ],
        correta: 0,
      },
    },

    {
      id: "query-selector",
      titulo: "🎯 querySelector",
      descricao: "Escolher um elemento da tela.",
      explicacao:
        "querySelector pega o primeiro elemento que combina com o seletor informado.",
      codigo: `const botao = document.querySelector(".botao-principal");

console.log(botao);`,
      vergonha: {
        comando: "document.querySelector(botao-principal)",
        saida: "Faltaram aspas e ponto da classe",
        dica: "Para classe, use ponto e aspas: document.querySelector('.botao-principal').",
      },
      quiz: {
        pergunta: "Como selecionamos uma classe chamada card?",
        alternativas: [
          "document.querySelector('.card')",
          "document.querySelector('card')",
          "document.card",
        ],
        correta: 0,
      },
    },

    {
      id: "add-event-listener",
      titulo: "👂 addEventListener",
      descricao: "Escutar ações do usuário.",
      explicacao:
        "addEventListener permite que um elemento reaja a eventos, como cliques.",
      codigo: `const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  console.log("Clicou!");
});`,
      vergonha: {
        comando: "botao.addEventListener(click, ...)",
        saida: "ReferenceError: click is not defined",
        dica: "O nome do evento precisa ser texto: 'click'.",
      },
      quiz: {
        pergunta: "O que addEventListener faz?",
        alternativas: [
          "Escuta eventos em um elemento",
          "Cria um array",
          "Apaga o console",
        ],
        correta: 0,
      },
    },

    {
      id: "mini-projeto-final",
      titulo: "🏁 Mini projeto final",
      descricao: "O Botãozinho acordou oficialmente.",
      explicacao:
        "Agora juntamos variável, função, DOM e evento para fazer um botão mudar uma mensagem na tela.",
      codigo: `const botao = document.querySelector("button");
const mensagem = document.querySelector("p");

function acordarBotaozinho() {
  mensagem.textContent = "Botãozinho acordou!";
}

botao.addEventListener("click", acordarBotaozinho);`,
      vergonha: {
        comando: "botao.addEventListener('click', acordarBotaozinho())",
        saida: "A função executa antes do clique 😅",
        dica: "Passe a função sem parênteses: addEventListener('click', acordarBotaozinho).",
      },
      desafio: {
        titulo: "🎯 Missão: primeira variável",
        enunciado:
          'Crie uma variável chamada cidade com o valor "Jaraguá do Sul" e mostre esse valor no console.',
        dicas: [
          "Você precisa criar uma variável com const.",
          'O texto precisa estar entre aspas: "Jaraguá do Sul".',
          "Depois mostre no console com console.log(cidade).",
        ],
        validacao: {
          deveConter: ["const cidade", "console.log"],
          saidaEsperada: "Jaraguá do Sul",
        },
      },
      quiz: {
        pergunta:
          "No addEventListener, por que passamos a função sem parênteses?",
        alternativas: [
          "Para ela executar só quando o evento acontecer",
          "Porque função não usa parênteses nunca",
          "Porque o CSS pediu",
        ],
        correta: 0,
      },
    },
  ],
};
