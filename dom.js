let btplus = document.getElementsByClassName("btn-plus");

// console.log(btplus);

for (let plus of btplus) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerText++;
    // console.log("click", plus.nextElementSibling);
  });
}

let btminus = document.getElementsByClassName("btn-minus");

for (let minus of btminus) {
  minus.addEventListener("click", () => {
    if (minus.previousElementSibling.innerText > 0)
      minus.previousElementSibling.innerText--;
  });
}

let btdelete = document.getElementsByClassName("del");
for (let dell of btdelete) {
  dell.addEventListener("click", function () {
    dell.parentElement.parentElement.remove();
  });
}
