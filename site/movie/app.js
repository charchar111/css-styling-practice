const mainRight = document.querySelector(".main-right");
const rightFilter = document.querySelector(".main-right .right__filter");

const filterItem1 = rightFilter.children[0].querySelector(".main-right button");
const filterItem2 = rightFilter.children[1].querySelector(".main-right button");

const rightIndex = document.querySelectorAll(
  ".main-right div[class*=right__filter--index]"
);

const rightIndexXButton = rightIndex[0].querySelector(".index__title .x-mark ");

console.dir(filterItem1);
console.dir(filterItem2);
console.dir(rightIndex);
console.dir(rightIndexXButton);

function filterButton1() {
  mainRight.classList.toggle("block-scroll");
  rightIndex[0].classList.toggle("none");
  rightIndex[0].classList.toggle("index-menu");
  console.dir(rightIndexXButton);
}

function filterButton2() {
  console.dir(filterItem2);
}

function rightIndexCancel() {
  mainRight.classList.toggle("block-scroll");
  rightIndex[0].classList.toggle("none");
  rightIndex[0].classList.toggle("index-menu");
}

filterItem1.addEventListener("click", filterButton1);
filterItem2.addEventListener("click", filterButton2);
rightIndexXButton.addEventListener("click", rightIndexCancel);
