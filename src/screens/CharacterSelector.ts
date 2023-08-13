import STATE, { SCREEN } from "../STATE";
import { setAttribute, setStyles } from "../dom-helpers";
import char1 from "../assets/mugshoot/char-1.png";
import char2 from "../assets/mugshoot/char-2.png";
import char3 from "../assets/mugshoot/char-3.png";

const chars = [char1, char2, char3];

export default class LevelSelector {
  el: HTMLElement;
  playBtn: HTMLElement;
  constructor() {
    const el = document.createElement("div");
    const title = document.createElement("h3");
    const btn = document.createElement("btn");
    btn.textContent = "Play";

    setStyles(btn, {
      padding: "1em 2em",
      color: "white",
      border: "2px solid white",
      gridArea: "btn",
      textAlign: "center",
      fontFamily: 'monospace',
      fontSize: '18px'
    });

    this.playBtn = btn;

    title.textContent = "Select Hero";
    setStyles(title, {
      color: "white",
      fontSize: "22px",
      fontFamily: "monospace",
      fontWeight: "300",
      gridArea: "title",
    });
    el.appendChild(title);

    for (let i = 0; i < 3; i++) {
      const item = document.createElement("div");
      setAttribute(item, "id", `level_${i}`);
      setStyles(item, {
        width: "120px",
        height: "120px",
        backgroundImage: `url(${chars[i]})`,
        backgroundSize: "cover",
        gridArea: `char${i + 1}`,
      });
      item.addEventListener("click", () => {
        STATE.level = item.id;
      });
      el.appendChild(item);
    }

    el.appendChild(btn);
    this.el = el;
    setStyles(el, {
      display: "grid",
      justifyContent: "center",
      transform: "translateY(30vh)",
      gap: "20px",
      gridTemplateAreas: `'title title title'
                          'char1 char2 char3'
                          'btn btn btn'`,
    });
  }
}
