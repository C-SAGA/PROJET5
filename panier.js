
//Récupération contenu panier (localstorage)//
const panierContent = JSON.parse(localStorage.getItem("panier")); 
const container = document.getElementById("panierContent");

// Message panier vide//
if (!panierContent || panierContent.length < 1){    
  container.innerHTML = "<h2> Votre panier est vide !</h2>"
} else{ 
    const teddies = document.getElementById("teddies");
    let totalPrixCommande = 0 
    const produits = []
    panierContent.forEach((element, index) => {
        console.log(element)
        produits.push(element._id)
        totalPrixCommande += element.price
        const tr = document.createElement("tr")
        const tdNom = document.createElement("td")
        const tdColors = document.createElement("td")
        const tdImg = document.createElement("td")
        const tdPrix = document.createElement("td")
        const tdBtn = document.createElement("td")
        tdNom.textContent = element.name
        tdColors.innerHTML = `
       <div class="colors">${element.colors}</div>`       
        tdImg.innerHTML = `
        <img src="${element.imageUrl}"/>`
        tdImg.className = "imagePanier"
        tdPrix.innerHTML = `
        <td  id="col-2">
        <div class="price lead"><strong>${element.price} euro</strong></div>`    
        tdPrix.className = "prixTeddy lead strong" 
        tdPrix.textContent = element.price + " euro"
        tdBtn.innerHTML = `<a><i class="fas fa-trash-alt"></i></a>`
        tdBtn.addEventListener("click", function(){
          console.log(element, index)
          panierContent.splice(index, 1)
          localStorage.setItem("panier",  JSON.stringify(panierContent)); 
          window.location.reload()
        })
        // Arborescence//
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
 

  //    Formulaire inscription //
  let registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", function(e){
    const inputName = document.getElementById("name");
    // if (inputName.value.trim() == ""){
    // let monErreur = document.getElementById("erreur");
    // monErreur.innerHTML = "Le Champs Nom doit être rempli";
    // monErreur.style.color = "red";
    // e.preventDefault();
  // }
  e.preventDefault()
  const nom = document.getElementById("name").value 
  const prenom = document.getElementById("prenom").value 
  const email = document.getElementById("email").value 
  const adresse = document.getElementById("adresse").value 
  const ville = document.getElementById("ville").value 
  const contact = {
    lastName: nom, 
    firstName: prenom,
    address: adresse,
    city: ville,
    email : email
  }
  fetch("http://localhost:3000/api/teddies/order", {
    body: JSON.stringify(
      {
        contact: contact,
        products: produits
      }
    ),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
  }
  })
  .then(response => response.json())
  .then(response => {
  window.location.href = "confirmation.html?bonDeCommande="+response.orderId+"&total="+totalPrixCommande
  })
  .catch(erreur => console.log(erreur))
});
// const regex1 = /\w+/;
// const regex2 = new RegExp('\\w+');

// console.log(regex1);
// // expected output: /\w+/

// console.log(regex2);
// // expected output: /\w+/

// console.log(regex1 === regex2);
// // expected output: false

}



  