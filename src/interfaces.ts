export interface Vec2 {
    x: number,
    y: number
}

export interface Frame {
    x: number,
    y: number,
    [key: string]: any
}

export interface Bounds {
    x: number,
    y: number,
    w: number,
    h: number
}

export interface Styles {
    fill: string,
    stroke: string,
    font: string,
    strokeWidth: number
}