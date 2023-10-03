function loated() {

    var caixa_menu = document.getElementsByTagName("aside")[0]

    
    var total = document.getElementById("total")
    total.innerHTML = 656000.00

    function menu() {

        caixa_menu.style.top = "0"
        caixa_menu.style.display = "inline-block"

    }

    function voltar_menu() {


        caixa_menu.style.top = "-410px";


    }


    // carrinho









}
function pegar_valor1() {

    var s10 = parseInt(document.getElementById("s10").value)

    total1 = parseFloat(300000.00 * s10)

    document.getElementById("resultado1").innerHTML = total1

    total.innerHTML = total1 + total2


}
function pegar_valor2() {
    var corola = parseInt(document.getElementById("corola").value)

    total2 = parseFloat(120000.00 * corola)

    document.getElementById("resultado2").innerHTML = total2

    total.innerHTML = total1 + total2

}
function apagar_car2(){

    document.getElementById("carro2").style.display = "none"
    setInterval(apagado2(), 2000)
}

function apagar_car1(){

    document.getElementById("carro1").style.display = "none"
    setInterval(apagado1(), 2000)

}


function apagado1(){
    total1 = 0
}
function apagado2(){
    total1 = 0
}
