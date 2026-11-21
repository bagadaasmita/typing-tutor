import { useState } from "react";
import GujaratiTypingBox from "../components/GujaratiTypingBox";
import { gujaratiLessons } from "../data/gujaratiLessons";

export default function GujaratiTyping() {
  const [index, setIndex] = useState(0);
  const lesson = gujaratiLessons[index];
  const hasNext = index < gujaratiLessons.length - 1;

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit rounded-xl border border-gray-200 bg-white p-3">
        <h2 className="px-2 py-2 font-bold text-gray-900">Gujarati Lessons</h2>
        <ul className="space-y-1">
          {gujaratiLessons.map((item, i) => (
            <li key={item.id}>
              <button
                onClick={() => setIndex(i)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                  i === index ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="font-medium">{item.id}. {item.title}</div>
                <div className={`text-xs ${i === index ? "text-blue-100" : "text-gray-400"}`}>{item.level}</div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section>
        <h1 className="mb-1 text-2xl font-bold text-gray-900">
          Lesson {lesson.id}: {lesson.title}
        </h1>
        <p className="mb-4 text-sm text-gray-500">{lesson.level}</p>
        <GujaratiTypingBox
          key={lesson.id}
          roman={lesson.roman}
          gu={lesson.gu}
          onNext={hasNext ? () => setIndex((current) => current + 1) : undefined}
        />
      </section>
    </div>
  );
}
