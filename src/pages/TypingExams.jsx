import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ExamTest from "../components/ExamTest";
import { exams, comparisonRows, faqs, MOCK_SECONDS } from "../data/examsInfo";
import { printPassage } from "../utils/printPassage";

const minutes = MOCK_SECONDS / 60;

export default function TypingExams() {
  const [selectedId, setSelectedId] = useState(exams[0].id);
  const [printMode, setPrintMode] = useState(false);
  const [running, setRunning] = useState(false);
  const { hash } = useLocation();
  const exam = exams.find((e) => e.id === selectedId);

  const scrollToTest = () => document.getElementById("test")?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const previous = document.title;
    document.title = "Gujarat Typing Exams – Free Online Mock Tests | Typing Tutor";
    return () => {
      document.title = previous;
    };
  }, []);

  // Opening /typing-exams#test scrolls straight to the mock test
  useEffect(() => {
    if (hash === "#test") document.getElementById("test")?.scrollIntoView();
  }, [hash]);

  const card = "bg-white border border-gray-200 rounded-xl";

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link> <span aria-hidden="true">›</span> Typing Exams
      </nav>

      {/* Hero */}
      <header className="mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Gujarat Typing Exams: Free Online Mock Tests</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Many government posts include a typing test. Compare the exams below, then take a free{" "}
          <b>{minutes}-minute mock test</b> for any of them. It works like the real test and shows your speed (WPM) and
          accuracy at the end.
        </p>
        <button
          type="button"
          onClick={scrollToTest}
          className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Take a Mock Test
        </button>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {[`${exams.length} exams covered`, `${minutes}-minute mock test`, "WPM & accuracy score", "Free to practise"].map((t) => (
            <li key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{t}</li>
          ))}
        </ul>
      </header>

      {/* Comparison */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Exams that require a typing test</h2>
        <p className="mt-2 text-gray-600">A quick side-by-side comparison of the typing tests covered on this page:</p>
        <div className="mt-4 overflow-x-auto">
          <table className={`${card} w-full text-sm text-left`}>
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th scope="col" className="p-3"><span className="sr-only">Detail</span></th>
                {exams.map((e) => (
                  <th key={e.id} scope="col" className="p-3 font-semibold text-gray-900">{e.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, key]) => (
                <tr key={key} className="border-b border-gray-100 last:border-0">
                  <th scope="row" className="p-3 font-medium text-gray-600 whitespace-nowrap">{label}</th>
                  {exams.map((e) => (
                    <td key={e.id} className="p-3 text-gray-800">{e[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Exam patterns can change. Always check the latest official recruitment notification.
        </p>
      </section>

      {/* Mock test */}
      <section id="test" className={`${card} mt-12 p-6 scroll-mt-20`}>
        <h2 className="text-2xl font-bold text-gray-900">Take a free {minutes}-minute mock test</h2>
        <p className="mt-2 text-gray-600">
          Choose an exam, then start the test. A passage appears with a {minutes}-minute countdown. Type it as fast and as
          accurately as you can. At the end you will see your <b>Net WPM</b> and <b>accuracy</b>.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,320px)_1fr] items-end">
          <label className="block text-sm font-medium text-gray-700">
            Choose exam
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
            >
              {exams.map((e) => (
                <option key={e.id} value={e.id}>{e.name}</option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setRunning(true)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              Start {minutes}-Minute Test
            </button>
            <button
              type="button"
              onClick={() => printPassage(exam.name, exam.passage)}
              className="px-5 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
            >
              🖨 Print reference passage
            </button>
          </div>
        </div>

        <label className="mt-5 flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            checked={printMode}
            onChange={(e) => setPrintMode(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>
            <b>Print mode</b>: like the real exam, the on-screen passage is hidden and you type from your <i>printed</i>{" "}
            copy. Print the passage first, then start.
          </span>
        </label>
      </section>

      {/* About each exam */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">About each exam</h2>
        <p className="mt-2 text-gray-600">Tap a card to load that exam into the mock test above.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {exams.map((e) => (
            <article
              key={e.id}
              className={`${card} p-5 flex flex-col ${e.id === selectedId ? "ring-2 ring-blue-500" : ""}`}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedId(e.id);
                  scrollToTest();
                }}
                className="text-left"
              >
                <h3 className="text-lg font-bold text-gray-900">{e.name}</h3>
                <p className="text-sm text-blue-600">{e.subtitle}</p>
              </button>
              <p className="mt-3 text-sm text-gray-600 flex-1">{e.description}</p>
              {e.id === "hc-assistant" && (
                <Link to="/gujarati-typing" className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                  Practise Gujarati typing →
                </Link>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-gray-500">English mock · {minutes} min</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedId(e.id);
                    setRunning(true);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700"
                >
                  Take mock test
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className={`${card} p-4 group`}>
              <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {running && <ExamTest exam={exam} printMode={printMode} onClose={() => setRunning(false)} />}
    </div>
  );
}