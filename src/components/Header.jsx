import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/english-typing", label: "English Typing" },
  { to: "/gujarati-typing", label: "Gujarati Typing" },
  { to: "/typing-exams", label: "Typing Exams" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Typing Tutor
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </Link>
        </div>

        <button className="md:hidden p-2 text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 px-4 py-3 flex flex-col gap-1 bg-white">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="px-3 py-2 text-sm">Login</Link>
          <Link to="/register" onClick={() => setOpen(false)} className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md text-center">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
