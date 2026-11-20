import { useRef } from "react";
import { useTypingEngine } from "../hooks/useTypingEngine";
import StatsBar from "./StatsBar";

export default function TypingBox({ text, timeLimit = 0, onNext, autoFocus = true }) {
  const inputRef = useRef(null);
  const { typed, handleChange, reset, wpm, accuracy, errors, elapsed, finished, started } =
    useTypingEngine(text, timeLimit);

  // Block keys that would move the cursor or add new lines
  const blockKeys = (e) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", "Home", "End"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleReset = () => {
    reset();
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const displayTime = timeLimit ? Math.max(0, timeLimit - elapsed) : elapsed;

  return (
    <div>
      <StatsBar wpm={wpm} accuracy={accuracy} errors={errors} time={displayTime} />

      <div
        className="relative mt-4 bg-white border-2 border-gray-200 rounded-xl p-6 cursor-text focus-within:border-blue-500"
        onClick={() => inputRef.current?.focus()}
      >
        <p className="font-mono text-2xl leading-relaxed whitespace-pre-wrap break-words select-none">
          {text.split("").map((ch, i) => {
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

        <textarea
          ref={inputRef}
          autoFocus={autoFocus}
          value={typed}
          disabled={finished}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={blockKeys}
          onPaste={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          className="absolute inset-0 w-full h-full opacity-0 resize-none"
        />
      </div>

      {!started && !finished && (
        <p className="mt-3 text-sm text-gray-500 text-center">Click the box and start typing. The timer starts with your first key.</p>
      )}

      {finished && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-green-700">Lesson complete!</h3>
          <p className="mt-2 text-gray-700">
            You typed at <b>{wpm} WPM</b> with <b>{accuracy}%</b> accuracy and {errors} error{errors === 1 ? "" : "s"}.
          </p>
          <div className="mt-4 flex gap-3 justify-center">
            <button onClick={handleReset} className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50">
              Try Again
            </button>
            {onNext && (
              <button onClick={onNext} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Next Lesson →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}