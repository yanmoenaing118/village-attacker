import { js as EasyStar } from "easystarjs";
import Container from "../Container";
import DebugGrid from "../DebugGrid";
import Entity from "../Entity";
import { Ghost } from "../Ghost";
import KeyboardControls from "../KeyControls";
import Level from "../Level";
import Player from "../Player";
import Rect from "../Rect";
import { CELL_SIZE } from "../constants";
import { Vec2 } from "../interfaces";
import { clamp } from "../math";

const easystar = new EasyStar();

export default class PlayScreen extends Container<Entity> {
  static constrols: KeyboardControls = new KeyboardControls();
  waypoints: Vec2[] = [];
  waypoint: Vec2;
  player: Rect;
  target: Rect;
  constructor(w: number, h: number) {
    super();
    const debugGrid = new DebugGrid(w, h, CELL_SIZE);

    const speed = 320;
    const player = new Rect(CELL_SIZE, CELL_SIZE, {
      fill: "rgba(0,0,0,0.3)",
    });
    this.player = player;

    const target = new Rect(CELL_SIZE, CELL_SIZE, {
      fill: "rgba(0,225,0,0.3)",
    });
    this.target = target;

    let waypoint = this.waypoint;

    target.pos.x = Math.floor(Math.random() * debugGrid.cols) * CELL_SIZE;
    target.pos.y = Math.floor(Math.random() * debugGrid.rows) * CELL_SIZE;


    player.update = (dt: number, t: number) => {
      if(!this.waypoint) this.waypoint = {...player.pos} ;
      const dx = this.waypoint.x - player.pos.x;
      const dy = this.waypoint.y - player.pos.y;
      let step = dt * speed;

      let isXClose = Math.abs(dx) <= step;
      let isYClose = Math.abs(dy) <= step;

      if (isXClose && isYClose) {
        if (this.waypoints.length > 0) {
          this.waypoint = this.waypoints.shift();
        }
        if(this.waypoints.length == 0) {
          target.pos.x = Math.floor(Math.random() * debugGrid.cols) * CELL_SIZE;
          target.pos.y = Math.floor(Math.random() * debugGrid.rows) * CELL_SIZE;
          this.findPath();
        }
      }

      if (!isXClose) player.pos.x += step * (dx > 0 ? 1 : -1);
      if (!isYClose) player.pos.y += step * (dy > 0 ? 1 : -1);

      player.pos.x = clamp(player.pos.x, 0, w - CELL_SIZE);
      player.pos.y = clamp(player.pos.y, 0, h - CELL_SIZE);
    };

    const grid: number[][] = [];

    for (let y = 0; y < debugGrid.rows; y++) {
      grid[y] = [];
      for (let x = 0; x < debugGrid.cols; x++) {
        grid[y][x] = 0;
      }
    }

    easystar.setGrid(grid);
    easystar.setAcceptableTiles([0]);

    this.findPath();

    try {
      
    } catch (error) {
      console.log(error);
    }

    this.add(debugGrid);
    this.add(player);
    this.add(target);
  }

  findPath() {
    easystar.findPath(
      Math.floor(this.player.pos.x / CELL_SIZE),
      Math.floor(this.player.pos.y / CELL_SIZE),
      Math.floor(this.target.pos.x / CELL_SIZE),
      Math.floor(this.target.pos.y / CELL_SIZE),
      (p) => {
        console.log("the path ", p);
        if (p) {
          this.waypoints = p.map(({ x, y }) => ({
            x: x * CELL_SIZE,
            y: y * CELL_SIZE,
          }));
          this.waypoint = this.waypoints.shift();
        }
      }
    );

    easystar.calculate();
  }
}
