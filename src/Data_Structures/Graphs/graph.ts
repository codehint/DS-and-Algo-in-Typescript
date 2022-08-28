import { AdjacencyList } from "./interface";
import { BFS, DFS } from "../../Algorithms";
import { GraphType } from "./constants";

/**
 * Encapsulates the logic of building and working with the graphs.
 */
export class Graph {
    private _adjacencyList: AdjacencyList = {};
    private _numberOfNodes: number = 0;
    private _numberOfEdges: number = 0;
    private _type: GraphType = GraphType.Directed;

    constructor(type: GraphType) {
        this._type = type;
    }

    public isDirected(): boolean {
        return this._type === GraphType.Directed;
    }

    public get totalNodes(): number {
        return this._numberOfNodes;
    }

    public get totalEdges(): number {
        return this._numberOfEdges;
    }

    public get nodes(): string[] {
        return Object.keys(this._adjacencyList);
    }

    public hasNode(node: string): boolean {
        return !!this._adjacencyList[node];
    }

    /**
     * Adds a new node in the graph
     * @param { string } node
     * @returns { this }
     */
    public addNode(node: string): this {
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
    public getNeighbors(node: string): string[] {
        return this._adjacencyList[node] || [];
    }

    /**
     * Add a new edge between given source and target nodes.
     * The method will not add cyclic edges
     * @param { string } sourceNode
     * @param { string } targetNode
     * @returns { this }
     */
    public addEdge(sourceNode: string, targetNode: string): this {
        const isDirected = this.isDirected();

        if (isDirected && this.hasEdge(sourceNode, targetNode)) {
            console.log(
                `Cannot add this edge '${sourceNode} -> ${targetNode}'. This will create a cycle.`
            );
            return this;
        }

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

        if (
            !isDirected &&
            !this.getNeighbors(targetNode).includes(sourceNode)
        ) {
            this._adjacencyList[targetNode].push(sourceNode);
            this._numberOfEdges += 1;
        }

        return this;
    }

    private hasEdge(sourceNode: string, targetNode: string): boolean {
        if (!this.hasNode(sourceNode) || !this.hasNode(targetNode))
            return false;
        return (
            this.getNeighbors(sourceNode).includes(targetNode) ||
            this.getNeighbors(targetNode).includes(sourceNode)
        );
    }

    public hasPath(sourceNode: string, targetNode: string): boolean {
        if (!this.hasNode(sourceNode) || !this.hasNode(targetNode)) {
            console.log(
                "Either source or target node does not exist in the graph."
            );
            return false;
        }

        /** Apply breadth/depth first algo to check if path exists */
        return BFS(this, targetNode, sourceNode);
        // return DFS(this, targetNode, sourceNode);
    }
}
