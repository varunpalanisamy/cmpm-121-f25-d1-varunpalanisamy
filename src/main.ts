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

function renderCounter() {
  counterDiv.textContent = `${counter} dings`;
}
renderCounter();

clickBtn.addEventListener("click", () => {
  counter += 1;
  renderCounter();
});

setInterval(() => {
  counter += 1;
  renderCounter();
}, 1000);
