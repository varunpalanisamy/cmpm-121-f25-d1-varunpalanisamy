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
