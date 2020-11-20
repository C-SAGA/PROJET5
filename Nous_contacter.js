get(("http://localhost:3000/api/teddies/")
.then(function(response){




const panierContent = JSON.parse(localStorage.getItem("panier")); //Récupération contenu panier (localstorage)//
const container= document.getElementById("panierContent");
panier.forEach(element => {
  console.log(element)
  }
);

if (panierContent.length === 0){
  //Message panier vide//
  panierVide(container);
}
else{
  let totalPrice = 0;
  for (let panier of panierContent){
    for (let produitDescription of response){
      if (panier.id === produitDescription._id){
          prixTotal = addPanierProduit(
          container,
          produitDescription,
          panier,
          panierContent,
          prixTotal
        );
        localStorage.setItem("totalPrixCommande", prixTotal);
      }
    }
  }

//Calcul somme produits commandés //
const totalPrixCommande = document.getElementById("totalPrix");
totalPrixCommande.innerHTML = "Montant de votre commande" + prixTotal + " euro";
}
})
.catch (function (err){
  console.log(err);
  if (err === 0){
    alert("serveur HS");
  }
})

//if(!localStorage.getItem("panier")) {
// localStorage.setItem("panier", JSON.stringify([]))
// }
