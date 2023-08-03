import Texture from "./Texture";
import TileMap from "./TileMap";
import { randOneFrom, randOneIn } from "./helpers";
import { Frame } from "./interfaces";
import { textures } from "./textures";

const tiles: Frame[] = [
  { x: 1, y: 2, solid: false }, // walkable dark path
  { x: 13, y: 9, solid: true },
];

export default class Level extends TileMap {
  constructor(w: number, h: number, cellSize: number) {
    const mapW = Math.ceil(w / cellSize);
    const mapH = Math.ceil(h / cellSize);
    const frames: Frame[] = [];

    const solids = new Array(20)
      .fill(0)
      .map((i, _) => Math.round(Math.random() * (mapH * mapW)));

    for (let y = 0; y < mapH; y++) {
      for (let x = 0; x < mapW; x++) {
        const index = y * mapW + x;
        frames[index] = tiles[0];

        if(x == 1 && y > 1 ) continue;

        if ( x == 0 || y == 0 || x == mapW - 1 || y == mapH - 1) {
          frames[index] = tiles[1];
          continue;
        }

        if (y % 2 || x % 2 || randOneIn(4)) {
          continue;
        }

        frames[index] = tiles[1];

        const [xo, yo] = randOneFrom([
          [0, -1],
          [0, 1],
          [1, 0],
          [-1, 0],
        ]);
        frames[(y + yo) * mapW + (x + xo)] = tiles[1];
       
      }
    }

    super(textures.village, frames, mapW, mapH, cellSize);
    this.w = w;
    this.h = h;
  }
}


