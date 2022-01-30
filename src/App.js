import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Welcome';
import Welcome from './component/Welcome';

function App() {
  return (
    <>
      <Welcome />
      <Welcome />
    </>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
