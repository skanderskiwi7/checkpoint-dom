let btplus = document.getElementsByClassName("btn-plus");

for (let plus of btplus) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerText++;
  });
}
let btminus = document.getElementsByClassName("btn-minus");

for (let moins of btminus) {
  moins.addEventListener("click", function () {
    if (moins.previousElementSibling.innerText > 0) {
      moins.previousElementSibling.innerText--;
    }
  });
}
let heart = document.getElementsByClassName("fa-heart");

for (let favorit of heart) {
  favorit.addEventListener("click", function () {
    if (favorit.style.color === "black") {
      favorit.style.color = "red";
    } else {
      favorit.style.color = "black";
    }
  });
}

let pu = document.getElementsByClassName("PU");
let qte = document.getElementsByClassName("number1");

// console.log("pu", pu);
console.log("Qte", qte);
