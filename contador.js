let cuenta = 0 
const numero = document.getElementById("numero")

function actualizarContador (){
numero.textContent = cuenta ;

if (cuenta >= 10){
    numero.style.color = "brown"
} else {
    numero.style.color = "black"
}
}

function incrementar(){
    cuenta ++;
actualizarContador()
}
function decrementar(){
    cuenta--;
    actualizarContador()
}