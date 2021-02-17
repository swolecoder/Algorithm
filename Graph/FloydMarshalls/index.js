function floydWarshall(matrix) {

    let V = matrix.length;

    //intialize the matrix
    let dis = new Array(V).fill(0).map(() => new Array(V).fill(0));
    for (i = 0; i < V; i++)
        for (j = 0; j < V; j++)
            dis[i][j] = matrix[i][j];

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            // # Pick all vertices as destination for the
            // # above picked source
            for (let j = 0; j < V; j++) {
                dist[i][j] = Math.min(dist[i][j],
                    dist[i][k] + dist[k][j]) ‰
            }

            // # If vertex k is on the shortest path from
            // # i to j, then update the value of dist[i][j]

        }


    }

    //  pick all vertices as source one by one

}

/*
            10
       (0)------->(3)
        |         /|\
      5 |          |
        |          | 1
       \|/         |
       (1)------->(2)
            3
*/
let graph = [[0, 5, INF, 10],
[INF, 0, 3, INF],
[INF, INF, 0, 1],
[INF, INF, INF, 0]
]

floydWarshall(graph)