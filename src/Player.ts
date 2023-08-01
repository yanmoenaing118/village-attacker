import KeyboardControls from "./KeyControls";
import Level from "./Level";
import TileSprite from "./TileSprite";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";
import { clamp } from "./math";
import { textures } from "./textures";

export default class Player extends TileSprite {
  constructor(private controls: KeyboardControls, private map: Level) {
    super(textures.dungeon, CELL_SIZE, CELL_SIZE, { x: 2, y: 12 });
    this.pos.x = CELL_SIZE;
    this.pos.y = CELL_SIZE;
  }

  update(dt: number, t: number): void {
    this.pos.x += this.controls.x * 640 * dt;
    this.pos.y += this.controls.y * 640 * dt;

    this.pos.x = clamp(this.pos.x, 0, WIDTH - CELL_SIZE);
    this.pos.y = clamp(this.pos.y, 0, HEIGHT - CELL_SIZE);
  }
}
