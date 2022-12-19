let nomel = "Sem Nome";
function nome() {
    let name = document.getElementById("nome").value;

    if (name == "") {
        window.alert("ERRO!!! Escolha um nome");
    } else {
        nomel = name;
        document.getElementById("nome").style.color = "#202020";
    }
}

let size = "Sem Tamanho";
function tamanho() {
    if (document.getElementById("px_1080").checked) {
        size = "TAMANHO: 1080x1080";
    } else if (document.getElementById("px_1200").checked) {
        size = "TAMANHO: 1200x556";
    } else if (document.getElementById("px_1350").checked) {
        size = "TAMANHO: 1350x1080";
    } else {
        window.alert("ERRO!!! Escolha um tamano");
    }
}


let publicar = "Sem Publicar";
function ondePublicar() {
    if (document.getElementById("instagram").checked) {
        publicar = "PUBLICAR NO: INSTAGRAM";
    } else if (document.getElementById("facebook").checked) {
        publicar = "PUBLICAR NO: FACEBOOK";
    } else if (document.getElementById("youtube").checked) {
        publicar = "PUBLICAR NO: YOU TUBE";
    } else if (document.getElementById("tiktok").checked) {
        publicar = "PUBLICAR NO: TIK TOK";
    } else {
        window.alert("ERRO!!! Escolha onde publicar");
    }
}

let tipos = "Sem Tipo";
function tipo() {
    if (document.getElementById("normal").checked) {
        tipos = "TIPO DE POST: NORMAL";
    } else if (document.getElementById("carrossel").checked) {
        tipos = "TIPO DE POST: CARROSSEL";
    } else {
        window.alert("ERRO!!! Escolha o tipo de post");
    }
}

let estilos = "Sem Estilo";
function estilo() {
    if (document.getElementById("original").checked) {
        estilos = "ESTILO DO POST: ORIGINAL";
    } else if (document.getElementById("designer").checked) {
        estilos = "ESTILO DO POST: DESIGNER";
    } else if (document.getElementById("pretobranco").checked) {
        estilos = "ESTILO DO POST: PRETO E BRANCO";
    } else {
        window.alert("ERRO!!! Escolha o estilo do post");
    }
}

let temas = "Sem Tema";
function tema() {
    let temes = document.getElementById("tema").value;

    if (temes == "") {
        window.alert("ERRO!!! Escolha um tema");
    } else {
        temas = temes;
        document.getElementById("tema").style.color = "#202020";
    }
}

let titulos = "Sem Título";
function titulo() {
    let title = document.getElementById("titulo").value;

    if (title == "") {
        window.alert("ERRO!!! Escolha um título");
    } else {
        titulos = title;
        document.getElementById("titulo").style.color = "#202020";
    }
}

let datas = "Sem Data";
function data() {
    let date = document.getElementById("data").value;

    if (date == "") {
        window.alert("ERRO!!! Escolha uma data");
    } else {
        datas = date;
        document.getElementById("data").style.color = "#202020";
    }
}

let conteudos = "Sem Conteudo";
function conteudo() {
    let content = document.getElementById("conteudo").value;

    if (content == "") {
        window.alert("ERRO!!! Escreva um conteudo");
    } else {
        conteudos = content;
        document.getElementById("conteudo").style.color = "#202020";
    }
}

function download() {
    let blob = "area";
    if (ondePublicar == ("erro")) {
        window.alert("ERRO!!! Escolha onde publicar")
    } else {
        blob = new Blob([size, publicar, tipos, estilos, temas, titulos, datas, conteudos], {
            type: "text/plain;charset=utf-8"
        });
    }

    saveAs(blob, nomel + ".txt");

    console.log(blob)
}