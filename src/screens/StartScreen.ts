import { setStyles } from "../dom-helpers";
import LevelSelector from "./CharacterSelector";

export default class StartScreen {
  el: HTMLDivElement;

  constructor() {
    const el = document.createElement("div");
    this.el = el;
    document.body.appendChild(this.el);

    const levelSelector = new LevelSelector();

    this.el.appendChild(levelSelector.el);

    setStyles(this.el, {
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0",
      backgroundColor: "black",
    });
  }
}
