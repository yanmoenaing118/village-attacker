import Entity from "./Entity";
import { Bounds } from "./interfaces";

export const bounds = (e: Entity): Bounds => {
  return {
    x: e.pos.x + e.hitBox.x,
    y: e.pos.y + e.hitBox.y,
    w: e.hitBox.w - 1,
    h: e.hitBox.h - 1,
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
