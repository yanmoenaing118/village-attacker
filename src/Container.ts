import Entity from "./Entity";

export default class Container<T extends Entity> extends Entity {
  children: T[];

  add(child: T): T {
    this.children.push(child);
    return child;
  }

  update(dt: number, t: number): void {
      this.children.forEach( child => {
        if(child.update) {
            child.update(dt, t);
        }
      })
  }
}
