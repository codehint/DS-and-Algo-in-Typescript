export class Stack {
    private _data: any[] = [];
    private _length: number = 0;

    get isEmpty(): boolean {
        return this._length === 0;
    }

    get length(): number {
        return this._length;
    }

    get list(): any[] {
        return this._data;
    }

    public push(data: any): this {
        this._data.push(data);
        this._length += 1;
        return this;
    }

    public bulkPush(data: any[]): this {
        this._data.push(...data);
        this._length += data.length;
        return this;
    }

    public pop(): any {
        this._length -= 1;
        return this._data.pop();
    }

    public peek(): any {
        return this._data[this._length - 1];
    }
}
