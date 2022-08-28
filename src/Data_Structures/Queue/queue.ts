export class Queue {
    private _data: any[] = [];
    private _length: number = 0;

    get isEmpty(): boolean {
        return this._length === 0;
    }

    public enqueue(data: any): this {
        this._data.push(data);
        this._length += 1;
        return this;
    }

    public bulkEnqueue(data: any[]): this {
        this._data.push(...data);
        this._length += data.length;
        return this;
    }

    public dequeue(): any {
        const data = this._data.shift();
        this._length -= 1;
        return data;
    }
}
