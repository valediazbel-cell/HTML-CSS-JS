let cuenta = 0
const numero = document.getElementById("numero")

function actualizarContador (){
numero.textContent = cuenta ;

}

function incrementar(){
    cuenta ++;
actualizarContador()
}
function decrementar(){
    cuenta--;
    actualizarContador()
}