"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <div className="h-16 shadow flex items-center justify-between px-6">

      <div className="font-bold text-xl">
        Graph Theory Visualizer
      </div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/workspace">Workspace</Link>
        <Link href="/settings">Settings</Link>
      </div>

    </div>
  )
}