import { About } from './components/About';
import { Contact } from './components/Contact';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
