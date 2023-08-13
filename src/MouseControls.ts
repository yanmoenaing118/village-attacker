export default class MouseControl {
  
  x = 0;
  y = 0;

  pressed: boolean = false;
  released: boolean = false;
  move: boolean = false;
  isDown: boolean = false;

  constructor(view: HTMLCanvasElement) {
    
    view.addEventListener("mousedown", (e) => {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.pressed = true;
      this.isDown = true;
    });

    view.addEventListener("mouseup", (e) => {
      this.x = 0;
      this.y = 0;
      this.released = true;
      this.isDown = false;
    });

    view.addEventListener("mousemove", (e) => {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.move = true;
    });
  }

  update() {
    this.released = false;
    this.move = false;
    this.pressed = false;
  }
}

