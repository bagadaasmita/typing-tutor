import { useCallback, useEffect, useRef, useState } from "react";
import { MOCK_SECONDS } from "../data/examsInfo";
import { printPassage } from "../utils/printPassage";
import { calcResult } from "../utils/calcResult";

const formatTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

function ExamRun({ exam, printMode, onClose, onRetry }) {
  const passage = exam.passage;
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(MOCK_SECONDS);
  const [result, setResult] = useState(null);
  const startRef = useRef(0);
  const typedRef = useRef("");

  const finish = useCallback(
    (elapsed) => {
      setSecondsLeft(Math.max(0, Math.ceil(MOCK_SECONDS - elapsed)));
      setResult(calcResult(typedRef.current, passage, elapsed));
    },
    [passage]
  );

  // Countdown: starts with the first key you type
  useEffect(() => {
    if (!started || result) return;
    const id = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / 1000;
      if (elapsed >= MOCK_SECONDS) finish(MOCK_SECONDS);
      else setSecondsLeft(Math.ceil(MOCK_SECONDS - elapsed));
    }, 250);
    return () => clearInterval(id);
  }, [started, result, finish]);

  const handleChange = (e) => {
    if (result) return;
    let value = e.target.value;
    if (value.length > passage.length) value = value.slice(0, passage.length);
    if (!started) {
      startRef.current = Date.now();
      setStarted(true);
    }
    typedRef.current = value;
    setTyped(value);
    if (value.length === passage.length) finish((Date.now() - startRef.current) / 1000);
  };

  const handleSubmit = () => finish(started ? (Date.now() - startRef.current) / 1000 : 0);

  const handleCancel = () => {
    if (!started || window.confirm("Cancel the test? Your progress will be lost.")) onClose();
  };

  const charClass = (i) => {
    if (i < typed.length) return typed[i] === passage[i] ? "text-green-600" : "text-red-600 bg-red-100";
    if (i === typed.length) return "text-gray-900 bg-blue-200";
    return "text-gray-500";
  };

  const badge = "px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700";

  return (
    <div className="p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Typing Test: Practice</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className={badge}>{exam.name}</span>
            <span className={badge}>{MOCK_SECONDS / 60} min</span>
            <span className={badge}>Mock test</span>
            {printMode && <span className={badge}>🖨 Print mode</span>}
          </div>
        </div>
        <div className="text-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2" aria-live="off">
          <div className="text-xs text-gray-500">Time Left</div>
          <div className="text-2xl font-bold text-gray-900 tabular-nums">{formatTime(secondsLeft)}</div>
        </div>
      </div>

      {!result ? (
        <>
          {printMode ? (
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <b>🖨 Print mode is on.</b> The passage is hidden. Type from your printed copy, just like the exam.{" "}
              <button
                type="button"
                onClick={() => printPassage(exam.name, passage)}
                className="underline font-semibold"
              >
                Print passage
              </button>
            </div>
          ) : (
            <p className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-base leading-relaxed select-none">
              {passage.split("").map((ch, i) => (
                <span key={i} className={charClass(i)}>
                  {ch}
                </span>
              ))}
            </p>
          )}

          <label className="mt-4 block text-sm font-medium text-gray-700" htmlFor="exam-input">
            Type here. The timer starts with your first key.
          </label>
          <textarea
            id="exam-input"
            autoFocus
            value={typed}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
            onDrop={(e) => e.preventDefault()}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            rows={printMode ? 8 : 4}
            className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-mono text-base focus:outline-none focus:border-blue-500"
          />

          <div className="mt-4 flex justify-end gap-3">
            <button type="button" onClick={handleCancel} className="px-5 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="button" onClick={handleSubmit} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
              Submit Test
            </button>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-900">Your Result</h3>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["Net WPM", result.net, "text-blue-600"],
              ["Accuracy", `${result.accuracy}%`, "text-green-600"],
              ["Gross WPM", result.gross, "text-gray-800"],
              ["Characters", result.chars, "text-gray-800"],
            ].map(([label, value, color]) => (
              <div key={label} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className={`text-3xl font-bold ${color}`}>{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Mistakes: {result.errors}. Net WPM = Gross WPM minus errors per minute.
          </p>
          <div className="mt-5 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-5 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
              Close
            </button>
            <button type="button" onClick={onRetry} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Pop-up window for the mock test. "Try Again" remounts the run with a fresh state. */
export default function ExamTest({ exam, printMode, onClose }) {
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Typing test">
      <div className="bg-white rounded-xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-xl">
        <ExamRun key={attempt} exam={exam} printMode={printMode} onClose={onClose} onRetry={() => setAttempt((a) => a + 1)} />
      </div>
    </div>
  );
}