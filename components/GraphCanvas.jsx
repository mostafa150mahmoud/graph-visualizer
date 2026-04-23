"use client"
import "vis-network/styles/vis-network.css"
import { useEffect, useRef } from "react"
import { Network } from "vis-network"
import { DataSet } from "vis-data"

export default function GraphCanvas({ setGraphData, setNetwork }) {
  const container = useRef(null)
  const nodesRef = useRef(new DataSet([]))
  const edgesRef = useRef(new DataSet([]))

  useEffect(() => {
    if (!container.current) return

    const updateGraphData = () => {
      setGraphData({
        nodes: nodesRef.current.get(), 
        edges: edgesRef.current.get()  
      })
    }

    const options = {
      physics: { enabled: false }, 
      interaction: {
        multiselect: true,
        navigationButtons: true,
        keyboard: true
      },
      manipulation: {
        enabled: true,
        addNode: (data, callback) => {
          const newId = String(Date.now())
          data.id = newId
          
         data.label = `Node ${newId.slice(-3)}`
          callback(data)
          updateGraphData() 
        },
        addEdge: (data, callback) => {
          if (!data.from || !data.to || data.from === data.to) {
            callback(null)
            return
          }
          const weight = prompt("Edge Weight:") || "1"
          const edgeData = { ...data, label: weight }
          
          callback(edgeData)
          // تأخير بسيط لضمان تحديث الـ DataSet داخلياً قبل السحب
          setTimeout(() => {
            updateGraphData()
          }, 10)
        }
      }
    }

    const network = new Network(
      container.current,
      {
        nodes: nodesRef.current,
        edges: edgesRef.current
      },
      options
    )

    updateGraphData()
    setNetwork(network)

    return () => {
      network.destroy()
    }
  }, [setGraphData, setNetwork])

  return (
    <div className="w-full border rounded-lg overflow-hidden bg-white">
      <style>{`
        .vis-network { overflow: visible !important; }
        .vis-manipulation {
          background: #f8fafc !important;
          border-bottom: 1px solid #e2e8f0 !important;
        }
      `}</style>
      <div
        ref={container}
        className="bg-slate-50"
        style={{ height: "600px", width: "100%" }}
      />
    </div>
  )
}