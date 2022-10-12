let root = document.querySelector(".main-box");
console.log(root);
let arr = [];
for (let i = 1; i < 7; i++) {
  arr.push(i);
  arr.push(i);
}

const shuffledArr = arr.sort((a, b) => 0.5 - Math.random());

for (let i of shuffledArr) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.textContent = i;
  card.classList.add(`card${i}`);
  card.classList.add("flipped");
  card.style.backgroundImage = `url(./images/${i}.png)`;
  root.insertAdjacentElement("afterbegin", card);
}
let prev = "";
let first = true;
root.addEventListener("click", (ev) => {
  if (first) {
    ev.target.classList.remove("flipped");
    prev = ev.target;
    console.log(prev);
    first = false;
  } else {
    ev.target.classList.remove("flipped");
    console.log(ev.target.classList);
    console.log(ev.target);
    first = true;
    setTimeout(() => {
      document._clikhold = document.onclick;
      document.onclick = null;
      if (!(prev.textContent == ev.target.textContent)) {
        ev.target.classList.add("flipped");
        prev.classList.add("flipped");
      }
    }, 2000);
  }
});
