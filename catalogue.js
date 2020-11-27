// Variables //

const search = window.location.search //Création fiche produit //

const param = new URLSearchParams(search)
const id = param.get("id")

if (!localStorage.getItem("panier")) {
    localStorage.setItem("panier", JSON.stringify([]))
}

if (!id) {
  window.location.href = "index.html"
} else {
  fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => response.json())
  .then(data => {
      loadTeddies(data)
  })
  .catch(error => alert("Erreur : " + error));
}

function loadTeddies(data) {
    let options = "";
    const peluche = document.getElementById("peluche")
    for (let i = 0; i < data.colors.length; i++) {

        const element = data.colors[i];
        options += "<option>" + element + "</option>"
    };

    peluche.innerHTML = `
    <div class="container ml-12">
      <div class="cart-row pl-10">
        <div class="cart-items">
        <div class="col-9 liste_produit ml-8 py-5">
          <div class="produit shadow-lg ml-50 pb-5 justify-content">
              <h3 class="produitOursonTeddy text-left">${data.name}</h3>
                <div class="jumbotron x-4">
                  <img src="${data.imageUrl}" class="img-responsive center-block shadow-lg-dark" height="300"><br><br>            
                  <p class="description pl-2 pl-2 text-justify lead">${data.description}</p>
                  <label for="colors class="labelSelect"><strong>Choisissez votre couleur préférée <strong></label><br>
                  <select id="colors" <button class=add" onclick="add(2)"></button>
                    ${options}    
                  </select><br><br>
                  <p class="price lead"><strong><mark>${data.price} euro</mark></strong</p><br><br>
                  <button class="btn btn-secondary" id="valider">ajouter au panier</button><br><br>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
    
    //Envoi les données vers le localStorage //
    document.getElementById("valider").addEventListener("click", function() {
        const panier = JSON.parse(localStorage.getItem("panier"))
        panier.push(data)
        localStorage.setItem("panier", JSON.stringify(panier))
        window.location.href = "panier.html" 
        const m = "ajouté au panier";
        alert(m);
    });
}