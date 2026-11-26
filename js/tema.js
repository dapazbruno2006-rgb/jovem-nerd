(function () {
    var CHAVE = "tema-jovemnerd";
    var PADRAO = "escuro";
    var raiz = document.documentElement;

    var tema = PADRAO;
    try {
        var salvo = localStorage.getItem(CHAVE);
        if (salvo === "claro" || salvo === "escuro") tema = salvo;
    } catch (e) {}

    // Aplica antes da página aparecer (evita "piscar")
    raiz.setAttribute("data-tema", tema);

    document.addEventListener("DOMContentLoaded", function () {
        var botao = document.querySelector(".lua");
        if (!botao) return;

        function atualizarBotao() {
  if (raiz.getAttribute("data-tema") === "escuro") {
    botao.textContent = "☀";
    botao.setAttribute("aria-label", "Mudar para tema claro");
  } else {
    botao.innerHTML = '<img src="../img/meia-lua.png" alt="">';
    botao.setAttribute("aria-label", "Mudar para tema escuro");
  }
}

        botao.addEventListener("click", function () {
            var novo = raiz.getAttribute("data-tema") === "escuro" ? "claro" : "escuro";
            raiz.setAttribute("data-tema", novo);
            try { localStorage.setItem(CHAVE, novo); } catch (e) {}
            atualizarBotao();
        });

        atualizarBotao();
    });
})();
