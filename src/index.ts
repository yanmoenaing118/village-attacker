import Game from "./Game";
import Sprite from "./Sprite";
import Texture from "./Texture";

const game = new Game(1200, 900);
const { scene } = game;

scene.add(new Sprite(new Texture('https://upload.wikimedia.org/wikipedia/commons/4/44/210604_%EA%B3%A0%EC%9C%A4%EC%A0%95%282%29.jpg')))

game.run((dt: number, t: number) => {
  
})