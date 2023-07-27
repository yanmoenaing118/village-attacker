import Container from "./Container";
import Entity from "./Entity";

export default class Scene extends Container<Entity> {
  update(dt: number, t: number): void {
    this.children.forEach((child) => {
      if (child.update) {
        child.update(dt, t);
      }
    });
  }
}
