"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates the logic of building and working with the
 * directed graphs.
 */
class DirectedGraph {
    constructor() {
        this._adjacencyList = {};
        this._numberOfNodes = 0;
        this._numberOfEdges = 0;
    }
    get totalNodes() {
        return this._numberOfNodes;
    }
    get totalEdges() {
        return this._numberOfEdges;
    }
    get nodes() {
        return Object.keys(this._adjacencyList);
    }
    hasNode(node) {
        return !!this._adjacencyList[node];
    }
    /**
     * Adds a new node in the graph
     * @param { string } node
     * @returns { this }
     */
    addNode(node) {
        if (Object.prototype.hasOwnProperty.call(this._adjacencyList, node)) {
            console.log(`Node '${node}' already exists.`);
            return this;
        }
        this._adjacencyList[node] = [];
        this._numberOfNodes += 1;
        return this;
    }
    /**
     * Returns the neighbors of given node
     * @param { string } node
     * @returns { string[] }
     */
    getNeighbors(node) {
        return this._adjacencyList[node] || [];
    }
    /**
     * Add a new edge between given source and target nodes
     * @param { string } sourceNode
     * @param { string } targetNode
     * @returns { this }
     */
    addEdge(sourceNode, targetNode) {
        if (!this.hasNode(sourceNode)) {
            this.addNode(sourceNode);
        }
        if (!this.hasNode(targetNode)) {
            this.addNode(targetNode);
        }
        if (!this.getNeighbors(sourceNode).includes(targetNode)) {
            this._adjacencyList[sourceNode].push(targetNode);
            this._numberOfEdges += 1;
        }
        return this;
    }
}
exports.default = DirectedGraph;
