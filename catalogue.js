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
     options += `<option>${element}</option>
     <select>
${options}
</select>`
}

peluche.innerHTML = `
<div class="produit mx-auto shadow-lg row justify-content-center col-4">

<div class="jumbotron x-4">

  <img src="${data.imageUrl}" class="img-responsive center-block mx-auto shadow-md-dark" alt="teddy_1" title="Norbert" height="300">
  

  <h3 class="produitOursonTeddy" height="200" class="h3-responsive center-block">${data.name}</h3><br>
  <input class="btn btn-secondary align-self-center center-block mx-auto btn-lg" type="submit" value="choisir une couleur">
  
 <p class="description  pl-1 ml-1 rounded  lead text-xl-center">${data.description}</p>
 <p  class="price lead"><strong><mark>${data.price} euro</mark></strong</p><br><br>
 

 <button id="valider">ajouter au panier</button>
 <input class="btn btn-secondary align-self-center center-block mx-auto btn-lg" type="submit" value="valider mon panier">
</div>`


 
document.getElementById("valider").addEventListener("click", function(){
  const panier = JSON.parse(localStorage.getItem("panier"))
   panier.push(data)
  localStorage.setItem("panier", JSON.stringify(panier))
  window.location.href = "panier.html"
 });
})

.catch(error => alert("Erreur : " + error));



