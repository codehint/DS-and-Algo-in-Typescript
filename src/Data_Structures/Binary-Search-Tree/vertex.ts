import { VERTEX } from "./interfaces";

export class Vertex implements VERTEX {
    public value: number;
    public left: VERTEX | null = null;
    public right: VERTEX | null = null;

    constructor(value: number) {
        this.value = value;
    }
}
