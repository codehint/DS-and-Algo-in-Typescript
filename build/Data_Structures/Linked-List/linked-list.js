"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const node_1 = require("./node");
/**
 * Encapsulates the logic to work with linked list data structure.
 */
class LinkedList {
    constructor(headValue = null) {
        this.head = null;
        this._length = 0;
        // Zero must be considered as a valid node value.
        if (headValue || headValue === 0) {
            this.addNode(headValue);
        }
    }
    printList() {
        if (!this.head)
            console.log("Empty");
        let currentNode = this.head;
        const values = [];
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values.join(" -> "));
    }
    get length() {
        return this._length;
    }
    /**
     * Adds a new node with provided value at the end
     * of the list.
     * @param { number } value
     * @returns { void }
     */
    addNode(value) {
        const newNode = new node_1.Node(value);
        if (!this.head) {
            this.head = newNode;
            this._length += 1;
            return;
        }
        let currentNode = this.head;
        while (!!currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this._length += 1;
    }
    /**
     * Finds and returns the node by given value, if found,
     * otherwise null;
     * @param { number } value
     * @returns { Node | null }
     */
    findNodeByValue(value) {
        if (!this.head)
            return null;
        let nodeToReturn = null;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                nodeToReturn = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        if (!nodeToReturn)
            console.log("Value not found in the list.");
        return nodeToReturn;
    }
    /**
     * Deletes the node by provided value from the list.
     * @param { number } value
     * @returns { void }
     */
    deleteNodeByValue(value) {
        if (!this.head)
            return;
        let previousNode = null;
        let nodeToDelete = null;
        let currentNode = this.head;
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
    deleteNode(previousNode, nodeToDelete) {
        // 'previousNode' will be 'null' if user wants to delete the
        // very first node.
        if (!previousNode) {
            this.head = nodeToDelete.next;
            this._length -= 1;
            return;
        }
        previousNode.next = nodeToDelete.next;
        this._length -= 1;
    }
    /**
     * Deletes the element at the specified position in the list.
     * @param { number } position - position of the element to delete
     * @returns { void }
     */
    deleteNodeByPosition(position) {
        if (!this.head)
            return;
        if (!this.isValidPosition(position)) {
            console.log(`No element exist at this position in the list. Please enter a number between ${1} and ${this._length}`);
            return;
        }
        let nodeToDelete = this.head;
        let previousNode = null;
        for (let index = 2; index <= position; index += 1) {
            previousNode = nodeToDelete;
            nodeToDelete = nodeToDelete.next;
        }
        this.deleteNode(previousNode, nodeToDelete);
    }
    isValidPosition(position) {
        return position > 0 && position <= this._length;
    }
}
exports.LinkedList = LinkedList;
