export default class MouseControl {
  x = 0;
  y = 0;

  constructor(view: HTMLCanvasElement) {
    view.addEventListener("click", (e) => {
      this.x = e.pageX;
      this.y = e.pageY;
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
}
