import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Projects.tsx';
import Contact from './components/Contact.tsx';



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/portfolio" Component={Portfolio} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </Router>
    );
}

export default App;