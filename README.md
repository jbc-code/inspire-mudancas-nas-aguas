# 🌊 Inspire Mudanças nas Águas

Site de conscientização sobre a **poluição marinha**, desenvolvido como projeto extensionista. A proposta é mostrar, de forma acessível, como a poluição dos oceanos afeta a vida marinha, o clima do planeta e o nosso próprio dia a dia — e o que cada pessoa pode fazer para ajudar.

## 🎯 Sobre o projeto

O site aborda quatro grandes temas:

- **Proteger os Oceanos** — o que é a poluição marinha, suas principais causas e seus impactos ambientais, econômicos e sociais.
- **O Clima e os Mares** — o papel do oceano na regulação do clima e como ele vem sendo afetado pelo aquecimento global e pela acidificação das águas.
- **O Impacto do nosso Consumo** — como escolhas de consumo do dia a dia influenciam a saúde dos oceanos, e o conceito de consumo consciente.
- **Aprender para Transformar** — a importância da educação ambiental desde a infância.

Para engajar o público infantil, o site conta com um **jogo da memória interativo**, em que a criança combina pares de imagens relacionadas à vida marinha e ao lixo que a ameaça (garrafas, sacolas, latas, tartarugas, peixes e polvos).

O site também apresenta a equipe responsável pelo projeto, dicas práticas de como ajudar, um formulário de contato e as referências utilizadas na pesquisa.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica do conteúdo.
- **CSS3** — estilização, layout responsivo com Flexbox e Grid, e animações (efeito de flip das cartas, transições).
- **JavaScript (Vanilla JS)** — lógica do jogo da memória e do formulário de contato, sem frameworks ou bibliotecas externas.

## 📂 Estrutura do projeto

```
.
├── index.html          # Estrutura e conteúdo do site
├── style.css           # Estilos e layout
├── script.js           # Lógica do jogo da memória e do formulário
├── images/              # Imagens usadas no site e no jogo
├── video/              # Vídeos ilustrativos de cada seção
└── README.md
```

## 🎮 Como funciona o jogo da memória

- As cartas são embaralhadas a cada partida usando o algoritmo **Fisher-Yates**, garantindo uma distribuição justa.
- O jogador vira duas cartas por vez; se os pares combinarem, elas permanecem viradas e travadas.
- Ao formar todos os 6 pares, uma mensagem de vitória aparece com a opção de jogar novamente.
- O jogo pode ser jogado tanto com o **mouse** quanto com o **teclado** (Tab para navegar entre as cartas e Enter/Espaço para virá-las).

## 🚀 Como executar localmente

Como é um projeto **100% front-end** (sem backend ou build tools), basta:

1. Clonar o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   ```
2. Abrir o arquivo `index.html` diretamente no navegador,

   **ou**, para evitar eventuais bloqueios do navegador ao carregar vídeos/imagens localmente, rodar um servidor simples:
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```
   e acessar `http://localhost:8000` no navegador.

## 👩‍💻 Equipe

- **Júlia** — Estudante de Análise e Desenvolvimento de Sistemas.
- **Cintia** — Técnica de Suporte em TI.
- **Brenda** — Dentista em transição de carreira para Front-End.

## 📚 Referências

As referências completas (textos, imagens e vídeos utilizados) estão listadas na seção **"Referências"** do próprio site. As imagens foram obtidas no [Unsplash](https://unsplash.com/pt-br) e os vídeos foram gerados a partir dessas imagens com a ferramenta Veo 3 do Gemini.

## 📄 Licença

Projeto acadêmico/extensionista de uso educacional. Sinta-se livre para usá-lo como referência de estudo.
