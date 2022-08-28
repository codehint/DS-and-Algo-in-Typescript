"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
const interfaces_1 = require("./interfaces");
const vertex_1 = require("./vertex");
class BinarySearchTree {
    constructor(rootValue = null) {
        this._root = null;
        if (rootValue || rootValue === 0) {
            this.addNewVertex(rootValue);
        }
    }
    get root() {
        return this._root;
    }
    /**
     * Adds a new vertex in the tree with two possible approaches
     * 1 - Recursive
     * 2 - Iterative
     * @param { number } value
     * @param { INSERTION_STRATEGY } strategy
     */
    addNewVertex(value, strategy) {
        const newVertex = this.getNewVertex(value);
        // If _root is 'null' then just assign the value to the _root.
        if (!this._root) {
            this._root = newVertex;
            return;
        }
        // To add a new vertex with non null _root, we've to find the right place
        // for provided value in the tree.
        if (!strategy || strategy === interfaces_1.INSERTION_STRATEGY.Iterative) {
            // Add a new vertex iteratively.
            this.addIteratively(value);
        }
        else if (strategy === interfaces_1.INSERTION_STRATEGY.Recursive) {
            // Add new vertex recursively.
            this.addRecursively(value, this._root);
        }
        else {
            console.log(`Please provide a valid insertion strategy i.e ${interfaces_1.INSERTION_STRATEGY.Iterative} | ${interfaces_1.INSERTION_STRATEGY.Recursive}`);
        }
    }
    addRecursively(value, vertex) {
        if (!vertex)
            return this.getNewVertex(value);
        if (vertex.value === value) {
            console.log("Can't add duplicate key in BST.");
            return vertex;
        }
        if (value < vertex.value) {
            vertex.left = this.addRecursively(value, vertex.left);
        }
        else {
            vertex.right = this.addRecursively(value, vertex.right);
        }
        return vertex;
    }
    addIteratively(value) {
        let vertexInConsideration = this._root;
        while (true) {
            // Insertion of duplicate keys are not allowed in this implementation.
            if (value === vertexInConsideration.value) {
                console.log("Can't add a duplicate key in the BST.");
                break;
            }
            if (value < vertexInConsideration.value) {
                if (vertexInConsideration.left) {
                    vertexInConsideration = vertexInConsideration.left;
                }
                else {
                    vertexInConsideration.left = this.getNewVertex(value);
                    break;
                }
            }
            if (value > vertexInConsideration.value) {
                if (vertexInConsideration.right) {
                    vertexInConsideration = vertexInConsideration.right;
                }
                else {
                    vertexInConsideration.right = this.getNewVertex(value);
                    break;
                }
            }
        }
    }
    deleteVertex(value) {
        this._root = this.delete(value, this._root);
    }
    delete(value, vertex) {
        if (!vertex)
            return null;
        if (vertex.value === value) {
            if (!vertex.left && !vertex.right)
                return null;
            if (vertex.left && !vertex.right) {
                return vertex.left;
            }
            if (!vertex.left && vertex.right) {
                return vertex.right;
            }
            // In case both child exist
            // Then replace the value with smallest value in right sub tree.
            let smallestValue = this.getSmallestValue(vertex.right);
            vertex.value = smallestValue;
            vertex.right = this.delete(smallestValue, vertex.right);
            return vertex;
        }
        if (value < vertex.value) {
            vertex.left = this.delete(value, vertex.left);
        }
        if (value > vertex.value) {
            vertex.right = this.delete(value, vertex.right);
        }
        return vertex;
    }
    getNewVertex(value) {
        return new vertex_1.Vertex(value);
    }
    printInOrder(vertex) {
        if (!vertex)
            return;
        this.printInOrder(vertex.left);
        console.log(vertex.value);
        this.printInOrder(vertex.right);
    }
    printPreOrder(vertex) {
        if (!vertex)
            return;
        console.log(vertex.value);
        this.printPreOrder(vertex.left);
        this.printPreOrder(vertex.right);
    }
    getSmallestValue(vertex) {
        let smallestVertex = vertex;
        while (smallestVertex.left) {
            smallestVertex = smallestVertex.left;
        }
        return smallestVertex.value;
    }
    /**
     * Returns 'true' if given value exists in the BST.
     * @param { number } value
     * @param  { Vertex | null } vertex
     * @returns { boolean }
     */
    search(value, vertex) {
        if (vertex === null)
            return false;
        if (vertex.value === value)
            return true;
        if (value < vertex.value)
            return this.search(value, vertex.left);
        if (value > vertex.value)
            return this.search(value, vertex.right);
        return false;
    }
    /**
     * Check if the tree with given vertex is a BST.
     * @param { Vertex | null } vertex
     * @returns { boolean }
     */
    isBST(vertex) {
        if (!vertex)
            return true;
        if ((vertex.left && vertex.left.value > vertex.value) ||
            (vertex.right && vertex.right.value < vertex.value))
            return false;
        return this.isBST(vertex.left) && this.isBST(vertex.right);
    }
}
exports.BinarySearchTree = BinarySearchTree;
