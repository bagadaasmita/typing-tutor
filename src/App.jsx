import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import EnglishTyping from "./pages/EnglishTyping";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/english-typing" element={<EnglishTyping />} />
        <Route path="/gujarati-typing" element={<ComingSoon title="Gujarati Typing" />} />
        <Route path="/english-to-gujarati-typing" element={<ComingSoon title="English to Gujarati Typing" />} />
        <Route path="/typing-exams" element={<ComingSoon title="Typing Exams" />} />
        <Route path="/about" element={<ComingSoon title="About" />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/login" element={<ComingSoon title="Login" />} />
        <Route path="/register" element={<ComingSoon title="Create Account" />} />
        <Route path="*" element={<ComingSoon title="404 - Page Not Found" />} />
      </Route>
    </Routes>
  );
}
