get(("http://localhost:3000/api/teddies/")
.then(function(response){






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
