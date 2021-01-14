const btnSumar = document.getElementById('btn1');


const btnRestar = document.getElementById('btn2');

const eContador = document.getElementById('contador');
let contador = 0;

function sumar() {

    contador++;

    eContador.innerHTML = contador;

    if (contador == 0) {
        eContador.style.color = '#000000';
    } else {
        eContador.style.color = '#00695c';
    }
}





function restar() {
    contador--;
    console.log(contador)

    eContador.innerHTML = contador;
    if (contador == 0) {
        eContador.style.color = '#000000';
    } else {
        eContador.style.color = '#00695c';
    }


}











btnSumar.addEventListener('click', sumar, true)
btnRestar.addEventListener('click', restar, true)