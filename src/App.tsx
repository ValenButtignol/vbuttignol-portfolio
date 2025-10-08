import './App.css'
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import HexBackground from './components/HexBackground';

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <HexBackground />
      <main className="relative z-10">
        <Header/>
        <Introduction/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
