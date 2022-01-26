let st = "python";
let links = document.links;
console.log(links);

Array.from(links).forEach(function (element) {
  href = element.href;
  if (href.includes(st)){
    console.log(href);
  }
});
