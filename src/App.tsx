
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CrediPathPage from "./Pages/CredipathPage";



function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Página de detalle del sistema de préstamos */}
        <Route path="/credipath" element={<CrediPathPage />} />
      </Routes>
    </Router>
  );
}


export default App;
