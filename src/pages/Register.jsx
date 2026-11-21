import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { getAuthErrorMessage } from "../lib/authError";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/";

  const [form, setForm] = useState({ fullName: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    // Phone: allow digits only, maximum 10
    if (name === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const fullName = form.fullName.trim();
    const email = form.email.trim();

    if (fullName.length < 2) return setError("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email address.");
    if (!/^[0-9]{10}$/.test(form.phone)) return setError("Phone number must be exactly 10 digits.");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: form.password,
        options: {
          data: { full_name: fullName, phone: form.phone }, // saved to profiles by the trigger
        },
      });

      if (error) return setError(error.message);

      // Email already registered (Supabase returns no error but no identities)
      if (data.user && data.user.identities?.length === 0) {
        return setError("This email is already registered. Please log in.");
      }

      // Email confirmation OFF: user is logged in immediately
      if (data.session) return navigate(redirectTo);

      // Email confirmation ON: ask the user to check their inbox
      setMessage("Account created! Please check your email and click the confirmation link, then log in.");
    } catch (requestError) {
      setError(getAuthErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
        <p className="text-gray-500 mt-1">Start your typing journey today.</p>

        {error && <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">{error}</div>}
        {message && <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm">{message}</div>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              inputMode="numeric"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="10 digit mobile number"
            />
            <p className={`text-xs mt-1 ${form.phone.length === 10 ? "text-green-600" : "text-gray-400"}`}>
              {form.phone.length}/10 digits
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className={inputClass} placeholder="At least 6 characters" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
<Link to="/login" state={location.state} className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}