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

    this.add(level);
  }
}
