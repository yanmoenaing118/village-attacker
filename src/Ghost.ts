import Level from "./Level";
import Player from "./Player";
import Rect from "./Rect";
import { CELL_SIZE } from "./constants";

export class Ghost extends Rect {

  constructor(public map: Level, public player: Player) {
    super(CELL_SIZE, CELL_SIZE, {
      fill: "black",
    });
    this.pos.x = 4 * CELL_SIZE;
    this.pos.y = 1 * CELL_SIZE;
  }

  update(dt: number, t: number): void {

    const start = this.map.pixelToMapPosition(this.pos);
    const end = this.map.pixelToMapPosition(this.player.pos);

    this.map.path.findPath(start.x, start.y, end.x, end.y, (p) => {
        console.log(JSON.stringify(p))
    });
    
    this.map.path.calculate();
  }
}
