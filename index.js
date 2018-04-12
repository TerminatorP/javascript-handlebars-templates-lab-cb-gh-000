function init() {
  function createRecipe() {
    event.preventDefault();
    event.stopPropagation();
    let recipePageTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
    document.getElementById('main').innerHTML += recipePageTemplate;
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
