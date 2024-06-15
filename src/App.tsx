import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <div className="container mx-auto">
        <Routes>
          <Route path="/my-portfolio/" Component={Home} />
          <Route path="/my-portfolio/about" Component={About} />
          <Route path="/my-portfolio/projects" Component={Projects} />
          <Route path="/my-portfolio/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;