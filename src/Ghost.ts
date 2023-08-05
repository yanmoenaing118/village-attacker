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
    const start = this.map.pixelToMapPosition(this.pos);
    const end = this.map.pixelToMapPosition(this.target.pos);

    this.map.path.findPath(start.x, start.y, end.x, end.y, (p) => {
      if (p) {
        this.waypoints = p;
        this.waypoint = this.map.mapToPixelPosition(this.waypoints.shift());
      }
    });

    let isXClose = false;
    let isYClose = false;
    const step = dt * 280;

    let dx = 0;
    let dy = 0;

    if (this.waypoint) {
      dx = this.waypoint.x - this.pos.x;
      dy = this.waypoint.y - this.pos.y;

      if (Math.abs(dx) <= 1) isXClose = true;
      if (Math.abs(dy) <= 1) isYClose = true;
    }

    if (!isXClose) {
      this.pos.x += step * (dx > 0 ? -1 : 1);
    }

    if (!isYClose) {
      this.pos.y += step * (dy > 0 ? -1 : 1);
    }

    if (isXClose && isYClose) {
      if (this.waypoints.length >= 1) {
        this.waypoint = this.waypoints.shift();
        if(this.waypoint) {
          this.waypoint = this.map.mapToPixelPosition({...this.waypoint})
        }
      }
      // console.log(JSON.stringify(this.waypoints));
    }

    this.pos.x = clamp(this.pos.x, 0, this.map.w - this.w);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - this.h);
    this.map.path.calculate();
  }
}
