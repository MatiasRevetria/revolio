import { BrowserRouter, Routes, Route } from "react-router-dom";
import Revolio from './Revolio';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Revolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
