import { js } from "easystarjs";
import Level from "./Level";
import Player from "./Player";
import Rect from "../Rect";
import { CELL_SIZE } from "../constants";
import { Vec2 } from "../interfaces";
import { clamp } from "../math";
import { hit } from "../helpers";

const easystar = new js();

export default class BotPlayer extends Rect {
  waypoints: Vec2[] = [];
  waypoint: Vec2;
  speed = 220;

  constructor(public map: Level, public target: Rect) {
    super(CELL_SIZE, CELL_SIZE, {
      fill: "rgba(0,0,0,0.4)",
    });
    this.pos.x = CELL_SIZE;
    this.pos.y = CELL_SIZE;

    let grid = [];

    for (let i = 0; i < this.map.mapW * this.map.mapH; i += this.map.mapW) {
      const cells = this.map.frames.slice(i, i + this.map.mapW).map((f) => {
        if (f.solid) return 1;
        return 0;
      });
      grid.push(cells);
    }

    easystar.setGrid(grid);
    easystar.setAcceptableTiles([0]);
    this.findPath();
  }

  update(dt: number, t: number): void {
    if (!this.waypoint) {
      this.waypoint = { ...this.pos };
    }
    this.moveAlongPath(dt);
    this.pos.x = clamp(this.pos.x, 0, this.map.w - this.w);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - this.h);
  }

  findPath() {
    const bot = this.map.pixelToMapPosition(this.pos);
    const target = this.map.pixelToMapPosition(this.target.pos);
    easystar.findPath(bot.x, bot.y, target.x, target.y, (path) => {
      this.waypoints = path || [];
      if (this.waypoints.length > 0) {
        this.waypoint = this.map.mapToPixelPosition(this.waypoints[0]);
      }
    });
    easystar.calculate();
  }

  moveAlongPath(dt: number) {
    const pos = this.pos;

    const dx = this.waypoint.x - pos.x;
    const dy = this.waypoint.y - pos.y;

    let step = this.speed * dt;
    let isXClose = false;
    let isYClose = false;

    if (Math.abs(dx) <= step) isXClose = true;
    if (Math.abs(dy) <= step) isYClose = true;

    if (!isXClose) this.pos.x += step * (dx > 0 ? 1 : -1);
    if (!isYClose) this.pos.y += step * (dy > 0 ? 1 : -1);

    if (isXClose && isYClose) {
      
      if (this.waypoints.length == 0) {
        // this.findPath();
      } else {
        this.waypoint = this.map.mapToPixelPosition(this.waypoints.shift());
      }
    }
  }
}
