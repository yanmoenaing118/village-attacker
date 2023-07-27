export default class Entity {
  w: number;
  h: number;
  pos: Vec2;
  scale: Vec2;
  anchor: Vec2;
  rotation: number;
  pivot: Vec2;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.pos = { x: 0, y: 0 };
    this.scale = { x: 1, y: 1 };
    this.anchor = { x: 0, y: 0 };
    this.rotation = 0;
    this.pivot = { x: 0, y: 0 };
  }

  /**
   * @override 
   */
  update(dt: number, t: number) {}
}