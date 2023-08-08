import Container from "./Container";
import Entity from "./Entity";
import Rect from "./Rect";
import Sprite from "./Sprite";
import Texture from "./Texture";

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
    this.selectBorder = new Rect(w, h);
    // this.add(this.levelPicture);
  }

  update(dt: number, t: number): void {
    if(this.hovered) {
        if(!this.has(this.selectBorder)) {
            this.add(this.selectBorder)
        }
    } else {
        if(this.has(this.selectBorder)) {
            this.remove(this.selectBorder);
        }
    }
  }
}
