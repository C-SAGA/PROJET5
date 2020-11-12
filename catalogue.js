const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
if(!localStorage.getItem("panier")){
localStorage.setItem("panier", JSON.stringify([]))
}

  fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let options = "";
    const peluche = document.getElementById("peluche")
    for (let index = 0; index < data.colors.length; index++) {
      const element = data.colors[index];
     options += `<options>${element}</options>
     <select>${options}</select>`
    };

  peluche.innerHTML = `
  <div class="container ml-12">
    <div class="row pl-10">
     <div class="col-9 liste_produit  ml-8 py-5">
       <div class="produit shadow-lg ml-20 justify-content">
          <h3 class="produitOursonTeddy text-left">${data.name}</h3>
             <div class="jumbotron x-4">
               <img src="${data.imageUrl}" class="img-responsive center-block shadow-lg-dark" height="300"><br><br>            
               <p class="description pl-2 pl-2 text-justify lead">${data.description}</p>
            
               <label for="colors class="labelSelect"><strong>Choisissez votre couleur préférée <strong></label><br>
               <select name="index[] multiple" id="colors">
               <option value="">${data.colors}</option>
               <option value="">${data.colors}</option>
               <option value="">${data.colors}</option>
               <option value="">${data.colors}</option>          
               </select><br><br>
               <p class="price lead"><strong><mark>${data.price} euro</mark></strong</p><br><br>
               
               <button id="valider">ajouter au panier</button><br><br>
               <input class="btn btn-secondary align-self-center center-block mx-auto btn-lg" value="valider mon panier">
              </div>
        </div>
      </div>
    </div
  </div>`
  
  
  
  document.getElementById("valider").addEventListener("click", function(){
   const panier = JSON.parse(localStorage.getItem("panier"))
   panier.push(data)
   localStorage.setItem("panier", JSON.stringify(panier))
   window.location.href = "panier.html"
 });
})

.catch(error => alert("Erreur : " + error));



