import { NODE } from "./interfaces";

export class Node implements NODE {
    public value: number;
    public next: NODE | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
