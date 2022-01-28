var logos = document.getElementsByClassName("company_logo");
for (var i = 0; i < logos.length; i++) {
  let image = logos[i];
  let link = image.nextElementSibling.lastElementChild.lastElementChild.href;
  image.onclick = function (event) {
    window.open(link, "_blank");
  };
}

var sortName = function () {
  var items = document.getElementsByClassName("list_item");
  for (var i = 0; i < logos.length; i++) {
    let item = items[i];
    let name =
      item.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();
    item.style.order = name.charCodeAt(0) - 97;
  }
};

var sortLocation = function () {
  var items = document.getElementsByClassName("list_item");
  for (var i = 0; i < logos.length; i++) {
    let item = items[i];
    let location =
      item.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.textContent.toLowerCase();
    item.style.order = location.charCodeAt(0) - 97;
  }
};

var sortNumber = function () {
  var items = document.getElementsByClassName("list_item");
  for (var i = 0; i < logos.length; i++) {
    let item = items[i];
    let number = parseInt(
      item.lastElementChild.previousElementSibling.firstElementChild
        .lastElementChild.textContent
    );
    item.style.order = number;
  }
};

var sortMoney = function () {
  var items = document.getElementsByClassName("list_item");
  for (var i = 0; i < logos.length; i++) {
    let item = items[i];
    let number = parseInt(
      item.lastElementChild.firstElementChild.lastElementChild.textContent.replace(
        /\s/g,
        ""
      )
    );
    item.style.order = number;
  }
};
