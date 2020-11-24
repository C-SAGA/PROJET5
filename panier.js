//Récupération contenu panier (localstorage)//
const panierContent = JSON.parse(localStorage.getItem("panier")); 
const container = document.getElementById("panierContent");

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
        const tdColors = document.createElement("td")
        const tdImg = document.createElement("td")
        const tdPrix = document.createElement("td")
        const tdBtn = document.createElement("td")
        tdNom.textContent = element.name
        tdColors.innerHTML = `
       <p>${element.colors}</p>`
        tdImg.innerHTML = `
        <img src="${element.imageUrl}"/>`
        tdImg.className = "imagePanier"
        tdPrix.innerHTML = `
        <td  id="col-2">
        <div class="price lead"><strong>${element.price} euro</strong></div>`    
        tdPrix.className = "prixteddy lead strong" 
        tdPrix.textContent = element.price + " euro"
        tdBtn.innerHTML = `<tdBtn onclick = "supprimer()" type="submit" <i class="fas fa-trash-alt"></i></tdBtn>`
        //Arborescence//
        tr.appendChild(tdNom)
        tr.appendChild(tdColors)
        tr.appendChild(tdImg)
        tr.appendChild(tdPrix)
        tr.appendChild(tdBtn)
        teddies.appendChild(tr)
      });
    // Calcul du total panier //
    const pTotal = document.createElement("p")
    pTotal.textContent = totalPrixCommande
    pTotal.className = "montantTotal lead mark"
    pTotal.innerHTML = "<h4> Montant total de votre commande </h4>" + totalPrixCommande + " euro"
    container.appendChild(pTotal);
  }  
    // Supprimer des lignes //
    function supprimer(){
        let article = document.getElementById("teddies");
        article.remove();
        const m = "Votre article a été supprimé";
        alert(m); 
      }   
      
 


  