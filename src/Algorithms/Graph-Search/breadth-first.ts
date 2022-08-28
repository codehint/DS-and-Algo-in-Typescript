import { Graph, Queue } from "../../Data_Structures";

const search = (graph: Graph, target: string, source?: string): boolean => {
    const visitedNodes = new Set<string>();
    const queue = new Queue();

    if (source) {
        queue.enqueue(source);
    } else {
        queue.bulkEnqueue(graph.nodes);
    }

    while (!queue.isEmpty) {
        const currentNode = queue.dequeue();

        if (visitedNodes.has(currentNode)) continue;
        visitedNodes.add(currentNode);

        if (currentNode === target) return true;
        const neighborNodes = graph.getNeighbors(currentNode);
        queue.bulkEnqueue(neighborNodes);
    }

    return false;
};

export default search;
