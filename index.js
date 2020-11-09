const container=document.getElementById("pages_garde")


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  console.log(response);
  response.forEach(element => {
  const div=document.createElement("div")
  div.innerHTML = `
  <div class="liste_produit d-flex justify-content-around">
  <div class="produit mx-auto mt-4 shadow-lg col-6 justify-content-center">
    <h3 class="produitOursonTeddy text-left">${element.name}</h3>
    <div class="jumbotron x-4">
 
     <img src="${element.imageUrl}" class="img-responsive center-block mx-auto shadow-lg-dark" height="300"><br><br>
     <a href="catalogue.html?id=${element._id}">Voir le produit</a>
   
     <p class="description pl-1 ml-1 text-xl-center lead">${element.description}</p>
     <p  class="price lead"><strong><mark>${element.price} euro</mark></strong</p>
    </div>
  </div>`

  container.appendChild(div)
 });
})

function addDivDesign(section){
  const div = document.createElement("div");
  div.setAttribute("class", "col-md-5 mt-5 mb-4 ml-4 mr-4");
  section[1].appendChild(div);
}

get("http://localhost:3000/api/teddies")
.then(function (response){
  const section = document.getElementsByClassName("row");


for (let i = 0; i < response.length; i = i + 1){
  addProduct(response[i], section);
}

if (response.length % 2 === 1){
  addDivDesign(section);
}
})

.catch(error => alert("Erreur : " + error));







