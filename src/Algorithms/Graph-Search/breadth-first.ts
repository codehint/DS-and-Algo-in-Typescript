import { DirectedGraph, Queue } from "../../Data_Structures";

const search = (
    graph: DirectedGraph,
    target: string,
    source?: string
): boolean => {
    const queue = new Queue();

    if (source) {
        queue.enqueue(source);
    } else {
        queue.bulkEnqueue(Object.keys(graph));
    }

    while (!queue.isEmpty) {
        const currentNode = queue.dequeue();
        if (currentNode === target) return true;
        const neighborNodes = graph.getNeighbors(currentNode);
        queue.bulkEnqueue(neighborNodes);
    }

    return false;
};

export default search;
