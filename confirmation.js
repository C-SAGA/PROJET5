//Création Récapitulatif commande //
const search = window.location.search 

const param = new URLSearchParams(search)
const id = param.get("bonDeCommande")
const total = param.get("total")
document.getElementById("numero").textContent = id
document.getElementById("montant").textContent = total