window.addEventListener("DOMContentLoaded", checkData);
const modal = document.querySelector(".modalbg");
//modal.style.display = "none";
function checkData() {
    if (document.querySelector("#theater")) {
        getData();
    }
}
//Fetchinn the theater events from WordPress//
function getData() {
  console.log(getData);

    fetch("http://liatalony.com/liatalony/wp-json/wp/v2/event?_embed&per_page=100&categories=15")
        .then(res => res.json())
        .then(handleData);
}

function handleData(myData) {
     console.log(myData);
    //1 loop
    myData.forEach(showTheater)



}

function showTheater(theater) {
      console.log(showTheater);

    const imgPath = theater._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    //
    //
    const template = document.querySelector("template").content;
    const theaterCopy = template.cloneNode(true);

    const article = theaterCopy.querySelector("article");

    const headlinefront = theaterCopy.querySelector(".headlinefront");
    headlinefront.textContent = theater.title.rendered;
    const timefront = theaterCopy.querySelector(".timefront");
    timefront.textContent = theater.event_time;
    const datefront = theaterCopy.querySelector(".datefront");
    datefront.textContent = theater.event_date;
    const locationfront = theaterCopy.querySelector(".locationfront");
    locationfront.textContent = theater.where;
    const pricefront = theaterCopy.querySelector(".pricefront");
    pricefront.textContent = theater.price;
    const container = theaterCopy.querySelector("container");
    const content = theaterCopy.querySelector("content");
    const img = theaterCopy.querySelector(".img");
    img.style.backgroundImage = `url(${imgPath})`;

    //Creating the modal for single theater events//
    article.addEventListener("click", function () {

        const modal = document.querySelector(".modalbg");
        modal.style.display = "block";
        const modalheadlinefront = document.querySelector(".modalheadlinefront");
        modalheadlinefront.textContent = theater.title.rendered;
        const modaltimefront = document.querySelector(".modaltimefront");
        modaltimefront.textContent = theater.event_time;
        const modaldatefront = document.querySelector(".modaldatefront");
        modaldatefront.textContent = theater.event_date;
        const modallocationfront = document.querySelector(".modallocationfront");
        modallocationfront.textContent = theater.where;
        const modalpricefront = document.querySelector(".modalpricefront");
        modalpricefront.textContent = theater.price;
        const modalimg = document.querySelector(".modalimg");
        modalimg.style.backgroundImage = `url(${imgPath})`;
        const modaldescription = document.querySelector(".modaldescription")
        modaldescription.innerHTML = theater.content.rendered;
        const body = document.querySelector("body");
        body.classList.add("modalopen");
        const exit = document.querySelector(".exit");
        exit.addEventListener("click", function () {
            modal.style.display = "none";
            body.classList.remove("modalopen");
        });
    });

    document.querySelector("#theater").appendChild(theaterCopy)

}

//Hamburger menu modal//

// Get the modal
var menuModal = document.getElementById("myMenu");

// Get the button that opens the modal
var checkbox = document.getElementById("toggle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
checkbox.onclick = function() {
  menuModal.style.display = "block";
  menuModal.style.zIndex = "100";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  menuModal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == menuModal) {
    menuModal.style.display = "none";
  }
}
