import { Link } from "react-router-dom";
import DemoTyper from "../components/DemoTyper";
import Faq from "../components/Faq";
import { englishDrills } from "../data/demoDrills";
import { useAuth } from "../store/authStore";

const levels = [
  { tag: "Beginner", title: "Home row & first keys", text: "Finger placement, the home row, then the top and bottom rows. Build correct habits before speed." },
  { tag: "Intermediate", title: "Words & sentences", text: "Common words, capital letters, punctuation and short sentences to build rhythm and flow." },
  { tag: "Advanced", title: "Paragraphs & speed", text: "Full paragraphs, numbers and symbols. Push your WPM higher while keeping accuracy high." },
];

const tips = [
  "Accuracy first, speed later. Slow down enough to hit the right keys.",
  "Keep your fingers on the home row and return to it after every reach.",
  "Don't look down at the keyboard. Trust your memory.",
  "Practise a little every day. Ten focused minutes beat one long weekly session.",
  "Watch your WPM and accuracy trend upward to stay motivated.",
];

const faqs = [
  { q: "Is English typing practice free?", a: "Yes. The demo on this page is open to everyone. Create a free account to unlock all lessons and save your speed and accuracy." },
  { q: "What will I learn?", a: "The course starts on the home row and builds up to full sentences and paragraphs, arranged from beginner to advanced." },
  { q: "How do I improve my typing speed (WPM)?", a: "Practise daily, keep your fingers on the home row (asdf for the left hand, jkl; for the right) and put accuracy before speed. Speed follows as the movements become muscle memory." },
  { q: "Do I need to install anything?", a: "No. Typing practice runs in your web browser, so there is nothing to download." },
];

export default function EnglishLanding() {
  const user = useAuth((s) => s.user);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:underline">Home</Link> › English Typing
      </nav>

      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Free English Typing Practice Online — Beginner to Advanced
      </h1>
      <p className="mt-3 text-lg text-gray-600 max-w-3xl">
        Learn English typing the right way. Start from the home row, build real touch-typing muscle memory and watch
        your speed (WPM) and accuracy climb, all in your browser.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/english" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Start Typing Practice
        </Link>
        {!user && (
          <Link
            to="/register"
            state={{ from: "/english" }}
            className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50"
          >
            Create Free Account
          </Link>
        )}
      </div>

      {/* What is it */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">What is English typing practice?</h2>
        <p className="mt-3 text-gray-600">
          Touch typing means typing without looking at the keyboard. Your fingers learn a fixed home position and reach
          each letter by memory, so typing becomes faster, more accurate and far less tiring.
        </p>
        <p className="mt-3 text-gray-600">
          Our lessons are small and progressive. You begin with <code>a s d f</code> for the left hand and{" "}
          <code>j k l ;</code> for the right, then add the top and bottom rows, capitals and punctuation until you can
          type full paragraphs with confidence.
        </p>
      </section>

      {/* Demo */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Try English typing right now: free, no signup</h2>
        <p className="mt-2 mb-4 text-gray-600">
          Pick a drill, click the box and start typing. Your speed and accuracy update live. This is just a quick taste
          of the full course.
        </p>
        <DemoTyper drills={englishDrills} />
      </section>

      {/* Levels */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Lessons from beginner to advanced</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {levels.map((l) => (
            <div key={l.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <span className="text-xs font-semibold text-blue-600 uppercase">{l.tag}</span>
              <h3 className="mt-1 font-semibold text-gray-900">{l.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How to improve your typing speed</h2>
        <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-5">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
        <Faq items={faqs} />
      </section>

      {/* Final CTA */}
      <section className="mt-12 bg-blue-600 rounded-2xl text-center text-white py-10 px-4">
        <h2 className="text-2xl font-bold">Ready to type faster?</h2>
        <p className="mt-1 text-blue-100">Jump into your first lesson. It's free to start.</p>
        <Link to="/english" className="inline-block mt-5 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50">
          Start English Typing Practice
        </Link>
      </section>
    </div>
  );
}