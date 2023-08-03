import "./assets/style.css";
import Game from "./Game";
import { HEIGHT, WIDTH } from "./constants";
import PlayScreen from "./screens/PlayScreen";

let w = WIDTH;
let h = HEIGHT;

const game = new Game(w, h);

game.load().then(() => {
  game.scene = new PlayScreen(game.w, game.h);
  game.run();
});
