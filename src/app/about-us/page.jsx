"use client" 
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

const team = [
  { name: "Mostafa Mahmoud Fadl Mahmoud", id: "C2200896" },
  { name: "Ziad Mahmoud Mohamed El-Sayed", id: "C2100714" },
  { name: "Ziad Mohamed Fares Asran", id: "C2200526" },
  { name: "Mohamed Gamil Zakaria Ibrahim", id: "C2200911" },
  { name: "Mahmoud Mohamed Mostafa Mohamed", id: "C2200050" },
  { name: "Omar Attia Tawfiq Abdel-Salam", id: "C2201118" },
  { name: "Ehab Ashraf Abdel-Hamid Gadallah", id: "C2200170" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">About Our Project</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Graph Theory Visualizer is a modern educational platform designed to simplify complex graph algorithms through interactive and dynamic visualizations.
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                This project transforms theoretical graph concepts into visual experiences. Users can explore algorithms such as BFS, DFS, and Dijkstra step-by-step, helping them better understand how each algorithm operates internally.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to bridge the gap between theory and practice in computer science education by offering an intuitive and engaging learning tool for students and developers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives Section */}
        <Card className="rounded-2xl shadow-sm hover:shadow-lg transition mb-12">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Project Objectives</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
              <li>• Simplify complex graph theory concepts</li>
              <li>• Provide interactive algorithm visualization</li>
              <li>• Enable step-by-step execution</li>
              <li>• Enhance learning through animation</li>
            </ul>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="rounded-2xl shadow-sm hover:shadow-xl transition">
                  <CardContent className="p-5 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">{member.id}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          © {new Date().getFullYear()} Graph Theory Visualizer. All rights reserved.
        </div>
      </div>
    </div>
  );
}