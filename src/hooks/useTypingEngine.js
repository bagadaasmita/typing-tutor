import { useState, useEffect } from "react";

export function useTypingEngine(target, timeLimit = 0) {
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);
  const [errors, setErrors] = useState(0);
  const [finished, setFinished] = useState(false);

  // Timer: runs only after the first key is pressed
  useEffect(() => {
    if (!startTime || finished) return;
    const id = setInterval(() => {
      const sec = (Date.now() - startTime) / 1000;
      if (timeLimit && sec >= timeLimit) {
        setElapsed(timeLimit);
        setFinished(true);
      } else {
        setElapsed(sec);
      }
    }, 200);
    return () => clearInterval(id);
  }, [startTime, finished, timeLimit]);

  const handleChange = (value) => {
    if (finished) return;

    // Never allow more characters than the target text
    if (value.length > target.length) value = value.slice(0, target.length);

    // Start the clock on the first character
    let start = startTime;
    if (!start) {
      start = Date.now();
      setStartTime(start);
    }

    // Count new keystrokes and new mistakes (backspace does not count)
    if (value.length > typed.length) {
      const added = value.slice(typed.length);
      let newErrors = 0;
      for (let i = 0; i < added.length; i++) {
        if (added[i] !== target[typed.length + i]) newErrors++;
      }
      setKeystrokes((k) => k + added.length);
      setErrors((e) => e + newErrors);
    }

    setTyped(value);

    // Finished when the whole text is typed
    if (value.length === target.length) {
      setElapsed((Date.now() - start) / 1000);
      setFinished(true);
    }
  };

  const reset = () => {
    setTyped("");
    setStartTime(null);
    setElapsed(0);
    setKeystrokes(0);
    setErrors(0);
    setFinished(false);
  };

  // Calculations
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) correct++;
  }

  // Standard rule: 5 characters = 1 word
  const wpm = elapsed >= 1 ? Math.round(correct / 5 / (elapsed / 60)) : 0;
  const accuracy = keystrokes ? Math.round(((keystrokes - errors) / keystrokes) * 100) : 100;

  return {
    typed,
    handleChange,
    reset,
    wpm,
    accuracy,
    errors,
    elapsed,
    finished,
    started: startTime !== null,
  };
}