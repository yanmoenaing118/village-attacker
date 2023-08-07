import Game from "./Game";
import "./assets/style.css";
import { HEIGHT, WIDTH } from "./constants";
import PlayScreen from "./screens/PlayScreen";

let w = WIDTH;
let h = HEIGHT;

const game = new Game(w,h);

game.load().then((g) => {
  game.scene = new PlayScreen(game.w,game.h);
  game.run();
})
