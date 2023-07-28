import Container from "./Container";
import Texture from "./Texture";
import TileSprite from "./TileSprite";
import { Frame } from "./interfaces";
export default class TileMap extends Container<TileSprite> {
  mapW: number;
  mapH: number;
  tileSize: number;
  constructor(
    texture: Texture,
    frames: Frame[],
    mapW: number,
    mapH: number,
    tileSize: number
  ) {
    super();
    this.mapW = mapW;
    this.mapH = mapH;
    this.tileSize = tileSize;

    for(let y = 0; y < mapH; y++) {
        for(let x = 0; x < mapW; x++) {
            const index = y * mapW + x;
            const tile = new TileSprite(texture, tileSize, tileSize, frames[index]);
            tile.pos.x = x * tileSize;
            tile.pos.y = y * tileSize;
            this.children.push(tile);
        }
    }
  }
}
