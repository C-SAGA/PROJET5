

const panierContent = JSON.parse(localStorage.getItem("panier")); //Récupération contenu panier (localstorage)//
const container= document.getElementById("panierContent");
if ( !panierContent || panierContent.length < 1){
    // Message panier vide//
  container.innerHTML = "<h2> Votre panier est vide</h2>"
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
        tdPrix.textContent = element.price
        tr.appendChild(tdNom)
        tr.appendChild(tdImg)
        tr.appendChild(tdPrix)
        teddies.appendChild(tr)
    });
    const pTotal = document.createElement("p")
    pTotal.textContent = totalPrixCommande
    container.appendChild(pTotal)
}



// 

// else{
//   let prixTotal = 0;
//   for (let panier of panierContent){
//     for (let produitDescription of response){
//       if (panier.id === produitDescription._id){
//           prixTotal = addPanierProduit(
//           container,
//           produitDescription,
//           panier,
//           panierContent,
//           prixTotal
//         );
//         localStorage.setItem("totalPrixCommande", prixTotal);
//       }
//     }
//   }
// };
    
// console.log(panierContent)
//   panierContent.innerHTML = `
//   <div class="container ml-12">
//    <div class="row pl-10">
//     <div class="col-9 liste_produit ml-8 py-5">
//      <div class="produit shadow-lg ml-50 pb-5 justify-content">
//         <h3 class="produitOursonTeddy text-left">${data.name}</h3>
//            <div class="jumbotron x-4">
//              <img src="${data.imageUrl}" class="img-responsive center-block shadow-lg-dark" height="30"><br><br>            
//              <p class="description pl-2 pl-2 text-justify lead">${data.description}</p>
//              <p class="price lead"><strong><mark>${data.price} euro</mark></strong</p><br><br>
//             </div>
//        </div>
//     </div>
//   </div
// </div>`

// container.appendChild(div);


  