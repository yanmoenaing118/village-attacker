import "./style.css";
import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Game from "./Game";
import Texture from "./Texture";
import TileMap from "./TileMap";
import { Frame } from "./interfaces";
const cellSize = 64;
let w = 680;
let h = 480;
const game = new Game(w, h);
let { scene } = game;

const container = new Container();
const texture = new Texture(
  "https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/dungeon.png"
);

scene.add(container);

function update(dt: number, t: number) {
  //   console.log(dt, t);
}

game.load().then(() => {
  w = game.w;
  h = game.h;

  const frames: Frame[] = [];

  for (let y = 0; y < h / cellSize; y++) {
    for (let x = 0; x < w / cellSize; x++) {
      const index = y * (w / cellSize) + x;
      frames[index] = { x: Math.round(Math.random() * (w / cellSize)), y: Math.round(Math.random() * (w / cellSize)) };
    }
  }
  const map = new TileMap(
    texture,
    frames,
    w / cellSize,
    h / cellSize,
    cellSize
  );

  console.log(frames);
  console.log(map);
  container.add(map);
  container.add(new DebugGrid(w, h, cellSize));
  game.run(update);
});
