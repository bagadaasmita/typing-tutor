import { useRef } from "react";
import { useTypingEngine } from "../hooks/useTypingEngine";

const SENTENCE = "The quick brown fox jumps over the lazy dog.";

export default function HeroDemo() {
  const inputRef = useRef(null);
  const { typed, handleChange, reset, wpm, accuracy, finished } = useTypingEngine(SENTENCE);

  const handleReset = () => {
    reset();
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 w-full max-w-md mx-auto">
      {/* Window title bar */}
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-gray-500">Typing Tutor — Dashboard</span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-700">Your Progress</h3>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-blue-50 p-3 text-center">
          <div className="text-2xl font-bold text-blue-600">{wpm}</div>
          <div className="text-xs text-gray-500">WPM</div>
        </div>
        <div className="rounded-lg bg-green-50 p-3 text-center">
          <div className="text-2xl font-bold text-green-600">{accuracy}%</div>
          <div className="text-xs text-gray-500">Accuracy</div>
        </div>
      </div>

      {/* Sentence with live colours */}
      <p
        className="mt-4 font-mono text-base leading-relaxed select-none cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {SENTENCE.split("").map((ch, i) => {
          let cls = "text-gray-400";
          if (i < typed.length) {
            cls = typed[i] === ch ? "text-green-600" : "text-red-600 bg-red-100";
          } else if (i === typed.length && !finished) {
            cls = "text-gray-800 bg-blue-200";
          }
          return (
            <span key={i} className={cls}>
              {ch}
            </span>
          );
        })}
      </p>

      <input
        ref={inputRef}
        value={typed}
        disabled={finished}
        onChange={(e) => handleChange(e.target.value)}
        onPaste={(e) => e.preventDefault()}
        placeholder="Type here…"
        spellCheck={false}
        autoComplete="off"
        className="mt-3 w-full border border-gray-300 rounded-lg px-3 py-2 font-mono text-sm focus:outline-none focus:border-blue-500"
      />

      {finished ? (
        <button
          onClick={handleReset}
          className="mt-3 w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
        >
          Done! Try again
        </button>
      ) : (
        <p className="mt-2 text-xs text-gray-400">Live demo: type the sentence above.</p>
      )}
    </div>
  );
}