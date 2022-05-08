import { HashTable } from "./hash-table";

const hashTable = new HashTable();
console.log(hashTable.calculate_hash_value("ab"));
hashTable.store("Test");
hashTable.store("Udacity");
console.log(hashTable.lookUp("Test"));
console.log(hashTable.lookUp("Udacity"));
