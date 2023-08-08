import Container from "../Container";
import Entity from "../Entity";
import Rect from "../Rect";
import Text from "../Text";

/**
 * Game Over Text
 * Restart Button
 * Home Screen
 *
 * clicking restart -> restart the game
 * clicking home -> startScreen
 */
export default class GameOverScreen extends Container<Entity> {
  gameOverBg: Rect;
  gameOverText: Text;
  constructor(w: number, h: number) {
    super();
    this.w = w;
    this.h = h;
    this.gameOverText = new Text("Game Over", {
      fill: "white",
      stroke: 'white',
      font: '28px monospace'
    });
    this.gameOverText.pos.x = this.w * 0.32;
    this.gameOverText.pos.y = this.h * 0.5;
    this.add(new Rect(w, h));
    this.add(this.gameOverText);
  }
}
