export default function Sidebar({ setAlgorithm }) {

  const algorithms = [
    { id:"bfs",name:"BFS"},
    { id:"dfs",name:"DFS"},
    { id:"dijkstra",name:"Dijkstra"},
    { id:"prim",name:"Prim"},
    { id:"kruskal",name:"Kruskal"}
  ]

  return (
    <div className="w-64 border-r p-4 space-y-4">

      <h2 className="font-bold">Algorithms</h2>

      {algorithms.map(a=>(
        <button
          key={a.id}
          onClick={()=>setAlgorithm(a.id)}
          className="w-full p-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          {a.name}
        </button>
      ))}

    </div>
  )
}