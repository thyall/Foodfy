const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');
const modal = document.querySelector('.modal');

for(let receita of receitas){
    receita.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        modal.innerHTML = receita.innerHTML
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})