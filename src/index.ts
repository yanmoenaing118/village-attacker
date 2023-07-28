import "./style.css";
import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Game from "./Game";
import Texture from "./Texture";
import TileSprite from "./TileSprite";
import KeyboardControls from "./KeyControls";
const cellSize = 64;
let w = 680;
let h = 480;
const controls  = new KeyboardControls();
const game = new Game(w, h);
let { scene } = game;

const container = new Container();
const texture = new Texture(
  "https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/dungeon.png"
);

scene.add(container);

const player = new TileSprite(texture, cellSize, cellSize, { x: 0, y: 0});

function update(dt: number, t: number) {
  player.pos.x += controls.x * 320 * dt;
  player.pos.y += controls.y * 320 * dt;
}

game.load().then(() => {
  w = game.w;
  h = game.h;

  container.add(new DebugGrid(w, h, cellSize));
  container.add(player);
  game.run(update);
});
