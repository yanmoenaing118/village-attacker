import Container from "./Container";
import DebugGrid from "./DebugGrid";
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
    ctx.clearRect(0,0,this.w,this.h);

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
      } else if (child instanceof DebugGrid ) {
        this.renderDebugGrid(child);
      }

      if (child instanceof Container) {
        this.render(child);
      }

      ctx.restore();
    });

  }

  renderDebugGrid(grid: DebugGrid) {
    const { rows, cols } = grid;

    for(let x = 0 ; x < cols + 1; x++ ) {
        this.drawPath(x * grid.cellSize, 0, 0, grid.h);
    }

    for(let y = 0 ; y < rows + 1; y++) {
        this.drawPath(0, y * grid.cellSize, grid.w, 0);
    }

  }

  drawPath(x: number, y: number, w: number, h: number) {
    const { ctx } = this;
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, 0);
    ctx.lineTo(w,h);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    

  }
}
