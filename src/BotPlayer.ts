import { js } from "easystarjs";
import Level from "./Level";
import Player from "./Player";
import Rect from "./Rect";
import { CELL_SIZE } from "./constants";
import { Vec2 } from "./interfaces";
import { clamp } from "./math";

const easystar = new js();

export default class BotPlayer extends Rect {
  waypoints: Vec2[];
  waypoint: Vec2;

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
    if (!this.waypoint) this.waypoint = { ...this.pos };

    this.pos.x = clamp(this.pos.x, 0, this.map.w - this.w);
    this.pos.y = clamp(this.pos.y, 0, this.map.h - this.h);
  }

  findPath() {
    const bot = this.map.pixelToMapPosition(this.pos);
    const target = this.map.pixelToMapPosition(this.target.pos);
    easystar.findPath(bot.x, bot.y, target.x, target.y, (path) => {
      this.waypoints = path;
    });
    easystar.calculate();
  }
}
