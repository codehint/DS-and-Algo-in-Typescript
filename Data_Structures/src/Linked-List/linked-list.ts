import { NODE } from "./interfaces";
import { Node } from "./node";

/**
 * Encapsulates the logic to work with linked list data structure.
 */
export class LinkedList {
    private head: NODE | null = null;
    constructor(headValue: number | null = null) {
        // Zero must be considered as a valid node value.
        if (headValue || headValue === 0) {
            this.addNode(headValue);
        }
    }

    public printList(): void {
        if (!this.head) console.log("Empty");
        let currentNode = this.head;
        const values = [];
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values.join(" -> "));
    }

    /**
     * Adds a new node with provided value at the end
     * of the list.
     * @param { number } value
     * @returns { void }
     */
    public addNode(value: number): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while (!!currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
}
