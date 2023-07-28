import "./style.css";
import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Game from "./Game";
import Texture from "./Texture";
const cellSize = 128;
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
  console.log(dt, t);
}

game.load().then(() => {
  w = game.w;
  h = game.h;
  container.add(new DebugGrid(w, h, cellSize));
  game.run(update);
});
