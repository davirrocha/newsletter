//Selecionar elementos
const root = document.documentElement;
const btn = document.querySelector(".btn-theme")
const ano = document.getElementById("ano")

// preenchendo ano atual
ano.textContent = new Date().getFullYear()


// Tema Light/Dark
btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === "escuro"
    if (escuro) {
        root.removeAttribute("data-tema")
    } else {
        root.setAttribute("data-tema", "escuro")
    }
})