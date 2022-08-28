import DirectedGraph from "../directed";

const graph = new DirectedGraph();

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
