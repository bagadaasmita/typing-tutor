import { useState } from "react";
import TypingBox from "./TypingBox";

export default function DemoTyper({ drills }) {
  const [activeId, setActiveId] = useState(drills[0].id);
  const drill = drills.find((d) => d.id === activeId);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {drills.map((d) => (
          <button
            key={d.id}
            onClick={() => setActiveId(d.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
              d.id === activeId
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* key resets the box when the drill changes */}
      <TypingBox key={drill.id} text={drill.text} autoFocus={false} />
    </div>
  );
}