console.log("This JS is for Live News project");
//ffc6c2876ee44050adf4fd5ba404253a

source = "the-hindu";
let apikey = "ffc6c2876ee44050adf4fd5ba404253a";

//Getting the news Container by Using the id
let newsAccordion = document.getElementById("newsAccordion");

//Create a get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    //console.log(articles)

    let newsHtml = ""
    articles.forEach(function(element, index){
        //console.log(element, index)

       let news =  `<div class="accordion" id="newsAccordion">
       <div class="accordion-item">
         <h2 class="accordion-header" id="heading${index}">
           <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          <b>Live News${index+1}:-</b> ${element["title"]}
           </button>
         </h2>
         <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="newsAccordion">
           <div class="accordion-body">
           ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>
           </div>
         </div>
       </div>`
        
newsHtml += news;
});
    newsAccordion .innerHTML = newsHtml
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
