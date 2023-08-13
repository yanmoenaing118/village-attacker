export function select(selector: string) {
    return document.querySelector(selector);
}

export function selectAll(selector: string) {
    return document.querySelectorAll(selector);
}

export function setAttribute(el: HTMLElement, name: string, value: string) {
    el.setAttribute(name, value);
    return el;
}

export function setStyles(
  el: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
) {
  for (let key in styles) {
    el.style[key] = styles[key];
  }
  return el;
}
