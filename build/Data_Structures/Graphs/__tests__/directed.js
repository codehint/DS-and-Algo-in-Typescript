"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const directed_1 = __importDefault(require("../directed"));
const graph = new directed_1.default();
graph
    .addNode("a")
    .addNode("b")
    .addNode("c")
    .addNode("d")
    .addNode("e")
    .addNode("f")
    .addNode("a");
console.log(`The graph has ${graph.totalNodes} nodes`);
graph
    .addEdge("a", "c")
    .addEdge("a", "b")
    .addEdge("b", "a")
    .addEdge("e", "f")
    .addEdge("f", "d")
    .addEdge("b", "f");
console.log(graph.getNeighbors("b"));
console.log(`The graph has ${graph.totalEdges} edges.`);
