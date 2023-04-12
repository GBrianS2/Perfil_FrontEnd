function alterarOpc(op) {

    var opc = [];
    var mainOpc = document.getElementById("op" + op);

    for (var i = 1; i <= 5; i++) {
        opc[i] = document.getElementById("op" + i);
    }

    mainOpc.style.opacity = "1";
    mainOpc.style.zIndex = "1";

    for (var i = 1; i <= 5; i++) {
        if (i != op) {
            opc[i].style.opacity = "0";
            opc[i].style.zIndex = "0"
        }
    }

}

function opcaoEmDesenvolvimento() {
    alert("Esta função está em desenvolvimento!");
}