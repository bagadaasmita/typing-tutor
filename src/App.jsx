import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import EnglishTyping from "./pages/EnglishTyping";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TypingExams from "./pages/TypingExams";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/english-typing" element={<EnglishTyping />} />
        <Route path="/gujarati-typing" element={<ComingSoon title="Gujarati Typing" />} />
        <Route path="/typing-exams" element={<TypingExams />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<ComingSoon title="Login" />} />
        <Route path="/register" element={<ComingSoon title="Create Account" />} />
        <Route path="*" element={<ComingSoon title="404 - Page Not Found" />} />
      </Route>
    </Routes>
  );
}
