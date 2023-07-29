import Texture from "./Texture";
import TileMap from "./TileMap";
import { Frame } from "./interfaces";

const tiles: Frame[] = [
  { x: 1, y: 4, solid: false },// walkable dark path
  { x: 10, y: 8, solid: true },
];

export default class Level extends TileMap {
  constructor(w: number, h: number, cellSize: number) {
    const texture = new Texture(
      "https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/dungeon.png"
    );

    const mapW = Math.ceil(w / cellSize);
    const mapH = Math.ceil(h / cellSize);
    const frames: Frame[] = [];

    for (let y = 0; y < mapH; y++) {
      for (let x = 0; x < mapW; x++) {
        frames[y * mapW + x] = tiles[0];

        if (x % 2 || y % 2) continue;

        frames[y * mapW + x] = tiles[1];
      }
    }

    super(texture, frames, mapW, mapH, cellSize);
    this.w = w;
    this.h = h;
  }
}
