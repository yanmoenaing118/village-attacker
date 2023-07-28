import Container from "./Container";
import Entity from "./Entity";
import Renderer from "./Renderer";
import { MAX_DELTA } from "./constants";
import { update } from "./func-types";

export default class Game {
  renderer: Renderer;
  scene: Container<Entity>;
  booted = false;
  w: number;
  h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.scene = new Container<Entity>();
  }

  load() {
    const { w, h } = this;
    return new Promise((resolve, reject) => {
      window.addEventListener("DOMContentLoaded", () => {
        this.renderer = new Renderer(w, h);
        resolve(this);
      });
    });
  }

  run(updateScene: update) {
    let dt = 0;
    let time = 0;
    const { scene, renderer } = this;

    const loop = (ellapsedTime: number) => {
      dt = Math.min(MAX_DELTA, (ellapsedTime - time) * 0.001);
      time = ellapsedTime;
      updateScene(dt, time * 0.001);
      scene.update(dt, time * 0.001);
      renderer.render(scene);
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }
}
