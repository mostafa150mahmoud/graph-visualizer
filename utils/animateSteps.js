export async function animateSteps(steps, network, speed) {
  for (const step of steps) {
    if (step.action === "visit") {
      network.body.data.nodes.update({
        id: step.node,
        color: { background: "orange", border: "darkorange" }
      });
    } 
    
    // تلوين السهم اللي بيمشي فيه الأنميشن
    if (step.action === "addEdge" || step.action === "updateDistance") {
      const edges = network.body.data.edges;
      // بندور على السهم اللي بين النودين
      const edgeId = edges.get().find(e => 
        (e.from === step.from && e.to === step.to) || 
        (e.from === step.to && e.to === step.from)
      )?.id;

      if (edgeId) {
        edges.update({ id: edgeId, color: { color: "red", highlight: "red" }, width: 3 });
      }
    }

    await new Promise(r => setTimeout(r, speed));
  }
  alert("الخوارزمية انتهت بنجاح يا برو! 🚀");
}