const search = window.location.search

const param = new URLSearchParams(search)
const id = param.get("id")
console.log(id);

fetch("http://localhost:3000/api/teddies/" + id)
.then(response => response.json())
.then(response => {
  console.log(response);

})
.catch(error => alert("Erreur : " + error));
