import { useEffect } from "react";
import { Link } from "react-router-dom";

const features = [
  { icon: "📚", title: "Interactive Lessons", text: "Step-by-step lessons for English and Gujarati, from the first key to full paragraphs." },
  { icon: "📊", title: "Performance Tracking", text: "See your speed (WPM), accuracy and mistakes update live as you type." },
  { icon: "⏱️", title: "Live Typing Tests", text: "Timed tests that finish with a clear pass or fail result." },
  { icon: "🏆", title: "Certificates", text: "Certificates to show your progress (coming soon)." },
];

const keyChip = "bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm";

export default function About() {
  useEffect(() => {
    const previous = document.title;
    document.title = "About – Typing Tutor";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Who We Are</p>
      <h1 className="mt-1 text-3xl md:text-4xl font-bold text-gray-900">About Typing Tutor</h1>
      <p className="mt-3 text-gray-600">
        A free place to learn touch typing and get faster, in English and in Gujarati.
      </p>

      {/* Our Platform */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Our Platform</h2>
        <p className="mt-3 text-gray-600">
          Typing Tutor helps learners build typing speed and accuracy in two languages. You can practise at your own pace
          and see exactly how you are improving.
        </p>
        <p className="mt-3 text-gray-600">
          The English course starts on the home row keys (<code className={keyChip}>asdfg</code>{" "}
          <code className={keyChip}>;lkjh</code>) and slowly moves on to harder exercises. Gujarati typing covers{" "}
          Kakko (<span lang="gu" className="gujarati">કક્કો</span>) and Barakhadi (
          <span lang="gu" className="gujarati">બારાખડી</span>), followed by structured practice lessons.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl" aria-hidden="true">{f.icon}</div>
              <h3 className="mt-2 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
        <p className="text-gray-800 font-medium">Ready to improve your typing?</p>
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          <Link to="/english-typing" className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            Start English Typing
          </Link>
          <Link to="/gujarati-typing" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-100">
            Start Gujarati Typing
          </Link>
        </div>
      </section>

      <p className="mt-10 text-center text-sm text-gray-400">Typing Tutor © 2026</p>
    </div>
  );
}