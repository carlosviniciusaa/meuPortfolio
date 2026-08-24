# Meu Portfólio

Portfólio pessoal criado para apresentar meus projetos, minha formação e meus canais de contato.

## Tecnologias

- HTML semântico
- CSS responsivo
- JavaScript

## Estrutura

- `index.html`: conteúdo e estrutura da página.
- `style.css`: tema, componentes e responsividade.
- `script.js`: envio do formulário para o WhatsApp.
- `img/`: imagens utilizadas no portfólio.

## Manutenção do CSS

O arquivo `style.css` está dividido em seções numeradas. As principais decisões visuais ficam concentradas
nos *design tokens* do seletor `:root`, no início do arquivo.

Para alterar o tema global, prefira editar variáveis como:

- `--color-primary` e `--color-secondary`: cores de destaque.
- `--color-background` e `--color-text`: cores gerais.
- `--space-section`: espaçamento vertical das seções.
- `--content-width`: largura máxima do conteúdo.
- `--radius-lg`: arredondamento de cards e caixas.

Classes reutilizáveis:

- `.section`: espaçamento padrão das seções.
- `.section__title`: títulos de seção.
- `.glass-surface`: efeito de vidro usado em caixas e cards.

Os componentes seguem uma nomenclatura previsível, como `.project-card`, `.project-card__image` e
`.project-card__title`. Ao criar um novo projeto, copie apenas um elemento `<article class="project-card">`
existente no HTML.

## Contato

Carlos Vinícius

- Email: carlosvinici32@gmail.com
- [LinkedIn](https://www.linkedin.com/in/carlosviniciusaa/)
- [GitHub](https://github.com/carlosviniciusaa)
- [WhatsApp](https://wa.me/5514996981360)