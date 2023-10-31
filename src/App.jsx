import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import Project from './components/project/Projects';
import projects from './components/project/projectsData';
import Footer  from "./components/footer/Footer";
import { NightModeProvider } from './components/NightModeContext';



function App() {
  return (
    <NightModeProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <Footer />
      </div>
    </NightModeProvider>
  );
}

export default App;
