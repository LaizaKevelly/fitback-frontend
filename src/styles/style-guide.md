## 🧡 Style Guide — Portal de Gerenciamento de Academia

Este documento define o guia de estilo do sistema, com base no design atual e ajustado para conformidade mínima de contraste (WCAG AA).
O objetivo é manter consistência visual, boa legibilidade e fidelidade ao layout aplicado no Figma e no Material UI.

## 🎨 Paleta de Cores — Uso Sugerido

- Cinza Escuro Principal #3C3C3C
  → Sidebar, header superior
- Cinza Escuro Secundário #303030
  → Fundo de itens ativos na sidebar, botões desativados, divisórias suaves
- Cinza Claro #F5F5F5
  → Texto, ícones e fundos de conteúdo
- Laranja Principal (Novo) #B25C0A
  → Nova cor de base para ações primárias (garante contraste mínimo de 4.5:1 com texto #FFFFFF)
- Laranja Hover/Focus #8C4708
  → Novo estado de hover/focus para a cor principal, bordas de destaque.
- Laranja Secundário #F28C1F
  → Cor de destaque secundária, para uso em elementos que não possuem texto branco sobre ela (ex: bordas de item ativo na sidebar).
- Branco #FFFFFF
  → Fundo principal da área de conteúdo e tabelas
- Cinza Neutro #E6E6E6
  → Header de tabelas, bordas e divisões sutis

## 📌 Declaração das Cores em CSS

```css
:root {
  --color-gray-dark: #3c3c3c;
  --color-gray-darker: #303030;
  --color-gray-table: #e6e6e6;
  --color-gray-light: #f5f5f5;
  --color-white: #ffffff;
  --color-orange-primary: #b25c0a;
  --color-orange-hover: #8c4708;
  --color-orange-secondary: #f28c1f;
  --color-green: #38a169;
  --color-red: #b3261e;
}
```

## 🧭 Hierarquia de Uso das Cores

| Elemento                 | Cor Principal | Estado Hover / Ativo | Observações                                        |
| ------------------------ | ------------- | -------------------- | -------------------------------------------------- |
| **Sidebar**              | `#3C3C3C`     | —                    | Linhas divisórias com opacidade baixa do laranja   |
| **Item ativo (sidebar)** | `#303030`     | —                    | Texto branco `#F5F5F5` e borda esquerda `#F28C1F`  |
| **Botões primários**     | `#B25C0A`     | `#8C4708`            | Texto branco, sem borda (Garante contraste 4.74:1) |
| **Botões secundários**   | `#FFFFFF`     | `#F5F5F5`            | Borda `#B25C0A`, texto `#B25C0A`                   |
| **Header de tabela**     | `#E6E6E6`     | —                    | Texto escuro `#303030`                             |
| **Linhas de tabela**     | `#FFFFFF`     | Hover: `#F5F5F5`     | Divisórias em `#E6E6E6`                            |
| **Texto padrão**         | `#3C3C3C`     | —                    | Usado em labels, parágrafos e conteúdo             |
| **Ícones ativos**        | `#F28C1F`     | `#B25C0A`            | Estados ativos ou de foco                          |
| **Bordas e divisórias**  | `#E6E6E6`     | —                    | Separações visuais discretas                       |

## 🔤 Tipografia

Fonte principal: Inter

Fonte para títulos: Montserrat

- Títulos (H1, H2) → peso 700 (bold)
- Subtítulos e labels → peso 500 (medium)
- Textos e parágrafos → peso 400 (regular)

```css
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

label {
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

p,
span {
  font-family: "Inter", sans-serif;
  font-weight: 400;
}
```

## 💡 Diretrizes Gerais

- Evite usar o Laranja Secundário (#F28C1F) em grandes áreas ou com texto branco, pois falha no requisito de contraste.
- O contraste entre texto e fundo deve sempre ter relação mínima de 4.5:1.
- Utilize sombras sutis (rgba(0, 0, 0, 0.1–0.2)) para destacar apenas elementos interativos (botões, modais, cards).
- O branco (#FFFFFF) deve ser reservado a áreas de conteúdo e leitura.

## 🎯 Resumo Visual

| Categoria            | Cor       | Uso                             |
| -------------------- | --------- | ------------------------------- |
| **Primária**         | `#F28C1F` | Ações principais, ícones ativos |
| **Hover / Destaque** | `#B25C0A` | Hover, focus                    |
| **Sidebar**          | `#3C3C3C` | Navegação lateral               |
| **Ativo Sidebar**    | `#303030` | Item ativo                      |
| **Texto Claro**      | `#F5F5F5` | Textos sobre fundo escuro       |
| **Fundo Conteúdo**   | `#FFFFFF` | Área principal                  |
| **Tabela Header**    | `#E6E6E6` | Cabeçalhos e divisórias         |
