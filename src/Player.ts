import KeyboardControls from "./KeyControls";
import Level from "./Level";
import TileSprite from "./TileSprite";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";
import { bounds } from "./helpers";
import { clamp } from "./math";
import { textures } from "./textures";

export default class Player extends TileSprite {
  constructor(private controls: KeyboardControls, private map: Level) {
    super(textures.dungeon, CELL_SIZE, CELL_SIZE, { x: 2, y: 12 });
    this.pos.x = CELL_SIZE * 4;
    this.pos.y = CELL_SIZE * 8;
    // this.hitBox = {
    //   x: 2,
    //   y: 2,
    //   w: this.w - 2 * 2,
    //   h: this.h - 2 * 2
    // }
  }

  update(dt: number, t: number): void {
    let mx = this.controls.x * 640 * dt;
    let my = this.controls.y * 640 * dt;

    console.log(mx, my);

    const b = bounds({
      ...this,
      pos: { x: this.pos.x + mx, y: this.pos.y + my },
    });
    const tilesAtCorners = this.map.getTilesAtCorners(b);
    const blocked = tilesAtCorners.some((tile) => tile && tile.frame.solid);

    if (blocked) {
      mx = 0;
      my = 0;
    }

    this.pos.x += mx;
    this.pos.y += my;

    this.pos.x = clamp(this.pos.x, 0, WIDTH - CELL_SIZE);
    this.pos.y = clamp(this.pos.y, 0, HEIGHT - CELL_SIZE);
  }
}
