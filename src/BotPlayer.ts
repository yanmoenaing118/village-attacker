import Level from "./Level";
import Player from "./Player";
import Rect from "./Rect";
import { CELL_SIZE } from "./constants";
import { Vec2 } from "./interfaces";
import { clamp } from "./math";

export default class BotPlayer extends Rect {
  waypoints: Vec2[];
  waypoint: Vec2;

  constructor(public map: Level, public target: Rect) {
    super(CELL_SIZE, CELL_SIZE, {
      fill: "rgba(0,0,0,0.4)",
    });
    this.pos.x = CELL_SIZE;
    this.pos.y = CELL_SIZE;
  }

  update(dt: number, t: number): void {
    if (!this.waypoint) this.waypoint = { ...this.pos };

    this.pos.x = clamp(this.pos.x, 0, this.map.w - this.w);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - this.h);
  }
}