var menuItens = document.querySelector('.header-nav-father');
var menuImg = document.querySelector('.img-from-header');
var menuBut = document.querySelector('.open-menu');

// Função de abrir e fechar menuItens
window.onload = function () {
    menuBut.addEventListener('click', function () {
        if (menuImg.style.display == 'none' || menuItens.style.display == 'flex') {
            menuImg.style.display = 'block';
            menuItens.style.display = 'none';
        } else {
            menuImg.style.display = 'none';
            menuItens.style.display = 'flex';
        };
    })
};
// Retornar os styles de menuItens
function loadPage() {
    if (window.matchMedia("(min-width: 901px)").matches) {
        menuItens.style.display = 'flex';
    } else if (window.matchMedia("(max-width: 900px)").matches) {
        menuItens.style.display = 'none';
    }
}
window.matchMedia("(max-width: 900px)").addListener(loadPage);
loadPage();

// Selecionar apenas um checkbox no form

var opcao1 = documentI.getElementByd("opcao1");
var opcao2 = document.getElementById("opcao2");

opcao1.addEventListener("change", function () {
    if (opcao1.checked) {
        opcao2.checked = false;
    }
});

opcao2.addEventListener("change", function () {
    if (opcao2.checked) {
        opcao1.checked = false;
    }
});

