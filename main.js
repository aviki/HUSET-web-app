
window.addEventListener("DOMContentLoaded", checkData);
const modal = document.querySelector(".modalbg");
//modal.style.display = "none";
function checkData() {
    if (document.querySelector("#theater")) {
        getData();
    }
}



  fetch("http://liatalony.com/liatalony/wp-json/wp/v2/event?_embed&per_page=100&categories=15")
    .then(res=>res.json())
    .then(handleData)

  function handleData(myData) {
    // console.log(myData);
    // 1 loop
    myData.forEach(showTheater)
  }

  function showTheater(theater) {
  //console.log(event)

  const imgPath = theater._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    const template = document.querySelector("template").content;
    const templateCopy = template.cloneNode(true);
    const imgBG = templateCopy.querySelector(".img");
    const h1 = templateCopy.querySelector("article h1");
    const h2 = templateCopy.querySelector("h2");
    const article = templateCopy.querySelector("article");
    const a = templateCopy.querySelector("a");
    const price = templateCopy.querySelector(".price");


    imgBG.style.backgroundImage = `url(${imgPath})`;
    h1.textContent = theater.title.rendered;
    h2.textContent = theater.event_date;
    price.textContent = theater.price;
    article.addEventListener("click", function () {
        location.href = "sub.html?id=" + theater.id;
  })
  document.querySelector("#theater").appendChild(templateCopy);
}
