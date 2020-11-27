// Variables //
const container=document.getElementById("pages_garde")
const btn = document.querySelector(".btn");


//Requête pour récup. API//
fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  console.log(response);
  response.forEach(element => {
  const div = document.createElement("div") //Création éléments récupérés de l'API//
 div.className = "col-5"

 // Intégration code HTML via ``//
 div.innerHTML = ` 
      <div class="liste_produit mx-2 px-2">
         <div class="produit shadow-lg justify-content-center">
            <h3 class="produitOursonTeddy text-left">${element.name}</h3>
               <div class="jumbotron mx-4">
                 <img src="${element.imageUrl}" class="img-responsive center-block shadow-lg-dark" height="300"><br><br>
                 <a class="btn btn-secondary" href="catalogue.html?id=${element._id}">Voir le produit</a>
                 <p class="description pl-2 pl-2 text-justify lead">${element.description}</p>
                 <p class="price lead"><strong><mark>${element.price} euro</mark></strong</p>
                </div>
          </div>
       </div>`

  container.appendChild(div) //ajouter des élements enfants (ici des fiches produit)//
 });
})
.catch(error => alert("Erreur : " + error));







