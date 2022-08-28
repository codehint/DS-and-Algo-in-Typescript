import { Graph, Stack } from "../../Data_Structures";

/**
 * Function implements the depth first algorithm to check if there
 * exists a path from source to target node.
 * @param { Graph } graph
 * @param { string } target
 * @param { string } source
 * @returns { boolean }
 */
const search = (graph: Graph, target: string, source?: string): boolean => {
    /**
     * Initialize a set to keep track of the visited nodes in
     * order to avoid infinite loops.
     * */
    const visitedNodes = new Set<string>();

    /**
     * Initialize a stack to keep track of the next node to be
     * checked during the execution.
     */
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
