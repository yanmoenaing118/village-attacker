import Container from "../Container";
import Entity from "../Entity";
import { Ghost } from "../Ghost";
import KeyboardControls from "../KeyControls";
import Level from "../Level";
import Player from "../Player";
import Rect from "../Rect";
import { CELL_SIZE } from "../constants";

export default class PlayScreen extends Container<Entity> {
  static constrols: KeyboardControls = new KeyboardControls();
  constructor(w: number, h: number) {
    super();
    const level = new Level(w, h, CELL_SIZE);
    const player = new Player(PlayScreen.constrols, level);
    const target = new Rect(CELL_SIZE, CELL_SIZE);
    target.pos.x = CELL_SIZE * 4;
    target.pos.y = CELL_SIZE * 8;
    const ghost = new Ghost(level, target);


    this.add(level);
    this.add(player);
    this.add(target);
    this.add(ghost);

  }
}
