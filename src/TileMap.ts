import Container from "./Container";
import Texture from "./Texture";
import TileSprite from "./TileSprite";
import { Bounds, Frame, Vec2 } from "./interfaces";
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

    for (let y = 0; y < mapH; y++) {
      for (let x = 0; x < mapW; x++) {
        const index = y * mapW + x;
        const tile = new TileSprite(texture, tileSize, tileSize, frames[index]);
        tile.pos.x = x * tileSize;
        tile.pos.y = y * tileSize;
        tile.w = tileSize;
        tile.h = tileSize;
        this.children.push(tile);
      }
    }
  }

  pixelToMapPosition(pos: Vec2) {
    return {
      x: Math.floor(pos.x / this.tileSize),
      y: Math.floor(pos.y / this.tileSize),
    };
  }

  mapToPixelPosition(pos: Vec2) {
    return {
      x: pos.x * this.tileSize,
      y: pos.y * this.tileSize,
    };
  }

  tileAtMapPosition(pos: Vec2) {
    return this.children[pos.y * this.mapW + pos.x];
  }

  tileAtPixelPosition(pos: Vec2) {
    return this.tileAtMapPosition(this.pixelToMapPosition(pos));
  }

  getTilesAtCorners(bounds: Bounds) {
    return [
      [bounds.x, bounds.y], // TL
      [bounds.x + bounds.w, bounds.y], // TR
      [bounds.x, bounds.y + bounds.h], // BL
      [bounds.x + bounds.w, bounds.y + bounds.h], // BR
    ].map(([x, y]) => this.tileAtPixelPosition({ x, y }));
  }
}
