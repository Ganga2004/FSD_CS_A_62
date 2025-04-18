import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ViewUsers from './Components/ViewUsers';
import './App.css'; // Make sure styles are applied
import { BrowserRouter , Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUsers />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
