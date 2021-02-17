function disktra(matrix, src) {
    let V = matrix.length;

    let finalized = new Array(V).fill(false);
    let distance = new Array(V).fill(Infinity);
    distance[src] = 0;


    for (let count = 0; count < V; count++) {

        let u = -1;

        //find smallest distance from non finalized vertex
        for (let i = 0; i < V; i++) {
            if (finalized[i] == false && (u == -1 || distance[i] < distance[u])) u = i;
        }

        //finalize it
        finalized[u] = true;


        //expolore vertex and relax it
        for (let v = 0; v < V; v++) {
            if (finalized[v] == false && matrix[u][v] != 0) {
                distance[v] = Math.min(distance[v], distance[u] + matrix[u][v])
            }
        }

    }
    return distance

}



let array = [
    [0, 1, 50],
    [0, 2, 100],
    [1, 2, 30],
    [1, 3, 200],
    [2, 3, 20]
]

let matrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
for (let [u, v, dis] of array) {
    matrix[u][v] = dis
    matrix[v][u] = dis
}

console.log(disktra(matrix,0))