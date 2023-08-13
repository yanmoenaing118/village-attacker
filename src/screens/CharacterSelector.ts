import STATE from "../STATE";
import { setAttribute, setStyles } from "../dom-helpers";
import char1 from "../assets/mugshoot/char-1.png";
import char2 from "../assets/mugshoot/char-2.png";
import char3 from "../assets/mugshoot/char-3.png";

const chars = [char1, char2, char3];

export default class LevelSelector {
  el: HTMLElement;
  constructor() {
    const el = document.createElement("div");

    for (let i = 0; i < 3; i++) {
      const item = document.createElement("div");
      setAttribute(item, "id", `level_${i}`);
      setStyles(item, {
        width: "120px",
        height: "120px",
        backgroundImage: `url(${chars[i]})`,
        backgroundSize: "cover"
      });
      item.addEventListener("click", () => {
        STATE.level = item.id;
      });
      el.appendChild(item);
    }

    this.el = el;
  }
}
