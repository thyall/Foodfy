const receitas = document.querySelectorAll('.receita');

for (let recipe of receitas) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute("id");
        window.location.href = `/recipes/${recipeId}`
    })
}