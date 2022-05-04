import { LinkedList } from "./linked-list";

const list = new LinkedList(4);
list.addNode(5);
list.addNode(10);

// Print all elements
list.printList();

// Delete node by value
list.deleteNodeByValue(4);
list.printList();

// Find by value
list.findNodeByValue(4);

// Get length of the list
console.log(list.length);

// Delete node by position
list.deleteNodeByPosition(2);
list.printList();
