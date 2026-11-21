// Net WPM = Gross WPM - errors per minute. 5 characters = 1 word.
export function calcResult(typed, passage, elapsedSec) {
  const minutes = Math.max(elapsedSec, 1) / 60;
  const chars = typed.length;
  let errors = 0;
  for (let i = 0; i < chars; i++) if (typed[i] !== passage[i]) errors++;
  const gross = chars / 5 / minutes;
  const net = Math.max(0, gross - errors / minutes);
  const accuracy = chars ? Math.round(((chars - errors) / chars) * 100) : 0;
  return { net: Math.round(net), gross: Math.round(gross), accuracy, chars, errors };
}