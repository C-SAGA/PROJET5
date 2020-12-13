//Création Récapitulatif commande //
const search = window.location.search 

const param = new URLSearchParams(search)
const id = param.get("bonDeCommande")
const total = param.get("total")
document.getElementById("numero").textContent = id
document.getElementById("montant").textContent = total
montant.innerHTML =  total + " euro"
numero.innerHTML = id + " a bien été enregistrée."


// const pTotal = document.createElement("p")
//     pTotal.textContent = totalPrixCommande
//     pTotal.className = "montantTotal lead mark"
//     pTotal.innerHTML = "<h4> Montant total de votre commande </h4>" + totalPrixCommande + " euro"
//     container.appendChild(pTotal);