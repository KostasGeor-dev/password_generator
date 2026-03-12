const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("sub_box1");
let password2 = document.getElementById("sub_box2");

let counter = 0;
function generator() {
  counter += 1;
  if (counter === 1) {
    for (let i = 0; i < 15; i++) {
      let x = Math.floor(Math.random() * characters.length);
      password1.textContent += characters[x];
    }
    for (let i = 0; i < 15; i++) {
      let y = Math.floor(Math.random() * characters.length);
      password2.textContent += characters[y];
    }
  } else {
    password1.textContent = "";
    password2.textContent = "";
    counter = 0;
  }
}

function reset() {
  password1.textContent = "";
  password2.textContent = "";
}
