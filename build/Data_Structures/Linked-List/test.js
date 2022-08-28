"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./linked-list");
const list = new linked_list_1.LinkedList(4);
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
