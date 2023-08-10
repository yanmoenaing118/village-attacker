import { mouseControl } from ".";
import Container from "./Container";
import Entity from "./Entity";
import MouseControl from "./MouseControls";
import Rect from "./Rect";
import Sprite from "./Sprite";
import Texture from "./Texture";
import { insideRect } from "./helpers";

export default class LevelItem extends Container<Entity> {
  hovered: boolean;
  clicked: boolean;
  levelPicture: Sprite;
  selectBorder: Rect;

  constructor(texture: Texture, w: number, h: number) {
    super();
    this.hovered = false;
    this.clicked = false;
    this.w = w;
    this.h = h;
    this.levelPicture = new Sprite(texture);
    this.selectBorder = new Rect(w, h, {
      fill: 'transparent',
      stroke: 'lightgreen',
      strokeWidth: 3
    });
    this.levelPicture.w = w;
    this.levelPicture.h = h;
    // this.add(this.selectBorder);
    this.add(this.levelPicture);
  }

  update(dt: number, t: number): void {
      if(this.clicked) {
        this.add(this.selectBorder);
      } else {
        // this.remove(this.selectBorder);
      }

      // if(this.hovered) {
      //   this.add(this.selectBorder);
      // }
  }
}
