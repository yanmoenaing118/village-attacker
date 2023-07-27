import Entity from "./Entity";
import Texture from "./Texture";

export default class Sprite extends Entity {
  constructor(texture: Texture) {
    super(texture.w, texture.h);
  }
}
