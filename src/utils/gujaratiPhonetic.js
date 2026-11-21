// Converts "phonetic" English-letter typing into Gujarati script.
// Example: transliterate("kem chho")  ->  "કેમ છો"

const HALANT = "્";

// Consonants. Longer keys are matched before shorter ones (kh before k).
// Capital letters are the hard (retroflex) sounds: T Th D Dh N L Sh
const CONSONANTS = {
  ksh: "ક્ષ", jny: "જ્ઞ",
  chh: "છ",
  kh: "ખ", gh: "ઘ", ch: "ચ", jh: "ઝ",
  Th: "ઠ", Dh: "ઢ", th: "થ", dh: "ધ",
  ph: "ફ", bh: "ભ", sh: "શ", Sh: "ષ",
  k: "ક", g: "ગ", j: "જ",
  T: "ટ", D: "ડ", N: "ણ",
  t: "ત", d: "દ", n: "ન",
  p: "પ", f: "ફ", b: "બ", m: "મ",
  y: "ય", r: "ર", l: "લ", L: "ળ",
  v: "વ", w: "વ", s: "સ", h: "હ",
};

// Vowels: [letter on its own, sign (matra) after a consonant]
const VOWELS = {
  aa: ["આ", "ા"], ai: ["ઐ", "ૈ"], au: ["ઔ", "ૌ"],
  ee: ["ઈ", "ી"], ii: ["ઈ", "ી"], oo: ["ઊ", "ૂ"], uu: ["ઊ", "ૂ"],
  a: ["અ", ""], A: ["આ", "ા"], i: ["ઇ", "િ"], I: ["ઈ", "ી"],
  u: ["ઉ", "ુ"], U: ["ઊ", "ૂ"], e: ["એ", "ે"], o: ["ઓ", "ો"],
};

// M = anusvara (ં), H = visarga (ઃ)
const SIGNS = { M: "ં", H: "ઃ" };

const DIGITS = {
  0: "૦", 1: "૧", 2: "૨", 3: "૩", 4: "૪",
  5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯",
};

// All keys, longest first
const KEYS = [...Object.keys(CONSONANTS), ...Object.keys(VOWELS)].sort(
  (a, b) => b.length - a.length
);

function findKey(text, pos) {
  for (const key of KEYS) {
    if (text.startsWith(key, pos)) return key;
  }
  // A capital that is not a key (like the K in "Kem") works as lowercase
  const ch = text[pos];
  const lower = ch.toLowerCase();
  if (lower !== ch) {
    const probe = lower + text.slice(pos + 1);
    for (const key of KEYS) {
      if (probe.startsWith(key)) return key;
    }
  }
  return null;
}

export function transliterate(text) {
  let out = "";
  let afterConsonant = false; // the last letter written is a consonant with no vowel yet
  let i = 0;

  while (i < text.length) {
    const ch = text[i];

    if (SIGNS[ch]) {
      out += SIGNS[ch];
      afterConsonant = false;
      i += 1;
      continue;
    }

    const key = findKey(text, i);

    if (key && CONSONANTS[key]) {
      // Two consonants in a row join into a conjunct (ક્ષ, ત્ર, સ્ત ...)
      if (afterConsonant) out += HALANT;
      out += CONSONANTS[key];
      afterConsonant = true;
      i += key.length;
    } else if (key && VOWELS[key]) {
      out += afterConsonant ? VOWELS[key][1] : VOWELS[key][0];
      afterConsonant = false;
      i += key.length;
    } else {
      out += DIGITS[ch] ?? ch;
      afterConsonant = false;
      i += 1;
    }
  }

  return out;
}