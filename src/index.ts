import Container from "./Container";
import Game from "./Game";
import Sprite from "./Sprite";
import Texture from "./Texture";
import TileSprite from "./TileSprite";

const game = new Game(1200, 900);
const { scene } = game;
const container = new Container();
const texture = new Texture("https://raw.githubusercontent.com/yanmoenaing118/canvas/main/public/spider10.png");
const tileSprite = new TileSprite(texture,64, 64, { x: 0, y: 0});

texture.img.onload = () => {
    container.add(tileSprite);
    scene.add(container);
}
game.run((dt: number, t: number) => {
  
})