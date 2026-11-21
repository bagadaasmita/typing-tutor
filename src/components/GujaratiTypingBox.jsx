import { useRef } from "react";
import { useGujaratiEngine } from "../hooks/useGujaratiEngine";
import StatsBar from "./StatsBar";

export default function GujaratiTypingBox({ roman, gu, onNext, autoFocus = true }) {
  const inputRef = useRef(null);
  const {
    typed,
    output,
    handleChange,
    reset,
    wpm,
    accuracy,
    errors,
    elapsed,
    finished,
    started,
    wrongKey,
  } = useGujaratiEngine(roman);

  const handleReset = () => {
    reset();
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div>
      <StatsBar wpm={wpm} accuracy={accuracy} errors={errors} time={elapsed} />

      <div className="mt-4 rounded-xl border-2 border-gray-200 bg-white p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Gujarati text</p>
        <p lang="gu" className="mt-2 min-h-10 text-2xl leading-relaxed text-gray-800">
          {gu}
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Type this phonetic prompt</p>
        <p className={`mt-2 font-mono text-xl leading-relaxed break-words ${wrongKey ? "text-red-600" : ""}`}>
          {roman.split("").map((ch, i) => {
            let cls = "text-gray-400";
            if (i < typed.length) cls = "text-green-600";
            else if (i === typed.length && !finished) cls = "bg-blue-200 text-gray-900";
            return (
              <span key={i} className={cls}>
                {ch}
              </span>
            );
          })}
        </p>

        <textarea
          ref={inputRef}
          autoFocus={autoFocus}
          value={typed}
          disabled={finished}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => {
            if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", "Home", "End"].includes(e.key)) {
              e.preventDefault();
            }
          }}
          onPaste={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          aria-label="Type the phonetic Gujarati prompt"
          className="mt-4 w-full resize-none rounded-lg border border-gray-300 p-3 font-mono text-base focus:border-blue-500 focus:outline-none"
        />

        <div className="mt-4 rounded-lg bg-blue-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Your Gujarati output</p>
          <p lang="gu" className="mt-1 min-h-8 text-2xl leading-relaxed text-gray-900">
            {output || <span className="text-gray-400">Start typing to see Gujarati</span>}
          </p>
        </div>
      </div>

      {!started && !finished && (
        <p className="mt-3 text-center text-sm text-gray-500">
          Click the input and type the phonetic prompt. Your Gujarati output and stats update live.
        </p>
      )}

      {finished && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
          <h3 className="text-xl font-bold text-green-700">Typing test complete!</h3>
          <p className="mt-2 text-gray-700">
            You typed at <b>{wpm} WPM</b> with <b>{accuracy}%</b> accuracy and {errors} error{errors === 1 ? "" : "s"}.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <button onClick={handleReset} className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-600 hover:bg-blue-50">
              Try Again
            </button>
            {onNext && (
              <button onClick={onNext} className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                Next Lesson →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
