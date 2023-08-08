import Game from "./Game";
import "./assets/style.css";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";
import PlayScreen from "./screens/PlayScreen";
import StartScreen from "./screens/StartScreen";

let w = WIDTH;
let h = HEIGHT;

const game = new Game(w,h);

game.load().then((g) => {
  // game.scene = new PlayScreen(game.w,game.h);
  game.scene = new PlayScreen(w, h);
  // game.scene = new StartScreen(game.w,game.h);
  game.run();
})
