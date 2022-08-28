"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quick_sort_1 = __importDefault(require("./quick-sort"));
const testArr = [2, 1];
quick_sort_1.default(testArr);
console.log(testArr);
