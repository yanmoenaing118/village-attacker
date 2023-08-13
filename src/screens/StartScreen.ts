import Container from "../Container";
import Entity from "../Entity";
import STATE from "../STATE";
import { setStyles } from "../dom-helpers";
import LevelSelector from "./CharacterSelector";

export default class StartScreen extends Container<Entity>{
  el: HTMLDivElement;

  constructor(onPlay: () => void) {
    super();
    const el = document.createElement("div");
    this.el = el;
    document.body.appendChild(this.el);

    const levelSelector = new LevelSelector();

    levelSelector.playBtn.addEventListener('click', () => {
      setStyles(this.el, {
        opacity: '0'
      })
      setTimeout(() => {
        onPlay();
        setTimeout(() => {
          setStyles(this.el, {
            display: 'none'
          })
        }, 1000);
      }, 100);
    })
    this.el.appendChild(levelSelector.el);

    setStyles(this.el, {
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0",
      backgroundColor: "black",
      transition: 'all 1s ease-in-out'
    });
  }


}
