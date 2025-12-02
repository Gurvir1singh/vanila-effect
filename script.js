let str = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
let h1 = document.querySelector("h1");

let strArr = str.split("");
let h1Arr = h1.textContent.split("");

let i = 0;
let text = "";
let randomText = function () {
  text = h1Arr
    .map(function (char, index) {
      if (i > index) {
        console.log("if challa");
        return char;
      }

      return strArr[Math.floor(Math.random() * str.length)];
    })
    .join("");
    
    i += 0.2;
    h1.innerText = text;
    
    if (h1Arr.join == text) {
      clearInterval(matrics);
    }

  // console.log(text);
};

matrics = setInterval(randomText, 30);
