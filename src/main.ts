import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = `
  <p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>
  <p> HELLO IM VARUN</p>
`;

const clickBtn = document.createElement("button");
clickBtn.id = "click-btn";
clickBtn.textContent = "🔔";
clickBtn.title = "Click me";
document.body.appendChild(clickBtn);

// step 2
let counter: number = 0; // game state

const counterDiv = document.createElement("div");
counterDiv.id = "counter";
counterDiv.style.marginTop = "12px";
document.body.appendChild(counterDiv);
let growthPerSecond = 0;

const upgradeBtn = document.createElement("button");
upgradeBtn.id = "upgrade-btn";
upgradeBtn.textContent = "Buy Upgrade (+1/sec) — Cost: 10";
upgradeBtn.disabled = true;
upgradeBtn.style.marginTop = "8px";
document.body.appendChild(upgradeBtn);

upgradeBtn.addEventListener("click", () => {
  const cost = 10;
  if (counter >= cost) {
    counter -= cost;
    growthPerSecond += 1;
    renderCounter();
  }
});

function renderCounter() {
  const shown = Number.isInteger(counter)
    ? counter.toString()
    : counter.toFixed(2);
  counterDiv.textContent = `${shown} dings  (rate: ${
    growthPerSecond.toFixed(2)
  }/sec)`;
  upgradeBtn.disabled = counter < 10;
}
renderCounter();

clickBtn.addEventListener("click", () => {
  counter += 1;
  renderCounter();
});

// //step 3
// setInterval(() => {
//   counter += 1;
//   renderCounter();
// }, 1000);

//step 4
let lastTime = performance.now();

function tick(now: number) {
  const dtSeconds = (now - lastTime) / 1000;
  lastTime = now;

  counter += growthPerSecond * dtSeconds;
  renderCounter();

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

//step 5
