
const botao = document.createElement("button");

botao.textContent = "Mudar tema";

document.body.appendChild(botao);

botao.addEventListener("click", function() {
    document.body.classList.toggle("tema-claro");
});

const projetos = [
    {
        nome: "Calculadora Java",
        descricao: "Calculadora desenvolvida utilizando Java e Swing.",
        link: "https://github.com/SEUUSUARIO/calculadora"
    },
    {
        nome: "Portfólio Pessoal",
        descricao: "Site desenvolvido com HTML, CSS e JavaScript.",
        link: "https://github.com/P3dro0Henrique/meu-portfolio"
    },
    {
        nome: "Projeto Acadêmico",
        descricao: "Projetos e atividades desenvolvidos na faculdade.",
        link: "https://github.com/SEUUSUARIO/projeto"
    }
];

let atual = 0;

function mostrarProjeto() {
    const projeto = projetos[atual];

    document.querySelector(".card h3").textContent = projeto.nome;
    document.querySelector(".card p").textContent = projeto.descricao;
    document.querySelector(".card a").href = projeto.link;
}

document.getElementById("proximo").onclick = () => {
    atual = (atual + 1) % projetos.length;
    mostrarProjeto();
};

document.getElementById("anterior").onclick = () => {
    atual = (atual - 1 + projetos.length) % projetos.length;
    mostrarProjeto();
};
