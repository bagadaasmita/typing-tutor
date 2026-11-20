import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import GujaratiDemoTyper from "../components/GujaratiDemoTyper";
import { gujaratiDrills } from "../data/gujaratiLessons";
import { useAuth } from "../store/authStore";

const faqs = [
  {
    q: "How do I type Gujarati in this demo?",
    a: "Type the romanized phonetic prompt shown in the test. The matching Gujarati script appears below as you type.",
  },
  {
    q: "Is Gujarati typing practice free?",
    a: "Yes. You can try the drills on this page without signing in. Create a free account to access the full Gujarati lesson course.",
  },
  {
    q: "Does the test show my speed and accuracy?",
    a: "Yes. Your speed, accuracy, errors and elapsed time update while you type, and your result appears when you finish a drill.",
  },
  {
    q: "Do I need a Gujarati keyboard?",
    a: "No. Type the phonetic English-letter prompt shown above the input. The demo converts it into Gujarati script.",
  },
];

const levels = [
  { tag: "Beginner", title: "Kakko & Barakhadi", text: "Learn Gujarati letters and vowel forms with short, guided phonetic drills." },
  { tag: "Intermediate", title: "Words & sentences", text: "Practise common Gujarati words, numbers, conjuncts and everyday sentences." },
  { tag: "Advanced", title: "Paragraphs & speed", text: "Type longer Gujarati passages and build speed while keeping accuracy high." },
];

const tips = [
  "Focus on accuracy first. A steady rhythm helps you build speed naturally.",
  "Type the phonetic prompt exactly as shown, including capital letters and punctuation.",
  "Watch the Gujarati output as you type to connect each phonetic key with its script.",
  "Practise a little every day. Short, focused sessions build stronger typing habits.",
  "Use the live speed, accuracy and error stats to track your improvement.",
];

export default function GujaratiLanding() {
  const user = useAuth((state) => state.user);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:underline">Home</Link> › Gujarati Typing
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
        Free Gujarati Typing Practice Online — Beginner to Advanced
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-gray-600">
        Learn Gujarati typing with phonetic English-letter prompts. Practise Gujarati letters, words and sentences,
        see the Gujarati script appear as you type, and track your speed and accuracy in your browser.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/gujarati" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Start Typing Practice
        </Link>
        {!user && (
          <Link
            to="/register"
            state={{ from: "/gujarati" }}
            className="rounded-lg border border-blue-600 bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Create Free Account
          </Link>
        )}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">What is Gujarati typing practice?</h2>
        <p className="mt-3 text-gray-600">
          Practise Gujarati typing by entering phonetic spellings with English letters. As you type, the matching
          Gujarati script appears, helping you connect sounds, letters and words without needing a Gujarati keyboard.
        </p>
        <p className="mt-3 text-gray-600">
          Lessons progress from Kakko and Barakhadi to common words, conjuncts, numbers and full sentences. Start
          slowly, build accuracy, and let your typing speed improve with practice.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Try Gujarati typing right now: free, no signup</h2>
        <p className="mb-4 mt-2 text-gray-600">
          Pick a drill, click the box and start typing the phonetic prompt. Your Gujarati output, speed and accuracy
          update live. This is a quick taste of the full course.
        </p>
        <GujaratiDemoTyper drills={gujaratiDrills} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Lessons from beginner to advanced</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {levels.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
              <span className="text-xs font-semibold uppercase text-blue-600">{item.tag}</span>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How to improve your Gujarati typing speed</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          {tips.map((tip) => <li key={tip}>{tip}</li>)}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
        <Faq items={faqs} />
      </section>

      <section className="mt-12 rounded-2xl bg-blue-600 px-4 py-10 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to improve your Gujarati typing?</h2>
        <p className="mt-1 text-blue-100">Start your first lesson and practise at your own pace.</p>
        <Link to="/gujarati" className="mt-5 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50">
          Start Gujarati Typing Practice
        </Link>
      </section>
    </div>
  );
}
