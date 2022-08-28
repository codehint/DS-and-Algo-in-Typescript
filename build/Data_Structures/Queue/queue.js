"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this._data = [];
        this._length = 0;
    }
    get isEmpty() {
        return this._length === 0;
    }
    enqueue(data) {
        this._data.push(data);
        this._length += 1;
        return this;
    }
    bulkEnqueue(data) {
        this._data.push(...data);
        this._length += data.length;
        return this;
    }
    dequeue() {
        const data = this._data.shift();
        this._length -= 1;
        return data;
    }
}
exports.Queue = Queue;
