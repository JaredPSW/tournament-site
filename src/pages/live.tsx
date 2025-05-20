import { useState } from "react";
import Header from "@/components/Header";

export default function LiveSet() {
  const [currentSet, setCurrentSet] = useState("Waiting for match info...");

  return (
    <>
      <Header />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Now Playing</h2>
        <div className="bg-gray-100 p-4 rounded shadow mb-4 text-xl font-mono">
          {currentSet}
        </div>
        <input
          type="text"
          placeholder="Update live set"
          className="p-2 border rounded w-full"
          onChange={(e) => setCurrentSet(e.target.value)}
        />
      </div>
    </>
  );
}