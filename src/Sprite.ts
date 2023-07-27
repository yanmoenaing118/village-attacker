import Entity from "./Entity";
import Texture from "./Texture";

export default class Sprite extends Entity {
  texture: Texture;
  constructor(texture: Texture) {
    super();
    this.texture = texture;
    this.w = this.texture.w;
    this.h = this.texture.h;
  }
}
