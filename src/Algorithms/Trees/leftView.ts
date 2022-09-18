/**
 * Description
 *
 * Given a tree, print the left view of it. Where left view
 * means all the nodes that are visible if we view the tree from left
 * side angle. For example
 *
 *                  3
 *              -       -
 *           -             -
 *         2                  6
 *                           -
 *                         -
 *                       5
 *
 * Left view of above tree will be 3 -> 2 -> 5
 */

import { VERTEX } from "../../Data_Structures";

export const leftView = (rootVertex: VERTEX | null): void => {
    if (!rootVertex) return;

    let maxLevel: number = 0;

    function run(vertex: VERTEX, level: number) {
        if (maxLevel < level) {
            maxLevel = level;
            console.log(vertex.value);
        }

        if (vertex.left) {
            run(vertex.left, level + 1);
        }

        if (vertex.right) {
            run(vertex.right, level + 1);
        }
    }

    run(rootVertex, 1);
};
