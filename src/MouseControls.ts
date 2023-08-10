export default class MouseControl {
  x = 0;
  y = 0;

  clicked: boolean = false;
  hovered: boolean = false;
  constructor(view: HTMLCanvasElement) {
    view.addEventListener("click", (e) => {
      this.x = e.pageX;
      this.y = e.pageY;
      this.clicked = !this.clicked;
    });
    view.addEventListener("mousedown", (e) => {
      this.x = e.offsetX;
      this.y = e.offsetY;
    });

    view.addEventListener("mouseup", (e) => {
      this.x = 0;
      this.y = 0;
    });

    view.addEventListener("mousemove", (e) => {
      this.x = e.offsetX;
      this.y = e.offsetY;
    });
  }

  update() {
    // this.clicked = false;
    // this.x = 0;
    // this.y = 0;
  }
}
