var logos = document.getElementsByClassName("company_logo");
for (var i = 0; i < logos.length; i++) {
  let image = logos[i];
  let link = image.nextElementSibling.lastElementChild.lastElementChild.href;
  image.onclick = function (event) {
    window.open(link, "_blank");
  };
}
