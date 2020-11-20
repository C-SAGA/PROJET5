//Récupération contenu panier (localstorage)//
const panierContent = JSON.parse(localStorage.getItem("panier")); 
const container= document.getElementById("panierContent");

// Message panier vide//
if (!panierContent || panierContent.length < 1){    
  container.innerHTML = "<h2> Votre panier est vide !</h2>"
} else{ 
    const teddies = document.getElementById("teddies");
    let totalPrixCommande = 0 
    panierContent.forEach(element => {
        console.log(element)
        totalPrixCommande += element.price
        const tr = document.createElement("tr")
        const tdNom = document.createElement("td")
        const tdImg = document.createElement("td")
        const tdPrix = document.createElement("td")
        tdNom.textContent = element.name
        tdImg.innerHTML = `
        <img src="${element.imageUrl}"/>`
        tdImg.className = "imagePanier"
        tdPrix.innerHTML = `
        <td  id="col-2" class="${element.price}>< euro"/>`
        tdPrix.className = "prixteddy lead"
        tdPrix.textContent = element.price
        tr.appendChild(tdNom)
        tr.appendChild(tdImg)
        tr.appendChild(tdPrix)
        teddies.appendChild(tr)
    });
    const pTotal = document.createElement("p")
    pTotal.textContent = totalPrixCommande
    pTotal.className = "montantTotal lead mark"
    container.appendChild(pTotal)   
}


  