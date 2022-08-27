/**
 * A simple implementation of hash table which stores array of strings as values
 * in buckets.
 */
export class HashTable {
    private table: string[][] = new Array(10000);

    /**
     * Looks up the given key in hash table. Returns the hash value if
     * exists otherwise -1
     * @param { string } key
     * @returns { number }
     */
    public lookUp(key: string): number {
        const hashValue = this.calculate_hash_value(key);
        if (hashValue === -1 || !this.table[hashValue]) return -1;
        return this.table[hashValue].includes(key) ? hashValue : -1;
    }

    /**
     * Stored the given string key in hash table.
     * @param { string } key
     * @returns
     */
    public store(key: string): void {
        const hashValue = this.calculate_hash_value(key);
        if (hashValue === -1) return;
        if (!this.table[hashValue]) this.table[hashValue] = [];
        this.table[hashValue].push(key);
    }

    /**
     * Returns the stored data in the hash table against the given hash
     * @param { number } hash
     * @returns { string[] }
     */
    public getData(hash: number): string[] {
        return this.table[hash] || [];
    }

    /**
     * This hash function calculates the hash value of the given
     * string based on the unicode values of first two characters.
     * @param { string } key
     * @returns { number } - the computed hash value
     */
    public calculate_hash_value(key: string): number {
        if (key.length < 2) {
            console.log("Key must be more than 1 character long.");
            return -1;
        }

        return key.charCodeAt(0) * 100 + key.charCodeAt(1);
    }
}
