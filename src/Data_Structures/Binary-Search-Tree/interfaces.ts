export interface VERTEX {
    value: number;
    left: VERTEX | null;
    right: VERTEX | null;
}

export enum INSERTION_STRATEGY {
    Recursive = "recursive",
    Iterative = "iterative",
}
