/*
====================================================
 Graph Theory Visualizer - Algorithms Logic
====================================================
*/

const getEdges = (graph) => graph?.edges || [];
const getNodes = (graph) => graph?.nodes || [];

export function runBFS(graph, startNode) {
  if (!startNode || !graph) return { steps: [] };
  const queue = [startNode];
  const visited = new Set([startNode]);
  const steps = [];

  while (queue.length > 0) {
    const node = queue.shift();
    steps.push({ action: "visit", node });

    const neighbors = getEdges(graph)
      .filter(e => e.from === node)
      .map(e => e.to);

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        steps.push({ action: "enqueue", from: node, to: neighbor });
      }
    }
  }
  return { steps };
}

export function runDFS(graph, startNode) {
  if (!startNode || !graph) return { steps: [] };
  const visited = new Set();
  const steps = [];

  function dfs(node) {
    visited.add(node);
    steps.push({ action: "visit", node });
    const neighbors = getEdges(graph).filter(e => e.from === node).map(e => e.to);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        steps.push({ action: "goDeeper", from: node, to: neighbor });
        dfs(neighbor);
      }
    }
  }
  dfs(startNode);
  return { steps };
}

export function runDijkstra(graph, startNode) {
  if (!startNode || !graph) return { steps: [] };
  const distances = {};
  const visited = new Set();
  const steps = [];
  const nodes = getNodes(graph);

  nodes.forEach(n => { distances[n.id] = Infinity; });
  distances[startNode] = 0;

  while (visited.size < nodes.length) {
    let currentNode = null;
    let minDist = Infinity;
    for (let node in distances) {
      if (!visited.has(node) && distances[node] < minDist) {
        minDist = distances[node];
        currentNode = node;
      }
    }
    if (!currentNode || minDist === Infinity) break;
    visited.add(currentNode);
    steps.push({ action: "visit", node: currentNode, distance: minDist });

    getEdges(graph).filter(e => e.from === currentNode).forEach(edge => {
      const weight = parseFloat(edge.label) || 1;
      const newDist = distances[currentNode] + weight;
      if (newDist < distances[edge.to]) {
        distances[edge.to] = newDist;
        steps.push({ action: "updateDistance", from: currentNode, to: edge.to, newDistance: newDist });
      }
    });
  }
  return { steps };
}

export function runPrim(graph, startNode) {
  if (!startNode || !graph) return { steps: [] };
  const visited = new Set([startNode]);
  const steps = [];
  const nodes = getNodes(graph);
  
  while (visited.size < nodes.length) {
    let minEdge = null;
    getEdges(graph).forEach(edge => {
      const u = edge.from, v = edge.to;
      const weight = parseFloat(edge.label) || 1;
      if ((visited.has(u) && !visited.has(v)) || (visited.has(v) && !visited.has(u))) {
        if (!minEdge || weight < (parseFloat(minEdge.label) || 1)) minEdge = edge;
      }
    });
    if (!minEdge) break;
    visited.add(visited.has(minEdge.from) ? minEdge.to : minEdge.from);
    steps.push({ action: "addEdge", edge: minEdge });
  }
  return { steps };
}

export function runKruskal(graph) {
  if (!graph) return { steps: [] };
  const parent = {};
  const steps = [];
  getNodes(graph).forEach(n => parent[n.id] = n.id);
  const find = (i) => parent[i] === i ? i : (parent[i] = find(parent[i]));
  const sortedEdges = [...getEdges(graph)].sort((a, b) => (parseFloat(a.label) || 1) - (parseFloat(b.label) || 1));

  sortedEdges.forEach(edge => {
    if (find(edge.from) !== find(edge.to)) {
      parent[find(edge.from)] = find(edge.to);
      steps.push({ action: "addEdge", edge });
    }
  });
  return { steps };
}
