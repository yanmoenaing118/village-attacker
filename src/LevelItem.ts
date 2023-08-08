import Sprite from "./Sprite";
import Texture from "./Texture";

export default class LevelItem extends Sprite {
  hovered: boolean;
  clicked: boolean;
  constructor(texture: Texture, w: number, h: number) {
    super(texture);
    this.hovered = false;
    this.clicked = false;
    this.w = w;
    this.h = h;
  }
}
