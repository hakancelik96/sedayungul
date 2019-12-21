import React from 'react';
import resim from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={resim} className="App-logo" alt="logo" />
        <h1>
         Seda YÜNGÜL
        </h1><p>Industrıal Engineering GAUN</p>
        <div class="colomn">
          <a href="" class="blank fa fa-instagram" target="_blank">
          </a>
          <a href="" class="blank fa fa-facebook" target="_blank">
          </a>
          <a href="" class="blank fa fa-twitter" target="_blank">
          </a>
        </div>
        <a class="top-blank" href="mailto:sedayngl33@gmail.com" target="_top">sedayngl33@gmail.com</a>
      </header>
    </div>
  );
}

export default App;
