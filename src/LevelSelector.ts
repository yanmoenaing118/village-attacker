import Container from "./Container";
import Entity from "./Entity";

export default class LevelSelector extends Container<Entity> {
  gap = 20;
  constructor() {
    super();
    this.w = 320;
    this.h = 320;
  }
}
