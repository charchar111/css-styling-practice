const menuButton = document.body.querySelector(
  ".wrap1 .ani__grid-column--sub2"
);
const menuLayout = document.body.querySelector(".menu-layout");
const menuLayoutButton = menuLayout.querySelector(".menu__nav .item2");

const gridLeftMain = document.body.querySelector(".ani__grid-row .column1");
const gridRightMain = document.body.querySelector(".ani__grid-row .column3");
const LMainItem = gridLeftMain.querySelectorAll("div[class*=item]");
const RMainItem = gridRightMain.querySelectorAll("div[class*=item]");

console.dir(menuButton);

console.dir(gridLeftMain);

console.dir(gridRightMain);
console.dir(LMainItem);
console.dir(RMainItem);

function menuLayoutOpen() {
  console.dir("menu");
  menuLayout.classList.toggle("menu-visible");
}

function changeGridLeftOption() {
  console.dir("hi");
}

function changeGridRightOption() {
  console.dir("right");
}

function visibilityHidden() {
  menuLayout.classList.toggle("menu-visible");
}

function menuLayoutCancel() {
  console.dir("cancel");
  menuLayout.classList.remove("");
  setTimeout(visibilityHidden, 2000);
}

menuButton.addEventListener("click", menuLayoutOpen);
menuLayoutButton.addEventListener("click", menuLayoutCancel);

LMainItem[0].addEventListener("click", changeGridLeftOption);
LMainItem[1].addEventListener("click", changeGridLeftOption);
LMainItem[2].addEventListener("click", changeGridLeftOption);
LMainItem[3].addEventListener("click", changeGridLeftOption);
LMainItem[4].addEventListener("click", changeGridLeftOption);

RMainItem[0].addEventListener("click", changeGridRightOption);
RMainItem[1].addEventListener("click", changeGridRightOption);
RMainItem[2].addEventListener("click", changeGridRightOption);
RMainItem[3].addEventListener("click", changeGridRightOption);
RMainItem[4].addEventListener("click", changeGridRightOption);
