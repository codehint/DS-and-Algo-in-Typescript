import { Graph, Stack } from "../../Data_Structures";

const search = (graph: Graph, target: string, source?: string) => {
    const visitedNodes = new Set<string>();
    const stack = new Stack();

    if (source) {
        stack.push(source);
    } else {
        stack.bulkPush(graph.nodes);
    }

    while (!stack.isEmpty) {
        const currentNode = stack.pop();

        if (visitedNodes.has(currentNode)) continue;
        visitedNodes.add(currentNode);

        if (currentNode === target) return true;
        const neighborNodes = graph.getNeighbors(currentNode);
        stack.bulkPush(neighborNodes);
    }

    return false;
};

export default search;
