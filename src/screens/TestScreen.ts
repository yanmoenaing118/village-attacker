import { game } from "..";
import Container from "../Container";
import Entity from "../Entity";
import Rect from "../Rect";

export default class TestScreen extends Container<Entity> {
    constructor() {
        super();
        const rect = new Rect(64,64);
        rect.pos.x = 30;
        rect.pos.y = 30;
        this.add(rect);
    }

}