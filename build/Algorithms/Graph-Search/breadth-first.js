"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_Structures_1 = require("../../Data_Structures");
const search = (graph, target, source) => {
    const queue = new Data_Structures_1.Queue();
    if (source) {
        queue.enqueue(source);
    }
    else {
        queue.bulkEnqueue(Object.keys(graph));
    }
    while (!queue.isEmpty) {
        const currentNode = queue.dequeue();
        if (currentNode === target)
            return true;
        const neighborNodes = graph.getNeighbors(currentNode);
        queue.bulkEnqueue(neighborNodes);
    }
    return false;
};
exports.default = search;
