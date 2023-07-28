import Sprite from "./Sprite";
import Texture from "./Texture";
import { Frame } from "./interfaces";
export default class TileSprite extends Sprite {
  frame: Frame;
  constructor(texture: Texture, tileW: number, tileH: number, frame: Frame) {
    super(texture);
    this.w = tileW;
    this.h = tileH;
    this.hitBox = { x: 0, y: 0, w: this.w, h: this.h}
    this.frame = frame;
  }
}
