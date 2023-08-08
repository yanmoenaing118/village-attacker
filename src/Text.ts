import Entity from "./Entity";
import { Styles } from "./interfaces";

export default class Text extends Entity {
  text: string;
  style: Styles;

  constructor(
    text: string,
    style: Styles = {
      fill: "black",
      stroke: "transparent",
      font: "16px arial"
    }
  ) {
    super();
    this.text = text;
    this.style = style;
  }
}
