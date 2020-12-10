//undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex) {
        let affectedVertices = this.adjacencyList[vertex].map(v => v);
        console.log(affectedVertices)

        const disconnectVertex = (index) => {
            if (index < 0) return delete this.adjacencyList[vertex];
            this.adjacencyList[affectedVertices[index]] = this.adjacencyList[affectedVertices[index]].filter(v => v !== vertex)

            index--

            disconnectVertex(index);
        }

        disconnectVertex(affectedVertices.length - 1);

    }

    addConnection(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeConnection(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
    }
}

const g = new Graph;

g.addVertex("Houston");
g.addVertex("Austin");
g.addVertex("New Orleans");
g.addVertex("Dallas");
g.addVertex("Phoneix");
g.addVertex("LA");
g.addVertex("Seatle");
g.addVertex("Portland");
g.addVertex("Atlanta");
g.addVertex("San Antonio");

g.addConnection("Houston", "Seatle");
g.addConnection("Houston", "Dallas");
g.addConnection("Houston", "Austin");
g.addConnection("Houston", "LA");
g.addConnection("Houston", "Atlanta");
g.addConnection("Portland", "Seatle");
g.addConnection("Portland", "Austin");
g.addConnection("New Orleans", "Seatle");
g.addConnection("LA", "Portland");
g.addConnection("Portland", "Seatle");
g.addConnection("LA", "New Orleans");