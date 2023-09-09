var caixa_menu = document.getElementsByTagName("aside")[0]

function teste (){
    console.log("")
    caixa_menu.style.display = "none";
}

function menu() {
 
    caixa_menu.style.right = "0"
    caixa_menu.style.width = "100%"
    caixa_menu.style.display = "inline-block"

}

function voltar_menu() {

   
    caixa_menu.style.right = "-300px";
    caixa_menu.style.width = "300px";

    setInterval(teste, 1000)



}