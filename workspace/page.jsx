"use client"

import { useState } from "react"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import GraphCanvas from "../../components/GraphCanvas"
import Controls from "../../components/Controls"
import { animateSteps } from "../../utils/animateSteps"
import {
  runBFS,
  runDFS,
  runDijkstra,
  runPrim,
  runKruskal
} from "../../algorithms/graph-algorithms"

export default function Workspace() {
  const [algorithm, setAlgorithm] = useState("")
  const [network, setNetwork] = useState(null)
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] })
  const [speed, setSpeed] = useState(600)

  async function run() {
    if (!algorithm) return alert("اختار خوارزمية الأول من الجنب!");
    if (!network || !graphData) return alert("ارسم نودز الأول!");

    // سحب الداتا كـ Arrays حقيقية (ممنوع استخدام .get() هنا)
    const nodes = graphData.nodes || [];
    const edges = graphData.edges || [];

    if (nodes.length === 0) return alert("الرسمة فاضية، ارسم نودز الأول يا برو");

    // نقطة البداية (أول نود رسمتها)
    const startNodeId = nodes[0].id;
    let result = null;

    // تجميع البيانات في Object واحد عشان الخوارزميات تفهمها
    const graphObject = { nodes, edges };

    try {
      if (algorithm === "bfs") result = runBFS(graphObject, startNodeId);
      else if (algorithm === "dfs") result = runDFS(graphObject, startNodeId);
      else if (algorithm === "dijkstra") result = runDijkstra(graphObject, startNodeId);
      else if (algorithm === "prim") result = runPrim(graphObject, startNodeId);
      else if (algorithm === "kruskal") result = runKruskal(graphObject);

      if (result && result.steps && result.steps.length > 0) {
        animateSteps(result.steps, network, speed);
      } else {
        alert("الخوارزمية اشتغلت بس مفيش خطوات.. اتأكد إنك موصل النودز ببعض!");
      }
    } catch (error) {
      console.error("Execution Error:", error);
      alert("حصل مشكلة وأنت بتشغل الخوارزمية، بص على الـ Console");
    }
  }

  function reset() {
    if (network) {
      network.setData({ nodes: [], edges: [] });
      setGraphData({ nodes: [], edges: [] });
    }
  }

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setAlgorithm={setAlgorithm} />
        <div className="flex-1 p-6 relative flex flex-col">
          <div className="mb-4 flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border">
            <span className="text-sm font-medium text-slate-600">
              خوارزمية: <span className="text-blue-600 font-bold uppercase">{algorithm || "لم تختر"}</span>
            </span>
            <span className="text-sm font-medium text-slate-600">
              عدد النودز: <span className="text-blue-600 font-bold">{graphData.nodes.length}</span>
            </span>
          </div>

          <div className="flex-1 border rounded-xl overflow-hidden bg-white shadow-lg relative">
            <GraphCanvas
              setGraphData={setGraphData}
              setNetwork={setNetwork}
            />
          </div>

          <Controls run={run} reset={reset} setSpeed={setSpeed} />
        </div>
      </div>
    </div>
  )
}