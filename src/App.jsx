import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css'; 

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact /> {}
        </div>
    );
};

export default App;
