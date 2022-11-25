// Seleccionar
const card = document.querySelector('.card')

//card.classList.add('fadeIn') /*Agregar una clase a un elemento*/

//Listener
// card.onclick = function(){     /*Evento al darle clic*/
//     card.style.display = 'none'
// }

card.onanimationend = function(event) { /*Evento cuando la animacion termine*/
   card.classList.remove('fadeIn')
   card.classList.add('tada')
}

card.onclick = function(){
    card.classList.remove('tada')
    card.classList.add('fadeOut')
}