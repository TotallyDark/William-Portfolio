import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Blogs from './components/pages/Blog';
import DoorDashRobot from './components/pages/projectCatalog/DoorDashRobot';
import AthenianLunch from './components/pages/projectCatalog/AthenianLunch';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home />}/>
        <Route path='/about-me' exact element={ <AboutMe />}/>
        <Route path='/projects'> 
          <Route index element={ <Projects />}/>
          <Route path='doordash-robot' exact element = { <DoorDashRobot />}/>
          <Route path='athenian-lunch' exact element = { <AthenianLunch />}/>
        </Route>
        
        <Route path='/blogs' exact element={ <Blogs />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
