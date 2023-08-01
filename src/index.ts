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
const cellSize = 64;
let w = 64 * 15;
let h = 64 * 10;
const controls = new KeyboardControls();
const game = new Game(w, h);
let { scene } = game;

const container = new Container();
const texture = new Texture(dungeonImage);

console.log(dungeonImage);

scene.add(container);

const p1 = new TileSprite(texture, cellSize, cellSize, { x: 2, y: 12 });

p1.update = (dt: number, t: number) => {
  p1.pos.x += controls.x * 640 * dt;
  p1.pos.y += controls.y * 640 * dt;

  p1.pos.x = clamp(p1.pos.x, 0, w - cellSize);
  p1.pos.y = clamp(p1.pos.y, 0, h - cellSize);
};

function update(dt: number, t: number) {}

game.load().then(() => {
  // w = game.w;
  // h = game.h;

  const level = new Level(w, h, cellSize);

  container.add(level);

  container.add(new DebugGrid(w, h, cellSize));
  container.add(p1);

  game.run(update);
});
