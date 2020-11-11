

const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
if(!localStorage.getItem("panier")){
localStorage.setItem("panier", JSON.stringify([]))
}

fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => response.json())
  .then(response => {
    console.log(response);

    function lignePanier (code, qte, prix) {
        this.name = name;
    
        this.price = prix; function(qte) {
            this.qteArticle += qte;
        }
        this.getPrixLigne = function() {
            var resultat = this.prixArticle * this.qteArticle;
            return resultat;
        }
        this.getCode = function() {
            return this.codeArticle;
        }
    }
    function lignePanier (code, qte, prix) {
        this.codeArticle = code;
        this.qteArticle = qte;
        this.prixArticle = prix;
        this.ajouterQte = function(qte) {
            this.qteArticle += qte;
        }
        this.getPrixLigne = function() {
            const resultat = this.prixArticle * this.qteArticle;
            return resultat;
        }
        this.getCode = function(){
            return this.codeArticle;
        }
    }
}
function  addDivDesign(section){
    const div = document.createElement("div");
    div.setAttribute("class", "col-md-5 mt-5 mb-4 ml-4 mr-4");
    section[1].appendChild(div);
  }
  
  get("http://localhost:3000/api/teddies")
  .then(function (response){
    const section = document.getElementsByClassName("row");
  
  
  for (let i = 0; i < response.length; i = i + 1){
    addProduct(response[i], section);
  }
  
  if (response.length % 2 === 1){
    addDivDesign(section);
  }
  })
  
   