// ===== Jogo da memória: Proteja os oceanos =====

const cardsData = [
  { name: "lata", img: "images/lata.jpg" },
  { name: "garrafa", img: "images/garrafa.jpg" },
  { name: "sacola", img: "images/sacola.jpg" },
  { name: "tartaruga", img: "images/tartaruga.jpg" },
  { name: "peixe", img: "images/peixe.jpg" },
  { name: "polvo", img: "images/polvo.jpg" },
];

// duplica cada carta para formar os pares
const cardsArray = [...cardsData, ...cardsData];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const gameBoard = document.getElementById("memory-game");
const victoryMessage = document.getElementById("victory-message");
const restartBtn = document.getElementById("restart-btn");

// Embaralha o array usando o algoritmo Fisher-Yates
// (o antigo `array.sort(() => 0.5 - Math.random())` não gera uma
// distribuição uniforme e é considerado uma má prática)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Cria o tabuleiro do zero
function createBoard() {
  gameBoard.innerHTML = "";
  matchedPairs = 0;
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  const shuffled = shuffle([...cardsArray]);

  shuffled.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("memory-card");
    cardElement.dataset.name = card.name;

    // Acessibilidade: torna a carta focável e operável por teclado
    cardElement.setAttribute("role", "button");
    cardElement.setAttribute("tabindex", "0");
    cardElement.setAttribute("aria-label", "Carta virada para baixo");

    cardElement.innerHTML = `
      <img src="${card.img}" alt="${card.name}" class="front-face">
      <div class="back-face"></div>
    `;

    // Guarda as referências das funções para poder remover os
    // listeners depois (removeEventListener exige a mesma referência)
    const handleClick = () => flipCard(cardElement);
    const handleKeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flipCard(cardElement);
      }
    };
    cardElement._handleClick = handleClick;
    cardElement._handleKeydown = handleKeydown;

    cardElement.addEventListener("click", handleClick);
    cardElement.addEventListener("keydown", handleKeydown);

    gameBoard.appendChild(cardElement);
  });
}

function flipCard(card) {
  if (lockBoard) return;
  if (card === firstCard) return;
  if (card.classList.contains("flip")) return;

  card.classList.add("flip");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

// Trava o par de cartas que deu match (não podem mais ser clicadas)
function disableCards() {
  [firstCard, secondCard].forEach((card) => {
    card.removeEventListener("click", card._handleClick);
    card.removeEventListener("keydown", card._handleKeydown);
    card.setAttribute("aria-label", `Carta ${card.dataset.name}, combinada`);
  });
  matchedPairs++;
  resetBoard();
  checkWin();
}

// Desvira o par de cartas que não deu match
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function checkWin() {
  if (matchedPairs === cardsData.length) {
    victoryMessage.style.display = "block";
    restartBtn.style.display = "inline-block";
  }
}

// Botão de reiniciar
restartBtn.addEventListener("click", () => {
  victoryMessage.style.display = "none";
  restartBtn.style.display = "none";
  createBoard();
});

// Inicializa o jogo
createBoard();

// ===== Formulário de contato =====
// Sem backend neste projeto: apenas exibimos uma mensagem de sucesso.
const contatoForm = document.getElementById("contato-form");
const feedback = document.getElementById("feedback");

if (feedback) {
  feedback.style.display = "none";
}

if (contatoForm) {
  contatoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // evita recarregar a página

    if (feedback) {
      feedback.textContent = "Mensagem enviada com sucesso!";
      feedback.classList.add("feedback-show");
    }

    contatoForm.reset();

    setTimeout(() => {
      if (feedback) feedback.classList.remove("feedback-show");
    }, 6000);
  });
}
