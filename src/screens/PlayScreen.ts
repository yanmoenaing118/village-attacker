import Container from "../Container";
import Entity from "../Entity";
import KeyboardControls from "../KeyControls";
import Level from "../Level";
import Player from "../Player";
import { CELL_SIZE } from "../constants";

export default class PlayScreen extends Container<Entity> {
  static constrols: KeyboardControls = new KeyboardControls();
  constructor(w: number, h: number) {
    super();
    const level = new Level(w, h, CELL_SIZE);
    const player = new Player(PlayScreen.constrols, level);

    this.add(level);
    this.add(player);
  }
}
