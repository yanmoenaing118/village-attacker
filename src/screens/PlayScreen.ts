import Container from "../Container";
import Entity from "../Entity";
import  BotPlayer from "../BotPlayer";
import KeyboardControls from "../KeyControls";
import Level from "../Level";
import Player from "../Player";
import Rect from "../Rect";
import { CELL_SIZE } from "../constants";
import Target from "../Target";

export default class PlayScreen extends Container<Entity> {
  static constrols: KeyboardControls = new KeyboardControls();
  level: Level;
  target: Target;
  bot: BotPlayer;

  constructor(w: number, h: number) {
    super();
    const level = this.level = new Level(w, h, CELL_SIZE);
    const target = this.target = new Target(CELL_SIZE, CELL_SIZE);
    const bot = this.bot = new BotPlayer(level, target );


    this.add(level);
    this.add(bot);
    this.add(target)
  }
}
