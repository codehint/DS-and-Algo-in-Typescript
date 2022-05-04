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

    /**
     * Finds and returns the node by given value, if found,
     * otherwise null;
     * @param { number } value
     * @returns { Node | null }
     */
    public findNodeByValue(value: number): Node | null {
        if (!this.head) return null;
        let nodeToReturn = null;
        let currentNode: NODE | null = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                nodeToReturn = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }

        if (!nodeToReturn) console.log("Value not found in the list.");

        return nodeToReturn;
    }

    /**
     * Deletes the node by provided value from the list.
     * @param { number } value
     * @returns { void }
     */
    public deleteNodeByValue(value: number): void {
        if (!this.head) return;
        let previousNode = null;
        let nodeToDelete = null;
        let currentNode: NODE | null = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                nodeToDelete = currentNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (!nodeToDelete) {
            console.log("Value not found in the list");
            return;
        }

        this.deleteNode(previousNode, nodeToDelete);
    }

    private deleteNode(previousNode: Node | null, nodeToDelete: Node): void {
        // 'previousNode' will be 'null' if user wants to delete the
        // very first node.
        if (!previousNode) {
            this.head = nodeToDelete.next;
            return;
        }
        previousNode.next = nodeToDelete.next;
    }
}
