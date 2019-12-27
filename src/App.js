import React from 'react';
import Navbar from './component/home/Navbar';
import Penawaran from './component/home/Penawaran';
import Anak from './component/home/Anak';
import Brand from './component/home/Brand';
import Content from './component/home/Content';
import Footer from './component/home/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Penawaran />
      <Anak />
      <Brand />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
