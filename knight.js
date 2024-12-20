function knightMoves (start, target) {
    let queue = [[start, [start]]]; // The queue contains the current position and the path taken
    let visited = new Set(); // Track visited positions to avoid repeats

    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    while (queue.length > 0) {
        let [currentPosition, path] = queue.shift(); // Dequeue the front element
        let [x, y] = currentPosition; // Current position coordinates

        // If the target is reached, return the path
        if (x === target[0] && y === target[1]) {
            return path;
        }
        // If not already visited, mark the position as visited
        if (!visited.has(`${x},${y}`)) {
            visited.add(`${x},${y}`);

            for (let move of moves) {
                let [dx, dy] = move;
                let newX = x + dx;
                let newY = y + dy;

                // Ensure the new position is within board boundaries
                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                    // Add the new position to the queue, with the updated path
                    queue.push([[newX, newY], [...path, [newX, newY]]]);
                }
            }
        }
    }
}
let result = knightMoves([0,0], [5,5]);
console.log("Shortest Path: " , result);
