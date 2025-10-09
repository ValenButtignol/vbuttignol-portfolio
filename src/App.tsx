import './styles/layout.css'
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import HexBackground from './components/HexBackground';
import LeftSidebar from './components/LeftSideBar';
import RightSidebar from './components/RightSideBar';

function App() {
  return (
    <div className="app-root">
      <HexBackground />
      <Header/>
      <LeftSidebar />
      <RightSidebar />
      <main className="content-wrapper">
        <div className="content">
          <Introduction/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default App
