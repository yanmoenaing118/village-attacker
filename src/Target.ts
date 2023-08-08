import Rect from "./Rect";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";

export default class Target extends Rect {
  constructor(w: number, h: number, mapW: number, mapH: number) {
    super(w, h, {
      fill: "rgba(255,0,0,0.5)",
    });
    this.pos.x = CELL_SIZE * ( mapW - 2 );
    this.pos.y = CELL_SIZE * ( Math.floor(Math.random() * mapH) );
  }
}
