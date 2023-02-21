let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigos = 3


function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMasocotaJugador = document.getElementById("boton-mascota")
    botonMasocotaJugador.addEventListener("click",seleccionarMascotaJugador)

    

    let botonFuego = document.getElementById ( "boton-Fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById ( "boton-Agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonAire = document.getElementById ( "boton-Aire")
    botonAire.addEventListener("click",ataqueAire)
    let botonTierra = document.getElementById ( "boton-Tierra") 
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-Reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"    

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputCHARIZAR = document.getElementById("CHARIZAR")
    let inputBLASTOISE = document.getElementById("BLASTOISE")
    let inputPIDGEY = document.getElementById("PIDGEY")
    let inpuntONIX = document.getElementById("ONIX")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputCHARIZAR.checked) {spanMascotaJugador.innerHTML = "CHARIZAR "}
    else if (inputBLASTOISE.checked) {spanMascotaJugador.innerHTML = "BLASTOISE "}
    else if (inputPIDGEY.checked) {spanMascotaJugador.innerHTML = "PIDGEY "}
    else if (inpuntONIX.checked) {spanMascotaJugador.innerHTML = "ONIX "}
    else {alert("Selecciona una mascota")}
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,4)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if ( mascotaAleatorio == 1) { spanMascotaEnemigo.innerHTML = " CHARIZAR " }
        // CHARIZAR
    else if ( mascotaAleatorio == 2) { spanMascotaEnemigo.innerHTML = " BLASTOISE "}
        //  BLASTOISE  
    else if ( mascotaAleatorio == 3) { spanMascotaEnemigo.innerHTML = " PIDGEY "}
        //  PIDGEY  
    else  { spanMascotaEnemigo.innerHTML = "ONIX" }
        //  ONIX  
        
}


function ataqueFuego () { 
    ataqueJugador = " Fuego "
    ataqueAleatorioEnemigo()
}
function ataqueAgua() { 
    ataqueJugador = " Agua "
    ataqueAleatorioEnemigo()
}
function ataqueAire() { 
    ataqueJugador = " Aire "
    ataqueAleatorioEnemigo()
}
function ataqueTierra() { 
    ataqueJugador = " Tierra "
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAletorio = aleatorio (1,4)

    if (ataqueAletorio == 1) { ataqueEnemigo = " Fuego "}
    else if (ataqueAletorio == 2){ataqueEnemigo = " Agua "}
    else if (ataqueAletorio == 3){ataqueEnemigo = " Aire "}
    else {ataqueEnemigo = " Tierra "}

  combate()
}

function combate() {

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigos = document.getElementById("vidas-enemigos")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == " Fuego " && ataqueEnemigo == " Tierra ") {
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else if(ataqueJugador == " Agua " && ataqueEnemigo == " Fuego ") {
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else if(ataqueJugador == " Tierra " && ataqueEnemigo == " Agua ") {
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else if(ataqueJugador == " Aire " && ataqueEnemigo == " Fuego ") {
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos
    } else if(ataqueJugador == " Tierra " && ataqueEnemigo == " Aire ") {
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigos.innerHTML = vidasEnemigos  
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}
    
function revisarVidas () {

    if (vidasEnemigos== 0){
        crearMensajeFinal("GANO PIROBO 🎉")
    
    } else if ( vidasJugador == 0){
        crearMensajeFinal("USTED ES MUY MALO 😑")

    }

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML= "Tu mascota ataco con  "  +  ataqueJugador  +  ",  la mascota del enemigo ataco con  "  + ataqueEnemigo + "-" + resultado
     
    sectionMensajes.appendChild (parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML= resultadoFinal
     
    sectionMensajes.appendChild (parrafo)


    let botonFuego = document.getElementById ( "boton-Fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById ( "boton-Agua")
    botonAgua.disabled = true
    let botonAire = document.getElementById ( "boton-Aire")
    botonAire.disabled = true
    let botonTierra = document.getElementById ( "boton-Tierra") 
    botonTierra.disabled = true
    


}



function reiniciarJuego(){ 
    location.reload()

    
}


function aleatorio(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }



window.addEventListener("load", iniciarJuego)

