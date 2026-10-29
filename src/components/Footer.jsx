import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Typing Tutor</h3>
          <p className="text-sm">English & Gujarati Typing Trainer</p>
          <p className="text-sm mt-2">Master English & Gujarati typing, one keystroke at a time.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Practice</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/english-typing" className="hover:text-white">English Typing</Link></li>
            <li><Link to="/gujarati-typing" className="hover:text-white">Gujarati Typing</Link></li>
            <li><Link to="/typing-exams" className="hover:text-white">Typing Exams</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-xs py-4">
        © {new Date().getFullYear()} RED Labz. All rights reserved.
      </div>
    </footer>
  );
}
