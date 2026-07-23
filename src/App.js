
import React from 'react'; 
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import { books } from './data.js';

function App() {
  return (
    <Router>
     <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;