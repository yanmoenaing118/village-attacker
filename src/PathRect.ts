import { game } from ".";
import Entity from "./Entity";
import { Styles, Vec2 } from "./interfaces";
export default class PathRect extends Entity {
  path: Path2D;
  clicked: boolean = false;
  constructor(
    w: number,
    h: number,
    public styles?: Partial<Styles>,
    pos?: Vec2
  ) {
    super();
    this.w = w;
    this.h = h;
    this.pos = pos || { x: 0, y: 0 };
    this.path = new Path2D();
    this.path.rect(this.pos.x, this.pos.y, w, h);
    console.log(this.pos.x + this.w, this.pos.y + this.h);
    console.log(this.path);
  }

  update(dt: number, t: number): void {
    this.clicked = game.ctx.isPointInPath(
      this.path,
      game.mousePos.x,
      game.mousePos.y
    );

    if (this.clicked) {
      console.log("selected");
    } else {
      console.log("un selected");
    }
  }
}
