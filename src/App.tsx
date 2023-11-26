import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import './i18n';

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
