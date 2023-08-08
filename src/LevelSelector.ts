import Container from "./Container";
import Entity from "./Entity";
import LevelItem from "./LevelItem";
import { textures } from "./textures";

export default class LevelSelector extends Container<Entity> {
  gap = 20;
  constructor() {
    super();
    this.w = 320;
    this.h = 320;
    this.children = [new LevelItem(textures.player1Lg, 192, 192)];
  }
}
