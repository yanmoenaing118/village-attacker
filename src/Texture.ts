export default class Texture {
  img: HTMLImageElement;
  w: number;
  h: number;
  constructor(url: string, w?: number, h?: number) {
    this.img = new Image();
    this.img.src = url;
    
    this.w = w || this.img.naturalWidth;
    this.h = h || this.img.naturalHeight;

    this.img.width = this.w;
    this.img.height = this.h;
  }
}
