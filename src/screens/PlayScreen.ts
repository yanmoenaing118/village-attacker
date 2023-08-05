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
  constructor(w: number, h: number) {
    super();
    // const level = new Level(w, h, CELL_SIZE);
    // const player = new Player(PlayScreen.constrols, level);
    // target.pos.x = CELL_SIZE * 4;
    // target.pos.y = CELL_SIZE * 8;
    // const ghost = new Ghost(level, target);

    // this.add(level);
    // this.add(player);
    // this.add(target);
    // this.add(ghost);

    const speed = 320;
    const player = new Rect(CELL_SIZE, CELL_SIZE, {
      fill: "rgba(0,0,0,0.3)",
    });

    const target = new Rect(CELL_SIZE, CELL_SIZE, {
      fill: "rgba(0,225,0,0.3)",
    });

    let waypoints: Vec2[] = [
      { x: CELL_SIZE * 0, y: CELL_SIZE * 0 },
      { x: CELL_SIZE * 1, y: CELL_SIZE * 0 },
      { x: CELL_SIZE * 2, y: CELL_SIZE * 0 },
      { x: CELL_SIZE * 3, y: CELL_SIZE * 0 },
      { x: CELL_SIZE * 3, y: CELL_SIZE * 1 },
      { x: CELL_SIZE * 3, y: CELL_SIZE * 2 },
    ];
    let waypoint = waypoints.shift();

    target.pos.x = w / 2 - CELL_SIZE;
    target.pos.y = h / 2 - CELL_SIZE;

    player.update = (dt: number, t: number) => {
      const dx = waypoint.x - player.pos.x;
      const dy = waypoint.y - player.pos.y;
      let step = dt * speed;

      let isXClose = Math.abs(dx) <= step;
      let isYClose = Math.abs(dy) <= step;

      if (isXClose && isYClose) {
        if (waypoints.length > 0) {
          waypoint = waypoints.shift();
        }
      }

      if (isXClose) {
        // console.log("X is close");
      } else {
        // player.pos.x += step * (dx > 0 ? 1 : -1);
      }

      if (isYClose) {
        // console.log("Y is close");
      } else {
        // player.pos.y += step * (dy > 0 ? 1 : -1);
      }

      // player.pos.x += step;
      player.pos.x = clamp(player.pos.x, 0, w - CELL_SIZE);
      player.pos.y = clamp(player.pos.y, 0, h - CELL_SIZE);
    };

    const debugGrid = new DebugGrid(w, h, CELL_SIZE);
    const grid: number[][] = [];

    for (let y = 0; y < debugGrid.rows; y++) {
      grid[y] = [];
      for (let x = 0; x < debugGrid.cols; x++) {
        grid[y][x] = 0;
      }
    }

    easystar.setGrid(grid);
    easystar.setAcceptableTiles([0]);

    easystar.findPath(
      Math.floor(player.pos.x / CELL_SIZE),
      Math.floor(player.pos.y / CELL_SIZE),
      Math.floor(target.pos.x / CELL_SIZE),
      Math.floor(target.pos.y / CELL_SIZE),
      (p) => {
        console.log('the path ', p);
        if(p) {

          
        }
      }
    );

    easystar.calculate();

    this.add(debugGrid);
    this.add(player);
    this.add(target);
  }
}
