
/* =========================
   MUDAR TEMA
========================= */

const botaoTema = document.createElement("button");

botaoTema.textContent = "Mudar tema";
botaoTema.classList.add("botao-tema");

document.body.appendChild(botaoTema);

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");
});


/* =========================
   PROJETOS
========================= */

const projetos = [
    {
        nome: "Lista de Tarefas",
        descricao: "Aplicação para adicionar e remover tarefas usando HTML, CSS e JavaScript.",
        link: "https://github.com/P3dro0Henrique"
    },
    {
        nome: "Lâmpada Interativa",
        descricao: "Projeto interativo para acender e apagar uma lâmpada utilizando JavaScript.",
        link: "https://github.com/P3dro0Henrique"
    },
    {
        nome: "Calculadora Java",
        descricao: "Calculadora desenvolvida utilizando Java e Swing.",
        link: "https://github.com/P3dro0Henrique"
    },
    {
        nome: "Portfólio Pessoal",
        descricao: "Meu site pessoal desenvolvido com HTML, CSS e JavaScript.",
        link: "https://github.com/P3dro0Henrique/meu-portfolio"
    }
];


/* =========================
   CRIAR CARDS
========================= */

const trilha = document.querySelector(".container-projetos");

projetos.forEach((projeto) => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>

        <p>${projeto.descricao}</p>

        <a href="${projeto.link}" target="_blank">
            Ver projeto
        </a>
    `;

    trilha.appendChild(card);
});


/* =========================
   CARROSSEL HORIZONTAL
========================= */

const janela = document.querySelector(".carrossel-janela");
const cards = document.querySelectorAll(".container-projetos .card");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let indiceAtual = 0;

function atualizarCarrossel() {

    const cardAtual = cards[indiceAtual];

    const deslocamento =
        cardAtual.offsetLeft +
        cardAtual.offsetWidth / 2 -
        janela.clientWidth / 2;

    trilha.style.transform = `translateX(${-deslocamento}px)`;

    cards.forEach((card, indice) => {
        card.classList.toggle("ativo", indice === indiceAtual);
    });
}

proximo.addEventListener("click", () => {

    indiceAtual = (indiceAtual + 1) % cards.length;

    atualizarCarrossel();
});

anterior.addEventListener("click", () => {

    indiceAtual = (indiceAtual - 1 + cards.length) % cards.length;

    atualizarCarrossel();
});

window.addEventListener("resize", atualizarCarrossel);

atualizarCarrossel();
