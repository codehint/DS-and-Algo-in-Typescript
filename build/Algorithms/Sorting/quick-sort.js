"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort = (array) => {
    if (array.length < 2) {
        console.log("Please input an array of length greater than 1.");
        return array;
    }
    const quickSort = (low, high) => {
        if (high <= low)
            return;
        const pivotIndex = partition(low, high);
        quickSort(low, pivotIndex - 1);
        quickSort(pivotIndex + 1, high);
    };
    const partition = (low, high) => {
        let pivot = high;
        let firstHigh = low;
        for (let index = low; index < high; index += 1) {
            if (array[index] < array[pivot]) {
                [array[index], array[firstHigh]] = [
                    array[firstHigh],
                    array[index],
                ];
                firstHigh += 1;
            }
        }
        [array[firstHigh], array[pivot]] = [array[pivot], array[firstHigh]];
        return firstHigh;
    };
    quickSort(0, array.length - 1);
    return array;
};
exports.default = sort;
