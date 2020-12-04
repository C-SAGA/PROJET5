const search = window.location.search //Création fiche produit //

const param = new URLSearchParams(search)
const id = param.get("bonDeCommande")
const total = param.get("total")
document.getElementById("numero").textContent = id
document.getElementById("montant").textContent = total