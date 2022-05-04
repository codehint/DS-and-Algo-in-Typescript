import { LinkedList } from "./linked-list";

const list = new LinkedList(4);
list.addNode(5);
list.addNode(10);
list.printList();
list.deleteNodeByValue(4);
list.printList();
list.findNodeByValue(4);
