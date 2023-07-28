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
const { scene } = game;
const container = new Container();
const texture = new Texture("https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/spider10.png");
const tileSprite = new TileSprite(texture,cellSize, cellSize, { x: 0, y: 0});
const sprite = new Sprite(texture);
container.add(new DebugGrid(w, h, cellSize))

texture.img.onload = () => {
    // container.add(tileSprite);
    // container.add(sprite);
}
scene.add(container);

game.run((dt: number, t: number) => {
  
})