const produitOurson = "oursonPeluche";
const 

const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      // problème réglé directement
      const produitOurson = document.getElementById('photoOurson');
      photoOUrson.innerHTML = result.current_condition.condition;
    }
  };
  
request.open("GET", "http://localhost:3000/api/teddies");
request.send();


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));


const articlesElt = document.getElementById("teddies");
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    const articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
      const titreElt = document.createElement("h3");
        titreElt.textContent = article.titre;
        const contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});


const callBasckgetSucces = function(teddies){
  
  const element = document.getElementById("zone_choix");
  element.innerHTML = "Nom de la Peluche est " + name;
}

function choixNounoursGet(){
  const url = "http://localhost:3000/api/teddies";

$.get(url, callBackGetSuccess).done(function(){
})
.fail(function(){
  alert("error");
})
.always(function(){
});
}





