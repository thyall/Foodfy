const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

const recipes1 = document.getElementById('content-show1')
const recipes2 = document.getElementById('content-show2')
const recipes3 = document.getElementById('content-show3')

button1.addEventListener('click', function () {

  if(button1.innerHTML == "ESCONDER")
  {
    button1.innerHTML = "MOSTRAR"
    recipes1.classList.add('hidden')
    recipes1.classList.remove('visible')
  } else {
    button1.innerHTML = "ESCONDER"
    recipes1.classList.remove('hidden')
    recipes1.classList.add('visible')
  }
})

button2.addEventListener('click', function () {

  if(button2.innerHTML == "ESCONDER")
  {
    button2.innerHTML = "MOSTRAR"
    recipes2.classList.add('hidden')
    recipes2.classList.remove('visible')
  } else {
    button2.innerHTML = "ESCONDER"
    recipes2.classList.remove('hidden')
    recipes2.classList.add('visible')
  }
})

button3.addEventListener('click', function () {

  if(button3.innerHTML == "ESCONDER")
  {
    button3.innerHTML = "MOSTRAR"
    recipes3.classList.add('hidden')
    recipes3.classList.remove('visible')
  } else {
    button3.innerHTML = "ESCONDER"
    recipes3.classList.remove('hidden')
    recipes3.classList.add('visible')
  }
})

/*
  SE eu quiser o modo fácil!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $("#button1").click(function(){
    $("#content-show1").toggleClass("hidden");
  });
*/



/*
function troca(button, recipe) {  
  if(button.innerHTML == "ESCONDER")
  {
    button.innerHTML = "MOSTRAR"
    recipe.classList.add('hidden')
    recipe.classList.remove('visible')
  } else {
    button.innerHTML = "ESCONDER"
    recipe.classList.remove('hidden')
    recipe.classList.add('visible')
  } 
}

button1.addEventListener("click", troca(button1, recipes1))
button2.addEventListener('click', troca(button2, recipes2))
button3.addEventListener('click', troca(button3, recipes3))*/

