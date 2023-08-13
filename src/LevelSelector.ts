import { mouseControl } from ".";
import Container from "./Container";
import Entity from "./Entity";
import LevelItem from "./LevelItem";
import Text from "./Text";
import { insideRect } from "./helpers";
import { textures } from "./textures";

export default class LevelSelector extends Container<Entity> {
  gap = 20;
  levelItems: LevelItem[] = [];
  itemSize = 192;
  levelTitle: Text;
  constructor(w: number, h: number) {
    super();
    this.levelTitle = new Text("Select Your Hero", {
      fill: "white",
      font: "28px monospace"
    });
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
      item.pos.y = 32;
      item.pos.x = i * item.w + gap * i;
    });
    this.children = items;
    this.children.push(this.levelTitle);
    this.pos.x = w / 2 - this.itemSize * items.length * 0.4;
    this.pos.y = h / 2 * 0.65;
  }

  update(dt: number, t: number): void {
    const { pos } = this;

    this.children.forEach((child: LevelItem) => {
      const bounds = {
        x: pos.x + child.pos.x,
        y: pos.y + child.pos.y,
        w: child.w,
        h: child.h,
      };

      const mouse = {
        x: mouseControl.x,
        y: mouseControl.y,
      };

      if (mouseControl.pressed) {
        child.clicked = false;
        if (insideRect(mouse, bounds)) {
          child.clicked = true;
        }
      }
    });

    mouseControl.update();
    super.update(dt, t);
  }
}
