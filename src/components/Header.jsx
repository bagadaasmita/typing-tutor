import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";

const links = [
  { to: "/english-typing", label: "English Typing" },
  { to: "/gujarati-typing", label: "Gujarati Typing" },
  { to: "/typing-exams", label: "Typing Exams" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const name = user?.user_metadata?.full_name || user?.email;

  const handleLogout = async () => {
    await logout();
    setOpen(false);
    navigate("/");
  };

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

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop auth area */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <span className="text-sm text-gray-700 max-w-[160px] truncate">Hi, {name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-4 py-3 flex flex-col gap-1 bg-white">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}

          {user ? (
            <>
              <span className="px-3 py-2 text-sm text-gray-500">Signed in as {name}</span>
              <button onClick={handleLogout} className="px-3 py-2 text-sm border border-gray-300 rounded-md">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="px-3 py-2 text-sm">
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md text-center"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}