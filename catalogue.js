const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
if(!localStorage.getItem("panier")){
localStorage.setItem("panier", JSON.stringify([]))
}



  fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let options = ""
    const peluche = document.getElementById("peluche")
    for (let index = 0; index < data.colors.length; index++) {
      const element = data.colors[index];
     options += `<option>${element}</option>`
    }

peluche.innerHTML = `
<div class="produit mx-auto shadow-lg col-6">
<div class="jumbotron x-5">
  <img src="${data.imageUrl}" class="img-responsive center-block mx-auto shadow-lg" alt="teddy_1" title="Norbert" height="300">
 
  <h3 class="produitOursonTeddy">${data.name}</h3>
<select>
${options}
</select>
 <p class="description">${data.description}</p>
 <p class="price">${data.price} euro</p>
 <button id="valider">ajouter au panier</button>
</div>`
document.getElementById("valider").addEventListener("click", function(){
 const panier = JSON.parse(localStorage.getItem("panier"))
  panier.push(data)
 localStorage.setItem("panier", JSON.stringify(panier))
 window.location.href = "panier.html"
});
})


.catch(error => alert("Erreur : " + error));



