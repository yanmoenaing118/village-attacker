import Game from "./Game";
import "./assets/style.css";
import { HEIGHT, WIDTH } from "./constants";
import PlayScreen from "./screens/PlayScreen";

let w = WIDTH;
let h = HEIGHT;

const game = new Game(w,h);

game.load().then(() => {
  game.scene = new PlayScreen(w,h);
  game.run();
})
