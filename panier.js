const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
if(!localStorage.getItem("panier")){
localStorage.setItem("panier", JSON.stringify([]))
}



  fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let options = ""
    const peluche = document.getElementById("peluche")
    for (let index = 0; index < data.colors.length; index++) {
      const element = data.colors[index];
     options += `<option>${element}</option>`
    }


    <button id="valider">ajouter au panier</button>
 <input class="btn btn-secondary align-self-center center-block mx-auto btn-lg" type="submit" value="valider mon panier">
</div>`
