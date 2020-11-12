const container=document.getElementById("pages_garde")
const btn = document.querySelector(".btn");

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  console.log(response);
  response.forEach(element => {
  const div=document.createElement("div")
  div.innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col liste_produit px-2 py-5">
         <div class="produit shadow-lg justify-content-center">
            <h3 class="produitOursonTeddy text-left">${element.name}</h3>
               <div class="jumbotron x-4">
                 <img src="${element.imageUrl}" class="img-responsive center-block shadow-lg-dark" height="300"><br><br>
                 <a href="catalogue.html?id=${element._id}">Voir le produit</a>
                 <p class="description pl-2 pl-2 text-justify lead">${element.description}</p>
                 <p class="price lead"><strong><mark>${element.price} euro</mark></strong</p>
                </div>
          </div>
       </div>
    </div>
  </div>`

  container.appendChild(div)
 });
})


.catch(error => alert("Erreur : " + error));







