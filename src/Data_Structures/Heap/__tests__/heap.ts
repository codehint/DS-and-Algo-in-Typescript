import { Heap } from "../heap";

const heap = new Heap(10);
heap.addNode(9)
    .addNode(7)
    .addNode(5)
    .addNode(4)
    .addNode(1)
    .addNode(3)
    .addNode(6);
console.log(heap.length);
heap.printHeap();
console.log(heap.extractMin());
heap.printHeap();
