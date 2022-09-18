import { VERTEX, INSERTION_STRATEGY } from "./interfaces";
import { Vertex } from "./vertex";

export class BinarySearchTree {
    private _root: VERTEX | null = null;

    constructor(rootValue: number | null = null) {
        if (rootValue || rootValue === 0) {
            this.addNewVertex(rootValue);
        }
    }

    get root(): Vertex | null {
        return this._root;
    }

    /**
     * Adds a new vertex in the tree with two possible approaches
     * 1 - Recursive
     * 2 - Iterative
     * @param { number } value
     * @param { INSERTION_STRATEGY } strategy
     */
    public addNewVertex(value: number, strategy?: INSERTION_STRATEGY): this {
        const newVertex = this.getNewVertex(value);

        // If _root is 'null' then just assign the value to the _root.
        if (!this._root) {
            this._root = newVertex;
            return this;
        }

        // To add a new vertex with non null _root, we've to find the right place
        // for provided value in the tree.

        if (!strategy || strategy === INSERTION_STRATEGY.Iterative) {
            // Add a new vertex iteratively.
            this.addIteratively(value);
        } else if (strategy === INSERTION_STRATEGY.Recursive) {
            // Add new vertex recursively.
            this.addRecursively(value, this._root);
        } else {
            console.log(
                `Please provide a valid insertion strategy i.e ${INSERTION_STRATEGY.Iterative} | ${INSERTION_STRATEGY.Recursive}`
            );
        }
        return this;
    }

    private addRecursively(value: number, vertex: Vertex | null): Vertex {
        if (!vertex) return this.getNewVertex(value);

        if (vertex.value === value) {
            console.log("Can't add duplicate key in BST.");
            return vertex;
        }

        if (value < vertex.value) {
            vertex.left = this.addRecursively(value, vertex.left);
        } else {
            vertex.right = this.addRecursively(value, vertex.right);
        }

        return vertex;
    }

    private addIteratively(value: number): void {
        let vertexInConsideration: Vertex = this._root as Vertex;
        while (true) {
            // Insertion of duplicate keys are not allowed in this implementation.
            if (value === vertexInConsideration.value) {
                console.log("Can't add a duplicate key in the BST.");
                break;
            }

            if (value < vertexInConsideration.value) {
                if (vertexInConsideration.left) {
                    vertexInConsideration = vertexInConsideration.left;
                } else {
                    vertexInConsideration.left = this.getNewVertex(value);
                    break;
                }
            }

            if (value > vertexInConsideration.value) {
                if (vertexInConsideration.right) {
                    vertexInConsideration = vertexInConsideration.right;
                } else {
                    vertexInConsideration.right = this.getNewVertex(value);
                    break;
                }
            }
        }
    }

    public deleteVertex(value: number): void {
        this._root = this.delete(value, this._root);
    }

    private delete(value: number, vertex: Vertex | null): Vertex | null {
        if (!vertex) return null;

        if (vertex.value === value) {
            if (!vertex.left && !vertex.right) return null;

            if (vertex.left && !vertex.right) {
                return vertex.left;
            }

            if (!vertex.left && vertex.right) {
                return vertex.right;
            }

            // In case both child exist
            // Then replace the value with smallest value in right sub tree.
            let smallestValue = this.getSmallestValue(vertex.right as Vertex);
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

    private getNewVertex(value: number): Vertex {
        return new Vertex(value);
    }

    public printInOrder(vertex: Vertex | null): void {
        if (!vertex) return;

        this.printInOrder(vertex.left);
        console.log(vertex.value);
        this.printInOrder(vertex.right);
    }

    public printPreOrder(vertex: Vertex | null): void {
        if (!vertex) return;

        console.log(vertex.value);
        this.printPreOrder(vertex.left);
        this.printPreOrder(vertex.right);
    }

    private getSmallestValue(vertex: Vertex): number {
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
    public search(value: number, vertex: Vertex | null): boolean {
        if (vertex === null) return false;
        if (vertex.value === value) return true;
        if (value < vertex.value) return this.search(value, vertex.left);
        if (value > vertex.value) return this.search(value, vertex.right);
        return false;
    }

    /**
     * Check if the tree with given vertex is a BST.
     * @param { Vertex | null } vertex
     * @returns { boolean }
     */
    public isBST(vertex: Vertex | null): boolean {
        if (!vertex) return true;

        if (
            (vertex.left && vertex.left.value > vertex.value) ||
            (vertex.right && vertex.right.value < vertex.value)
        )
            return false;

        return this.isBST(vertex.left) && this.isBST(vertex.right);
    }
}
