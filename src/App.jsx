import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import EnglishLanding from "./pages/EnglishLanding";
import EnglishTyping from "./pages/EnglishTyping";
import GujaratiLanding from "./pages/GujaratiLanding";
import GujaratiTyping from "./pages/GujaratiTyping";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useAuth } from "./store/authStore";

export default function App() {
  const init = useAuth((s) => s.init);

  useEffect(() => {
    let cleanup;
    init().then((fn) => (cleanup = fn));
    return () => cleanup && cleanup();
  }, [init]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Open to everyone: content + demo */}
        <Route path="/english-typing" element={<EnglishLanding />} />
        <Route path="/gujarati-typing" element={<GujaratiLanding />} />
        <Route path="/english-to-gujarati-typing" element={<ComingSoon title="English to Gujarati Typing" />} />
        <Route path="/typing-exams" element={<ComingSoon title="Typing Exams" />} />
        <Route path="/about" element={<ComingSoon title="About" />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Login required: the full lessons */}
        <Route
          path="/english"
          element={
            <ProtectedRoute>
              <EnglishTyping />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gujarati"
          element={
            <ProtectedRoute>
              <GujaratiTyping />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<ComingSoon title="404 - Page Not Found" />} />
      </Route>
    </Routes>
  );
}