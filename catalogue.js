const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
const baseUrl = "http://localhost:3000/api/teddies/colors";
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
     options += `<options>${element}</options>
     <select>${options}</select>`
    }

  peluche.innerHTML = `
  <div class="produit mx-auto   shadow-lg row justify-content-center col-4">
  <h3 class="produitOursonTeddy" height="200" class="h3-responsive center-block">${data.name}</h3><br>
  <div class="jumbotron x-4">
  
  <img src="${data.imageUrl}" class="img-responsive center-block mx-auto shadow-lg-dark" alt="teddy_1" title="Norbert" height="300"><br><br>
  <p class="description  pl-1 ml-1 lead text-xl-center">${data.description}</p>
  <input id="peluche value="choisir une couleur">${data.colors}</p><br>
  
  <p class="price lead"><strong><mark>${data.price} euro</mark></strong></p><br><br>
 

 <button id="valider">ajouter au panier</button><br><br>
 <input class="btn btn-secondary align-self-center center-block mx-auto btn-lg" value="valider mon panier">
</div>`
   
function getColors() {
  return new Promise((resolve, reject) =>{
    fetch(`${baseUrl}colors`)
    .then(data => data.json())
    .then(colors => {
      console.log("colors", colors);
      resolve(colors);
    })
    .catch(err => {
      reject(err);
      errorDiv.innerText = "Impossible de récupérer la liste des couleurs";
    });
  });
}

const couleursNounours = document.getElementById("colors");

getColors().then(data => {
let option;
Object.colors(data.colors).forEach(colors => {
  option = document.createElement("option");
  for (let index = 0; index < data.colors.length; index++) {
    const element = data.colors[index];
   options += `<options>${element}</options>
   <select>${options}</select>`
  }
})



 })
  document.getElementById("valider").addEventListener("click", function(){
   const panier = JSON.parse(localStorage.getItem("panier"))
   panier.push(data)
   localStorage.setItem("panier", JSON.stringify(panier))
   window.location.href = "panier.html"
 });
})

.catch(error => alert("Erreur : " + error));



