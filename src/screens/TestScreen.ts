import { game } from "..";
import Container from "../Container";
import Entity from "../Entity";
import PathRect from "../PathRect";
import Rect from "../Rect";

export default class TestScreen extends Container<Entity> {
  constructor() {
    super();
    const rectPath = new PathRect(
      64,
      64,
      {
        fill: "red",
        stroke: "black",
        strokeWidth: 3,
      },
      {
        x: 64,
        y: 64,
      }
    );
    this.add(rectPath);
  }
}
