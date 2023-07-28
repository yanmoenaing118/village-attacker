import "./style.css";
import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Game from "./Game";
import Sprite from "./Sprite";
import Texture from "./Texture";
import TileSprite from "./TileSprite";
const cellSize = 64;
let w = cellSize * 9;
let h = cellSize * 6;
const game = new Game(w, h);
let { scene } = game;

const container = new Container();
const texture = new Texture(
  "https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/spider10.png"
);
const tileSprite = new TileSprite(texture, cellSize, cellSize, { x: 0, y: 0 });
const sprite = new Sprite(texture);

container.add(tileSprite);
scene.add(container);
scene.add(tileSprite);
scene.add(sprite);

function update(dt: number, t: number) {
  console.log(dt, t);
}

game.load().then(() => {
  w = game.w;
  h = game.h;
  container.add(new DebugGrid(w, h, 64));
  game.run(update);
});
