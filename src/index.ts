import Container from "./Container";
import DebugGrid from "./DebugGrid";
import Game from "./Game";
import Sprite from "./Sprite";
import Texture from "./Texture";
import TileSprite from "./TileSprite";
const cellSize = 64;
const w = cellSize * 9;
const h = cellSize * 6;
const game = new Game(w, h);
let { scene } = game;
const container = new Container();
const texture = new Texture(
  "https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/spider10.png"
);
const tileSprite = new TileSprite(texture, cellSize, cellSize, { x: 0, y: 0 });
const sprite = new Sprite(texture);

container.add(new DebugGrid(w, h, 64));
container.add(tileSprite);
scene.add(container)
scene.add(tileSprite);

function update(dt: number, t: number) {
  console.log(dt, t);
}

game.load().then(() => {
  game.run(update);
});
