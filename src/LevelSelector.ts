import Container from "./Container";
import Entity from "./Entity";
import LevelItem from "./LevelItem";
import { HEIGHT, WIDTH } from "./constants";
import { textures } from "./textures";

export default class LevelSelector extends Container<Entity> {
  gap = 20;
  levelItems: LevelItem[] = [];
  itemSize = 192;
  constructor(w: number, h: number) {
    super();
    const items = [
      new LevelItem(textures.player1Lg, this.itemSize, this.itemSize),
      new LevelItem(textures.player2Lg, this.itemSize, this.itemSize),
      new LevelItem(textures.player3Lg, this.itemSize, this.itemSize),
    ];
    items.forEach((item, i) => {
      let gap = 0;
      if (i > 0) {
        gap = 12;
      }
      item.pos.x = i * item.w + gap * i;
    });
    this.children = items;
    this.pos.x = w / 2 - this.itemSize * items.length * 0.5;
    this.pos.y = h / 2 - this.itemSize;
  }
}
