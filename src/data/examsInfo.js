// Length of the mock test, in seconds
export const MOCK_SECONDS = 120;

// ✏️ Check the figures below against the latest official recruitment notification
// before you publish. Exam patterns can change.
export const exams = [
  {
    id: "hc-assistant",
    name: "High Court Assistant",
    subtitle: "Gujarat High Court: Assistant (English and Gujarati typing)",
    language: "English + Gujarati",
    speed: "Not fixed (mark-based)",
    duration: "10 + 10 min",
    marks: "40 (20 English + 20 Gujarati)",
    passing: "40%",
    description:
      "The typing test for this post carries 40 marks, split equally between an English part and a Gujarati part of 10 minutes each. You need at least 40% to qualify. Marks depend on how well you type rather than on a fixed speed, and accuracy counts as much as speed, because a small slip in a court document can change its meaning. This mock covers the English part. Practise the Gujarati part on the Gujarati Typing page.",
    passage:
      "The registry of a court is responsible for receiving petitions, maintaining records and making sure that every case is listed before the right bench on the right date. An assistant working in the registry must read each document with great care, because a single wrong date, name or number can delay a hearing and cause hardship to the people involved. Files should be arranged in order, copies should be checked against the originals, and every entry in the register must be accurate and complete. Courtesy is equally important. Visitors often come with questions and worries, and a calm, clear reply can make their visit easier. Good typing supports all of this work, since notices, orders and letters must be prepared quickly without any mistake in spelling or punctuation.",
  },
  {
    id: "stenographer",
    name: "Stenographer",
    subtitle: "Stenographer: skill test (dictation + typing)",
    language: "English or Gujarati",
    speed: "English 35-40 | Gujarati 20-25 WPM",
    duration: "As per dictation test",
    marks: "70 (skill test)",
    passing: "50%",
    description:
      "The skill test is the second stage of the selection and carries 70 marks. Candidates first take down a dictated passage and then type it out in English or Gujarati, whichever they choose. The speed usually expected is around 35-40 WPM in English and 20-25 WPM in Gujarati, but a fast copy is not enough: the final text must be clean and accurate. This mock covers English typing so you can build your pace.",
    passage:
      "A good stenographer listens closely, writes quickly and produces a clean final copy. When an officer dictates a letter, the stenographer must follow the meaning of each sentence, note down names and figures with extra care, and later type the whole letter in the correct format. Speed is useful, but accuracy matters more, because an officer will sign the letter without reading every word again. Punctuation, paragraphs and spellings should be checked before the copy is handed over. Regular practice builds confidence. Typing a little every day, keeping the wrists relaxed and looking at the text instead of the keys will steadily improve both speed and accuracy over the coming weeks.",
  },
];

export const comparisonRows = [
  ["Language", "language"],
  ["Required speed", "speed"],
  ["Duration", "duration"],
  ["Marks", "marks"],
  ["Passing", "passing"],
];

export const faqs = [
  {
    q: "Which government exams need a typing test?",
    a: "Many Gujarat government posts include a typing or skill test. Two common examples are High Court Assistant and Stenographer. This page gives you a free mock test for each of them.",
  },
  {
    q: "Can I take these mock tests online for free?",
    a: "Yes. Pick an exam, start the 2-minute mock test in your browser, and you will see your Net WPM and accuracy when it ends.",
  },
  {
    q: "How is typing speed (WPM) calculated?",
    a: "Speed is counted in words per minute, where every five characters make one word. Gross WPM uses everything you typed. Net WPM takes away your mistakes: Net WPM = Gross WPM minus errors per minute. Accuracy is the share of typed characters that were correct.",
  },
  {
    q: "What is print mode?",
    a: "Some exams give you a printed copy to type from. With print mode on, the passage is hidden on screen during the test, so you read from the page you printed. Turn it off to read the passage on screen.",
  },
  {
    q: "How can I improve my typing speed for these exams?",
    a: "Practise a little every day, keep your fingers on the home row, aim for accuracy before speed, and take timed mock tests to build stamina.",
  },
];