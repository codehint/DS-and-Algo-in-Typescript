import { AdjacencyList } from "./interface";

/**
 * Encapsulates the logic of building and working with the
 * directed graphs.
 */
export default class DirectedGraph {
    private _adjacencyList: AdjacencyList = {};
    private _numberOfNodes: number = 0;
    private _numberOfEdges: number = 0;

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
     * Add a new edge between given source and target nodes
     * @param { string } sourceNode
     * @param { string } targetNode
     * @returns { this }
     */
    public addEdge(sourceNode: string, targetNode: string): this {
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
