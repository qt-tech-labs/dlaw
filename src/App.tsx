import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from "./components/BlogDetail";
import { FaFacebook } from "react-icons/fa";
import ZaloIcon from "/zalo.svg";
import { BASE_URL } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen font-sans">
        <Routes>
          <Route path={BASE_URL} element={<Layout />}>
            <Route index element={
              <div className="relative z-10">
                <Hero />
                <Intro />
                <Services />
                <WhyChoose />
                <Testimonials />
                <Blog />
                <Contact />
              </div>
            } />
            <Route path="blog/:id" element={<BlogDetail />} />
          </Route>
        </Routes>
        {/* Fixed action buttons */}
        <div className="fixed z-50 bottom-4 right-4 flex flex-col gap-3">
          <a
            href="https://www.facebook.com/BildungHumboldt"
            className="p-3 cursor-pointer bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://zalo.me/0378513855"
            className="p-3 bg-amber-50 cursor-pointer text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors"
            aria-label="Zalo"
          >
            <img src={ZaloIcon} alt="Zalo" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
