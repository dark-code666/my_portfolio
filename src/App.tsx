
import { Container, Box } from "@mui/material";
//import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
     
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Box>
    </Container>
  );
};

export default App;
