import KeyboardControls from "../KeyControls";
import Level from "./Level";
import TileSprite from "../TileSprite";
import { CELL_SIZE, HEIGHT, WIDTH } from "../constants";
import { bounds } from "../helpers";
import { clamp } from "../math";
import { textures } from "../textures";

export default class Player extends TileSprite {
  speed = 280;
  constructor(private controls: KeyboardControls, private map: Level) {
    super(textures.player1, CELL_SIZE, CELL_SIZE, { x: 0, y: 2 });
    this.pos.x = CELL_SIZE * 1;
    this.pos.y = (this.map.mapH - 3) * CELL_SIZE;
    // this.debug = true;
  }

  update(dt: number, t: number): void {
    let frame = this.frame.x;
    if(this.controls.x || this.controls.y) {
      frame = Math.round(t * 10) % 4;
    }
    this.frame.x = frame;
    if (this.controls.x > 0) {
      this.frame.y = 2;
    } else if (this.controls.x < 0) {
      this.frame.y = 1;
    } else if (this.controls.y > 0) {
      this.frame.y = 0;
    } else if (this.controls.y < 0) {
      this.frame.y = 3;
    } else {
      this.frame.x = this.frame.x;
      this.frame.y = this.frame.y;
    }

    // console.log(this.frame.x);

    let mx = this.controls.x * this.speed * dt;
    let my = this.controls.y * this.speed * dt;

    const b = bounds({
      ...this,
      pos: { x: this.pos.x + mx, y: this.pos.y + my },
    });
    const tilesAtCorners = this.map.getTilesAtCorners(b);
    const [TL, TR, BL, BR] = tilesAtCorners.map(
      (tile) => tile && tile.frame.solid
    );

    if (this.controls.y) {
      if (this.controls.y < 0 && (TL || TR)) {
        my = tilesAtCorners[0].pos.y + tilesAtCorners[0].h - this.pos.y;
      } else if (this.controls.y > 0 && (BL || BR)) {
        my = tilesAtCorners[2].pos.y - (this.pos.y + this.h);
      }
    }

    if (this.controls.x) {
      if (this.controls.x < 0 && (TL || BL)) {
        mx = tilesAtCorners[0].pos.x + tilesAtCorners[0].w - this.pos.x;
      } else if (this.controls.x > 0 && (TR || BR)) {
        mx = tilesAtCorners[1].pos.x - (this.pos.x + this.w);
      }
    }

    this.pos.x += mx;
    this.pos.y += my;

    this.pos.x = clamp(this.pos.x, 0, this.map.w - CELL_SIZE);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - CELL_SIZE);
  }
}
