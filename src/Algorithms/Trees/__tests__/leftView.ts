import { BinarySearchTree } from "../../../Data_Structures";
import { leftView } from "../leftView";

const bst = new BinarySearchTree(3);
bst.addNewVertex(2).addNewVertex(6).addNewVertex(5);

leftView(bst.root);
