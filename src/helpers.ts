import Entity from "./Entity";
import { Bounds } from "./interfaces";


export function randf(min?: number, max?: number): number {
  if (max == undefined) {
    max = min || 1;
    min = 0;
  }
  if (typeof min === "number") {
    return Math.random() * (max - min) + min;
  }
  return Math.random();
}

export function randOneIn(max = 2) {
  return rand(0, max) == 0;
}

export function randOneFrom<T>(array: Array<T>): T {
  return array[rand(array.length)];
}


// return rand integer
export function rand(min?: number, max?: number) {
  return Math.floor(randf(min, max));
}


export const bounds = (e: Entity): Bounds => {
  return {
    x: e.pos.x + e.hitBox.x,
    y: e.pos.y + e.hitBox.y,
    w: e.hitBox.w - .9,
    h: e.hitBox.h - .9,
  };
};

export const hit = (e1: Entity, e2: Entity) => {
  const b1 = bounds(e1);
  const b2 = bounds(e2);

  return (
    b1.x <= b2.x + b2.w &&
    b1.x + b1.w >= b2.x &&
    b1.y <= b2.y + b2.h &&
    b1.y + b1.h >= b2.y
  );
};
