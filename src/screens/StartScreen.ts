import Container from "../Container";
import Entity from "../Entity";
import LevelSelector from "../LevelSelector";
import Rect from "../Rect";
import Text from "../Text";

export default class StartScreen extends Container<Entity> {
  bgRect: Rect;
  startText: Text;
  constructor(w: number, h: number) {
    super();
    this.bgRect = new Rect(w, h);
    this.startText = new Text("Race between Robot and The Human", {
      fill: "white",
      stroke: "transparent",
      font: "52px monospace",
    });

    this.startText.pos.x = w / 2 - (w / 2) * 0.6;
    this.startText.pos.y = h / 2;

    
    this.add(this.bgRect);
    this.add(this.startText);
    this.add(new LevelSelector())

    console.log(this);
  }
}
