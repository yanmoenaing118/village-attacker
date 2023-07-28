import Sprite from "./Sprite";
import Texture from "./Texture";
import { Frame } from "./interfaces";
export default class TileSprite extends Sprite {
  frame: Frame;
  constructor(texture: Texture, tileW: number, tileH: number, frame: Frame) {
    super(texture);
    this.w = tileW;
    this.h = tileH;
    this.frame = frame;
  }
}
