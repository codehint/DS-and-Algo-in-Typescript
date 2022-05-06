import { BinarySearchTree } from "./binary-search-tree";
import { INSERTION_STRATEGY } from "./interfaces";

const bst = new BinarySearchTree();
bst.addNewVertex(4);
bst.addNewVertex(5);
bst.addNewVertex(1, INSERTION_STRATEGY.Recursive);
bst.addNewVertex(3, INSERTION_STRATEGY.Recursive);
bst.addNewVertex(6, INSERTION_STRATEGY.Recursive);

console.log("Before Deletion");
bst.printInOrder(bst.root);

bst.deleteVertex(4);
console.log("After Deletion");
bst.printInOrder(bst.root);

console.log("Search 9 in BST");
console.log(bst.search(9, bst.root));

console.log(bst.isBST(bst.root));
