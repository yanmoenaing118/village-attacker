import { MAX_DELTA } from "./constants";
import { update } from "./func-types";

export default class Game {
  run(updateScene: update) {

    let dt = 0;
    let time = 0;
    
    const loop = (ellapsedTime: number) => {
        dt = Math.min(MAX_DELTA, (ellapsedTime - time) * 0.001);
        time = ellapsedTime;
        updateScene(dt, time * 0.001);
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

  }
}
