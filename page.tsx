import React from 'react';

export default function GraphTheoryLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">

      {/* 🔹 Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
            alt="Graph Visualization"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visualize Graph Theory
            </h1>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div>
           <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              An interactive web application for exploring and understanding graph theory through dynamic visualizations.
            </p>
        </div>
      </section>

      {/* 🔹 Description + Features */}
      <section className="max-w-7xl mx-auto px-6 py-28 md:py-32">

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is Graph Theory?
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Graph theory is a branch of mathematics that studies the relationships between objects,
            represented as vertices (nodes) connected by edges (links). It is widely used in computer science,
            networks, and real-world problem solving.
          </p>
        </div>

        {/* Features */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-3 gap-10">

            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-center
                            transition-all duration-300 cursor-pointer
                            hover:scale-110 hover:shadow-2xl hover:border-blue-500
                            hover:animate-pulse">
              
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="font-semibold mb-2 text-lg">
                Interactive Graph Editor
              </h3>
              <p className="text-gray-500 text-sm">
                Create and modify graphs with drag-and-drop.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-center
                            transition-all duration-300 cursor-pointer
                            hover:scale-110 hover:shadow-2xl hover:border-blue-500
                            hover:animate-pulse">
              
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-semibold mb-2 text-lg">
                Algorithm Visualization
              </h3>
              <p className="text-gray-500 text-sm">
                Visualize BFS, DFS, Dijkstra.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-center
                            transition-all duration-300 cursor-pointer
                            hover:scale-110 hover:shadow-2xl hover:border-blue-500
                            hover:animate-pulse">
              
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-semibold mb-2 text-lg">
                Step-by-Step Execution
              </h3>
              <p className="text-gray-500 text-sm">
                Follow each step clearly.
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
