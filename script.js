var logos = document.getElementsByClassName("company_logo");
for (var i = 0; i < logos.length; i++) {
  let image = logos[i];
  let link = image.nextElementSibling.lastElementChild.lastElementChild.href;
  image.onclick = function (event) {
    window.open(link, "_blank");
  };
}

var hideAllCarets = function () {
  var caretElements = document.getElementsByClassName("caret_img");
  for (let caret of caretElements) {
    caret.style.display = "none";
  }
};

var sortName = function () {
  let caretDown = document.getElementById("name_caret_down");
  let caretUp = document.getElementById("name_caret_up");
  if (
    caretDown.style.display === "flex" ||
    (caretDown.style.display === "none" && caretUp.style.display === "none")
  ) {
    hideAllCarets();
    caretUp.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let name =
        item.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();
      item.style.order = name.charCodeAt(0) - 97;
    }
  } else {
    hideAllCarets();
    caretDown.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let name =
        item.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();
      item.style.order = 25 - (name.charCodeAt(0) - 97);
    }
  }
};

var sortLocation = function () {
  let caretDown = document.getElementById("location_caret_down");
  let caretUp = document.getElementById("location_caret_up");
  if (
    caretDown.style.display === "flex" ||
    (caretDown.style.display === "none" && caretUp.style.display === "none")
  ) {
    hideAllCarets();
    caretUp.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let location =
        item.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.textContent.toLowerCase();
      item.style.order = location.charCodeAt(0) - 97;
    }
  } else {
    hideAllCarets();
    caretDown.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let location =
        item.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.textContent.toLowerCase();
      item.style.order = 25 - (location.charCodeAt(0) - 97);
    }
  }
};

var sortNumber = function () {
  let caretDown = document.getElementById("employees_caret_down");
  let caretUp = document.getElementById("employees_caret_up");
  if (
    caretDown.style.display === "flex" ||
    (caretDown.style.display === "none" && caretUp.style.display === "none")
  ) {
    hideAllCarets();
    caretUp.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let number = parseInt(
        item.lastElementChild.previousElementSibling.firstElementChild
          .lastElementChild.textContent
      );
      item.style.order = number;
    }
  } else {
    hideAllCarets();
    caretDown.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let number = parseInt(
        item.lastElementChild.previousElementSibling.firstElementChild
          .lastElementChild.textContent
      );
      item.style.order = 5001 - number;
    }
  }
};

var sortMoney = function () {
  let caretDown = document.getElementById("raise_caret_down");
  let caretUp = document.getElementById("raise_caret_up");
  if (
    caretDown.style.display === "flex" ||
    (caretDown.style.display === "none" && caretUp.style.display === "none")
  ) {
    hideAllCarets();
    caretUp.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let money = parseInt(
        item.lastElementChild.firstElementChild.lastElementChild.textContent.replace(
          /\s/g,
          ""
        )
      );
      item.style.order = money;
    }
  } else {
    hideAllCarets();
    caretDown.style.display = "flex";
    var items = document.getElementsByClassName("list_item");
    for (var i = 0; i < logos.length; i++) {
      let item = items[i];
      let money = parseInt(
        item.lastElementChild.firstElementChild.lastElementChild.textContent.replace(
          /\s/g,
          ""
        )
      );
      item.style.order = -money;
    }
  }
};
