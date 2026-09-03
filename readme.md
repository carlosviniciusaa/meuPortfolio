# Meu Portfólio

Portfólio pessoal criado para apresentar meus projetos, certificados, formação e canais de contato.

## Tecnologias

- HTML semântico
- CSS responsivo
- JavaScript

## Estrutura

- `index.html`: conteúdo e estrutura da página.
- `style.css`: tema, componentes e responsividade.
- `script.js`: menu mobile, envio do formulário para o WhatsApp e visualização ampliada dos certificados.
- `img/`: imagens utilizadas no portfólio.
- `img/certificados/`: imagens originais dos certificados exibidos na seção Certificados.
- `img/certificados/previews/`: versões otimizadas usadas nos cards para reduzir o carregamento da página.

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
- `.navigation__inner`, `.navigation__brand` e `.navigation__toggle`: navegação horizontal no desktop e menu
  recolhível no mobile.
- `.hero__content`, `.hero__actions` e `.hero__social`: layout e navegação da apresentação inicial.
- `.about__layout` e `.about__content`: composição e painel único da seção Sobre mim.
- `.skills__category`: linhas responsivas das categorias dentro do painel Sobre mim.
- `.skills-card__item` e `.skills-card__icon`: chips informativos com ícones SVG inline.
- `.certificates__grid`: grid responsivo da seção de certificados.
- `.certificate-card`: card de certificado e seus elementos internos.
- `.certificate-dialog`: modal nativo de visualização ampliada dos certificados.

Os componentes seguem uma nomenclatura previsível, como `.project-card`, `.project-card__image` e
`.project-card__title`. Ao criar um novo projeto, copie apenas um elemento `<article class="project-card">`
existente no HTML.

## Certificados

A seção Certificados apresenta as imagens disponíveis em `img/certificados`. Ao selecionar a prévia de um
certificado, um modal permite visualizar a imagem ampliada e pode ser fechado pelo botão, pela tecla `Esc` ou
por um clique fora do conteúdo.

## Contato

Carlos Vinícius

- Email: carlosvinici32@gmail.com
- [LinkedIn](https://www.linkedin.com/in/carlosviniciusaa/)
- [GitHub](https://github.com/carlosviniciusaa)
- [WhatsApp](https://wa.me/5514996981360)
