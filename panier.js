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
        tdPrix.className = "prixTeddy lead strong" 
        tdPrix.textContent = element.price + " euro"
        tdBtn.innerHTML = `<tdBtn class="btn-btn" type="button" value=""><i class="fas fa-trash-alt"></i></tdBtn>`
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
  
    // Supprimer des lignes produit et réactualiser montant total//
    if (document.readyState == "loading"){
      document.addEventListener("DOMContentLoaded", ready)
    }
    else{
      ready()
    }
    function ready (){
      const supprimeBtn = document.getElementsByClassName("btn-btn")
      console.log(supprimeBtn)
      for (let i = 0; i < supprimeBtn.length; i++){
        const button = supprimeBtn[i]
        button.addEventListener("click", supprimer   )    
      }
    } 
    
    function supprimer(event){
      const buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      reactualisePanier()
    }

    function reactualisePanier(){
    const produitContainer = document.getElementsByClassName("cart-items")
    const cartTeddies = produitContainer.getElementsByClassName("cart-row")
    const total = 0
    for (let i = 0; i < cartTeddies.lenght; i++){
    const cartRow = cartTeddies[i]
    const priceElement = cartRow.getElementsByClassName(tdPrix)[0]
    console.log(priceElement)
    const prix = parseFloat(priceElement.innerHTML.replace("$", ''))
    total = total + prix
   }
   document.getElementsByClassName("totalPrixCommande")[0].innerText = "$" + total
   }
}   
  
    // Formulaire inscription //
      function valider() {
        // si la valeur du champ prenom est non vide
        if(document.formSaisie.prenom.value != "") {
          // alors on envoie le formulaire
          document.formSaisie.submit();
        }
        else {
          // sinon on affiche un message
          alert("Saisissez le prénom");
        }
      }
      function validation()
{
//chaque champs doit être non vide, ici le test est fait pour 3
//vous pouvez changer le nom de ces champs ici ch1,ch2,ch3
//vous pouvez ajouter d'autres champs, prenez garde d'ajouter
//autant de tests que de champs ajoutés
//création MZ-2003
if ((document.mon_form.name.value=="")||
(document.mon_form.prenom.value=="")||
(document.mon_form.ch3.value==""))
{
//votre message ici
window.alert ("Certains champs sont vides !!!!! Merci de les renseigner.")
return false;
}
}
 


  