import { Graph } from "../graph";
import { GraphType } from "../constants";

const graph = new Graph(GraphType.Directed);

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
    .addEdge("b", "f")
    .addEdge("e", "a");
console.log(graph.getNeighbors("b"));
console.log(`The graph has ${graph.totalEdges} edges.`);

console.log(graph.hasPath("a", "f"));
console.log(graph.hasPath("a", "d"));
console.log(graph.hasPath("b", "c"));
console.log(graph.hasPath("d", "a"));
