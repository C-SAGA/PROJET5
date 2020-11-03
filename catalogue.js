const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
console.log(id);

fetch("http://localhost:3000/api/teddies/" + id)
.then(response => response.json())
.then(response => {
  console.log(response);
  response.forEach(element => {
    const div=document.createElement("div")
    div.innerHTML = `
    <div class="produit">
     
      <img src="${element.imageUrl}" alt="teddy_1" title="Norbert" height="300">
      <h3 class="produitOursonTeddy">${element.name}</h3>
      <a href="catalogue.html?id=${element._id}">Voir le produit</a>
    </div>`
  
    container.appendChild(div)
  });
  })
  .catch(error => alert("Erreur : " + error));

