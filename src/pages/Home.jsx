import { Link } from "react-router-dom";
import HeroDemo from "../components/HeroDemo";
import { useAuth } from "../store/authStore";

const miniStats = [
  { label: "Speed", value: "65 WPM" },
  { label: "Accuracy", value: "98%" },
  { label: "Accuracy Monitoring", value: "Real-time" },
];

const stats = [
  { value: "1,200+", label: "Active Learners" },
  { value: "50,000+", label: "Practice Sessions" },
  { value: "EN · GU", label: "Languages Supported" },
  { value: "Free", label: "To Get Started" },
];

const testimonials = [
  { quote: "Went from 30 to 65 WPM in three weeks. The Gujarati Inscript lessons are brilliant.", name: "Rahul M." },
  { quote: "Best platform for learning Gujarati typing. Live tests keep me motivated every day.", name: "Priya S." },
];

const features = [
  { icon: "📚", title: "Interactive Lessons", text: "Step-by-step lessons for beginners and advanced learners. Start with the English home row asdfg;lkjh and learn Kakko and Barakhadi for Gujarati." },
  { icon: "🏆", title: "Live Typing Tests", text: "Join scheduled typing tests and compete with other learners to improve your speed and accuracy in real time." },
  { icon: "⚡", title: "Real-Time Performance Tracking", text: "See your WPM (words per minute), accuracy and typing errors instantly while you practice." },
  { icon: "📈", title: "Progress Tracking", text: "Watch your typing improve over time with detailed performance statistics and insights." },
  { icon: "🎯", title: "Practice Challenges", text: "Build consistency and speed through timed practice sessions and focused challenges." },
  { icon: "🎓", title: "Certificate Generation", text: "Earn downloadable certificates after completing typing tests and training milestones." },
];

export default function Home() {
  const user = useAuth((s) => s.user);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Free to start
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Learn English & Gujarati Typing <span className="text-blue-600">Faster</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Practice structured lessons, track your speed and accuracy, and compete in live typing tests.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {user ? (
                <>
                  <Link to="/english-typing" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                    English Typing
                  </Link>
                  <Link to="/gujarati-typing" className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50">
                    Gujarati Typing
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                    Start Practicing
                  </Link>
                  <Link to="/register" className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50">
                    Create Free Account
                  </Link>
                </>
              )}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {miniStats.map((s) => (
                <div key={s.label} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-600">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <HeroDemo />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="bg-white border border-gray-200 rounded-xl p-6">
            <blockquote className="text-gray-700">“{t.quote}”</blockquote>
            <figcaption className="mt-3 font-semibold text-gray-900">— {t.name}</figcaption>
          </figure>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <p className="text-center text-sm font-semibold text-blue-600 uppercase tracking-wide">What We Offer</p>
        <h2 className="mt-1 text-3xl font-bold text-center text-gray-900">Features</h2>
        <p className="mt-2 text-center text-gray-600">With interactive lessons, real-time tracking, and certificates.</p>

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
    </div>
  );
}