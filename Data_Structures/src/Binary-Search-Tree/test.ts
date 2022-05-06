import { BinarySearchTree } from "./binary-search-tree";
import { INSERTION_STRATEGY } from "./interfaces";

const bst = new BinarySearchTree();
bst.addNewVertex(4);
bst.addNewVertex(5);
bst.addNewVertex(1, INSERTION_STRATEGY.Recursive);
bst.addNewVertex(3, INSERTION_STRATEGY.Recursive);
bst.addNewVertex(6, INSERTION_STRATEGY.Recursive);

console.log("Before Deletion");
bst.printPreOrder(bst.root);

bst.deleteVertex(4);
console.log("After Deletion");
bst.printPreOrder(bst.root);
