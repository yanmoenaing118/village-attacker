import Entity from "./Entity";

export default class DebugGrid extends Entity{
  rows: number;
  cols: number;
  cellSize: number;
  constructor(w: number, h: number, cellSize: number) {
    super();
    this.rows = Math.floor(h / cellSize);
    this.cols = Math.floor(w / cellSize);
    this.cellSize = cellSize;
    this.w = w;
    this.h = h;
  }
}
