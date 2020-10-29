const produitOurson = "oursonPeluche";

const request = new XMLHttpRequest();

/*request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      const response = JSON.parse(this.responseText);
      console.log("response.current_condition.condition");
      // problème réglé directement
      const oursonPeluche = document.getElementById('oursonPeluche');
      photoOUrson.innerHTML = result.current_condition.condition;
    }
  };
  
request.open("GET", "http://localhost:3000/api/teddies");
request.responseType = "json";
request.send();

request.onload = function(){
  //Si le statut HTTP n'est pas 200...
  if (request.status != 200){ 
      //...On affiche le statut et le message correspondant
      alert("Erreur " + request.status + " : " + request.statusText);
  //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
  }else{ 
      alert(request.response.length + " octets  téléchargés\n" + JSON.stringify(request.response));
  }
};*/
const container=document.getElementById("pages_garde")


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => {
  console.log(response);
response.forEach(element => {
  const div=document.createElement("div")
  div.innerHTML = `
  <div class="produit">
   
    <img src="${element.imageUrl}" alt="teddy_1" title="Norbert" height="80">
    <h3 class="produitOursonTeddy">${element.name}</h3>
   <a href="catalogue.html?id=${element._id}">Voir le produit</a>
  </div>`
  container.appendChild(div)
});
})
.catch(error => alert("Erreur : " + error));







