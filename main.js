
//when the page loads, call the init function
window.addEventListener("DOMContentLoaded", init);

function init(){
const urlParams = new URLSearchParams(window.location.search);
//grab search=something from the url (it might not exist)
const search = urlParams.get("search");
//grab id=something from the url (it might not exist)
const id = urlParams.get("id");
const category = urlParams.get("category");



function getTheaterEvent() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  fetch("http://liatalony.com/liatalony/wp-json/wp/v2/event/"+id)
    .then(res=>res.json())
  .then(showEvent)

  function showEvent(event){
    documet.querySelector("article h1").textContent=event.title.rendered
  }
}
