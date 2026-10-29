import { Link } from "react-router-dom";

const features = [
  { icon: "📚", title: "Structured Lessons", text: "Start from the home row and move step by step to advanced typing. Gujarati starts with Kakko and Barakhadi." },
  { icon: "⚡", title: "Live Speed Tracking", text: "See your WPM, accuracy and errors instantly while you practice." },
  { icon: "🏆", title: "Live Typing Tests", text: "Take timed tests and compete with other learners." },
  { icon: "📈", title: "Progress Reports", text: "Monitor your improvement over time with detailed statistics." },
  { icon: "🎓", title: "Certificates", text: "Earn downloadable certificates after completing tests." },
  { icon: "🌐", title: "Two Languages", text: "Practice both English and Gujarati typing in one place." },
];

const stats = [
  { value: "1,200+", label: "Active Learners" },
  { value: "50,000+", label: "Practice Sessions" },
  { value: "2", label: "Languages" },
  { value: "Free", label: "To Start" },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Learn English & Gujarati Typing <span className="text-blue-600">Faster</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Practice structured lessons, track your speed and accuracy, and take live typing tests.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/english-typing" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Start English Typing
            </Link>
            <Link to="/gujarati-typing" className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50">
              Start Gujarati Typing
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">Everything you need to type faster</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-lg text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-600 rounded-2xl text-center text-white py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Start your typing journey today</h2>
          <Link to="/register" className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}