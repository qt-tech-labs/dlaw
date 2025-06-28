import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaFacebook } from "react-icons/fa";
import ZaloIcon from "/zalo.svg";

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* <div className="absolute inset-0 bg-[url('/public/intro.jpg')] bg-cover bg-center bg-fixed" style={{ filter: 'blur(8px)' }}></div> */}
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <Hero />
          <Intro />
          <Services />
          <WhyChoose />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
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
          className="p-3 cursor-pointer text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors"
          aria-label="Zalo"
        >
          <img src={ZaloIcon} alt="Zalo" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
