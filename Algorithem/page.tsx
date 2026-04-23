import React from 'react';

export default function AlgorithmExplainerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans leading-relaxed">
      {/* Header Section */}
      <div className="bg-slate-50 border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Graph Theory Visualizer: Technical Documentation
          </h1>
          <p className="text-xl text-slate-600">
            A comprehensive guide on how the simulator works, the tech stack used, and the underlying logic of the visualizations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* 1. Project Overview */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">01</span>
            Project Overview
          </h2>
          <p className="text-lg text-gray-700">
            The *Graph Theory Visualizer* is an interactive educational tool designed to bridge the gap between abstract mathematical concepts and practical implementation. It transforms complex algorithms into live simulations, allowing users to observe how data structures like Queues and Stacks behave in real-time.
          </p>
        </section>
{/* 2. Technical Stack - Enhanced with Hover Effects */}
<section>
  <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center">
    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">02</span>
    Technical Stack
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Card 1: Frontend */}
    <div className="group p-8 border border-gray-100 rounded-[2rem] bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-blue-500 cursor-default">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
      <h3 className="font-bold text-xl mb-3 text-slate-800">Frontend</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Built with *Next.js 15* and *React 19*, utilizing the latest App Router for optimal performance and server-side rendering.
      </p>
    </div>

    {/* Card 2: Styling */}
    <div className="group p-8 border border-gray-100 rounded-[2rem] bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-blue-500 cursor-default">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
      <h3 className="font-bold text-xl mb-3 text-slate-800">Styling</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Powered by *Tailwind CSS v4*, featuring a CSS-first approach for building a high-performance, responsive UI.
      </p>
    </div>

    {/* Card 3: Graph Engine */}
    <div className="group p-8 border border-gray-100 rounded-[2rem] bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-blue-500 cursor-default">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🕸️</div>
      <h3 className="font-bold text-xl mb-3 text-slate-800">Graph Engine</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Leveraging *Vis-Network* to handle complex physics simulation, interactive node manipulation, and canvas rendering.
      </p>
    </div>

  </div>
</section>

        {/* 3. Core Logic & Visualization */}
        <section className="bg-blue-600 rounded-[2.5rem] p-10 text-white">
          <h2 className="text-2xl font-bold mb-6">03. Core Visualization Logic</h2>
          <p className="mb-6 opacity-90">When an algorithm (like BFS or Dijkstra) is triggered, the system follows a 3-step pipeline:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white/20 p-1 rounded-md mr-3 font-mono text-xs">STEP_1</span>
              <span>*Graph Snapshot:* The current state of nodes and edges is captured.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 p-1 rounded-md mr-3 font-mono text-xs">STEP_2</span>
              <span>*Step Recording:* The algorithm runs in a "Virtual Environment," recording every visit and weight calculation into an array of steps.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 p-1 rounded-md mr-3 font-mono text-xs">STEP_3</span>
              <span>*Timed Rendering:* A custom timer iterates through the steps, updating node colors and labels on the UI.</span>
            </li>
          </ul>
        </section>

        {/* 4. Legend & Color Coding */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">04</span>
            Color System & Symbolism
          </h2>
          <div className="border border-gray-200 rounded-3xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Visual Indicator</th>
                  <th className="px-6 py-4">Functional Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="px-6 py-4 flex items-center font-medium">
                    <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3 shadow-sm shadow-yellow-400/50"></span> Yellow Node
                  </td>
                  <td className="px-6 py-4 italic">Represents the *Active Node* currently being processed by the algorithm.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center font-medium">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-3 shadow-sm shadow-blue-500/50"></span> Blue Node
                  </td>
                  <td className="px-6 py-4 italic">Represents *Discovered Nodes* that are waiting in the Frontier (Queue/Stack).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center font-medium">
                    <span className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full mr-3"></span> Numeric Labels
                  </td>
                  <td className="px-6 py-4 italic">Indicates the *Shortest Distance* or *Visitation Order* depending on the algorithm.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Conclusion */}
        <section className="text-center pt-10 pb-20 border-t border-gray-100">
          <p className="text-slate-400 italic">
            Developed as a bridge between data structure theory and interactive software engineering.
          </p>
        </section>
      </main>
    </div>
  );
}