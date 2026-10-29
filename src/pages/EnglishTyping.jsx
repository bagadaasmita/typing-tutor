import { useState } from "react";
import TypingBox from "../components/TypingBox";
import { englishLessons } from "../data/englishLessons";

export default function EnglishTyping() {
  const [index, setIndex] = useState(0);
  const lesson = englishLessons[index];
  const hasNext = index < englishLessons.length - 1;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Lesson list */}
      <aside className="bg-white border border-gray-200 rounded-xl p-3 h-fit">
        <h2 className="font-bold text-gray-900 px-2 py-2">Lessons</h2>
        <ul className="space-y-1">
          {englishLessons.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => setIndex(i)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  i === index ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <div className="font-medium">
                  {l.id}. {l.title}
                </div>
                <div className={`text-xs ${i === index ? "text-blue-100" : "text-gray-400"}`}>{l.level}</div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Typing area */}
      <section>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Lesson {lesson.id}: {lesson.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">{lesson.level}</p>

        {/* key={lesson.id} resets the box whenever the lesson changes */}
        <TypingBox key={lesson.id} text={lesson.text} onNext={hasNext ? () => setIndex(index + 1) : undefined} />
      </section>
    </div>
  );
}