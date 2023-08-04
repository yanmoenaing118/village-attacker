import KeyboardControls from "./KeyControls";
import Level from "./Level";
import TileSprite from "./TileSprite";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";
import { bounds } from "./helpers";
import { clamp } from "./math";
import { textures } from "./textures";

export default class Player extends TileSprite {
  speed = 220;
  constructor(private controls: KeyboardControls, private map: Level) {
    super(textures.village, CELL_SIZE * 0.7, CELL_SIZE * 0.7, { x: 12, y: 0 });
    this.pos.x = CELL_SIZE * 1;
    this.pos.y = CELL_SIZE * 1;

    this.debug = true;


    // this.hitBox = {
    //   x: 3,
    //   y: 3,
    //   w: this.w - 3 * 2,
    //   h: this.h - 3 * 2,
    // };
  }

  update(dt: number, t: number): void {

    let mx = this.controls.x * this.speed * dt;
    let my = this.controls.y * this.speed * dt;

    const b = bounds({
      ...this,
      pos: { x: this.pos.x + mx, y: this.pos.y + my },
    });
    const tilesAtCorners = this.map.getTilesAtCorners(b);
    const blocked = tilesAtCorners.some((tile) => tile && tile.frame.solid);
    const [TL, TR, BL, BR] = tilesAtCorners.map(
      (tile) => tile && tile.frame.solid
    );

    if (blocked) {
      mx = 0;
      my = 0;

      if (this.controls.x < 0 && (TL || BL)) {
        mx = tilesAtCorners[0].pos.x + tilesAtCorners[0].w - this.pos.x;
      } else if (this.controls.x > 0 && (TR || BR)) {
        mx = tilesAtCorners[1].pos.x - (this.pos.x + this.w);
      } else if (this.controls.y < 0 && (TL || TR)) {
        my = tilesAtCorners[0].pos.y + tilesAtCorners[0].h - this.pos.y;
      } else if (this.controls.y > 0 && (BL || BR)) {
        my = tilesAtCorners[2].pos.y - (this.pos.y + this.h);
        // debugger
      }
    }

    this.pos.x += mx;
    this.pos.y += my;

    this.pos.x = clamp(this.pos.x, 0, this.map.w - CELL_SIZE);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - CELL_SIZE);
  }
}
