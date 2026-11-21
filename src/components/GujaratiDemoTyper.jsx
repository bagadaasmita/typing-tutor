import { useState } from "react";
import GujaratiTypingBox from "./GujaratiTypingBox";

export default function GujaratiDemoTyper({ drills }) {
  const [activeId, setActiveId] = useState(drills[0].id);
  const drill = drills.find((item) => item.id === activeId);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {drills.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
              item.id === activeId
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <GujaratiTypingBox key={drill.id} roman={drill.roman} gu={drill.gu} autoFocus={false} />
    </div>
  );
}
