# Melhorias aplicadas — Botãozinho JS

## Layout
- Redesign moderno com cards translúcidos, bordas suaves, sombras consistentes e layout responsivo.
- Header reformulado com identidade visual, usuário logado e botão de tema.
- Sidebar redesenhada com navegação mais clara.
- Painéis laterais reorganizados para desktop, tablet e celular.

## Dark mode
- Novo hook `src/hooks/useDarkMode.js`.
- Tema automático baseado no sistema na primeira visita.
- Toggle manual com persistência em `localStorage`.

## Código / consistência
- Correção do erro de CSS inicial em `global.css`.
- Estados lidos do `localStorage` agora têm proteção contra JSON inválido.
- Progresso das aulas concluídas agora é persistido.
- Botões reutilizáveis adicionados em `src/components/common/Button.jsx`.
- Navegação de aulas protegida contra índices inválidos.

## Validação
- `npm install` executado com sucesso.
- `npm run build` executado com sucesso.
