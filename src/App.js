
import './App.css';
import React from 'react';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';

import PostData from './PostData';
import RetrieveData from './RetrieveData';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <ul id ='nav'>
        <li>
          <Link to="/post">Post Data</Link>
        </li>
        <li>
          <Link to="/retrieve">Retrieve Data</Link>
        </li>
      </ul>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/post" element={<PostData />} />
        <Route path="/retrieve" element={<RetrieveData />} />
      </Routes>
    </Router>
  );
};



export default App;
