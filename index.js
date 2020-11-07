
const container=document.getElementById("pages_garde")


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  console.log(response);
response.forEach(element => {
  const div=document.createElement("div")
  div.innerHTML = `
  <div class="produit mx-auto mt-4 shadow-lg col-6">
  <h3 class="produitOursonTeddy">${element.name}</h3>
  <div class="jumbotron rounded x-5 mt-8">
    <img src="${element.imageUrl}" class="img-responsive center-block mx-auto shadow-lg" alt="teddy_1" title="Norbert" height="300"><br><br>
   <a href="catalogue.html?id=${element._id}">Voir le produit</a>
  
   <p class="description  pl-3 ml-3 rounded lead">${element.description}</p>
   <p  class="price lead"><strong><mark>${element.price} euro</mark></strong</p>
  </div>`

  container.appendChild(div)
});
})





.catch(error => alert("Erreur : " + error));







