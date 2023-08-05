import Rect from "./Rect";
import { HEIGHT, WIDTH } from "./constants";

export default class Target extends Rect {
  constructor(w: number, h: number) {
    super(w, h, {
      fill: "rgba(255,0,0,0.5)",
    });
    this.pos.x = WIDTH - w * 2;
    this.pos.y = HEIGHT - h * 2;
  }
}
