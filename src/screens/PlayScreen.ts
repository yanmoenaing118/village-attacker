import Container from "../Container";
import Entity from "../Entity";
import  BotPlayer from "../entities/BotPlayer";
import KeyboardControls from "../KeyControls";
import Level from "../entities/Level";
import Player from "../entities/Player";
import Rect from "../Rect";
import { CELL_SIZE } from "../constants";
import Target from "../Target";

export default class PlayScreen extends Container<Entity> {
  static controls: KeyboardControls = new KeyboardControls();
  level: Level;
  target: Target;
  bot: BotPlayer;
  player: Player;

  constructor(w: number, h: number) {
    super();
    const level = this.level = new Level(w, h, CELL_SIZE);
    const target = this.target = new Target(CELL_SIZE, CELL_SIZE, level.mapW, level.mapH);
    const bot = this.bot = new BotPlayer(level, target );
    const player = this.player = new Player(PlayScreen.controls, level);


    this.add(level);
    this.add(bot);
    this.add(target)
    this.add(player);
  }
}
