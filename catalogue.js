const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
console.log();



  fetch("http://localhost:3000/api/teddies")
  .then(response => response.json())
  .then(data => {
 
  for (i =0; i < data.length; i++){  
    // Boucle for pour créer la liste des produits
     article = newCreateItem (data[i]._id,data[i].name,data[i].imageUrl,data[i].description,data[i].price);
     addElement(article._id,article.name,article.imageUrl,article.description,article.price);
 };

// Fonction de création d'un produit

function newCreateItem (id,name,imageUrl,description,price){
this._id = id,
this.name = name,
this.imageUrl = imageUrl,
this.description = description,
this.price = price


// Ajout du produit au tableau 

  let article = document.getElementById('article');
 
article.dataset.name 
article.dataset.imageUrl
article.dataset.description
article.dataset.price
 
  article.appendChild(article)
}
})
.catch(error => alert("Erreur : " + error));



