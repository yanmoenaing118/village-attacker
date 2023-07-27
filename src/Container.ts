import Entity from "./Entity";

export default class Container<T extends Entity> extends Entity {
  children: T[];

  add(child: T): T {
    this.children.push(child);
    return child;
  }

  
}
