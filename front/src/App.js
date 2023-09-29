import './App.css';
import * as React from 'react';
import Event from './pages/Event';
import Main from './pages/Main';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/create_event" element={<Event/>}/>
          <Route path="/" element={<Main/>}/>
      </Routes>
  );
}

export default App;
