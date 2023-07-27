import Container from "./Container";
import Entity from "./Entity";

export default class Renderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;

  constructor(width: number, height: number) {
    this.w = width;
    this.h = height;
  }

  render(container: Container<Entity>) {
    const { ctx } = this;
    container.children.forEach((child) => {
      ctx.save();

      if (child instanceof Container) {
        this.render(child);
      }

      ctx.restore();
    });
  }
}
