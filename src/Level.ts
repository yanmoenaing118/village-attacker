import Texture from "./Texture";
import TileMap from "./TileMap";
import { Frame } from "./interfaces";
import { textures } from "./textures";

const tiles: Frame[] = [
  { x: 1, y: 11, solid: false }, // walkable dark path
  { x: 10, y: 7, solid: true },
];

const solids = new Array(20).fill(0).map( (i, _)=> Math.round(Math.random() * 150));

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
