import Texture from "./Texture";
import TileMap from "./TileMap";
import { Frame } from "./interfaces";
import { textures } from "./textures";

const tiles: Frame[] = [
  { x: 1, y: 11, solid: false }, // walkable dark path
  { x: 10, y: 8, solid: true },
];

const solids = [2, 8, 22, 23, 48, 80, 90, 117, 118, 123, 81];

export default class Level extends TileMap {
  constructor(w: number, h: number, cellSize: number) {
    const mapW = Math.ceil(w / cellSize);
    const mapH = Math.ceil(h / cellSize);
    const frames: Frame[] = [];

    for (let y = 0; y < mapH; y++) {
      for (let x = 0; x < mapW; x++) {
        const index = y * mapW + x;
        frames[index] = tiles[0];

        if (x == 0 || y == 0 || x == mapW - 1 || y == mapH - 1) {
          frames[index] = tiles[1];
        }

        if (solids.includes(index)) {
          frames[index] = tiles[1];
        }

        // frames[y * mapW + x] = tiles[1];
      }
    }

    super(textures.dungeon, frames, mapW, mapH, cellSize);
    this.w = w;
    this.h = h;
  }
}
