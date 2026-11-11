
const botao = document.createElement("button");

botao.textContent = "Mudar tema";

document.body.appendChild(botao);

botao.addEventListener("click", function() {
    document.body.classList.toggle("tema-claro");
});
