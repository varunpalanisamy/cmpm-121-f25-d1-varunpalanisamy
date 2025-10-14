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

let countA = 0;
let countB = 0;
let countC = 0;

//Item A
const upgradeBtnA = document.createElement("button");
upgradeBtnA.id = "upgrade-a";
upgradeBtnA.textContent = "Buy A (+0.1/sec) — Cost: 10";
upgradeBtnA.disabled = true;
upgradeBtnA.style.marginTop = "8px";
document.body.appendChild(upgradeBtnA);

upgradeBtnA.addEventListener("click", () => {
  const cost = 10;
  const rate = 0.1;
  if (counter >= cost) {
    counter -= cost;
    growthPerSecond += rate;
    countA += 1;
    renderCounter();
  }
});

//Item B
const upgradeBtnB = document.createElement("button");
upgradeBtnB.id = "upgrade-b";
upgradeBtnB.textContent = "Buy B (+2/sec) — Cost: 100";
upgradeBtnB.disabled = true;
upgradeBtnB.style.marginLeft = "8px";
document.body.appendChild(upgradeBtnB);

upgradeBtnB.addEventListener("click", () => {
  const cost = 100;
  const rate = 2.0;
  if (counter >= cost) {
    counter -= cost;
    growthPerSecond += rate;
    countB += 1;
    renderCounter();
  }
});

// Item C
const upgradeBtnC = document.createElement("button");
upgradeBtnC.id = "upgrade-c";
upgradeBtnC.textContent = "Buy C (+50/sec) — Cost: 1000";
upgradeBtnC.disabled = true;
upgradeBtnC.style.marginLeft = "8px";
document.body.appendChild(upgradeBtnC);

upgradeBtnC.addEventListener("click", () => {
  const cost = 1000;
  const rate = 50.0;
  if (counter >= cost) {
    counter -= cost;
    growthPerSecond += rate;
    countC += 1;
    renderCounter();
  }
});

const statusDiv = document.createElement("div");
statusDiv.id = "status";
statusDiv.style.marginTop = "8px";
document.body.appendChild(statusDiv);

function renderCounter() {
  const shown = Number.isInteger(counter)
    ? counter.toString()
    : counter.toFixed(2);
  counterDiv.textContent = `${shown} dings  (rate: ${
    growthPerSecond.toFixed(2)
  }/sec)`;

  upgradeBtnA.disabled = counter < 10;
  upgradeBtnB.disabled = counter < 100;
  upgradeBtnC.disabled = counter < 1000;

  statusDiv.textContent =
    `Owned — A: ${countA}  |  B: ${countB}  |  C: ${countC}`;
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
