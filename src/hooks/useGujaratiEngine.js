import { useState, useEffect, useRef } from "react";
import { transliterate } from "../utils/gujaratiPhonetic";

// `roman` = the English letters the learner has to type, e.g. "kem chho"
export function useGujaratiEngine(roman) {
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);
  const [errors, setErrors] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongKey, setWrongKey] = useState(false); // brief red flash
  const flashTimer = useRef(null);

  // Timer: runs only after the first key is pressed
  useEffect(() => {
    if (!startTime || finished) return;
    const id = setInterval(() => setElapsed((Date.now() - startTime) / 1000), 200);
    return () => clearInterval(id);
  }, [startTime, finished]);

  useEffect(() => () => clearTimeout(flashTimer.current), []);

  const handleChange = (value) => {
    if (finished) return;

    // Backspace: accept it
    if (value.length <= typed.length) {
      if (roman.startsWith(value)) setTyped(value);
      return;
    }

    // Start the clock on the first key
    let start = startTime;
    if (!start) {
      start = Date.now();
      setStartTime(start);
    }

    // Accept only the keys that match what the lesson expects
    let next = typed;
    let keys = 0;
    let wrong = false;
    for (const ch of value.slice(typed.length)) {
      keys++;
      if (roman[next.length] === ch) {
        next += ch;
      } else {
        wrong = true; // wrong key: ignore it (and anything after it)
        break;
      }
    }

    setKeystrokes((k) => k + keys);
    if (wrong) {
      setErrors((e) => e + 1);
      setWrongKey(true);
      clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => setWrongKey(false), 250);
    }
    setTyped(next);

    // Finished when every key has been typed
    if (next === roman) {
      setElapsed((Date.now() - start) / 1000);
      setFinished(true);
    }
  };

  const reset = () => {
    clearTimeout(flashTimer.current);
    setTyped("");
    setStartTime(null);
    setElapsed(0);
    setKeystrokes(0);
    setErrors(0);
    setFinished(false);
    setWrongKey(false);
  };

  // The Gujarati the learner has produced so far
  const output = transliterate(typed);

  // Standard rule: 5 characters = 1 word
  const wpm = elapsed >= 1 ? Math.round(output.length / 5 / (elapsed / 60)) : 0;
  const accuracy = keystrokes ? Math.round(((keystrokes - errors) / keystrokes) * 100) : 100;

  return {
    typed,
    output,
    handleChange,
    reset,
    wpm,
    accuracy,
    errors,
    elapsed,
    finished,
    started: startTime !== null,
    wrongKey,
    nextKey: roman[typed.length],
  };
}