import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
