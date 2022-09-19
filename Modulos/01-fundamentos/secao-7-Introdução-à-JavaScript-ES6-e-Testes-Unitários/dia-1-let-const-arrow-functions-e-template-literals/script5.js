const clickCount = document.getElementById("contador");
const counte =  document.getElementById("counter");

let numeroBase = 0

// function contarClicks() {
//     const caracte = clickCount.value;
//     document.getElementById("counter").innerHTML = numeroBase += 1
// }

// clickCount.addEventListener('click', contarClicks)

clickCount.addEventListener('click', () => counte.innerHTML = numeroBase += 1);