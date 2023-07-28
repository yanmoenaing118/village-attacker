import Container from "./Container";
import Entity from "./Entity";
import Sprite from "./Sprite";
import TileSprite from "./TileSprite";

export default class Renderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;

  constructor(width: number, height: number) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;

    this.w = canvas.width;
    this.h = canvas.height;

    this.canvas = canvas;
    this.ctx = ctx;

    document.body.appendChild(this.canvas);
  }

  render(container: Container<Entity>) {
    const { ctx } = this;
    container.children.forEach((child) => {
      const { pos, w, h } = child;
      ctx.save();

      ctx.translate(pos.x, pos.y);

      if (child instanceof TileSprite) {
        const { frame } = child;
        ctx.drawImage(
          child.texture.img,
          frame.x * w,
          frame.y * h,
          w,
          h,
          0,
          0,
          w,
          h
        );
      } else if (child instanceof Sprite) {
        ctx.drawImage(child.texture.img, 0, 0, w, h);
      }

      if (child instanceof Container) {
        this.render(child);
      }

      ctx.restore();
    });
  }
}
