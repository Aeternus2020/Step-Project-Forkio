'use strict';

//Adding a digit separator
let numSepartor = document.querySelectorAll(".num-separator");
numSepartor.forEach((num) => {
  num.innerText = Number(num.innerText).toLocaleString("en");
});
