import Level from "./Level";
import Player from "./Player";
import Rect from "./Rect";
import { CELL_SIZE } from "./constants";
import { Vec2 } from "./interfaces";
import { clamp } from "./math";

export class Ghost extends Rect {
  waypoints: Vec2[];
  waypoint: Vec2;

  constructor(public map: Level, public target: Rect) {
    super(CELL_SIZE, CELL_SIZE, {
      fill: "black",
    });
    this.pos.x = 4 * CELL_SIZE;
    this.pos.y = 1 * CELL_SIZE;
  }

  update(dt: number, t: number): void {

    this.pos.x = clamp(this.pos.x, 0, this.map.w - this.w);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - this.h);
    
  }
}
