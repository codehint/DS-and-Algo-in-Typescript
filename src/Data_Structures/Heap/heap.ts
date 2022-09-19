/**
 * Encapsulates the logic of min heap data structure.
 */
export class Heap {
    private _data: number[] = [];
    private _length: number = 0;

    constructor(rootNode: number) {
        this._data.push(rootNode);
        this._length += 1;
    }

    get length(): number {
        return this._length;
    }

    /**
     * Adds a new node in the heap
     * @param { number } value
     * @returns { this }
     */
    public addNode(value: number): this {
        this._data[this._length] = value;
        this.bubbleUp(this._length);
        this._length += 1;
        return this;
    }

    /**
     * Runs the logic to bubble up the new element to store the min heap
     * property.
     * @param { number } currentNodePosition
     * @returns { void }
     */
    private bubbleUp(currentNodePosition: number): void {
        const currentNode = this._data[currentNodePosition];
        const parentNodePosition = this.getParentPosition(currentNodePosition);

        // If current element has no parent, we're done with the recursion
        if (parentNodePosition === null) return;
        const parentNode = this._data[parentNodePosition];

        // If current element is greater than the parent then heap property
        // is restored and we don't have to move further up.
        if (currentNode > parentNode) return;

        // Swap current node with the parent
        this.swapNodes(currentNodePosition, parentNodePosition);

        this.bubbleUp(parentNodePosition);
    }

    /**
     * Returns the minimum element in the heap
     * @returns { number }
     */
    public extractMin(): number {
        const [minNode] = this._data;
        this._data[0] = this._data.pop() as number;
        this.bubbleDown(0);
        return minNode;
    }

    /**
     * Runs the logic to bubble down the node after removing the minimum
     * element from the heap
     * @param { number } currentNodePosition
     * @returns
     */
    private bubbleDown(currentNodePosition: number): void {
        if (currentNodePosition >= this._length) return;

        const { leftChildPosition, rightChildPosition } =
            this.getChildPositions(currentNodePosition);

        if (
            leftChildPosition >= this._length &&
            rightChildPosition >= this._length
        )
            return;

        const minNodePosition = this.getMinNodePosition(
            leftChildPosition,
            rightChildPosition
        );

        if (this._data[currentNodePosition] > this._data[minNodePosition]) {
            this.swapNodes(currentNodePosition, minNodePosition);

            this.bubbleDown(
                minNodePosition === leftChildPosition
                    ? leftChildPosition
                    : rightChildPosition
            );
        }
    }

    /**
     * Returns the position of the minimum value node out
     * of the provided positions
     * @param { number } firstPosition
     * @param { number } secondPosition
     * @returns
     */
    private getMinNodePosition(
        firstPosition: number,
        secondPosition: number
    ): number {
        if (firstPosition >= this._length) return secondPosition;
        if (secondPosition >= this._length) return firstPosition;
        return this._data[firstPosition] < this._data[secondPosition]
            ? firstPosition
            : secondPosition;
    }

    private getParentPosition(childPosition: number): number | null {
        if (childPosition <= 0) return null;
        return Math.floor(Math.abs(childPosition / 2));
    }

    private getChildPositions(parentPosition: number): {
        rightChildPosition: number;
        leftChildPosition: number;
    } {
        return {
            leftChildPosition: 2 * parentPosition + 1,
            rightChildPosition: 2 * parentPosition + 2,
        };
    }

    private swapNodes(firstPosition: number, secondPosition: number): void {
        [this._data[firstPosition], this._data[secondPosition]] = [
            this._data[secondPosition],
            this._data[firstPosition],
        ];
    }

    public printHeap(): void {
        console.log(this._data);
    }
}
