import "./assets/style.css";
import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Game from "./Game";
import Texture from "./Texture";
import TileSprite from "./TileSprite";
import KeyboardControls from "./KeyControls";
import Level from "./Level";
import { clamp } from "./math";
import dungeonImage from "./assets/dungeon.png";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";
import Player from "./Player";
import Rect from "./Rect";
const cellSize = CELL_SIZE;
let w = WIDTH;
let h = HEIGHT;
const controls = new KeyboardControls();
const game = new Game(w, h);
let { scene } = game;

const container = new Container();

scene.add(container);

const level = new Level(w, h, cellSize);

const player = new Player(controls, level);

function update(dt: number, t: number) {}

game.load().then(() => {
  const rect = new Rect(64, 64, {
    fill: 'rgba(225,225,225,0.3)'
  });
  // w = game.w;
  // h = game.h;

  rect.styles.fill = 'pink';
  rect.pos.x = CELL_SIZE * 4;
  rect.pos.y = CELL_SIZE * 4;

  container.add(level);

  // container.add(new DebugGrid(w, h, cellSize));

  container.add(player);
  container.add(rect)

  game.run(update);
});
