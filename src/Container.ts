import Entity from "./Entity";

export default class Container<T extends Entity> extends Entity {
  children: T[] =[];

  constructor() {
    super();
    this.children = [];
  }

  add(child: T): T {
    this.children.push(child);
    return child;
  }

  update(dt: number, t: number): void {
    this.children = this.children.filter((child) => {
      if (!child.visible) return false;
      if (child.update) {
        child.update(dt, t);
      }
      return true;
    });
  }
}
