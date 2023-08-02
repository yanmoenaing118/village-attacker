import Entity from "./Entity";
import { Styles } from "./interfaces";

export default class Rect extends Entity {
  styles: Partial<Styles>;
  constructor(
    w: number,
    h: number,
    styles: Partial<Styles> = { fill: "black" }
  ) {
    super();
    this.styles = styles;
    this.w = w;
    this.h = h;
  }
}
