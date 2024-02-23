const headBtnRight = document.querySelector(".header-right__label");
const headPannelRight = document.querySelector(".header-item--right");
const headLiRight = document.querySelectorAll(".header-right__category-ul1 li");
let headLabelRight = document.querySelector(".header-right__label-opt");

console.dir(headBtnRight);
function clickHeadBtnRight() {
  classlist = headPannelRight.classList;
  classlist.toggle("header-right--expanding");
  console.log(classlist);
}

function clickHeadLiRight(event) {
  console.log("li");
  console.dir(headLabelRight);
  headLabelRight.innerText = event.target.innerText;
}
headBtnRight.addEventListener("click", clickHeadBtnRight);
// headLiRight[0].addEventListener("click", clickHeadLiRight);
// headLiRight[1].addEventListener("click", clickHeadLiRight);

list = [1, 2, 3, 4, 5];

for (i = 0; i < 5; i++) {
  headLiRight[i].addEventListener("click", clickHeadLiRight);
}
