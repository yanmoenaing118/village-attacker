import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Entity from "./Entity";
import Rect from "./Rect";
import Sprite from "./Sprite";
import TileSprite from "./TileSprite";

export default class Renderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;

  constructor(width: number, height: number) {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = width;
    canvas.height = height;

    this.w = canvas.width;
    this.h = canvas.height;

    this.canvas = canvas;
    this.ctx = ctx;
    const dpr = window.devicePixelRatio;
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;

    this.ctx.scale(dpr, dpr);
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
  }

  render(container: Container<Entity>) {
    const { ctx } = this;
    ctx.clearRect(0, 0, this.w, this.h);

    container.children.forEach((child) => {
      const { pos, scale, w, h } = child;
      ctx.save();

      ctx.translate(pos.x, pos.y);
      ctx.scale(scale.x, scale.y);

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
        // debugger
      } else if (child instanceof Sprite) {
        ctx.drawImage(child.texture.img, 0, 0, w, h);
      } else if (child instanceof DebugGrid) {
        this.renderDebugGrid(child);
      } else if (child instanceof Rect) {
        ctx.fillStyle = child.styles.fill || "black";
        ctx.fillRect(0, 0, child.w, child.h);
        if (child.styles.stroke) {
          ctx.strokeStyle = child.styles.stroke;
          ctx.strokeRect(0, 0, child.w, child.h);
        }
      }

      if (child.debug) {
        ctx.save();
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.fillRect(
          child.hitBox.x,
          child.hitBox.y,
          child.hitBox.w,
          child.hitBox.h
        );
        ctx.restore();
      }

      if (child instanceof Container) {
        this.render(child);
      }

      ctx.restore();
    });
  }

  renderDebugGrid(grid: DebugGrid) {
    const { rows, cols } = grid;

    for (let x = 0; x < cols + 1; x++) {
      this.drawPath(x * grid.cellSize, 0, 0, grid.h);
    }

    for (let y = 0; y < rows + 1; y++) {
      this.drawPath(0, y * grid.cellSize, grid.w, 0);
    }
  }

  drawPath(x: number, y: number, w: number, h: number) {
    const { ctx } = this;
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, 0);
    ctx.lineTo(w, h);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}
