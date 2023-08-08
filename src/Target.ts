import Rect from "./Rect";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";

export default class Target extends Rect {
  constructor(w: number, h: number) {
    super(w, h, {
      fill: "rgba(255,0,0,0.5)",
    });
    this.pos.x = WIDTH - CELL_SIZE * 2;
    this.pos.y = CELL_SIZE * 10;
  }
}
