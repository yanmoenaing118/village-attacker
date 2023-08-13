import Game from "./Game";
import MouseControl from "./MouseControls";
import STATE from "./STATE";
import "./assets/style.css";
import { CELL_SIZE, HEIGHT, WIDTH } from "./constants";
import GameOverScreen from "./screens/GameOverScreen";
import PlayScreen from "./screens/PlayScreen";
import StartScreen from "./screens/StartScreen";

let w = WIDTH;
let h = HEIGHT;

export const game = new Game(w, h);
export let mouseControl: MouseControl;
// const startScreen = new StartScreen();


function onPlay() {
  game.scene = new PlayScreen(game.w, game.h);
  game.run();
}

game.load().then((g) => {
  // mouseControl = new MouseControl(game.renderer.canvas);
  // game.scene = new PlayScreen(game.w,game.h);
  // game.scene = new PlayScreen(w, h);
  // game.scene = new GameOverScreen(w, h);
  console.log('hello')
  game.scene = new StartScreen(onPlay);
  game.run();
});
